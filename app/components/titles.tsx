import React from 'react'
interface Props {
    text: string
}
const Title = (props: Props) => {
    return (
        <h2 className="noto text-4xl my-8  font-light">
            {props.text}
        </h2>
    )
}

export default Title