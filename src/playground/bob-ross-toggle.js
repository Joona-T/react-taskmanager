
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visible: false
        };
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {    
                visible: !prevState.visible
            };
        });
    }
    
    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visible ? "Hide this wisdom" : "Show wise words"}</button>
                {this.state.visible && <p>It's so important to do something every day that will make you happy.</p>}
            </div>
        );
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

//ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ
// Pre-state way of doing the toggle.
//ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ

// let showingDetails = false;

// const toggleShow = () => {
//     showingDetails = !showingDetails;
//     renderJSX();
// };

// const renderJSX = () => {
//     const toggleTemplate = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleShow}>{showingDetails ? "Hide this wisdom" : "Show wise words"}</button>
//             {showingDetails && <p>It's so important to do something every day that will make you happy.</p>}
//         </div>
//     );
    
//     ReactDOM.render(toggleTemplate, appRoot);
// }

// const appRoot = document.getElementById("app");
// renderJSX();