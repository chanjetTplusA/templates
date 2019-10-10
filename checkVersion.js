const fs= require('fs');
const execSync = require('child_process').execSync;
function getPackageJson(path){
    let packageStr=fs.readFileSync(path);
    return JSON.parse(packageStr);
}


var pkg = getPackageJson('package.json');
var depProjects=pkg.depProjects;
var depProjectsNames=Reflect.ownKeys(depProjects);

// var pkgLock = getPackageJson('package-lock.json')
function getInstallVersion(packageName){
    const pkg=getPackageJson('./node_modules/'+packageName+'/package.json');
    return pkg.version;
}

function installFromNpm(packageName){
    //删除lock文件  解除包锁定
    if(fs.existsSync('package-lock.json')){
        execSync('rm package-lock.json');
    }
    execSync(`npm install ${packageName} -S --registry=http://registry.npmjs.org`);
}


var errStr='';
// const fallPackage = 
// return version!=installVersion;
depProjectsNames.forEach((depProjectName)=>{
    let path=`../${depProjectName}/package.json`;
    let pkg=getPackageJson(path);
    const version=pkg.version;
    const packageName=depProjects[depProjectName];
    const installVersion=getInstallVersion(packageName);
    if(installVersion < version){
        installFromNpm(packageName);
        if(getInstallVersion(packageName)<version){
            errStr+=`${packageName}最新版本${version},安装版本${installVersion}\n`
        }
    }
});
console.log('安装新包状态===')
if(errStr.length){
    // throw new Error(errStr);
    console.log('error:版本安装落后',errStr)
    // throw new Error(errStr);
}else{
    console.log('已经安装最新版本')
}






