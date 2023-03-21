import React from 'react'
import { Link } from 'react-router-dom'

export default function Dessert_cream_sever_menu() {
    return (
        <div>
            <ul className="sever_menu sever_menu_01">
                <Link to={'/Dessert_cream'}>
                    <li className="on">
                        <h4>크림(Cream)</h4>
                    </li>
                </Link>
                <Link to={'/Fruit_lime'}>
                    <li>
                        <h4>코코아(Cocoa)</h4>
                    </li>
                </Link>
                <Link to={'/Fruit_berry'}>
                    <li>
                        <h4>쿠키(Cookie)</h4>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
