import React from 'react';



class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isValid: false
    };
  }

  words = sentence => {
    if (sentence.length > 0) {
      return sentence.trim().split(' ').length
    } else {
      return false
    }
  }

 validPoem = poem => {
    const sentences = poem.trim().split('\n')

    if (poem === '' || sentences.length !== 3) {
      return false
    } else if (this.words(sentences[0]) === 5 && this.words(sentences[1]) === 3 && this.words(sentences[2]) === 5) {
      return true
    }

  }

  handleChanges = event => {
    let input = event.target.value

    this.setState({
      text: input,
      isValid: this.validPoem(input)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleChanges}/>

      {!this.state.isValid &&
        <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div>
      }

      </div>
    );
  }
}

export default PoemWriter;