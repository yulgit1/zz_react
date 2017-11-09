var Dropfile = createReactClass({

  render: function() {
    return (
        <div key={this.props.file.id}>
          <li><a href="">{this.props.file.name}</a></li>
        </div>
    );
  }
});

