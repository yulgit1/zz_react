var Dropfolder = createReactClass({

  render: function() {
      var files= this.props.files.map((file) => {
          return(
          <Dropfile file={file} />
          )
      });
      //var files = this.props.files.length;
    return (
        <div id="folder">
            <h4>
                Dropfolder Contents
            </h4>
            <p>Click on a file below to process:</p>
            {files}
        </div>
    );
  }
});

