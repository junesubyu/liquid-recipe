import React from 'react'
import Page_menu from './Page_menu'
import Dessert_cream_sever_menu from './Dessert_cream_sever_menu'
import Dessert_sever_title from './Dessert_sever_title'
import { Link } from 'react-router-dom'

export default function Dessert_cream_01() {
    return (
        <div>
            <Page_menu />
            <Dessert_sever_title />
            <Dessert_cream_sever_menu />
            <div className="little_img little_img_01">
                <img src={require('../images/little_img_cream_01.png')} />
                <h6>Rhewstad</h6>
            </div>
            <div className="recipe recipe_01">
                <img src={require('../images/cream_01.png')} />
            </div>
            <div className="recipe_bottom recipe_bottom_01">
                <div className="recipe_bottom_left">
                    <a
                        href="https://evape.kr/bbs/board.php?bo_table=recipe&wr_id=19763"
                        target={'_blank'}
                    >
                        <h5>출처 - 이베이프 </h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
