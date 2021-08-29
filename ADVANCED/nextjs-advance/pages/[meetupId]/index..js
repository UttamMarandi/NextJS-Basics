import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoClient } from 'mongodb'


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

    //make a connection to database
    const client = await MongoClient.connect("mongodb+srv://takeitall007:<.gD'^B%B8s.g$%[_>@cluster0.qfuwd.mongodb.net/meetups?retryWrites=true&w=majority")
        //this code should never be run on client side.
        //so this is a secure place to use credentials
    const db = client.db()

    const meetupsCollection = db.collection("meetups")

    const meetups = await meetupsCollection.find({},{_id : 1}).toArray()
    //.find() method can take tow parameters a. an objects containing the list of documents that needs to be fetched. If empty then all documents will be fetched b. it list all the fields within document that needs to be fetched, ex : if fieldvalue : 1, than all the id fields will be fetched 
    //.find() gets all the data from meetupsCollection and convert it into an array
    client.close()

    //getStaticPaths return a paths array, which contains object containing params keys and each params containing set of keys that act as the /path for dynamic render
    return {
        fallback: false, 
        //if fallback is false than we are saying that paths contains all /path values. If /path is not present in paths array than user see a 404 error
        //if fallback is true than we are saying that is /path is not present in paths array than it will be dynamically generated 
        paths:meetups.map(meetup => ({
            params : {
                meetupId : meetup._id.toString()
            }
        }))

        //In above way we can fetch meetupId from db and set the params values dynamically
        
        // [

        //     {params: {
        //         meetupID : "m1"
        //         }
        //     },
        //     {params: {
        //         meetupID : "m2"
        //         }
        //     }
        // ]
    }
}

export async function getStaticProps(context) {
    //we cannot use react hooks in getStaticProps
    //getStatic props can also take context parameter which contains the params key which hold the exact path of the url
    const meetupId = context.params.meetupId;
    console.log("meetupId", meetupId);

    //make a connection to database
    const client = await MongoClient.connect("mongodb+srv://takeitall007:<.gD'^B%B8s.g$%[_>@cluster0.qfuwd.mongodb.net/meetups?retryWrites=true&w=majority")
    //this code should never be run on client side.
    //so this is a secure place to use credentials
    const db = client.db()

    const meetupsCollection = db.collection("meetups")

    const selectedMeetup = await meetupsCollection.findOne({_id : meetupId})
    //.findOne() searches for only one document
    //it takes a parameter which is an object which takes key : value pairs. findOne() use these key:valu pairs as filters and fetches any document that matches this key value pair
    client.close()
    
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