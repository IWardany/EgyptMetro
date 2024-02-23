import React from 'react'
import getBestRoute from '../lib/getBestRoute'
interface Props {
    start: any,
    end: any,
    people: any
}

async function getPath(start: any, end: any, people: any) {
    const path = await getBestRoute(start, end, people)
    return path
}

const TripPath = async ({ start, end, people }: Props) => {
    const path = await getPath(start, end, people)

    console.log(path)
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default TripPath