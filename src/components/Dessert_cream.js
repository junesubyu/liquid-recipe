import React from 'react'
import Page_menu from './Page_menu'
import Dessert_cream_sever_menu from './Dessert_cream_sever_menu'
import Dessert_sever_title from './Dessert_sever_title'
import { Link } from 'react-router-dom'

export default function Dessert_cream() {
    return (
        <div>
            <Page_menu />
            <Dessert_sever_title />
            <Dessert_cream_sever_menu />
            <ul className="sever_box sever_box_01">
                <Link to={'/Dessert_cream_01'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_cream_01.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🧁롸스타드<br></br>(Rhewstad)
                            </h6>
                            <h5>PG/VG - 50:50</h5>
                            <h5>숙성(Ferment) - 2주(2week)</h5>
                            <h4>
                                달달 바닐라 커스타드<br></br>(Sweet and vanilla
                                custard)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Dessert_cream_02'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_cream_02.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🧁솔티드 카라멜<br></br>(salted caramel)
                            </h6>
                            <h5>PG/VG - 30:70</h5>
                            <h5>숙성(Ferment) - 2주(2week)</h5>
                            <h4>
                                찐한 카라멜 맛 밀크쉐이크<br></br>(Caramel
                                Milkshake)
                            </h4>
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
