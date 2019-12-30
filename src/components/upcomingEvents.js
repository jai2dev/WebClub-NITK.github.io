import React, { useState } from 'react';
import '../styles/upcomingEvents.css';
import '../styles/global.css';
import EventCard from './Events/EventCard.js';

class UpcomingEvents extends React.Component {
    constructor(props){
      super(props);
      this.state={
  
      }
    }
    render(){
      return (
        <div>
            <h1>Upcoming Events</h1>
            <div class = "row">
                <EventCard
                    title={"Title"}
                    date={"date"}
                    time={"time"}
                    venue={"venue"}
                    image={"https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2019/10/hacktoberfest.jpg?fit=2200%2C1100&ssl=1?resize=2200%2C1125"}
                    description={"description"}
                />
                <EventCard
                    title={"Title"}
                    date={"date"}
                    time={"time"}
                    venue={"venue"}
                    image={"https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2019/10/hacktoberfest.jpg?fit=2200%2C1100&ssl=1?resize=2200%2C1125"}
                    description={"description"}
                />
            </div>
        </div>
      );
    }  
}
    
  
export default UpcomingEvents;
  

