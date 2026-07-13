@echo off
SET PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\Git\bin;C:\Program Files (x86)\Git\cmd
git config --global user.email "venulhernandez@gmail.com"
git config --global user.name "Venul Hernandez"
echo Identidad configurada:
git config --global user.email
git config --global user.name
echo.
pause
del "%~f0"
