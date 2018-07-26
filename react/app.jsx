import React from 'react';
import ReactDOM from 'react-dom';

// import App from '../../component/app/Admin';
class App extends React.Component{
    render(){
        return 'Hello World'
    }
}

ReactDOM.hydrate((<App/>), document.getElementById('app'));
