
class TaskManager extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    //Let's fetch the options from local storage and display them.
    //We use try-catch for faulty data forms.
    componentDidMount() {
        try {
            //Fetch the options in JSON-string format.
            const json = localStorage.getItem('options');
            //Transform the JSON to an actual object.
            const options = JSON.parse(json);
            //We check whether the options contain anything or not.
            if(options) {
                this.setState(() => ({ options: options }))
            }

        } catch(e) {
            //Do nothing at all, use default options.
        }
    }

    // Saving options to local storage.
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        } 
    }

    handleDeleteOptions() {
        //Short way of setting state.
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomIndex];
        alert(option);
    }

    handleAddOption(option) {
        //Checking for invalid inputs. (empty and already existing strings)
        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    render() {
        const subtitle = 'Taskmanager helps to avoid judgement calls.';

        return (
            <div>
                <Header subtitle={subtitle}></Header>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    pickRandom={this.handlePick}
                ></Action>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                ></Options>
                <AddOption 
                    handleAddOption={this.handleAddOption}
                ></AddOption>
            </div>
        );
    }
}

TaskManager.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'What should I do?'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.pickRandom}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );    
};

const Options = (props) => {
    return(
        <div>
            <button 
                onClick={props.handleDeleteOptions}
            >
                Remove all options
            </button>
            {props.options.length === 0 ? <p>Please add an option to get started!</p> : <h3>Options:</h3>}
            {props.options.map((option) => (
                <Option 
                    key={props.options.indexOf(option)} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                ></Option>
            ))}
        </div>
    );
};

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = "";
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button type="submit">Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<TaskManager options={['Define your vision', 'Make a plan']}/>, document.getElementById('app'));