// How to capture input from the form elements like the input tag text area tag and have the data ava for form submission

//Controlled components: When react took control over the form elements value such components are controlled components



import React, {component} from 'react'

class Form extends Component {
    constructor (props){
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic:'react'
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            username:event.target.value
        })
    }

    handleCommentsChange = event =>{
        this.setState({
            comments:events.target.value
        })
    }
 
    handleTopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert (`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render({
        return()
            <form onSubmit = {this.handleSubmit}>
            <div>
            <label>Username</label>
            <input type = 'text' value = {this.state.username}
            onChange = {this.handleUserNameChange}>
            </div>
            <div>
                <label>Comments</label>
                <textarea value=this.state.comments} onChange={this.handleCommentsChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value = {this.state.topic} onChange= {this.handleTopicChnage}>
                    <option value ="react">React</option>
                    <option value ="angular">Angular</option>
                    <option value ="vue">Vue</option>
                </select>
            </div>
                <button type = "submit">Submit  </button>
            </form>)
}


