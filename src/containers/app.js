import React, { Component } from 'react';
import logo from '~/assets/logo.png';

class App extends Component {
  handleBrowserChange = () => {
    const { history } = this.props;
    history.push('/docs');
  }

  render() {
    const { location: { pathname }, children } = this.props;
    return (
      <div className="home-container" style={{ paddingTop: 100 }}>
        <div
          className={`center ${pathname === '/docs' ? 'logo-move' : ''}`}
          onClick={this.handleBrowserChange}
          style={{ display: pathname === '/docs' ? 'none' : 'block' }}
        >
          <div
            className="logo-box"
            style={{ cursor: 'pointer' }}
          >
            <img
              src={logo}
              className="logo"
              style={{ backgroundColor: 'rgba(0,0,0,0)' }}
            />
          </div>
          <h1 style={{ marginTop: 120 }}>React Project</h1>
        </div>
        <div style={{ width: '1000px', margin: '0 auto' }}>
          { children }
        </div>
      </div>
    );
  }
}

export default App;
