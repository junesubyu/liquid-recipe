import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <ul className="main_menu">
                <Link to={'/Fruit'}>
                    <li className="menu_text1 box">
                        <div className="text_box1">
                            <h1>Fruit </h1>
                            <p>세콤 & 상큼</p>
                        </div>
                    </li>
                </Link>
                <li className="menu_text2 box">
                    <div className="text_box2">
                        <h1>Dessert </h1>
                        <p>달콤 & 디저트</p>
                    </div>
                </li>
                <li className="menu_text3 box">
                    <div className="text_box2">
                        <h1>Beverage </h1>
                        <p>음료 & 드링크</p>
                    </div>
                </li>
                <li className="menu_text4 box">
                    <div className="text_box1">
                        <h1>Cigarette </h1>
                        <p>씁쓸 & 쌉쌀</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
