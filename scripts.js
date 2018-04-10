var Counter = React.createClass({
  getInitialState: function () {
    return {
      counter: 0
    }
  },

  increment: function () {
    this.setState({
      counter: this.state.counter + 1
    })
  },

  decrement: function () {
    this.setState({
      counter: this.state.counter - 1
    })
  },

  render: function () {
    return (React.createElement('div', {},
      React.createElement('button', {onClick: this.increment}, 'Add'),
      React.createElement('button', {onClick: this.decrement}, 'Deduct'),
      React.createElement('span', {}, 'Counter state: ' + this.state.counter)
    ))
  },

  componentWillMount: function () {
    console.log('Initial state before first use')
  },

  componentDidMount: function () {
    console.log('Query to the API')
  },

  componentWillReceiveProps: function () {
    console.log('Calculation after use, and before another use')
  },

  shouldComponentUpdate: function () {
    console.log('Useful in case of re-use')
    return true
  },

  componentWillUpdate: function () {
    console.log('Preparation for a change of state')
  },

  componentDidUpdate: function () {
    console.log('Used in case of use of external source')
  },

  componentWillUnmount: function () {
    console.log('Function remover')
  }
})

var element = React.createElement('div', {},
  React.createElement(Counter),
  React.createElement(Counter)
)

ReactDOM.render(element, document.getElementById('app'))
