import React from 'react'
import StationCard from '../components/stationcard'
import Link from 'next/link'
import Arrow from '../components/arrow'
const lines = () => {
    return (
        <main className='max-w-md mx-auto'>
            <Link href="lines/line1"><StationCard background='bg-blue-900' station="الخط الأول"></StationCard></Link>
            <Link href="lines/line2"><StationCard background='bg-red-800' station="الخط الثاني"></StationCard></Link>
            <Link href="lines/line3"><StationCard background='bg-green-800' station="الخط الثالث"></StationCard></Link>
        </main>
    )
}

export default lines