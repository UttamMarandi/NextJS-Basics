import React, { useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import { useEffect } from 'react'
import { MongoClient } from 'mongodb'
import Head from "next/head"

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

const HomePage = (props) => {
   
    // const [loadedMeetups, setLoadedMeetups] = useState([])
    //send a http requset to fetch data
    //useEffect runs after the component is rendered
    //SO when data is fetch first the component is loaded and user might see a loading screen and then after loaderMeetups gets value (i.e state changed) then useEffect runs to show the data to ui
    //we we have two component cycles. This is bad for seo
    // useEffect(()=>{
        
    //     setLoadedMeetups(DUMMY_MEETUPS)
    // },[])
    return (
            <>  <Head>
                    <title>NextJS Basics</title>
                    <meta name = "description" content= "An introduction to nextJS basics"/>
                </Head>
                <MeetupList meetups = {props.meetups} />
            </>
            
        
        // we are rendering MeetupList which is not a page component in a page components
    )
}

export async function getStaticProps() {
    //all the asynchronous code goes here
    //this code will not run in client's browser or in server. It will run only in dev enviroment
    //after fetching the data from api, we need to return an object to getStatciProps

    // We dont need to send a request to our own api
     const client = await MongoClient.connect("mongodb+srv://takeitall007:<.gD'^B%B8s.g$%[_>@cluster0.qfuwd.mongodb.net/meetups?retryWrites=true&w=majority")
        //this code should never be run on client side.
        //so this is a secure place to use credentials
    const db = client.db()

    const meetupsCollection = db.collection("meetups")

    const meetups = await meetupsCollection.find().toArray()
    //.find() gets all the data from meetupsCollection and convert it into an array
    client.close()

    return {
        props: {
            meetups: meetups.map((meetup)=>{
                return {
                title: meetup.title,
                address : meetup.address,
                image: meetup.image,
                id : meetup._id.toString()
                }
            })
        },
        revalidate: 3600 //regenerate after 1hour 
    }
    //the object witin return will have props key which contains the data that we recieve afer fetch
    //props is the send as a parameter to page component
    //In this way we don't need to maintain state
    //so no use of useState or useEffect in our page component

    //revalidate : 
    //revalidate props will take number that takes time in s after which it will regenerates the page for an incoming request
    //so it will not just be generated during build time but also after the time provided if request are coming in for this page
}


// export async function getServerSideProps(context) {
//     //server side rendering
//     //return data from api
//     const req = context.req;
//     const res = context.res;
//     //getServerSideProps can take context parameter which takes the request and response object
//     //helpful for authentication

//     return {
//         props : {
//             meetups : DUMMY_MEETUPS
//         }
//     }
// }


export default HomePage

//_app.js

//This is the root component  for next js.
//it takes two parameter component and props


//Page Pre Rendering
//Next.js offers two types of page pre rendering
//1.Static generation
//2.Server side rendering

//1.Static generation
//page component is pre-rendered when we build the application
//if page content does not change all the time , then static generation is best

//getStaticProps()
//getStaticProps function is exported from pages. Only components within pages folder can access getStatciProps()

//Cons of static site generation : SSG
//data can be outdated


//2.Server-side rendering
//It regenerate the page for every incoming request
//getServerSideProps()
//implements server side rendering
//this is not visible to the browser , so important fot authentication and sensitive data code
//no revalidate key

//API ROUTES
//api routes are special pages which don't return html but accept incoming http request , post update delete request, store data or retrive data from json
//api routes helps in building api end points
//stored in api folder in pages folder

//ADD METADATA
//next js offers Head module from "next/head" which allows us to us insert the Head component in our jsx 
//we can write metadata within that Head component
//Head component can be used in each pages in jsx


//SUMMARY
//Three main features of Next.js
//File based routing
//api router
//server side rendering/static site generation
//data fetching within getStaticProps or getServerSideProps