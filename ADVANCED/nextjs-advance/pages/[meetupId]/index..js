import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'


const MeetupDetails = () => {
    return (
        <MeetupDetail 
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Matt_Damon_TIFF_2015.jpg/800px-Matt_Damon_TIFF_2015.jpg"
        title = "First Meetup with Matt Damon"
        address = "Street in Vegas"
        description = "This is the first meetup"
        />
    )
}

export async function getStaticPaths() {
    //getStaticPaths return a paths array, which contains object containing params keys and each params containing set of keys that act as the /path for dynamic render
    return {
        fallback: false, 
        //if fallback is false than we are saying that paths contains all /path values. If /path is not present in paths array than user see a 404 error
        //if fallback is true than we are saying that is /path is not present in paths array than it will be dynamically generated 
        paths: [
            {params: {
                meetupID : "m1"
                }
            },
            {params: {
                meetupID : "m2"
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    //we cannot use react hooks in getStaticProps
    //getStatic props can also take context parameter which contains the params key which hold the exact path of the url
    const meetupId = context.params.meetupId;
    console.log("meetupId", meetupId);
    
    return {
        props: {
            meetupData : {
                id : meetupId,
                image : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Matt_Damon_TIFF_2015.jpg/800px-Matt_Damon_TIFF_2015.jpg",
                title : "First Meetup with Matt Damon",
                address : "Street in Vegas",
                description : "This is the first meetup"
                
            }
        }
    }
}

export default MeetupDetails


//getStaticPaths
//getStaticPath is required if we are using getStaticProps inside a dynamic page like [meetupId]
//getsta