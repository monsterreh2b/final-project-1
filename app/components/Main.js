// include react
var React = require("react");

// include link from react router to navigate without page reloads
var Link = require("react-router").Link;

// include all the sub-components
var Results = require("./Search/Results");
var Query = require("./Search/Query");
var Balances = require("./Balances");
var Login = require("./Login");
var Portfolio = require("./Portfolio");
var Trading = require("./Trading");

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
                        <div className="section">
                            <div className="row">
                                <div className="col s12">
                                    <ul className="tabs">
                                        <li className="tab col s3"><a href="/portfolio">Portfolio</a></li>
                                        <li className="tab col s3"><a href="/balances" className="active">Balances</a></li>
                                        <li className="tab col s3"><a href="/trading">Trading</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h5>Portfolio Value</h5>
                        </div>

                        <div className="row">
                            <div className="col s9">
                                <table className="bordered">
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td>Portfolio Value</td>
                                            <td className="text-right">$123,565.00</td>
                                        </tr>
                                        <tr>
                                            <td>Stock Positions</td>
                                            <td className="text-right">6</td>
                                        </tr>
                                        <tr>
                                            <td>Cash Balance</td>
                                            <td className="text-right">$100,000.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="row">
                            <h5>Additional Information</h5>
                        </div>
                        <div className="row">
                            <div className="col s9">
                                <table className="bordered">
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td>Pending Purchases</td>
                                            <td className="text-right">$0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Cash Balance</td>
                                            <td className="text-right">$0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Margin Balance</td>
                                            <td className="text-right">$0.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
});

// export component for use in other files
module.exports = Main;