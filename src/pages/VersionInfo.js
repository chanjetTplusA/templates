import React from 'react';
import pkg from '../../package.json';
// import pkgLock from '../../package-lock.json'
// import versionSet from './viewSet.js'
// const dependencies=pkgLock.dependencies;
// let versionDetail=versionSet.map((el)=>{
//   let detail=dependencies[el];
//   if(!detail)return;
//   return {
//     name:el,
//     version:detail.version
//   };
// })
export default class VersionInfo extends React.Component {
  render() {
    return (<div>
        <p>{pkg.name}</p>
        <p>{pkg.version}</p>
        {/* {
          __VERSIONDETAIL__&&versionDetail.map((el)=>{
            if(!el)return null;
            return <React.Fragment>
              <span>{el.name}</span>:
              <span>{el.version}</span>
              <br/>
            </React.Fragment>
          })
        } */}
      </div>)
  }
}
