@echo off
SET PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\Git\bin;C:\Program Files (x86)\Git\cmd
cd /d C:\Users\venul\OneDrive\Desktop\Quisqueya
echo Limpiando repo... > LIMPIAR-LOG.txt
git add -A >> LIMPIAR-LOG.txt 2>&1
git commit -m "Limpieza: quitar archivos viejos de Netlify, agregar scripts de mantenimiento" >> LIMPIAR-LOG.txt 2>&1
git push origin main >> LIMPIAR-LOG.txt 2>&1
echo. >> LIMPIAR-LOG.txt
echo ESTADO FINAL: >> LIMPIAR-LOG.txt
git status >> LIMPIAR-LOG.txt 2>&1
