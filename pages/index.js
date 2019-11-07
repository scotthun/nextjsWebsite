import Layout from '../resources/components/MyLayout.js'
import MyForm from '../resources/components/contact_form.js'
import Link from 'next/link'

export default function Homepage() {
    return (
        <Layout>
            <div className="block" id= "intro">
                <h3 id="hello"> Hi my name is</h3>
                <h1 id="nombre">Scott Hung.</h1>
                <h1 id="software">I love to write code.</h1>
                <p id="summary">I'm a software engineer based out of California and specialize in building awesome, high-quality websites and applications.</p>
                <div id="contactContainer">
                    <Link href="mailto:scott_hung@aol.com?subject=Hey Scott, just wanted to reach out!"><a id="contactBox">Get in touch</a></Link>
                </div>
               

            </div>
            <div className="block" id="about">
                <h2>1. About Me</h2>
                <img id ="headshot" src="/images/headshot.png" />
                <div>
                    <p>In a previous life, I studied History and Business at university, and I worked in business development and sales for several years at Oracle. After my first job in tech, I realized my passion for the industry truly stems from the tech itself. An opportunity to work on software development and data science through an internship with Bank of the West presented itself to me, and I decided to follow my heart and take the leap of faith to become a software engineer.</p>
                    <p>I am currently studying Computer Science through a distance learning program at Oregon State University and am seeking full-time opportunities. Here is some of the tech I've been using recently:</p>
                    <div>
                        <ul id="skillsLeft">
                            <li>JavaScript (ES6+)</li>
                            <li>Python 3</li>
                            <li>C++</li>
                            <li>C</li>
                            <li>SQL</li>
                            <li>React</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>NextJS</li>
                            <li>NodeJS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="block" id="experience">
                <h2>2. Experience</h2>
                <p>In a previous life, I studied History and Business at university, and I worked in business development and sales for several years at Oracle. After my first job in tech, I realized my passion for the industry truly stems from the tech itself.</p>
            </div>
            <div className="block" id="contact">
                <h2>3. How to reach out</h2>
                <p>Feel free to connect with me on LinkedIn or send me an email by clicking on the respective icon at the bottom. Or, you can even send me a messge by filling out the form below. Whether for a potential project or just to say hi, I'll try my best to get back to you!</p>
                <MyForm />
            </div>
            <style jsx>
                {
                    `
                
                    #intro{
                       
                        margin-top: 50px;
                    }

                    #hello{
                        color: #fdf731;
                        margin-bottom: 0px;
                        font-size: 14px;
                        font-family: 'Roboto Mono', monospace;
                    }
                    
                    #nombre{
                        font-size: 70px;
                        margin-top: 0px;
                        padding-top: 0px;
                        margin-bottom: 0px;
                    }
                    
                    #software{
                        font-size: 70px;
                        margin-top: 0px;
                        padding-top: 0px;

                    }

                    #summary{

                        width:50%;
                    }

                    #contactContainer{
                        margin-top: 75px;
                    }

                    #contactBox{
                        font-family: 'Roboto Mono', monospace;
                        color: #fdf731;
                        font-size: 14px;
                        text-decoration: none;
                        border: 2px solid #fdf731;
                        padding: 14px;
                        border-radius: 5px;
                        background-color: #212129;
                        
                    }

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

                    .block h2 p{
                        color: rgb(136, 146, 176);
                    }

                    #about{
                        margin-top: 100px;

                    }
                    
                    #headshot{
                        display: block;
                        margin: auto;
                        height: 287px;
                        width: 317px;

                    }
                    #skillsLeft{
                        columns: 2;
                        -webkit-columns: 2;
                        -moz-columns: 2;
                        margin-right: 30%;
                        margin-left: 30%;
                    }



                    #experience{
                        margin-top: 100px;

                    }

                    #contact{
                        margin-top: 100px;
                        padding-bottom: 500px;

                    }
                
                    @media (min-width: 481px) and (max-width: 768px){

                        #skillsLeft{
                            columns: 2;
                            -webkit-columns: 2;
                            -moz-columns: 2;
                            margin: auto;
                        }
                    }

                    @media (max-width:480px){

                        #nombre{
                            font-size: 50px;
                        }

                        #software{
                            font-size: 50px
                        }

                        #headshot{
                        display: block;
                        margin: auto;
                        height: 258px;
                        width: 285px;

                    }

                        #skillsLeft{
                            columns: 2;
                            -webkit-columns: 2;
                            -moz-columns: 2;
                            margin-right: 10%;
                            margin-left: 0%;
                            font-size: 12px;
                        }


                    }
                `
                }

            </style>
        </Layout>

       
    )
}
