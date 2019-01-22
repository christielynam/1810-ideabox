import React, { Component } from 'react'

class IdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addIdea(this.state)
  }

  render() {
    const { title, body } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={title}
          placeholder='Title'
          name='title'
          onChange={this.handleChange}
        />
        <input 
          value={body}
          placeholder='Body'
          name='body'
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default IdeaForm;