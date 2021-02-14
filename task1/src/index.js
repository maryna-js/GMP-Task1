import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateElementComponent from './components/CreateElementComponent';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PureComponent from './components/PureComponent';


function Main() {
    return (
        <>

            <div className="container">
                <div className="text">Hello world</div>
                <div className="wrapper">
                    <CreateElementComponent />
                    <FunctionalComponent />
                    <ClassComponent />
                    <PureComponent />
                </div>
            </div>
        </>
    )
}


ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
