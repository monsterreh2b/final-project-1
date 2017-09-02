// include react
var React = require("react");

//create saved component
var Nav = React.createClass({

    render: function () {

        return (

            <div>

                <div className="section">
                    <div className="row">
                        <div className="col s12">
                            <ul className="tabs">
                                <li className="tab col s3"><a href="/portfolio">Portfolio</a></li>
                                <li className="tab col s3"><a href="/balances">Balances</a></li>
                                <li className="tab col s3"><a href="/trading">Trading</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
});

// export component for use in other files
module.exports = Nav;