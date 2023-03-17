import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_apple_sever_menu from './Fruit_apple_sever_menu'

export default function Fruit_apple_06() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_apple_sever_menu />
            <div className="little_img">
                <img src={require('../images/little_img_apple_06.png')} />
                <h6>Apple 9 Hitto</h6>
            </div>
            <div className="recipe">
                <img src={require('../images/apple_06.png')} />
            </div>
            <div className="recipe_bottom">
                <div className="recipe_bottom_left">
                    <a
                        href="https://evape.kr/bbs/board.php?bo_table=recipe&wr_id=5544&sfl=wr_subject%7C%7Cwr_content%2C1&stx=%EC%82%AC%EA%B3%BC&sop=and&page=2"
                        target={'_blank'}
                    >
                        <h5>출처 - 이베이프 </h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
