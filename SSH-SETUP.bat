@echo off
SET PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\Git\bin;C:\Program Files (x86)\Git\cmd;C:\Windows\System32\OpenSSH
cd /d C:\Users\venul\OneDrive\Desktop\Quisqueya

echo Configurando acceso SSH para Quisqueya Travel... > SSH-LOG.txt
echo. >> SSH-LOG.txt

if not exist "%USERPROFILE%\.ssh" mkdir "%USERPROFILE%\.ssh"

if exist "%USERPROFILE%\.ssh\id_ed25519_quisqueya" (
  echo La llave ya existia, se reutiliza. >> SSH-LOG.txt
) else (
  echo Generando llave SSH nueva... >> SSH-LOG.txt
  ssh-keygen -t ed25519 -f "%USERPROFILE%\.ssh\id_ed25519_quisqueya" -N "" -C "venulhernandez@gmail.com" >> SSH-LOG.txt 2>&1
)

echo. >> SSH-LOG.txt
echo ================================ >> SSH-LOG.txt
echo LLAVE PUBLICA (copiar esto a GitHub): >> SSH-LOG.txt
echo ================================ >> SSH-LOG.txt
type "%USERPROFILE%\.ssh\id_ed25519_quisqueya.pub" >> SSH-LOG.txt
echo. >> SSH-LOG.txt

findstr /C:"Host github.com" "%USERPROFILE%\.ssh\config" >nul 2>&1
if errorlevel 1 (
  echo. >> "%USERPROFILE%\.ssh\config"
  echo Host github.com >> "%USERPROFILE%\.ssh\config"
  echo   HostName github.com >> "%USERPROFILE%\.ssh\config"
  echo   User git >> "%USERPROFILE%\.ssh\config"
  echo   IdentityFile ~/.ssh/id_ed25519_quisqueya >> "%USERPROFILE%\.ssh\config"
  echo   StrictHostKeyChecking accept-new >> "%USERPROFILE%\.ssh\config"
  echo Config SSH creada. >> SSH-LOG.txt
) else (
  echo Config SSH ya existia, no se toco. >> SSH-LOG.txt
)

echo. >> SSH-LOG.txt
echo Cambiando el remoto de git a SSH... >> SSH-LOG.txt
git remote set-url origin git@github.com:venulhernandez-cyber/quisqueyatravel.git >> SSH-LOG.txt 2>&1
git remote -v >> SSH-LOG.txt 2>&1

echo. >> SSH-LOG.txt
echo Listo. Revisa SSH-LOG.txt: copia la llave publica de arriba >> SSH-LOG.txt
echo y agregala en https://github.com/settings/ssh/new >> SSH-LOG.txt
