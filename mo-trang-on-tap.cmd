@echo off
cd /d "%~dp0"
title ORBIT - Xac suat thong ke
echo ORBIT - Mo http://localhost:4173 trong trinh duyet.
echo Giu cua so nay mo trong khi hoc. Nhan Ctrl+C de dung.
node server.mjs
pause
