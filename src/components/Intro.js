import React from 'react'
import { Link } from 'react-router-dom'

export default function Intro() {
    return (
        <div>
            <div className="title">
                <h2>
                    Top Best <br></br>베이핑 레시피 가이드
                </h2>
                <h1>
                    Liquid Recipe<br></br>Guide
                </h1>
            </div>
            <div className="start">
                <Link to={'/home'}>
                    <button>Make Liquid</button>
                </Link>
            </div>
        </div>
    )
}
