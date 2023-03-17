import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_ect_sever_menu from './Fruit_ect_sever_menu'

export default function Fruit_ect_01() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_ect_sever_menu />
            <div className="little_img">
                <img src={require('../images/little_img_ect_01.png')} />
                <h6>O.M.F.G MK.2 by.Discept</h6>
            </div>
            <div className="recipe">
                <img src={require('../images/ect_01.png')} />
            </div>
            <div className="recipe_bottom">
                <div className="recipe_bottom_left">
                    <a
                        href="https://evape.kr/bbs/board.php?bo_table=recipe&wr_id=16189&page=5"
                        target={'_blank'}
                    >
                        <h5>출처 - 이베이프 </h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
