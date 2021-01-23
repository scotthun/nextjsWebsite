import React from "react";
import {experienceEntries} from '../functions/experience.js'

export default class ExperienceDiv extends React.Component {
  constructor(props) {
      super(props);
      this.generateEntries = this.generateEntries.bind(this);
      
  }

  render() {
      return (
          <div id="experienceDiv" style={{width:'100%'}}>
            {this.generateEntries()}
          </div>
      );
  }

  generateEntries(){
    return experienceEntries.map((entry, index) => {
      const { imagePath, jobTitle, dates, bullets } = entry
        return (
          <div style={{width:'100%'}}>
            <h2 style={{textAlign: 'center'}}>{jobTitle}</h2>
            <img className="experienceDivPicture" src={imagePath} style={{width: '60%', display: 'block', padding: '0', height: '30%', marginLeft:'20%'}}/>
            <ul>
                  {bullets.map( bullet => <li style={{margin:'1em 0', lineHeight:'2em'}}>{bullet}</li>)}
                </ul>
          </div>
        )
      
   })
  }

}
