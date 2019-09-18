import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import store from './reducers/store.jsx';

import Header from './components/header.jsx';
import AppComponents from './components/components.jsx';
import Footer from './components/footer.jsx';
import './scss/style.scss';

class StarWars extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="fullWidth topBlock">
                    <Header />
                    <AppComponents />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <Provider store={ store }><StarWars /></Provider>, document.getElementById("react-star-wars"));
