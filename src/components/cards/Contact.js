import React, { Component } from 'react'
import Mail from './icons/Mail'

export default class Contact extends Component {

    state = {
        message: '',
        detailView: false
    }

    handleChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    toggleDetailView = () => {
        this.setState({
            detailView: !this.state.detailView
        })
    }

    render(){
        if (this.state.detailView){
            return (
                <div className="contact-card-detail" onClick={this.toggleDetailView}>
                    jdprince555@gmail.com <br />
                    (203) 297-4972<br />
                </div>
            )
        } else {
            return (
                <div className="contact-card-icon" onClick={this.toggleDetailView}><Mail /></div>
            )
        }
    }
}
