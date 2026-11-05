@echo off
cd /d "%~dp0"
echo Abriendo wheels en http://localhost:8000
start "" http://localhost:8000
python -m http.server 8000
