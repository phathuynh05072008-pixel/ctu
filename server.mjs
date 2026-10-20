import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.pdf':'application/pdf','.woff2':'font/woff2','.woff':'font/woff','.ttf':'font/ttf'};
const port=Number(process.env.PORT||4173);
http.createServer((req,res)=>{
 try{
  const url=new URL(req.url,'http://localhost'); const pathname=decodeURIComponent(url.pathname);
  let relative=pathname==='/'?'index.html':pathname.slice(1);
  const target=path.resolve(root,relative);
  const allowed=target.startsWith(root+path.sep)&&!relative.split(/[\\/]/).some(p=>p.startsWith('.'))&& !/^(scripts|node_modules)([\\/]|$)/.test(relative.replace(/^node_modules[\\/]katex[\\/]dist[\\/]/,'vendor/'));
  if(!allowed){res.writeHead(403);res.end('Forbidden');return;}
  const stat=fs.statSync(target);if(!stat.isFile())throw new Error('Not a file');
  res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});
  fs.createReadStream(target).pipe(res);
 }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Không tìm thấy tài liệu.');}
}).listen(port,'127.0.0.1',()=>console.log(`ORBIT: http://localhost:${port}`));
