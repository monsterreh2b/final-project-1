// include react
var React = require("react");

var loginStyle = {
    display: "inline-block",
    padding: "32px 48px 0px 48px",
    border: "1px solid #EEE"
};

//create saved component
var Login = React.createClass({

    render: function () {

        return (

            <div>
            
                <div className="center">
                    <h2>The Trade App<sup>®</sup></h2>
                    <div className="section"></div>
                    <h5 className="indigo-text">Please login into your account</h5>
                    <div className="section"></div>
                    <div className="container">
                        <div className="z-depth-1 grey lighten-4 row" style={loginStyle}>
                            <form className="col s12" method="post">
                                <div className='row'>
                                    <div className='col s12'>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input className='validate' type='text' name='user' id='user' />
                                        <label htmlFor='user'>Username</label>
                                    </div>
                                </div>                        
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input className='validate' type='email' name='email' id='email' />
                                        <label htmlFor='email'>Email</label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input className='validate' type='password' name='password' id='password' />
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
                    <a href="#!">Create account</a>
                </div>

            </div>

        );
    }
});

// export component htmlFor use in other files
module.exports = Login;