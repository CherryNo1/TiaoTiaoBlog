import { Button } from 'antd'
import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props: any) {
        super(props)

    }
    state = {
        cnt: 0
    }
    // state = { cnt: 0 }
    increment = () => {
        this.selectNumber

    }
    decrement = () => {

    }
    incrementIfOdd = () => {

    }
    incrementAsync = () => {

    }
    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.cnt}</h1>
                <select ref={c => {
                    console.log(c?.value);
                    this.selectNumber = c
                }}
                    onChange={this.a}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
                <hr />
                <Button onClick={this.increment}>+</Button>&nbsp;
                <Button onClick={this.decrement}>-</Button>&nbsp;
                <Button onClick={this.incrementIfOdd}>当前求和为奇数再加</Button>&nbsp;
                <Button onClick={this.incrementAsync}>异步加</Button>&nbsp;

            </div>
        )
    }
}
