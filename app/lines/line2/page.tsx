import React from 'react'
import { line2 } from "../../lib/lines"
import StationCard from '@/app/components/stationcard'
import Arrow from '../../components/arrow'
const lineTwo = () => {
    return (
        <main className='max-w-md mx-auto py-12'>
            {line2.map((station, index) => {
                if (index < line2.length - 1) {
                    return (
                        <div key={index} className="text-center">
                            <StationCard background='bg-red-800' station={station[0]}>
                            </StationCard>
                            <Arrow></Arrow>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={index} className="text-center">
                            <StationCard background='bg-red-800' station={station[0]}>
                            </StationCard>
                        </div>
                    )
                }
            })}
        </main>
    )
}

export default lineTwo;