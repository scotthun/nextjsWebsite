import Layout from '../resources/components/MyLayout.js'
import MyForm from '../resources/components/contact_form.js'
import * as textGenerator from '../resources/components/text/intro.js' 

export default function Homepage() {
    return (
        <Layout>
            {
              //block for desktop
            }
            <div className="block" id= "intro">
              <div className="innerBlock">
                <table class="firstTable" >
                <tr>
                    <td>
                        
                        <div id="bio">
                            <div className="descriptionText">
                            <p>
                              <h3 id="hello"> Hi my name is</h3>
                              <h1 id="nombre">Scott Hung.</h1>
                              <h1 id="software">I love to write code.</h1>
                              {textGenerator.getIntroText()}
                              {textGenerator.getSummaryText()}
                            </p>
                            </div>
                        </div>
                    </td>
                    <td>
                      <img className="TextWrap" src="/images/headshot.PNG" />
                    </td>
                </tr>
                </table>
                </div>
               
                <p class="clear">&nbsp;</p>
            </div>
            
            <div className="block" id="experience">
              <div className="innerBlock">
                <h2>2. Work Experience</h2>
                <div>
                    <ol id="jobSelector">
                      <li>
                            <button onClick={() => {
                                //vanilla JS for now, replace with React way of doing onclick later
                                var parent = document.getElementById("jobSummary");
                                parent.innerHTML = "";

                                var jobTitle = document.createElement("p");
                                jobTitle.innerHTML = "Software Engineer @ K&C"

                                var dates = document.createElement("p");
                                dates.innerHTML = "January 2020 to January 2021"

                                var list = document.createElement("ul");

                                var bullets =   [
                                                  "Increased user productivity by 200%, improved meshing success rate from 50% to 99%, and helped transition application to the beta release by writing Ruby code to integrate a new meshing library with the application.",
                                                  "Achieved over 90% user adoption rate by proactively presenting new features that I added as well as best practices for the Ruby application to internal teams and users located in the USA and Australia.",
                                                  "Lead and reported to my firm’s CEO on the research and benchmarking process to identify the new meshing library.",
                                                  "Constructed graphics pipeline for an OpenGL and C application so that the application could dynamically generate various hexahedral structures.",
                                                  "Completed beta release of a C++ and Qt application that plots curves for observed material response data and expected material response data by debugging, creating unit tests, refactoring code, and enhancing the GUI.",
                                                  "Implemented and designed multithreaded architecture to run calculations in the background and to stop GUI freezes."
                                                ];

                                for (var i = 0; i < bullets.length; i++) {

                                    var bulletPoint = document.createElement("li");
                                    bulletPoint.innerHTML = bullets[i];

                                    list.appendChild(bulletPoint);

                                }

                                parent.appendChild(jobTitle);
                                parent.appendChild(dates);
                                parent.appendChild(list);
                               
                            }}>
                                Karagozian & Case (K&C)
                             </button></li>
                        <li>
                            <button onClick={() => {
                                //vanilla JS for now, replace with React way of doing onclick later
                                var parent = document.getElementById("jobSummary");
                                parent.innerHTML = "";

                                var jobTitle = document.createElement("p");
                                jobTitle.innerHTML = "Software Engineer and Data Science Intern @ Bank of the West"

                                var dates = document.createElement("p");
                                dates.innerHTML = "June 2019 to August 2019"

                                var list = document.createElement("ul");

                                var bullets =   [
                                                  "Built the backend with Python and Flask of an app that allows the user to enter data and then receive a prediction with 90% confidence for how many years someone will work at a company.",
                                                  "Collaborated with designers for rapid iteration of UIs and created UIs with JavaScript, React, CSS, and Bootstrap.",
                                                  "Developed, trained, and tested scalable Python machine learning (ML) models that predict KPIs for business users.",
                                                  "Wrote reliable, testable, and maintainable code for ML models that will be used by 400+ developers.",
                                                  "Created a REST API with Flask and Python (NumPy, SciPy, Pandas, and scikit-learn) for a data science microservice"
                                                ];

                                for (var i = 0; i < bullets.length; i++) {

                                    var bulletPoint = document.createElement("li");
                                    bulletPoint.innerHTML = bullets[i];

                                    list.appendChild(bulletPoint);

                                }

                                parent.appendChild(jobTitle);
                                parent.appendChild(dates);
                                parent.appendChild(list);
                               
                            }}>
                                Bank of the West
                             </button></li>

                        <li><button onClick={() => {
                            //vanilla JS for now, replace with React way of doing onclick later
                            var parent = document.getElementById("jobSummary");
                            parent.innerHTML = "";

                            var jobTitle = document.createElement("p");
                            jobTitle.innerHTML = "Account Manager @ Oracle";

                            var dates = document.createElement("p");
                            dates.innerHTML = "December 2017 to June 2019";

                            var listOne = document.createElement("ul");

                            var bulletsOne =   ["Generated $250,000 in revenue by coordinating engineering and sales resources to develop a cloud solution for a Fortune 500 customer that streamlined B2B integration between enterprise software applications and microservices."];

                            for (var i = 0; i < bulletsOne.length; i++) {

                                var bulletPoint = document.createElement("li");
                                bulletPoint.innerHTML = bulletsOne[i];

                                listOne.appendChild(bulletPoint);

                            }

                            var jobTitleTwo = document.createElement("p");
                            jobTitleTwo.innerHTML = "Sales Development Representative (promoted after 1.5 years to Account Manager)";

                            var datesTwo = document.createElement("p");
                            datesTwo.innerHTML = "June 2016 to December 2017";

                            var listTwo = document.createElement("ul");

                            var bulletsTwo = ["Generated over $170,000 in revenue by analyzing internal data with Excel, building Excel pivot tables to identify companies most likely to buy Oracle software, and discussing business needs with companies’ senior management."]

                            for (var i = 0; i < bulletsTwo.length; i++) {

                                var bulletPoint = document.createElement("li");
                                bulletPoint.innerHTML = bulletsTwo[i];

                                listTwo.appendChild(bulletPoint);

                            }

                            parent.appendChild(jobTitle);
                            parent.appendChild(dates);
                            parent.appendChild(listOne);

                            parent.appendChild(jobTitleTwo);
                            parent.appendChild(datesTwo);
                            parent.appendChild(listTwo);

                        }}>Oracle
                          </button></li>
                    </ol>
                    <div id="jobSummary">
                        <p>Software Engineer @ K&C</p>
                        <p>January 2020 to January 2021</p>
                        <ul>
                            <li>Increased user productivity by 200%, improved meshing success rate from 50% to 99%, and helped transition application to the beta release by writing Ruby code to integrate a new meshing library with the application.</li>
                            <li>Achieved over 90% user adoption rate by proactively presenting new features that I added as well as best practices for the Ruby application to internal teams and users located in the USA and Australia.</li>
                            <li>Lead and reported to my firm’s CEO on the research and benchmarking process to identify the new meshing library.</li>
                            <li>Constructed graphics pipeline for an OpenGL and C application so that the application could dynamically generate various hexahedral structures.</li>
                            <li>Completed beta release of a C++ and Qt application that plots curves for observed material response data and expected material response data by debugging, creating unit tests, refactoring code, and enhancing the GUI.</li>
                            <li>Implemented and designed multithreaded architecture to run calculations in the background and to stop GUI freezes.</li>
                        </ul>
                    </div>
                </div>
              </div>
            </div>
            <div className="block" id="contact">
              <div className="innerBlock">
                <h2>3. How to reach out</h2>
                <p>Feel free to connect with me on LinkedIn or send me an email by clicking on the respective icon at the bottom. Or, you can even send me a messge by filling out the form below. Whether for a potential project or just to say hi, I'll try my best to get back to you!</p>
                <MyForm />
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <style jsx>
                {
                    `
                
                    #intro{
                        background-color: #ffffff;
                        margin-top: 50px;
                        margin-bottom: 50px;
                    }
                    td {
                      font-size: 16px;
                    }
                    
                    .firstTable{
                      width: 80%;
                    }

                    .TextWrap {
                      float:right;
                      width: 25em;
                      display: inline-block;
                      padding: 0;
                      vertical-align: middle;
                    }
                  #bio
                  {
                    position:relative;
                    top:0px;
                  }
                    .clear{
                        clear: both;
                        margin-top: 0px;
                        margin-bottom: 0px;
                    }

                    #lastParagraph{
                        margin: 0;
                    }

                    #hello{
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
                        background-color: #d0a800;
                        color: #333333;
                        font-size: 14px;
                        text-decoration: none;
                        border: 2px solid #d0a800;
                        border-radius: 5px;                        
                    }

                    .block{
                        width:100%;
                        padding-top: 50px;
                        background-color: #f0f0f0;
                    }
                    .innerBlock{
                        width:80%;
                        margin-left: 10%;
                    }

                    .block h2{
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 700;
                        font-size: 32px;
                        color: #333333;
                        text-decoration: none;
                        text-transform: uppercase;
                        width: 100%;
                        margin-top: 0px;

                    }

                    .block h2 p{
                        color: rgb(136, 146, 176);
                    }

                    #about{
                      background-color: #ffffff;
                    }
                    
                    #headshot{
                        margin: auto;
                        height: 20%;
                        width: 18%;
                        float: right;
                        display: inline;

                    }
                    
                    #skillsLeft{
                        columns: 2;
                        -webkit-columns: 2;
                        -moz-columns: 2;
                        margin-right: 30%;
                        margin-left: 30%;
                    }

                    #experience{

                    }

                    #jobSelector{
                    }

                    #jobSelector li{
                        
                    
                    }

                    #jobSelector li button{
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 700;
                        font-size: 16px;
                        color: #333333;
                        text-decoration: none;
                        background-color: transparent;
                        border: none;
                    }

                    #jobSelector li button:active{
                        background-color: #d0a800;
                        color: #333333;
                    }
                    
                    #jobSummary{
                        background-color: #f0f0f0;
                        color: #333333;
                        font-size: 14px;
                        font-family: 'Roboto Mono', monospace;
                        border: 20px solid #f0f0f0;
                        border-radius: 10px;
                    }
                    #jobSummary ul li{
                        font-size: 14px;
                        font-family: 'Roboto Mono', monospace;
                        color: #333333;
                    }

                    #contact{
                        padding-bottom: 500px;
                        background-color: #ffffff;

                    }
                
                    @media (min-width: 481px) and (max-width: 768px){

                        #skillsLeft{
                            columns: 2;
                            -webkit-columns: 2;
                            -moz-columns: 2;
                            margin: auto;
                        }

                        #headshot{
                          display: block;
                          margin: auto;
                          height: 90%;
                          width: 99%;
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
                          height: 90%;
                          width: 99%;
                        }

                        #skillsLeft{
                            columns: 2;
                            -webkit-columns: 2;
                            -moz-columns: 2;
                            margin-right: 10%;
                            margin-left: 0%;
                            font-size: 12px;
                        }
                        
                        #jobSummary{
                            font-size: 12px;
                        }

                    }
                `
                }

            </style>
        </Layout>

       
    )
}
