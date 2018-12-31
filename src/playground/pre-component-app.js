
console.log('App.js is running.');

const app = {
    title:'What should I do?',
    subtitle: 'Avoiding the judgement calls.',
    options: [],
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};

const resetList = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const render = () => {
    const opts = app.options;
    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}

            <p>{(opts && opts.length > 0) ? 'Here are your options: ' : 'You have no options.'}</p>

            <button disabled={opts.length == 0} onClick={onMakeDecision}>What should I do?</button>

            <button onClick={resetList}>Remove options</button>

            <ol>
                {opts.map((option) => <li key={opts.indexOf(option)}>{option}</li>)}
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>

        </div>
    );

    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById("app");
render();

