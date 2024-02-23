import React from 'react'
import { line2 } from "../../lib/lines"
import DisplayPath from '@/app/components/displaypath'
const lineTwo = () => {
    return (
        <main className='max-w-md mx-auto py-12'>
            <DisplayPath line={line2} bg={"bg-red-800"} />
        </main>
    )
}

export default lineTwo;