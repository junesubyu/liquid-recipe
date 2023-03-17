import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_lime_sever_menu from './Fruit_lime_sever_menu'
import { Link } from 'react-router-dom'

export default function Fruit_lime() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_lime_sever_menu />
            <ul className="sever_box">
                <Link to={'/Fruit_lime_01'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_lime_01.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍋라체.st 라몬에이드<br></br>(Lemonade)
                            </h6>
                            <h5>PG/VG - 30:70</h5>
                            <h5>숙성(Ferment) - 2주(2week)</h5>
                            <h4>
                                극강의 신맛<br></br>(extreme sour)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_lime_02'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_lime_02.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍋라임 모히또<br></br>(Lime Mojito)
                            </h6>
                            <h5>PG/VG - 50:50</h5>
                            <h5>숙성(Ferment) - 2주(2week)</h5>
                            <h4>
                                무난한 라임모히또<br></br>(Nice Lime Mojito)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_lime_03'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_lime_03.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍋진 리키<br></br>(Gin Rickey)
                            </h6>
                            <h5>PG/VG - 60:40</h5>
                            <h5>숙성(Ferment) - 1주(1week)</h5>
                            <h4>
                                술 맛<br></br>(liquor taste)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_lime_04'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_lime_04.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍋꿀단지<br></br>(Lime Tahiti)
                            </h6>
                            <h5>PG/VG - 60:40</h5>
                            <h5>숙성(Ferment) - 1주(1week)</h5>
                            <h4>
                                라임 소다<br></br>(lime soda)
                            </h4>
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
