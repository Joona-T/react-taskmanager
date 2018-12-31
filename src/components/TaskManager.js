import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class TaskManager extends React.Component {
    
    state = {
        options: this.props.options,
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        //Short way of setting state.
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomIndex];
        this.setState(() => ({ selectedOption: option }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handleAddOption = (option) => {
        //Checking for invalid inputs. (empty and already existing strings)
        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

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

    render() {
        const subtitle = 'Avoid deceitful judgement calls.';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        pickRandom={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    modalClose={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

TaskManager.defaultProps = {
    options: []
}