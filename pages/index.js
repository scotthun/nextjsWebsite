import Layout from '../resources/components/MyLayout.js'
import MyForm from '../resources/components/contact_form.js'

export default function Homepage() {
    return (
        <Layout>
            <div className="block" id="block1">
                <h2 id="about">1. About Me</h2>
                <p>In a previous life, I studied History and Business at university, and I worked in business development and sales for several years at Oracle. After my first job in tech, I realized my passion for the industry truly stems from the tech itself.</p>
            </div>
            <div className="block" id="block2">
                <h2>2. Experience</h2>
                <p>In a previous life, I studied History and Business at university, and I worked in business development and sales for several years at Oracle. After my first job in tech, I realized my passion for the industry truly stems from the tech itself.</p>
            </div>
            <div className="block" id="block3">
                <h2>3. How to reach out</h2>
                <p>Feel free to connect with me on LinkedIn or send me an email by clicking on the respective icon at the bottom. Or, you can even send me a messge by filling out the form below. Whether for a potential project or just to say hi, I'll try my best to get back to you!</p>
                <MyForm />
            </div>
            <style jsx>
                {
                    `

                    .block{
                        margin-left: 10%;
                        width:80%;
                        padding-top: 50px;
                    }

                    .block h2{
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 700;
                        font-size: 32px;
                        color: #ffffff;
                        text-decoration: none;
                        text-transform: uppercase;
                        width: 100%;

                    }

                    #block1{
                        margin-top: 100px;

                    }

                    #block2{
                        margin-top: 100px;

                    }

                    #block3{
                        margin-top: 100px;
                        padding-bottom: 500px;

                    }


                `
                }

            </style>
        </Layout>

       
    )
}
