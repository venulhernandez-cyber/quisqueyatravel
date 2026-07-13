@echo off
SET PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\Git\bin;C:\Program Files (x86)\Git\cmd
echo ================================
echo Reparando repositorio Git de Quisqueya Travel
echo ================================
cd /d C:\Users\venul\OneDrive\Desktop\Quisqueya

echo.
echo Paso 1: verificando que git es visible...
git --version

echo.
echo Paso 2: clonando el historial real desde GitHub en carpeta temporal...
if exist __gitfix_temp__ rmdir /s /q __gitfix_temp__
git clone https://github.com/venulhernandez-cyber/quisqueyatravel.git __gitfix_temp__

echo.
echo Paso 3: copiando el .git funcional a la carpeta del proyecto...
if exist .git rmdir /s /q .git
xcopy __gitfix_temp__\.git .git\ /E /I /H /Y /Q

echo.
echo Paso 4: limpiando carpeta temporal...
rmdir /s /q __gitfix_temp__

echo.
echo ================================
echo Verificando estado del repositorio:
echo ================================
git status

echo.
echo ================================
echo Si ves "nothing to commit, working tree clean" o una lista corta de
echo archivos modificados, el repositorio quedo reparado. A partir de ahora
echo COMMIT.bat deberia funcionar normalmente (git add/commit/push).
echo ================================
echo.
pause
del "%~f0"
