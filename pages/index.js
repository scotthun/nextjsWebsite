import Layout from '../resources/components/MyLayout.js'
import MyForm from '../resources/components/contact_form.js'
import ExperienceTable from '../resources/components/ExperienceTable.js'
import {experienceEntries} from '../resources/functions/experience.js'
import * as textGenerator from '../resources/functions/intro.js' 
import ExperienceDiv from '../resources/components/ExperienceDiv.js'

export default function Homepage() {
    return (
        <Layout>
            {
              //block for desktop
            }
            <div className="block" id= "introDesktop">
              <div className="innerBlock">
                <table className="introTable" >
                <tr>
                    <td>
                        <div className="tdDiv">
                            <div className="descriptionText">
                            <p>
                              <h3 className="hello"> Hi my name is</h3>
                              <h1 className="nombre">Scott Hung.</h1>
                              <h1 className="software">I love to write code.</h1>
                              <p style={{lineHeight:'2em'}}>
                              {textGenerator.getIntroText()}
                              <br/>
                              {textGenerator.getSummaryText()}
                              </p>
                            </p>
                            </div>
                        </div>
                    </td>
                    <td>
                      <img className="tablePicture" src="/images/headshot.PNG" />
                    </td>
                </tr>
                </table>
                </div>
               
                <p className="clear">&nbsp;</p>
            </div>

            {
              //block for mobile
            }
            <div className="block" id= "introMobile">
              <div className="innerBlock">
                <h3 className="hello"> Hi my name is</h3>
                <h1 className="nombre">Scott Hung.</h1>
                <h1 className="software">I love to write code.</h1>
                <img id="mobileHeadshot" src="/images/headshot.PNG" />
                {textGenerator.getIntroText()}
                {textGenerator.getSummaryText()}
              </div>
            </div>
            <div className="block" id="experience">
              <div className="innerBlock" id="desktopExperience">
                <h2>1. Work Experience</h2>
                <ExperienceTable />
              </div>
              <div className="innerBlock" id="mobileExperience">
                <h2>1. Work Experience</h2>
                <ExperienceDiv />
              </div>
            </div>
            
            <div className="block" id="contact">
              <div className="innerBlock">
                <h2>2. How to reach out</h2>
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
                
                    #introDesktop{
                        background-color: #ffffff;
                        margin-top: 50px;
                        margin-bottom: 50px;
                    }
                    
                    .introTable{
                      width: 100%;
                    }

                    .tablePicture {
                      float:right;
                      width: 25em;
                      display: inline-block;
                      padding: 0;
                      vertical-align: middle;
                    }

                    .tdDiv
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

                    .hello{
                        margin-bottom: 0px;
                        font-size: 14px;
                        font-family: 'Roboto Mono', monospace;
                    }
                    
                    .nombre{
                        font-size: 70px;
                        margin-top: 0px;
                        padding-top: 0px;
                        margin-bottom: 0px;
                    }
                    
                    .software{
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
                      padding-top: 100px;
                    }

                    #mobileExperience{
                      display:none;
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

                    #introMobile{
                      display: none;
                    }
                
                    @media (min-width: 481px) and (max-width: 751px){

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

                        #introMobile{
                          background-color: #ffffff;
                          margin-top: 50px;
                          margin-bottom: 50px;
                          display: block;
                        }

                        #mobileHeadshot{
                          width: 100%;
                          margin-bottom: 1em;
                        }

                        #introDesktop{
                          display: none;
                          width: 100%;
                        }

                        #experience{
                          padding-bottom: 50px;
                        }

                        #desktopExperience{
                          display:none;
                        }

                        #mobileExperience{
                          display:block;
                        }

                        
                    }

                    @media (max-width:480px){

                        #introMobile{
                          background-color: #ffffff;
                          margin-top: 50px;
                          margin-bottom: 50px;
                          display: block;
                        }

                        #mobileHeadshot{
                          width: 100%;
                        }

                        #introDesktop{
                          display: none;
                        }

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

                        #desktopExperience{
                          display:none;
                        }

                        #mobileExperience{
                          display:block;
                        }

                        #experience{
                          padding-bottom: 50px;
                        }

                    }
                `
                }

            </style>
        </Layout>

       
    )
}
