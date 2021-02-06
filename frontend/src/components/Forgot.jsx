import React, { Component } from 'react'
import { Col, Row, Container } from "react-bootstrap";

class Forgot extends Component {
    state = {
        email: "",
        password: "",
        otp: "",
        ebool: true,
        obool: false,
        pbool: false,
        checkemail: false,
        checkpassword: false,
    }
    handleValue = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleregisterSubmit = (e) => {
        this.setState({ checkemail: this.ValidateEmail(this.state.email) });
        if (!this.ValidateEmail(this.state.email)) {
            let registeredemail = this.state.email
            console.log(registeredemail)
            this.setState({ obool: true, ebool: false })
        }
    }
    handleotpSubmit = (e) => {
        // if otp is correct
        this.setState({ obool: false, pbool: true })
    }
    handlepasswordSubmit = (e) => {
        this.setState({
            checkpassword: this.CheckPasswordfunc(this.state.password),
        });
        if (!this.CheckPasswordfunc(this.state.password)) {
            let newpassword = this.state.password
            console.log(newpassword)
        }
    }
    CheckPasswordfunc = (inputtxt) => {
        var decimal = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (inputtxt.match(decimal)) {
            return false;
        } else {
            return true;
        }
    };

    ValidateEmail = (inputText) => {
        var atposition = inputText.indexOf("@");
        var dotposition = inputText.lastIndexOf(".");
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (
            inputText.match(mailformat) &&
            !(
                atposition < 1 ||
                dotposition < atposition + 2 ||
                dotposition + 2 >= inputText.length
            )
        ) {
            return false;
        } else {
            return true;
        }
    };

    render() {
        return (
            <div className="forgotcontainer">
                <Container>
                    <Row>
                        <Col>
                            {this.state.ebool ? <div className="form-elements fori">
                                <label htmlFor="email" style={{ color: "white" }}>Email : </label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={this.handleValue}
                                    value={this.state.email}
                                    className="form-inputs1"
                                    placeholder="PLEASE ENTER THE REGISTERED EMAIL TO CHANGE PASSWORD"
                                />
                                {this.state.checkemail ? (
                                    <p className="form-alert1">
                                        please enter a valid email
                                    </p>
                                ) : null}
                                <button onClick={this.handleregisterSubmit} className="form-button1">
                                    Submit
                  </button>
                            </div> : null}
                        </Col>
                    </Row>
                    {this.state.obool ? <div className="form-elements fori">
                        <label htmlFor="otp" style={{ color: "white" }}>OTP : </label>
                        <input
                            type="number"
                            name="otp"
                            onChange={this.handleValue}
                            value={this.state.otp}
                            className="form-inputs1"
                            placeholder="PLEASE ENTER THE OTP TO CHANGE PASSWORD"
                        />
                        <button onClick={this.handleotpSubmit} className="form-button1">
                            Submit
                  </button>
                    </div> : null}
                    {this.state.pbool ? <div className="form-elements fori">
                        <label htmlFor="password" style={{ color: "white" }}>Password : </label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleValue}
                            value={this.state.password}
                            className="form-inputs1"
                            placeholder="PLEASE ENTER THE NEW PASSWORD"
                        />
                        {this.state.checkpassword ? (
                            <p className="form-alert1">
                                Password must contain minimum eight characters, at least
                                one letter, one number and one special character!
                            </p>
                        ) : null}
                        <button onClick={this.handlepasswordSubmit} className="form-button1">
                            Submit
                  </button>
                    </div> : null}
                </Container>
            </div>
        )
    }
}
export default Forgot