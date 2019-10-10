

const fs = require('fs');
const execSync = require('child_process').execSync;

const isReloadAll=false;//是否全部安装；
const isInstalled= fs.existsSync('node_modules');

function readJsonFile(path){
    let rawdata = fs.readFileSync(path);
    return JSON.parse(rawdata);
}

function removeFile(filePath){    
    console.log('detele开始',filePath)
    if( !fs.existsSync(filePath) )return;
    console.log('detele filePath',filePath)
    execSync(`rm -r ${filePath}`,function(error,stdout,stderr){
        if (error) {
            console.error(`执行的错误: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
    console.log('delete完成')
}

function clearForInstall(path){
    removeFile(`${path}/package-lock.json`)
    // removeFile(`${path}/node_modules`);
}

function getVersion(path){
    path=`../${path}/package.json`;
    let pkg=readJsonFile(path);
    return pkg.version;
}

function installAllPkg(){
    clearForInstall('.');
    let cmdResult = execSync(`cnpm install`);
    console.log(`安装所有依赖日志============:${cmdResult}`);
}

function installPkg(){
    depProjectsNames.forEach((depProjectName)=>{
        let version=getVersion(depProjectName);
        let cmdResult = execSync(`cnpm i ${depProjects[depProjectName]}@${version}`);
        console.log(`安装日志:${cmdResult}`);
    })
}

const pkg=readJsonFile('package.json');
const depProjects=pkg.depProjects;
const depProjectsNames=Reflect.ownKeys(depProjects);
if( isReloadAll|| !isInstalled){
    console.log(`开始安装所有依赖======`);
    installAllPkg()
    console.log(`安装所有依赖完成=====`);
}else{
    console.log(`开始安装特定依赖======`);
    installPkg();
    console.log(`开始安装特定依赖完成======`);
}