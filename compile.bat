cd /d %~dp0
cd..
cd..
set rootpath=%cd%
set targetPath=%~1

cd /d %~dp0
git pull origin master

Del %~dp0package-lock.json
rd /s /q %~dp0node_modules
rd /s /q %~dp0dist

cd /d %~dp0
call install.bat        >%~dp0touchInstall.log
call product_build.bat  >%~dp0touchBuild.log

echo f|xcopy /y %~dp0touchInstall.log  	%rootpath%\touchInstall.log
echo f|xcopy /y %~dp0touchBuild.log  	%rootpath%\touchBuild.log

if not exist %~dp0dist\index.html (
set errorlevel=1
exit 1
)

set errorlevel=0
robocopy /mir %~dp0dist  %targetPath%\WebSite\touch\