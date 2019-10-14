import React from 'react';
import packageJson from '../../package.json';
import './style.less';

export default function VersionInfo() {
  const { name, version } = packageJson;
  return <div className='version-container'>
    <h1>{pkg.name}</h1>
    <p>{pkg.version}</p>
  </div>
}
