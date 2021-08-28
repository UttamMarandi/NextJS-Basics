import React from 'react'
import Link from "next/link"

const News = () => {
    return (
        <>
          <h1>News Page</h1>  
          <ul>
            <Link href="/news/next-js-is-great-framework">Nextjs is great framework</Link>
            {/* Link in next js expect a href prop instead of to prop */}
            <li>Someting else</li>
          </ul>
        </>
    )
}

export default News
