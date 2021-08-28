import { MongoClient } from "mongodb";

//in api files we don't create react component
//we define functions which contain server side code and is not visible browser
//this code is triggered whenever a request is sent to the route in this case /new-meetpup js 


//only POST route
const handler = (req, res)=> {
    if(req.method =="POST") {
        const data = req.body 
        //body is a specific keyword that contains the content of req

        const {title, image , address, description} = data;

       const client = await MongoClient.connect("mongodb+srv://giveusername:<passIamnot>@cluster0.qfuwd.mongodb.net/meetups?retryWrites=true&w=majority")
        //this code should never be run on client side.
        //so this is a secure place to use credentials
        const db = client.db()

        const meetupsCollection = db.collection("meetups")

        //monogo db database consist of collections. Each collection has multiple documents. Now each document can contain collection
        //each document is an object
        const result = await meetupsCollection.insertOne(data);
        console.log("result", result);

        client.close()

        res.status(201).json({message: "Meetup Inserted"})
    }
}

export default handler