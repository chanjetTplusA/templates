import React from 'react';
import packageJson from '../../../package';
import './style.less';

export default function VersionInfo() {
  const { name, version } = packageJson;
  return <div className='version-container'>
    <div>
      {name}
      <p>v {version}</p>
    </div>
  </div>
}
