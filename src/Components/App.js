import React, { Component } from 'react'
import axios from 'axios'

import Output from './Output'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paras: 4,
      html: true,
      text: ''
    }
  }

  componentWillMount() {
    this.getText()
  }

  getText() {
    axios.get('http://hipsterjesus.com/api?paras=' + this.state.paras + '&html=' + this.state.html)
      .then((res) => {
        this.setState({text: res.data.text}, () => {
          console.log(this.state)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Text Generator</h1>
        <Output value={this.state.text}/>
      </div>
    )
  }
}

export default App
