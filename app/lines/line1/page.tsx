import React from 'react'
import { line1 } from "../../lib/lines"
import StationCard from '@/app/components/stationcard'
import Arrow from '../../components/arrow'
import Image from 'next/image'
const lineOne = () => {
    return (
        <main className='max-w-md mx-auto py-12'>
            {line1.map((station, index) => {
                if (index < line1.length - 1) {
                    return (
                        <div key={index} className="text-center">
                            <StationCard background='bg-blue-800' station={station[0]}>
                            </StationCard>
                            <Arrow></Arrow>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={index} className="text-center">
                            <StationCard background='bg-blue-800' station={station[0]}>
                            </StationCard>
                        </div>
                    )
                }
            })}
        </main>
    )
}

export default lineOne;