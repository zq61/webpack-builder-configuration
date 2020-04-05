import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './search.less'
import Login from '../../image/HMR.png'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Com: null
    }
  }
  lazy() {
    import('./test').then(Text => {
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
        <img src={Login}/>
      </div>
    );
  }
}

ReactDOM.render(<Search/>, document.getElementById('root') )