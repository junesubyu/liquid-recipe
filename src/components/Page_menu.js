import React from 'react'
import { Link } from 'react-router-dom'

export default function Page_menu() {
    return (
        <div>
            <ul className="page_menu">
                <Link to={'/Dessert_cream'}>
                    <li className="page_text1 main_box">
                        <div className="text_box">
                            <h3>Dessert </h3>
                            <p>달콤 & 디저트</p>
                            <p>업데이트중입니다.</p>
                        </div>
                    </li>
                </Link>

                <Link to={'/Fruit'}>
                    <li className="page_text2 main_box">
                        <div className="text_box">
                            <h3>Fruit </h3>
                            <p>세콤 & 상큼</p>
                        </div>
                    </li>
                </Link>
                <li className="page_text3 main_box">
                    <div className="text_box">
                        <h3>Beverage </h3>
                        <p>음료 & 드링크</p>
                        <p>업데이트중입니다.</p>
                    </div>
                </li>
                <li className="page_text4 main_box">
                    <div className="text_box">
                        <h3>Cigarette </h3>
                        <p>씁쓸 & 쌉쌀</p>
                        <p>업데이트중입니다.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
