import React from 'react';
import EventCard from './EventCard';
import YearNavigation from './yearNavigation.js';

const Event = () => {
    return (
    <div>
        <YearNavigation></YearNavigation>
        <EventCard
            title="Hacktoberfest NITK Meetup 2019"
            date="October-2"
            time="5:30 PM"
            venue="ATB Seminar Hall"
            image="https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2019/10/hacktoberfest.jpg?fit=2200%2C1100&ssl=1?resize=2200%2C1125"
            description="Join us for our Live Infinity Session in beautiful New York City. This
            is a 3 day intensive workshop where you'll learn how to become a
            better version of..."
        />
    </div>
    );
}

export default Event;