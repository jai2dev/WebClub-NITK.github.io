import React from 'react';
import '../../styles/memberCard.css';

class MemberCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className={"con mix " + this.props.classs}>
                <div className="card" data-aos="flip-left">
                    <div className="image">
                        <img src={this.props.image}></img>
                        <div className="links">
                            <a href={this.props.githuburl}><span className="mdi mdi-github-circle"></span></a>
                            <a href={this.props.email}><span className="mdi mdi-email"></span></a>
                            <a href={this.props.linkedinurl}><span className="mdi mdi-linkedin-box"></span></a>
                        </div>
                    </div>
                <div className="info">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.role}</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MemberCard;