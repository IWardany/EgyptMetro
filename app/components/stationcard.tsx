import React from 'react'
interface Props {
    station: string,
    background: string
}
const StationCard = ({ station, background }: Props) => {
    return (
        <div
            className={`noto block text-xl text-center py-6 px-12 text-white rounded-full my-8 ${background}`}>
            <h3>{station}</h3>
        </div>
    )
}

export default StationCard