//var Main = React.createClass({ //doesn't work per tutorial
//class Main extends React.Component { //does work but prefer createReactClass
var Main = createReactClass({

    getInitialState() {
        return { files: [] }
    },
    componentDidMount() {
        //console.log("state1:"+this.state.files);
        //window.files = this.state.files;
        $.getJSON('/loadfiles', (response) => { this.setState({ files: response.files },function() {console.log("T:"+this.state.files)}) });
        //$.getJSON('/loadfiles', (response) => { console.log(response.files) });
        //this.setState({files: ["a","b"]});
        //window.files = this.state.files;
        //console.log("state2:"+this.state);
    },
    render() {
        return (
            <div>
                <Dropfolder files={this.state.files} />
            </div>
        )
    }
});
