import React from 'react'
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
    async function addMeetupHandler (enteredMeetupData) {
        const response = await fetch("/api/new-meetup", {
            method : "POST",
            body: JSON.stringify(enteredMeetupData),
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data);
        console.log(enteredMeetupData);
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    )
}

export default NewMeetupPage
