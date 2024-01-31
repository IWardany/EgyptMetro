import React from 'react'
import NavButton from './navbutton'
import NavLogo from './navlogo'

const NavBar = () => {
    return (
        <nav className='flex flex-wrap justify-between items-end'>
            <NavLogo></NavLogo>
            <NavButton text="تفاصيل الرحلة"></NavButton>
            <NavButton text="اقرب محطة"></NavButton>
            <NavButton text="خطوط المترو"></NavButton>
            <NavButton text="حساب التذاكر"></NavButton>
        </nav>
    )
}

export default NavBar