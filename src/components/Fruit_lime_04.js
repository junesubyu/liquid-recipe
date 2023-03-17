import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_lime_sever_menu from './Fruit_lime_sever_menu'

export default function Fruit_lime_04() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_lime_sever_menu />
            <div className="little_img">
                <img src={require('../images/little_img_lime_04.png')} />
                <h6>Lime Tahiti</h6>
            </div>
            <div className="recipe">
                <img src={require('../images/lime_04.png')} />
            </div>
            <div className="recipe_bottom">
                <div className="recipe_bottom_left">
                    <a
                        href="https://evape.kr/bbs/board.php?bo_table=recipe&wr_id=128&sfl=wr_subject%2C1&stx=%EA%BF%80%EB%8B%A8%EC%A7%80&sop=and"
                        target={'_blank'}
                    >
                        <h5>출처 - 이베이프 </h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
