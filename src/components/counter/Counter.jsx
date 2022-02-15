import "./Counter.css"
import React, { Component } from 'react'

import Display from './Display'
import Buttons from './Buttons'
import StepsForm from './StepsForm'

export default class Counter extends React.Component {

    state = {
        value: this.props.initialValue || 0,
        steps: this.props.inicialStep || 5,
    }

    // constructor(props) {
    //     super(props);
    //     this.inc = this.inc.bind(this);
    // }
    // inc = () => substitui a necessidade do trecho acima

    inc = () => {
        this.setState({ value: this.state.value + this.state.steps })
    }

    dec = () => {
        this.setState({ value: this.state.value - this.state.steps })
    }

    setSteps = (newStep) => this.setState({ steps: newStep })

    render() {
        return (
            <div className="Counter">
                <h2>
                    Contador
                </h2>
                <Display value={this.state.value}> </Display>
                <StepsForm steps={this.state.steps} setSteps={this.setSteps} />
                <Buttons inc={this.inc} dec={this.dec}></Buttons>
            </div>
        )
    }
}