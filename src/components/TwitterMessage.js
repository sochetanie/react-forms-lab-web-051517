import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value 
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
        <p>You have left <strong>{this.props.maxChars - this.state.text.length}</strong> characters a message can have</p>
      </div>
    );
  }
}

export default TwitterMessage;