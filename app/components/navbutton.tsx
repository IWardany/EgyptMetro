import React from 'react'
interface Props {
    text: string
}
const NavButton = ({ text }: Props) => {
    return (
        <button className='btn btn-neutral rounded-3xl text-white font-light noto'>{text}</button>
    )
}

export default NavButton