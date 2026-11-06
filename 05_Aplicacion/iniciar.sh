#!/usr/bin/env bash
# Arranca Wheels en local (WSL / Linux). Abre http://localhost:8000 en el navegador.
set -e
cd "$(dirname "$0")"
PORT="${1:-8000}"

echo "wheels · http://localhost:${PORT}"
echo "Demo: correo @uexternado.edu.co · código ${DEMO_CODE:-1234}"
echo "Atajos: ?guest=1  ?guest=1&role=driver  ?map=osm  ?reset=1"
echo "Ctrl+C para detener."

# En WSL2, localhost se reenvía automáticamente al navegador de Windows.
# Si quieres abrirlo desde Windows: powershell.exe Start-Process "http://localhost:${PORT}"
if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT"
elif command -v python >/dev/null 2>&1; then
  exec python -m SimpleHTTPServer "$PORT"
elif command -v npx >/dev/null 2>&1; then
  exec npx --yes serve -l "$PORT" .
else
  echo "No encontré python3, python ni npx. Instala Python: sudo apt install python3"
  exit 1
fi
