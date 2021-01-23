import React from "react";
import {experienceEntries} from '../functions/experience.js'

export default class ExperienceTable extends React.Component {
  constructor(props) {
      super(props);
      this.generateEntries = this.generateEntries.bind(this);
      this.state = {
          isLeft: true
      };
  }

  render() {
      const { status } = this.state;
      return (
          <table id="experienceTable">
            {this.generateEntries()}
            
              <style jsx>
              {`
                 .experienceTablePicture{
                   float: right;
                 }

              `}
              </style>
          </table>
      );
  }

  generateEntries(){
    return experienceEntries.map((entry, index) => {
      const { jobTitle, dates, bullets } = entry
      if(index % 2 == 0)
      {
        return (
          <tr key={jobTitle}>
              <td>
                <img className="experienceTablePicture" src="/images/headshot.PNG" style={{width: '25em', display: 'inline-block', padding: '0', float: 'left'}}/>
              </td>
              <td className="pictureLeft">
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
              <td className="pictureRight">
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
              <td>
                <img className="experienceTablePicture" src="/images/headshot.PNG" style={{width: '25em', display: 'inline-block', padding: '0', float: 'right'}}/>
              </td>
          </tr>
        )
      }
   })
  }

}
