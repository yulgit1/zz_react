//var Main = React.createClass({ //doesn't work per tutorial
//class Main extends React.Component { //does work but prefer createReactClass
var Main = createReactClass({

    getInitialState() {
        return { files: [] }
    },
    componentDidMount() {
        //$.getJSON('/loadfiles', (response) => { this.setState({ files: response.files },function() {console.log("T:"+this.state.files)}) });
        $.getJSON('/loadfiles', (response) => { this.setState({ files: response.files }) });

    },
    render() {
        return (
            <div>
                <Dropfolder files={this.state.files} />
            </div>
        )
    }
});
