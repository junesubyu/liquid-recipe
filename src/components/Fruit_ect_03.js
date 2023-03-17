import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_ect_sever_menu from './Fruit_ect_sever_menu'

export default function Fruit_ect_03() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_ect_sever_menu />
            <div className="little_img">
                <img src={require('../images/little_img_ect_03.png')} />
                <h6>청포두 by. 두</h6>
            </div>
            <div className="recipe">
                <img src={require('../images/ect_03.png')} />
            </div>
            <div className="recipe_bottom">
                <div className="recipe_bottom_left">
                    <a
                        href="https://evape.kr/bbs/board.php?bo_table=recipe&wr_id=15270&sfl=wr_subject%2C1&stx=%EC%B2%AD%ED%8F%AC%EB%91%90&sop=and"
                        target={'_blank'}
                    >
                        <h5>출처 - 이베이프 </h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
