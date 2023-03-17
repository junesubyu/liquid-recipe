import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_sever_menu from './Fruit_sever_menu'

export default function Fruit_aloe_03() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_sever_menu />
            <div className="little_img">
                <img src={require('../images/little_img04.png')} />
                <h6>AQUA FLOW Clone by Enyawreklaw</h6>
            </div>
            <div className="recipe">
                <img src={require('../images/aloe_04.png')} />
            </div>
            <div className="recipe_bottom">
                <div className="recipe_bottom_left">
                    <a
                        href="https://evape.kr/bbs/board.php?bo_table=recipe&wr_id=15754&sfl=wr_subject%7C%7Cwr_content%2C1&stx=%ED%8C%8C%EC%9D%B8%EC%95%A0%ED%94%8C&sop=and"
                        target={'_blank'}
                    >
                        <h5>출처 - 이베이프 </h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
