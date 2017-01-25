import React, { Component } from 'react'
import axios from 'axios'

import Output from './Output'
import Select from './Controls/Select'
import Text from './Controls/Text'

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

  changeParas(paras) {
    this.setState({paras}, this.getText)
  }

  showHTML(html) {
    this.setState({html}, this.getText)
  }

  render() {
    return (
      <div className="container">
        <h1>Text Generator</h1>
        <Output value={this.state.text}/>
        <h3>Real Time Options</h3>
        <form>
          <div>
            <label>Paragraphs: </label>
            <Text value={this.state.paras} onChange={this.changeParas.bind(this)}/>
          </div>
          <div>
            <label>Include HTML: </label>
            <Select onChange={this.showHTML.bind(this)}/>
          </div>
        </form>
      </div>
    )
  }
}

export default App
