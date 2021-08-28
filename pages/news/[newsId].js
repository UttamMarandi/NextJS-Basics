import React from 'react'
import  {useRouter} from "next/router"

const NewsDetails = () => {
    const router = useRouter();
    
    //router gets the values of encoded in the url
    console.log("route query", router.query.newsId);
    //log undefined on first load
    //then log the path name
    
    //useRouter renders two times ,first when the page is reloaded first and second when we have the exact url path

    return (
        <div>
            <h1>News Details  Page</h1>
        </div>
    )
}

export default NewsDetails
