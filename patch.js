'use strict';
const fs = require('fs');
// const  { spawn } = require( 'child_process' );
const execSync = require('child_process').execSync;

let rawdata = fs.readFileSync('package.json');
let pkg = JSON.parse(rawdata);
//删除lock文件  解除包锁定
if(fs.existsSync('package-lock.json')){
    execSync('rm package-lock.json');
    console.log();
}

const depProjects=pkg.depProjects;
const depProjectsNames=Reflect.ownKeys(depProjects);
//发布依赖包
depProjectsNames.forEach((depProjectName)=>{
    let cmdResult = execSync(`cd ../${depProjectName} && npm version patch`);
    console.log(`==========================${depProjectName}.newVersion =================================`+cmdResult);
});
console.log(`==========================依赖版本号更新完成=================================`);
