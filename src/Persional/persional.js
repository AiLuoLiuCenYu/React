import React from 'react';
import Numbers from '../Numbers/numbers';
import Foort from '../Listitem/listItrm';
import NameForm from '../FormSubmit/formSubmit'

class Persional extends React.Component {
  constructor (props) {
    super(props);
    this.state = {name: props.name, isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    alert('The east wind is weak and the flowers are broken');
  }

  componentWillUnmount() {
    alert('To be a stranger in a foreign land alone');
  }
  handleClick () {
    this.setState(state => (
      {
        isToggleOn: !state.isToggleOn
      }
    ));
    alert('I was clicked');
  }
  render () {
    return (
      <div className="helloWorld">
        <p onClick={ this.handleClick }>my name is {this.state.name}</p>
        <p>my job is WEB</p>
        <p> {this.state.isToggleOn ? 'NO': 'OFF'} </p>
        <p>my age is Twenty-three</p>
        <Numbers numbers = {[1, 2, 3, 4, 5]} />
        <Foort />
        <NameForm />
      </div>
    )
  }
}
export default Persional;