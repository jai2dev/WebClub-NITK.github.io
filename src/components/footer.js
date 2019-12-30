import React, { useState } from 'react';
import '../styles/footer.css';
import '../styles/global.css';
class Footer extends React.Component {
    constructor(props){
      super(props);
      this.state={
  
      }
    }
    render(){
      return (
        <div className="white-text page-footer">
            {/* <div className="page-footer"> */}
                <div className="row">
                    <div classNames="col l7 " >
                        <div className="footer-resp">
                            <div className="footer-text">Contact Us</div>
                            <div className="footer-text-content"> NITK, Surathkal, Karnataka, India- 575025</div>
                            <div className="footer-links c-secondary">
                                <p><i className="fa fa-envelope-o" aria-hidden="true"></i> <span className="f-link">webclub@nitk.edu.in</span></p>
                                <p><i className="fa fa-phone" aria-hidden="true"></i> <span className="f-link">01332 284 521</span></p>
                            </div>
                            <div className="footer-social">
                                <a href="https://www.facebook.com/web.club.nitk/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="github.com/WebClub-NITK/"><i className="fa fa-github" aria-hidden="true"></i></a>
                                <a href="https://www.linkedin.com/school/web-enthusiasts-club-nitk/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                            </div>
                        </div>
                    <div className="col l5 ">
                        <div className="footer-resp">
                            <div className="footer-text">About</div>
                            <div className="footer-text-content"> A group of passionate computer science students helping the community of NITK</div>
                        </div>    
                    </div>
                </div>
            {/* </div> */}
        </div>
      );
    }  
}
    
  
export default Footer;
  

