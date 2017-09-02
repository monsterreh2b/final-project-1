// include react
var React = require("react");

// include link from react router to navigate without page reloads
var Link = require("react-router").Link;

// include all the sub-components

var Balances = require("./Balances");
var Login = require("./Login");
var Portfolio = require("./Portfolio");
var Trading = require("./Trading");
var Nav = require("./Nav");

// require helper for api calls
var helpers = require("../utils/helpers");

//create main component
var Main = React.createClass({

    render: function () {

        return (

            <div>
                <main>
                    <nav>
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">The Trade App</a>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="section"></div>
                        <div className="section">
                            <h5>Balances</h5>
                        </div>

                        <Login />
                        
                        <Nav />

                        <Portfolio />

                        <Balances /> 

                        <Trading /> 

                    </div>
                </main>
            </div>
        );
    }
});

// export component for use in other files
module.exports = Main;