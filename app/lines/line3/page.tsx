import React from 'react'
import { line3 } from "../../lib/lines"
import DisplayPath from '@/app/components/displaypath'
const lineThree = () => {
    return (
        <main className='max-w-md mx-auto py-12'>
            <DisplayPath line={line3} bg={"bg-green-800"} />
        </main>
    )
}

export default lineThree;