import React from 'react'
import Link from 'next/link'
interface Props {
    text: string,
    page: string
}
const NavButton = ({ text, page }: Props) => {
    return (
        <Link href={page}>
            <button
                className='btn btn-neutral rounded-3xl text-white font-light noto'>
                {text}
            </button>
        </Link>
    )
}

export default NavButton