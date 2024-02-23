'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import TripPath from '../components/trippath'

const TripDetails = () => {
    let params = useSearchParams()
    let start = params.get("start")
    let end = params.get("end")
    let people = params.get("people")
    return (
        <div>
            <TripPath start={start} end={end} people={people} />
        </div>
    )
}

export default TripDetails