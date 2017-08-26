// include react
var React = require("react");

// include link from react router to navigate without page reloads
var Link = require("react-router").Link;

// include all the sub-components
var Results = require("./Search/Results");
var Query = require("./Search/Query");
var Balances = require("./Balances");
var Login = require("./Login");
var Positions = require("./Positions");
var Summary = require("./Summary");

// require helper for api calls
var helpers = require("../utils/helpers");

//create main component
var Main = React.createClass({

	// get initial state of component
	getInitialState: function() {

	return { topic: "" };
	
	},

	// run every time the component updates props or state
	componentDidUpdate: function(prevProps, prevState) {

		// If we have a new search term, run a new search
		if (prevState.searchTerm !== this.state.searchTerm) {

		helpers.runQuery(this.state.searchTerm).then(function(data) {

			if (data !== this.state.results) {

			console.log(data);

			this.setState({ results: data });

			}

			// This code is necessary to bind the keyword "this" when we say this.setState
			// to actually mean the component itself and not the runQuery function.
		}.bind(this));

		}

	},

	setTerm: function(topic) {

		this.setState({ searchTerm: topic });
		
	},

	render: function () {

		return (

			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<nav className="navbar navbar-default">
							<div className="container-fluid">
								<div className="navbar-header">
									<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
										<span className="sr-only">Toggle navigation</span>
										<span className="icon-bar">#</span>
										<span className="icon-bar">#</span>
										<span className="icon-bar">#</span>
									</button>
									<a className="navbar-brand" href="/">NYT-React</a>
								</div>
								<div className="collapse navbar-collapse navbar-ex1-collapse">
									<ul className="nav navbar-nav navbar-right">
										<li><a href="/search">Search</a></li>
										<li><a href="/saved">Saved Articles</a></li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="jumbotron">
							<div className="container">
								<h2 className="text-center"><strong>(ReactJS) New York Times Article Scrubber</strong></h2>
								<h3 className="text-center">Search for and save articles of interest.</h3>
							</div>
						</div>
					</div>
				</div>
				{/* Search component goes here */}
				<Search setTerm={this.setTerm} />

				{/* Query component goes here */}
				<Query />

				{/* Results component goes here */}
				<Results />

				<footer>
					<hr />
					<p className="pull-right">
						<i className="fa fa-github" aria-hidden="true"></i> Proudly built using React.js
		        	</p>
				</footer>
			</div>
		);
	}
});

// export component for use in other files
module.exports = Main;