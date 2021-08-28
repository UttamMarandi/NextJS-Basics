import React from 'react'
import  {useRouter} from "next/router"

const NewsDetails = () => {
    const router = useRouter();
    
    const route = router.query.newdId
    console.log(route);
    console.log("route query", router.query.newsId);
    //log undefined on first load
    //then log the path name
    

    return (
        <div>
            <h1>News Details  Page</h1>
        </div>
    )
}

export default NewsDetails
