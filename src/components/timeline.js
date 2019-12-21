import React, { useState } from 'react';
import '../styles/timeline.css';
import rocket from '../assets/images/rocket.png';
import cover from '../assets/images/cd-icon-picture.svg'


class Timeline extends React.Component {
    constructor(props){
      super(props);
      this.state={
  
      }
    }
    render(){
      return (
        <section id="cd-timeline" className="cd-container">
            <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
            <img src={cover} alt="Picture"></img>
            </div>
            <div className="cd-timeline-content">
            <h2>Microsoft Codefundo++ 2019</h2>
            <p>SDSLabs bagged the top two positions in the Code.Fun.Do 2019. The team "Sudo rm -rf" (comprised of Ayan Choudhary, Karanpreet Singh, and Subham Sahoo) bagged the first prize while "hh.org" (comprised of Manas Chaudhary, Shubham Gupta, and Mohit Sharma (SDS Infosec)) stood second</p>
            <span className="cd-date">September, 2019</span>
            </div>
            </div>

            <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
            <img src={cover} alt="Picture"></img>
            </div>
            <div className="cd-timeline-content">
            <h2><img src={ rocket } width="50" style={{ marginBottom : "-15px"}}></img><a href="Rubeus.html" target="_blank">Rubeus Game Engine</a></h2>
            <p>A cross-platform 2D game engine written for beginner programmers to realise their ideas fast and seemlessly.</p>
            <a href="making-a-game-engine-from-scratch.html" className="cd-read-more" target="_blank">Read more</a>
            <span className="cd-date">December, 2018</span>
            </div>
            </div>
            <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
            <img src={cover} alt="Picture"></img>
            </div>
            <div className="cd-timeline-content">
            <h2>Winter of Code 2018</h2>
            <p>The third SDSLabs Winter of Code was organised in the month of December in 2018, where we mentor selected freshers to introduce and work on their awesome ideas till completion before the end of the year.</p>
            <a href="winter-of-code-2018.html" className="cd-read-more" target="_blank">Read more</a>
            <span className="cd-date">December, 2018</span>
            </div>
            </div>

            <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
            <img src={cover} alt="Picture"></img>
            </div>
            <div className="cd-timeline-content">
            <h2>SDSLabs is born.</h2>

            <span className="cd-date">February, 2011</span>
            </div>
            </div>
        </section>
      );
    }  
}
    
  
export default Timeline;
  

