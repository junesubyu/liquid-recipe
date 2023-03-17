import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_ect_sever_menu from './Fruit_ect_sever_menu'
import { Link } from 'react-router-dom'

export default function Fruit_ect() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_ect_sever_menu />
            <ul className="sever_box">
                <Link to={'/Fruit_ect_01'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_ect_01.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🥟O.M.F.G<br></br>(MK.2 by.Discept)
                            </h6>
                            <h5>PG/VG - 40:60</h5>
                            <h5>숙성(Ferment) - 1주(1week)</h5>
                            <h4>
                                복합적인 상큼한 과일향<br></br>(Complex fresh
                                fruit flavor)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_ect_02'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_ect_02.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🥟써머. 보트<br></br>(By.보키)
                            </h6>
                            <h5>PG/VG - 30:70</h5>
                            <h5>숙성(Ferment) - 1주(1week)</h5>
                            <h4>
                                압축 과일맛<br></br>(compressed fruit)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_ect_03'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_ect_03.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🥟청포두 by. 두<br></br>(Cheongpodu)
                            </h6>
                            <h5>PG/VG - 60:40</h5>
                            <h5>숙성(Ferment) - 2주(2week)</h5>
                            <h4>
                                청포도사탕맛<br></br>(Green Grape Candy)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_ect_04'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_ect_04.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🥟그레이프 드림<br></br>(Grape's Dreams)
                            </h6>
                            <h5>PG/VG - 30:70</h5>
                            <h5>숙성(Ferment) - 1주(1week)</h5>
                            <h4>
                                포도쥬스<br></br>(grape juice )
                            </h4>
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
