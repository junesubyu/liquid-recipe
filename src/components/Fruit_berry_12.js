import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_berry_sever_menu from './Fruit_berry_sever_menu'

export default function Fruit_berry_12() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_berry_sever_menu />
            <div className="little_img">
                <img src={require('../images/little_img_berry_12.png')} />
                <h6>릴슐랭가이드#1 (Sweet Imagine)</h6>
            </div>
            <div className="recipe">
                <img src={require('../images/berry_12.png')} />
            </div>
            <div className="recipe_bottom">
                <div className="recipe_bottom_left">
                    <a
                        href="https://evape.kr/bbs/board.php?bo_table=recipe&wr_id=19471&sfl=wr_subject%7C%7Cwr_content%2C1&stx=%EB%A6%B4%EC%8A%90&sop=and"
                        target={'_blank'}
                    >
                        <h5>출처 - 이베이프 </h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
