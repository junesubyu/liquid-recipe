import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_sever_menu from './Fruit_sever_menu'

export default function Fruit_aloe_01() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_sever_menu />
            <div className="little_img">
                <img src={require('../images/little_img02.png')} />
                <h6>Golden Juice 777</h6>
            </div>
            <div className="recipe">
                <img src={require('../images/aloe_02.png')} />
            </div>
            <div className="recipe_bottom">
                <div className="recipe_bottom_left">
                    <a
                        href="https://evape.kr/bbs/board.php?bo_table=recipe&wr_id=807&sfl=wr_subject%7C%7Cwr_content%2C1&stx=%EB%A7%9D%EA%B3%A0&sop=and&page=1"
                        target={'_blank'}
                    >
                        <h5>출처 - 이베이프 </h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
