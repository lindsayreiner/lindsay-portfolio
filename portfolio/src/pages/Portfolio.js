import React from 'react'
import wanderPic from '../images/wanderlust-reviews.png';
import astroPic from '../images/astronomical-guidance.png';
import weatherPic from '../images/weather-dashboard.png';
import schedulerPic from '../images/workday-scheduler.png';
import summaryPic from '../images/order-summary-comp.png';
import teamPic from '../images/team-profile-generator.png'

import ProjectCard from '../components/ProjectCard';
import '../styles/Portfolio.css';

const projects = [
    {
        imageLink: wanderPic,
        title: 'Wanderlust Reviews',
        description: 'Do you love traveling? Are you active on social media? If you said yes to those two things, then you\'re going to want to be a part of the Wanderlust Reviews community! Want to go somewhere new? Pick a city and scour the reviews! Create a vetted trip itinerary from other wanderlusters just like you!',
        role: 'UI/UX design, Express routes, Login/out',
        technologies: 'Javascript, Handlebars, HTML, CSS, Express, Node, mySQL, Sequelize',
        websiteLink: 'https://lit-coast-69358.herokuapp.com/',
        gitLink: 'https://github.com/zmoore371/Project-2'
    },
    {
        imageLink: weatherPic,
        title: 'Weather Dashboard',
        description: 'Used OpenWeather API to create a weather app with a city search. Search results display current forecast in that city, as well as, a 5 day future forecast.',
        role: 'Sole Author',
        technologies: '3rd party API, Local Storage, Javascript, HTML, CSS',
        websiteLink: 'https://lindsayreiner.github.io/5-day-Weather-Forecast/',
        gitLink: 'https://github.com/lindsayreiner/weather-dashboard'
    },
    {
        imageLink: astroPic,
        title: 'Astronomical Guidance',
        description: 'This webpage is designed to help astro-photographer\'s, avid adventurers, and even space agencies look to the skies on specific days for both asteroids and even the ISS! The webpage uses the zip code entered finds the latitude and longitude and displays information on when the next closest asteroids will be passing. ',
        role: 'UI/UX, dynamic photo loop via NASA API',
        technologies: '3rd party API, JavaScript, Bootstrap, HTML, CSS',
        websiteLink: 'https://jparris3213.github.io/UNC_Project_1_Group/',
        gitLink: 'https://github.com/jparris3213/UNC_Project_1_Group'
    },
    {
        imageLink: schedulerPic,
        title: 'Workday Scheduler',
        description: 'Schedule your day hour by hour with this easy to use calendar. Add tasks, notes, and even a reminder! Calendar is saved to local storage and your calendar details will persist on app refresh.',
        role: 'Sole Author',
        technologies: 'Javascript, HTML, CSS, Bootstrap, Local Storage',
        websiteLink: 'https://lindsayreiner.github.io/workday-scheduler/',
        gitLink: 'https://github.com/lindsayreiner/workday-scheduler'
    },
    {
        imageLink: summaryPic,
        title: 'Order Summary Component',
        description: 'Frontend Mentor Challenge',
        role: 'Sole Author',
        technologies: 'HTML, CSS',
        websiteLink: 'https://lindsayreiner.github.io/Order-Summary-Component/',
        gitLink: 'https://github.com/lindsayreiner/order-summary-component'
    },
    {
        imageLink: teamPic,
        title: 'Team Profile Generator',
        description: 'This is a backend project so there is no deployed link. Run app in Node, create your team, and a dynamic HTML page will be created based on your inputs.',
        role: 'Sole Author',
        technologies: 'JavaScript, Node, HTML, CSS, mySQL, OOP',
        gitLink: 'https://github.com/lindsayreiner/team-profile-generator'
    }
]

export default function Portfolio() {
    return (
        <>
            <section className="projects-container">
                {projects.map(({ imageLink, title, description, role, technologies, websiteLink, gitLink }, index) => {
                    return (
                        <ProjectCard key={index} imageLink={imageLink} title={title} description={description} role={role} technologies={technologies} websiteLink={websiteLink} gitLink={gitLink} />
                    )
                })}
            </section>
        </>
    )
}
