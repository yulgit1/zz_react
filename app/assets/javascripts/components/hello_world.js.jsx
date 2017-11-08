//Created by 'rails g react:component HelloWorld greeting:string'
//rendered in html.erb view file by '<%= react_component("HelloWorld", { greeting: "Hello" }) %>'
var HelloWorld = createReactClass({
  propTypes: {
    greeting: PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Greeting: {this.props.greeting}</div>
      </div>
    );
  }
});

