import React from 'react'
import { Link } from 'react-router-dom'

export default function Fruit_lime_sever_menu() {
    return (
        <div>
            <ul className="sever_menu">
                <Link to={'/Fruit'}>
                    <li>
                        <h4>열대(tropical)</h4>
                    </li>
                </Link>
                <Link to={'/Fruit_lime'}>
                    <li className="on">
                        <h4>라임(Lime)</h4>
                    </li>
                </Link>
                <Link to={'/Fruit_berry'}>
                    <li>
                        <h4>베리(Berry)</h4>
                    </li>
                </Link>
            </ul>
            <ul className="sever_menu sever_menu2">
                <Link to={'/Fruit_apple'}>
                    <li>
                        <h4>사과(Apple)</h4>
                    </li>
                </Link>
                <Link to={'/Fruit_ect'}>
                    <li>
                        <h4>기타(Ect)</h4>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
