import React from 'react'

const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()
    return (
        <footer className="text-center flex flex-col h-24 justify-between">
            <hr className="bg-black h-1"></hr>
            <p>Made by Ibrahem Wardany {year}</p>
            <p>contact: ibrahemwardany10@gmail.com</p>
        </footer>
    )
}

export default Footer