class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
 
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  submitMessage() {
    let newMessage = [...this.state.messages, this.state.input];
    this.setState({
      messages: newMessage,
      input: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>

        <input type="text" value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitMessage}>Add message</button>
        <ul>
          {this.state.messages.map( item => (<li>{item}</li>))}
        </ul>
      </div>
    );
  }
};