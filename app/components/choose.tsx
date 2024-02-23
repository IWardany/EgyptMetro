import React from 'react'
import { line1, line2, line3 } from "../lib/lines"

interface Props {
    station: string
    background: string
    changeStation: Function
}
const ChooseStation = ({ background, station, changeStation }: Props) => {

    return (
        <select
            name="enter"
            className={`${background} text-white rounded-full noto p-3 w-80`}
            value={station}
            onChange={(event) => changeStation(event.target.value)}
        >
            <option>قم باختيار المحطة</option>
            <optgroup label="الخط الأول" className="text-yellow-200">
                {line1.map((station, index) =>
                    <option className='text-white' key={index}>{station}</option>
                )}
            </optgroup>
            <optgroup label="الخط الثاني" className="text-yellow-200">
                {line2.map((station, index) =>
                    <option className='text-white' key={index}>{station}</option>
                )}
            </optgroup>
            <optgroup label="الخط الثالث" className="text-yellow-200">
                {line3.map((station, index) =>
                    <option className='text-white' key={index}>{station}</option>
                )}
            </optgroup>
        </select>
    )
}

export default ChooseStation