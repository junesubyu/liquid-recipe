import React from 'react'
import Page_menu from './Page_menu'
import Dessert_cream_sever_menu from './Dessert_cream_sever_menu'
import Dessert_sever_title from './Dessert_sever_title'
import { Link } from 'react-router-dom'

export default function Dessert_cream_02() {
    return (
        <div>
            <Page_menu />
            <Dessert_sever_title />
            <Dessert_cream_sever_menu />
            <div className="little_img little_img_01">
                <img src={require('../images/little_img_cream_02.png')} />
                <h6>Rhewstad</h6>
            </div>
            <div className="recipe recipe_01">
                <img src={require('../images/cream_02.png')} />
            </div>
            <div className="recipe_bottom recipe_bottom_01">
                <div className="recipe_bottom_left">
                    <a
                        href="https://evape.kr/bbs/board.php?bo_table=recipe&wr_id=16721&sfl=wr_subject%2C1&stx=%EC%B9%B4%EB%9D%BC%EB%A9%9C&sop=and"
                        target={'_blank'}
                    >
                        <h5>출처 - 이베이프 </h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
