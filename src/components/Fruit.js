import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_sever_menu from './Fruit_sever_menu'
import { Link } from 'react-router-dom'

export default function Fruit() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_sever_menu />
            <ul className="sever_box">
                <Link to={'/Fruit_aloe'}>
                    <li>
                        <div className="title_img">
                            <img src={require('../images/little_img01.png')} />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🌴망스망고<br></br>(Aloe bera)
                            </h6>
                            <h5>PG/VG - 60:40</h5>
                            <h5>숙성(Ferment) - 2주(2week)</h5>
                            <h4>
                                강한 망고맛<br></br>(strong mango flavor)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_aloe_01'}>
                    <li>
                        <div className="title_img">
                            <img src={require('../images/little_img02.png')} />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🌴골든쥬스777<br></br>(Golden Juice 777)
                            </h6>
                            <h5>PG/VG - 50:50</h5>
                            <h5>숙성(Ferment) - 2주(2week)</h5>
                            <h4>
                                부드러운 열대과일<br></br>(soft tropical fruit)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_aloe_02'}>
                    <li>
                        <div className="title_img">
                            <img src={require('../images/little_img03.png')} />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🌴Naked 100<br></br>(AMAZING MANGO CLONE)
                            </h6>
                            <h5>PG/VG - 24:76</h5>
                            <h5>숙성(Ferment) - 1주(1week)</h5>
                            <h4>
                                상큼함과부드러움<br></br>(freshness&softness)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_aloe_03'}>
                    <li>
                        <div className="title_img">
                            <img src={require('../images/little_img04.png')} />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🌴AQUA FLOW <br></br>(Clone by Enyawreklaw)
                            </h6>
                            <h5>PG/VG - 50:50</h5>
                            <h5>숙성(Ferment) - 2주(2week)</h5>
                            <h4>
                                부드러운파인애플<br></br>(soft pineapple)
                            </h4>
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
