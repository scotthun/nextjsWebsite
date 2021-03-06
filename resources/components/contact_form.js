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
                
                <label>Name:</label>
                <input className="emailInput" type="text" name="senderName" placeholder="John Smith"/>
                <br />
                <br />
                <label>Email Address:</label>
                <input className="emailInput" type="email" name="email" placeholder="john.smith@example.com"/>
                <br />
                <br />
                <label>Subject:</label>
                <input className="emailInput" type="text" name="subject" placeholder="Hi Scott!"/>
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
                        color: #333333;
                        text-decoration: none;
                        float: left;
                        display: block;
                        width: 40%;
                        margin-left: 30%;

                    }

                
                    .emailInput{
                        background-color: #f0f0f0;
                        color: #333333;
                        font-family: 'Roboto Mono', monospace;
                        font-size: 16px;
                        width: 100%;
                        border-style: solid;
                        border-width: 1px;
                        border-color: #f0f0f0;
                        
                    }
                    .contactForm label{
                        text-transform: uppercase;
                    }

                    .contactForm textarea{
                        width: 100%;
                        background-color: #f0f0f0;
                        color: #333333;
                        font-family: 'Roboto Mono', monospace;
                        font-size: 16px;
                        border: none;
                    }

                    .contactForm button{
                        
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 700;
                        font-size: 16px;
                        background-color: #d0a800;
                        color: #333333;
                        border: none;
                        text-transform: uppercase;
                        float: right;
                    }

                    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                        color: #333333;
                        opacity: 1; /* Firefox */
                    }
                    
                    :-ms-input-placeholder { /* Internet Explorer 10-11 */
                        color: #333333;
                    }
                    
                    ::-ms-input-placeholder { /* Microsoft Edge */
                      color: #333333;
                    }

                    @media only screen and (max-width: 750px) {
                        .contactForm{
                            width:100%;
                            margin-left: 0%;
                        }
                    }
  
                    @media only screen and (max-width: 480px) {
                        .contactForm{
                            width:100%;
                            margin-left: 0%;
                        }
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