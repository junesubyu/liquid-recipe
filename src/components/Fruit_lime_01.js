import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_lime_sever_menu from './Fruit_lime_sever_menu'
export default function Fruit_lime_01() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_lime_sever_menu />
            <div className="little_img">
                <img src={require('../images/little_img_lime_01.png')} />
                <h6>Ramonade</h6>
            </div>
            <div className="recipe">
                <img src={require('../images/lime_01.png')} />
            </div>
            <div className="recipe_bottom">
                <div className="recipe_bottom_left">
                    <a
                        href="https://evape.kr/bbs/board.php?bo_table=recipe&wr_id=15223&sfl=wr_subject%7C%7Cwr_content%2C1&stx=%EB%9D%BC%EC%9E%84&sst=wr_comment&sod=desc&sop=and&page=1"
                        target={'_blank'}
                    >
                        <h5>출처 - 이베이프 </h5>
                    </a>
                </div>
            </div>
        </div>
    )
}
