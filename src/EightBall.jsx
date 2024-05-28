import React, { useState } from 'react'
import './EightBall.css'

const EightBall = () => {
    const answers = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]

    const randomIndexNum = Math.floor(Math.random() * 20)

    const getAnswer = () => {
        setMsg(answers[randomIndexNum].msg)
        setColor(answers[randomIndexNum].color)

        //Count colors
        if (color === 'green') {
            setCountColorGreen(countColorGreen + 1)
        }
        if (color === 'goldenrod') {
            setCountColorGoldenRod(countColorGoldenRod + 1)
        }
        if (color === 'red') {
            setCountColorRed(countColorRed + 1)
        }
    }

    const reset = () => {
        setMsg('Think of a question')
        setColor('black')
        //Count colors
        setCountColorGreen(0)
        setCountColorGoldenRod(0)
        setCountColorRed(0)
    }

    const [msg, setMsg] = useState('Think of a question')
    const [color, setColor] = useState('black')
    //Count colors
    const [countColorGreen, setCountColorGreen] = useState(0)
    const [countColorGoldenRod, setCountColorGoldenRod] = useState(0)
    const [countColorRed, setCountColorRed] = useState(0)

    return (
        <>
            <h1>Magic EightBall</h1>

            <div onClick={getAnswer} style={{ backgroundColor: color }} className='EightBall'>
                <h4 className='EightBall-msg'>{msg}</h4>
            </div>

            <button onClick={reset}>Reset</button>

            <h4>Green: {countColorGreen}</h4>
            <h4>Goldenrod: {countColorGoldenRod}</h4>
            <h4>Red: {countColorRed}</h4>
        </>
    )
}

export default EightBall;