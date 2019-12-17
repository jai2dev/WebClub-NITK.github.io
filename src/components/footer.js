import React, { useState } from 'react';
import '../styles/footer.css';
import '../styles/global.css';
class Footer extends React.Component {
    constructor(){
      super();
      this.state={
  
      }
    }
    render(){
      return (
        <div className="page-footer white-text">
            <div className="row">
                <div className="col l7" style={{marginTop:20,marginLeft:100,marginBottom:30}}>
                    <div class="footer-text">Contact Us</div>
                    <div class="footer-text-content"> Ground floor, Institute Computer Centre, <br />IIT Roorkee, Roorkee, Uttrakhand, India- 247667</div>
                    <div class="footer-links c-secondary">
                        <p><i class="fa fa-envelope-o" aria-hidden="true"></i> <span class="f-link">asdf@gmail.com</span></p>
                        <p><i class="fa fa-phone" aria-hidden="true"></i> <span class="f-link">01332 284 521</span></p>
                    </div>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/IMGIITRoorkee/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://github.com/imgiitroorkee/"><i class="fa fa-github" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/img_iitr"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col l5">
                    <div class="footer-text">About</div>
                    <div class="footer-text-content"> Ground floor, Institute Computer Centre, IIT Roorkee, Roorkee, Uttrakhand, India- 247667</div>
                </div>
            </div>
        </div>
      );
    }  
}
    
  
export default Footer;
  

