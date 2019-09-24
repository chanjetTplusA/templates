'use strict';
const fs = require('fs');
// const  { spawn } = require( 'child_process' );
const execSync = require('child_process').execSync;

let rawdata = fs.readFileSync('package.json');
let pkg = JSON.parse(rawdata);

function removeFile(filePath){
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
}
function clearForInstall(path){
  removeFile(`${path}/package-lock.json`)
  // removeFile(`${path}/node_modules`);
}
//删除lock文件  解除包锁定
clearForInstall('.')

const depProjects=pkg.depProjects;
const depProjectsNames=Reflect.ownKeys(depProjects);
//发布依赖包
depProjectsNames.forEach((depProjectName)=>{
  console.log(`==========================处理 ${depProjectName} 开始=================================`);


  console.log(`==========================${depProjectName}开始安装依赖 =================================`);
  clearForInstall(`../${depProjectName}`)
  let cmdResult = execSync(`cd ../${depProjectName} && npm install`);
  console.log(`依赖安装日志:${cmdResult}`);
  console.log(`==========================${depProjectName}结束安装依赖 =================================`);


  console.log(`==========================${depProjectName}开始发布模块 =================================`);
  cmdResult = execSync(`cd ../${depProjectName} && npm run pub`);
  console.log(`发布日志:${cmdResult}`);
  console.log(`==========================${depProjectName}结束发布模块 =================================`);


  console.log(`==========================${depProjectName}同步淘宝镜像开始 =================================`);
  cmdResult = execSync(`cd ../${depProjectName} && cnpm sync ${depProjects[depProjectName]}`);
  console.log(`同步日志:${cmdResult}`);
  console.log(`==========================${depProjectName}同步淘宝镜像结束 =================================`);
  console.log(`==========================处理 ${depProjectName} 完成=================================`);
});
console.log(`==========================整体发布完成=================================`);
