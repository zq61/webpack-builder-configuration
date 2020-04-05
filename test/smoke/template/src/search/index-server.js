// import React, { Component } from 'react';
// import './search.less'
// import Login from '../../image/HMR.png'
const React = require('react');
const Login = require('../../image/HMR.png');
require('./search.less')

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Com: null
    }
  }
  lazy() {
    require('./test').then(Text => {
      this.setState({
        Com: Text.default
      })
    })
  }
  render() {
    const { Com } = this.state
    return (
      <div className="search" onClick={this.lazy.bind(this)}>
        {
          Com ? <Com/> : null 
        }
        search哈哈`12123
        <img src={Login.default}/>
      </div>
    );
  }
}

module.exports = <Search/>;