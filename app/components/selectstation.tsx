import React from 'react'
import Title from './titles'
import { line1, line2, line3 } from "../lib/lines"
import ChooseStation from './choose'


const SelectStations = () => {
    return (
        <div className="max-w-md m-auto text-center">
            <form>
                <Title text="محطة الصعود"></Title>
                <ChooseStation background='bg-red-800'></ChooseStation>
                <Title text="محطة النزول"></Title>
                <ChooseStation background='bg-blue-900'></ChooseStation>
                <Title text="عدد الأفراد"></Title>
                <input
                    type="number"
                    placeholder='عدد الأفراد'
                    className="input input-bordered rounded-full border-2 text-black input-success w-full max-w-xs my-4 text-center text-lg"
                />
                <button className="btn btn-outline block mx-auto my-10 noto" type="submit">تفاصيل الرحلة</button>
            </form>
        </div>
    )
}

export default SelectStations