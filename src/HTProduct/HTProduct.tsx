import React from "react";
import './HTProduct.css';

function HTProduct() {
    return(
        <div className="section3">
            <div className="cont_wrap">
                <div className="swiper_cont s_1">
                    <ul>
                        <li style={ {width:'300px', height:'510px'} }>
                            <a href="http://www.ht.co.kr/product/view/619"><img src="./prod1.png"/>
                            <span className="titprd">맛동산 꿀단지</span>
                            <span className="subprd">아카시아꿀 & 크리스탈 슈가를 넣어 달콤한 향을 덧입힌 봄 시즌 한정 맛동산!</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="swiper_cont s_2">
                    <ul style={ {width:'1280px', height:'580px'} }>
                        <li style={ {width:'320px', height:'580px'} }>
                            <a href="#"><img src="./event1.jpg"/></a>
                        </li>
                    </ul>
                </div>
                <div className="swiper_cont s_3">
                    <ul>
                        <li style={ {width:'300px', height:'510px'} }>
                            <a href="http://www.ht.co.kr/product/view/619"><img src="./teaset.jpg" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>   
    )
}

export default HTProduct;