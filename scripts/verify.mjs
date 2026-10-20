import assert from 'node:assert/strict';
import katex from '../node_modules/katex/dist/katex.mjs';
import {lessons,sourceNotes} from '../content.js';
import {exams} from '../exams.js';
assert.equal(lessons.length,13);
assert.equal(lessons.reduce((n,l)=>n+l.exercises.length,0),130);
const ids=new Set();
for(const l of lessons){assert.equal(l.exercises.length,10,l.id);assert.ok(l.formulas.length>=3);assert.equal(l.method.length,3);assert.ok(l.example.steps.length>=2);for(const q of l.exercises){assert.ok(!ids.has(q.id));ids.add(q.id);assert.ok(q.steps.length>=2,q.id)}}
assert.equal(exams.length,5);
for(const e of exams){assert.equal(e.tf.length,8);assert.equal(new Set(e.tf.map(t=>t.statement)).size,8);assert.ok(e.essay.steps.length>=3);assert.ok(e.density.steps.length>=6);assert.ok(e.density.prompt.includes('d)'))}
let formulas=0;
function scan(v,location='root'){
 if(typeof v==='string'){
  for(const m of v.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]*?)\$/g)){
   const tex=m[1]??m[2];try{katex.renderToString(tex,{throwOnError:true,strict:'ignore',displayMode:m[1]!==undefined});formulas++}catch(e){throw new Error(`${location}: ${tex}\n${e.message}`)}
  }
 }else if(Array.isArray(v))v.forEach((x,i)=>scan(x,`${location}[${i}]`));else if(v&&typeof v==='object')Object.entries(v).forEach(([k,x])=>scan(x,`${location}.${k}`));
}
scan({lessons,exams,sourceNotes});
// Numerical cross-checks independent of the displayed solutions.
const choose=(n,k)=>{if(k<0||k>n)return 0;let v=1;for(let j=1;j<=k;j++)v=v*(n-j+1)/j;return v};
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} != ${b}`);
const p=[0,1,2].map(k=>choose(4,k)*choose(6,2-k)/choose(10,2));
near(p[0],1/3);near(p[1],8/15);near(p[2],2/15);near(p[0]+p[1],13/15);
const hyper=[0,1,2,3].map(k=>choose(3,k)*choose(5,3-k)/choose(8,3));
near(hyper.reduce((a,b)=>a+b),1);const mu=hyper.reduce((s,p,k)=>s+k*p,0);near(mu,9/8);near(hyper.reduce((s,p,k)=>s+k*k*p,0)-mu*mu,225/448);
near(choose(5,2)*.4**2*.6**3/(1-.6**5),540/1441);
// Simpson integration checks all five mock density questions, including the moments.
const integral=(f,a,b,n=20000)=>{const h=(b-a)/n;let s=f(a)+f(b);for(let i=1;i<n;i++)s+=(i%2?4:2)*f(a+i*h);return s*h/3};
const densities=[{f:x=>x/2,a:0,b:2,mean:4/3,second:2,pa:.5,pb:1.5,prob:.5},{f:x=>2*(1-x),a:0,b:1,mean:1/3,second:1/6,pa:.25,pb:.75,prob:.5},{f:x=>3*x*x,a:0,b:1,mean:3/4,second:3/5,pa:.5,pb:1,prob:7/8},{f:x=>1.5*(1-x*x),a:0,b:1,mean:3/8,second:1/5,pa:.5,pb:1,prob:5/16},{f:x=>.5,a:-1,b:1,mean:0,second:1/3,pa:-.5,pb:.25,prob:3/8}];
densities.forEach(d=>{near(integral(d.f,d.a,d.b),1);near(integral(x=>x*d.f(x),d.a,d.b),d.mean);near(integral(x=>x*x*d.f(x),d.a,d.b),d.second);near(integral(d.f,d.pa,d.pb),d.prob)});
console.log(JSON.stringify({lessons:13,exercises:130,exams:5,trueFalseStatements:40,renderedFormulas:formulas,numericalChecks:'passed'},null,2));
