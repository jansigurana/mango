// Write your code here
import { Component } from "react"

import "./index.css"

class FruitsCounter extends Component {
state = { key1 : value1, key2 : value2 }
this.setState(prevState) => ({ prevState.key1 : value3 })
state = { key1 : value3, key2 : value2 }
this.setState(prevstate) => ({prevstate.key2 : value4 })
state = {key1 : value3, key2 : value4}
render() {
    const { key1: value1, key2:value2 } = this.state
    return (
      <div className="bg-container">
       <div className="card-container">
        <h1 className="heading">Bob ate{key1 : value3} mangoes {key2 : value4} bananas</h1>
        <img class="img" src="https://assets.ccbp.in/frontend/react-js/mango-img.png" class="alt"/>
        <button className="button" onClick={this.onIncrement}>
          Eat Mango
        </button>
        <img class="img" src="https://assets.ccbp.in/frontend/react-js/banana-img.png" class="alt"/>
        <button className="button" onClick={this.onDecrement}>
          Eat Banana
        </button>
      </div>
    </div>
    )
  }

export default FruitCounter