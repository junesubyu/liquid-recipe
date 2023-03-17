import React from 'react'
import Page_menu from './Page_menu'
import Fruit_sever_title from './Fruit_sever_title'
import Fruit_berry_sever_menu from './Fruit_berry_sever_menu'
import { Link } from 'react-router-dom'
export default function Fruit_berry() {
    return (
        <div>
            <Page_menu />
            <Fruit_sever_title />
            <Fruit_berry_sever_menu />
            <ul className="sever_box">
                <Link to={'/Fruit_berry_01'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_berry_01.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍓스트로베리블론드<br></br>(strawberry blonde)
                            </h6>
                            <h5>PG/VG - 49:51</h5>
                            <h5>숙성(Ferment) - 2주(2week)</h5>
                            <h4>
                                딸기와 커스타드<br></br>(trawberry and Custard)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_berry_02'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_berry_02.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍓압생트 스트로베이<br></br>(Absinthe)
                            </h6>
                            <h5>PG/VG - 70:30</h5>
                            <h5>숙성(Ferment) - 3주(3week)</h5>
                            <h4>
                                압생트<br></br>(Absinthe)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_berry_05'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_berry_05.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍓베리 드래곤<br></br>(Berry Dragon)
                            </h6>
                            <h5>PG/VG - 60:40</h5>
                            <h5>숙성(Ferment) - 1주(1week)</h5>
                            <h4>
                                베리와 용과<br></br>(erry & dragon fruit)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_berry_11'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_berry_11.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍓타이거 블러드<br></br>(6% Tiger's Blood)
                            </h6>
                            <h5>PG/VG - 60:40</h5>
                            <h5>숙성(Ferment) - 1주(1week)</h5>
                            <h4>
                                수박화채 딸기맛<br></br>(Strawberry Watermelon)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_berry_12'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_berry_12.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍓릴슐랭가이드#1<br></br>(Sweet Imagine)
                            </h6>
                            <h5>PG/VG - 50:50</h5>
                            <h5>숙성(Ferment) - 1주(1week)</h5>
                            <h4>
                                달콤하고 새콤한 과일<br></br>(sweet and sour
                                fruit)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_berry_13'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_berry_13.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍓버진 베리 콜라다<br></br>(VirginBerryColada)
                            </h6>
                            <h5>PG/VG - 30:70</h5>
                            <h5>숙성(Ferment) - 1주(1week)</h5>
                            <h4>
                                새콤달콤향<br></br>(sweet and sour)
                            </h4>
                        </div>
                    </li>
                </Link>
                <Link to={'/Fruit_berry_14'}>
                    <li>
                        <div className="title_img">
                            <img
                                src={require('../images/little_img_berry_14.png')}
                            />
                        </div>
                        <div className="sever_box_text">
                            <h6>
                                🍓와일드 펀치<br></br>(Wild Punch)
                            </h6>
                            <h5>PG/VG - 50:50</h5>
                            <h5>숙성(Ferment) - 2주(2week)</h5>
                            <h4>
                                쥬시한느낌<br></br>(Juicy)
                            </h4>
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
