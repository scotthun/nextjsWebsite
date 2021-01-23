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
            <h3>{jobTitle}</h3>
            <img className="experienceDivPicture" src={imagePath} style={{width: '100%', display: 'inline-block', padding: '0', float: 'right', height: '12em'}}/>
            <ul>
                  {bullets.map( bullet => <li>{bullet}</li>)}
                </ul>
          </div>
        )
      
   })
  }

}
