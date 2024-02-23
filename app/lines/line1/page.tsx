import React from 'react'
import { line1 } from "../../lib/lines"
import DisplayPath from '@/app/components/displaypath'
const lineOne = () => {
    return (
        <main className='max-w-md mx-auto py-12'>
            <DisplayPath line={line1} bg={"bg-blue-800"} />
        </main>
    )
}

export default lineOne;