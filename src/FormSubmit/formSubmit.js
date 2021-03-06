import React from  'react';

class NameForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { value: '', newArray: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  handleSubmit (event) {
    alert('提交的名字' + this.state.value);
    let newList = [];
    newList.push(this.state.value);
    console.log(newList);
    this.setState({value: ''});
    this.setState({newArray: newList});
    console.log(this.state.newArray);
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleChange}>
        <lable>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </lable>
        <p> {this.state.value} </p>
        <input type="submit" onClick={this.handleSubmit} value="提交" />
      </form>
    )
  }
}

export default NameForm;