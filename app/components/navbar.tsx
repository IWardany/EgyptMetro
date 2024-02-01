import React from 'react'
import NavButton from './navbutton'
import NavLogo from './navlogo'

const NavBar = () => {
    return (
        <nav className='flex flex-wrap justify-between items-end'>
            <NavLogo></NavLogo>
            <NavButton page="/" text="تفاصيل الرحلة"></NavButton>
            <NavButton page="/lines" text="خطوط المترو"></NavButton>
            <NavButton page="/nearest" text="اقرب محطة"></NavButton>
        </nav>
    )
}

export default NavBar