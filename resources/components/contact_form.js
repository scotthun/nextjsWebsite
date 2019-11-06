// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                className="contactForm"
                onSubmit={this.submitForm}
                action="https://formspree.io/xaywggvy"
                method="POST"
            >
                
                <label>Your Email Address:</label>
                <br />
                <input className="emailInput" type="email" name="email" placeholder="john.smith@example.com"/>
                <br />
                <br />
                <label>Message:</label>
                <br />
                <textarea name="message" rows="20" placeholder="Type your message here!"/>
                <br />
                {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                <style jsx>
                {`
                    .contactForm{
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 700;
                        font-size: 16px;
                        color: #ffffff;
                        text-decoration: none;
                        float: left;
                        display: block;
                        width: 100%;

                    }
                    .emailInput{
                        background-color: #212129;
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 700;
                        font-size: 12px;
                        color: #ffffff;
                        width: 100%;
                        border-style: solid;
                        border-width: 1px;
                        border-color: #212129;
                        
                    }
                    .contactForm label{
                        text-transform: uppercase;
                    }

                    .contactForm textarea{
                        width: 100%;
                        background-color: #212129;
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 700;
                        font-size: 12px;
                        color: #ffffff;
                        border: none;
                    }

                    .contactForm button{
                        
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 700;
                        font-size: 16px;
                        background-color: #212129;
                        border: none;
                        text-transform: uppercase;
                        color: #ffffff;
                    }

                `}
                </style>
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}