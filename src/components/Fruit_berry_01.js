import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_berry_sever_menu from './Fruit_berry_sever_menu'

export default function Fruit_berry_01() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_berry_sever_menu />
            <div className="little_img">
                <img src={require('../images/little_img_berry_01.png')} />
                <h6>CRFT strawberry blonde 클론</h6>
            </div>
            <div className="recipe">
                <img src={require('../images/berry_01.png')} />
            </div>
            <div className="recipe_bottom">
                <div className="recipe_bottom_left">
                    <a
                        href="https://evape.kr/bbs/board.php?bo_table=recipe&wr_id=8456&sfl=wr_subject%7C%7Cwr_content%2C1&stx=berry&sop=and&page=1"
                        target={'_blank'}
                    >
                        <h5>출처 - 이베이프 </h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
