import React from 'react'
import MeetupList from '../components/meetups/MeetupList'


const DUMMY_MEETUPS = [
    {
        id : "m1",
        title : "A first meetup",
        image : "https://upload.wikimedia.org/wikipedia/en/c/c9/ThomasMullerforGermany.jpg",
        address : "Some address, Germany",
        description : "A surprise meetup with Thomas Muller"
    },
    {
        id : "m2",
        title : "A first meetup",
        image : "https://upload.wikimedia.org/wikipedia/en/c/c9/ThomasMullerforGermany.jpg",
        address : "Some address, Germany",
        description : "A surprise meetup with Thomas Muller"
    },
    {
        id : "m3",
        title : "A first meetup",
        image : "https://upload.wikimedia.org/wikipedia/en/c/c9/ThomasMullerforGermany.jpg",
        address : "Some address, Germany",
        description : "A surprise meetup with Thomas Muller"
    },
    
]

const HomePage = () => {
    return (
       
            <MeetupList meetups = {DUMMY_MEETUPS} />
        
        // we are rendering MeetupList which is not a page component in a page components
    )
}

export default HomePage

//_app.js

//This is the root component  for next js.
//it takes two parameter component and props