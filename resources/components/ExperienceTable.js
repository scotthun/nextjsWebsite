import React from "react";
import {experienceEntries} from '../functions/experience.js'

export default class ExperienceTable extends React.Component {
  constructor(props) {
      super(props);
      this.generateEntries = this.generateEntries.bind(this);
      
  }

  render() {
      return (
          <table id="experienceTable">
            {this.generateEntries()}
          </table>
      );
  }

  generateEntries(){
    return experienceEntries.map((entry, index) => {
      const { imagePath, jobTitle, dates, bullets } = entry
      if(index % 2 == 0)
      {
        return (
          <tr key={jobTitle}>
              <td>
                <img className="experienceTablePicture" src={imagePath} style={{width: '100%', display: 'inline-block', padding: '0', float: 'left', height:'15em'}}/>
              </td>
              <td style={{width: '5%'}}></td>
              <td className="pictureLeft" style={{height:'25em'}}>
                <p>
                  {jobTitle}
                </p>
                <p> 
                  {dates}
                </p>
                <ul>
                  {bullets.map( bullet => <li>{bullet}</li>)}
                </ul>
              </td>
          </tr>
        )
      }
      else{
        return (
          <tr key={jobTitle}>
              <td className="pictureRight"  style={{height:'25em'}}>
                <p>
                  {jobTitle}
                </p>
                <p> 
                  {dates}
                </p>
                <ul>
                  {bullets.map( bullet => <li>{bullet}</li>)}
                </ul>
              </td>
              <td style={{width: '5%'}}></td>
              <td>
                <img className="experienceTablePicture" src={imagePath} style={{width: '100%', display: 'inline-block', padding: '0', float: 'right', height: '15em'}}/>
              </td>
          </tr>
        )
      }
   })
  }

}
