import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_apple_sever_menu from './Fruit_apple_sever_menu'
import { Link } from 'react-router-dom'

export default function Fruit_apple() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_apple_sever_menu />
            <ul className="sever_box">
                <Link to={'/Fruit_apple_01'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_apple_01.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍎애플 코블러<br></br>(Apple Cobbler)
                            </h6>
                            <h5>PV/VG - 50:50</h5>
                            <h5>숙성(Ferment) - 1주(1week)</h5>
                            <h4>
                                사과&쿠키<br></br>( Apple & Cookies)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_apple_02'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_apple_02.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍎애플 버터 크림<br></br>(AppleButterCream)
                            </h6>
                            <h5>PV/VG - 50:50</h5>
                            <h5>숙성(Ferment) - 1주(1week)</h5>
                            <h4>
                                상큼한사과향과 크리미<br></br>
                                (Fresh apple & creamy)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_apple_03'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_apple_03.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍎후레쉬 애플<br></br>(Fresh Apples)
                            </h6>
                            <h5>PV/VG - 30:70</h5>
                            <h5>숙성(Ferment) - 3주(1week)</h5>
                            <h4>
                                상큼한 사과맛<br></br>
                                (Refreshing apple taste)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_apple_04'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_apple_04.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍎애플 모히또<br></br>(Apple Mojito)
                            </h6>
                            <h5>PV/VG - 60:40</h5>
                            <h5>숙성(Ferment) - 2주(1week)</h5>
                            <h4>
                                시원하게 모히또<br></br>( cool mojito)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_apple_07'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_apple_07.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍎애플 모히또(쿨링)<br></br>(Apple Mojito-cool)
                            </h6>
                            <h5>PV/VG - 60:40</h5>
                            <h5>숙성(Ferment) - 2주(1week)</h5>
                            <h4>
                                시원하게 모히또<br></br>( cool mojito)
                            </h4>
                        </div>
                    </li>
                </Link>

                <Link to={'/Fruit_apple_06'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_apple_06.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍎애플9히또<br></br>(Apple 9 Hitto)
                            </h6>
                            <h5>PV/VG - 50:50</h5>
                            <h5>숙성(Ferment) - 1주(1week)</h5>
                            <h4>
                                애플모히또 외길
                                <br></br>
                                (Apple Mojito Single Road)
                            </h4>
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
