// include react
var React = require("react");
var axios = require("axios")

var loginStyle = {
    display: "inline-block",
    padding: "32px 48px 0px 48px",
    border: "1px solid #EEE"
};


// create saved component
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: '', email: '', password: '' };
    }

    render() {

        return (

            <div>

                <div className="center">
                    <h2>The Trade App<sup>®</sup></h2>
                    <div className="section"></div>
                    <h5 className="indigo-text">Please login into your account</h5>
                    <div className="section"></div>
                    <div className="container">
                        <div className="z-depth-1 grey lighten-4 row" style={loginStyle}>
                            <form className="col s12" method="post" onSubmit={this.handleSubmit}>
                                <div className='row'>
                                    <div className='col s12'>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input className='validate' type='text' name='user' id='user' value={this.state.user} onChange={(event) => {
                                            this.setState({ user: event.target.value });
                                        }} />
                                        <label htmlFor='user'>Username</label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input className='validate' type='email' name='email' id='email' value={this.state.email} onChange={(event) => {
                                            this.setState({ email: event.target.value });
                                        }} />
                                        <label htmlFor='email'>Email</label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input className='validate' type='password' name='password' id='password' value={this.state.password} onChange={(event) => {
                                            this.setState({ password: event.target.value });
                                        }} />
                                        <label htmlFor='password'>Password</label>
                                    </div>
                                    <label className="float-right">
                                        <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                                    </label>
                                </div>
                                <br />
                                <div className="center">
                                    <div className='row'>
                                        <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
};

// export component htmlFor use in other files
module.exports = Login;