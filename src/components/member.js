import React from 'react';
import '../styles/member.css';

/*
    Pass props with names "image", "name", "role", "website", "githuburl", "linkedinurl" 
    website will not be rendered if it is equal to "NA"
*/

const Member = (props) => {
    let website;
    if(props.website != "NA"){
        website = (
            <a href="{props.website}">
                <i class="fa fa-globe" aria-hidden="true"></i>
            </a>
        );
    }

    return(
    <div className="memberCard">
        <img src="{props.image}" alt="Image"/>
        <h3>{props.name}</h3>
        <h4>{props.role}</h4>
        <div className="memberLinks">
            {website}
            <a href="{props.githuburl}">
                <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="{props.linkedinurl}">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
        </div>
    </div>
    );
}


export default Member;