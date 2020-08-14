import axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { uname: "", pword: "" }
    }

    handleLoginClick = () => {
        document.location.href = "/"
    }

    handlePwordChange = (event) => this.setState({ pword: event.target.value })
    handleUsernameChange = (event) => this.setState({ uname: event.target.value })
    handleLoginClick = () => {
        axios.post('http://localhost:5000/api/authenticate', { user: this.state.uname, password: this.state.pword })
            .then((res) => {
                if (res.success == true) {
                    localStorage.setItem('isLogged', 'true')
                    document.location.href = '/'
                }
            }).catch((err) => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h4>Log in</h4>
                <div>
                    <div className="form-group row">
                        <label className="col-4">User name</label>
                        <input type="text" className="form-control col-8" id="uname" onChange={(event) => this.handleUsernameChange(event)} />
                        <label className="col-4">Password</label>
                        <input type="password" className="form-control col-8" id="pword" onChange={(event) => this.handlePwordChange(event)} />
                        <div style={{ width: "100%!important" }}><p id="error"></p></div>
                    </div>
                    <button className="btn btn-success btn-sm" onClick={() => this.handleLoginClick()}>Sign in</button>
                    <a href="/registration">Register</a>
                </div>
            </div>
        );
    }
}