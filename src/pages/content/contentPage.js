import React from "react";
import logo from "../../assets/1200x.webp";
import iaplu1 from "../../assets/plu/ia_900000006.png";
import "../../pages/App.css";
import "./content.scss";

function ContentPage() {
  return (
    <div>
      {/* logo */}
      <div className="ly_logo">
        <img className="logoimg" src={logo} />
        <div className="ly_title">
          <h2>甜甜綿綿蛋糕</h2>
          <h3>蛋糕始終陪伴在你身旁</h3>
        </div>
      </div>

      <div className="ly_content">
        <div className="row">
          <h3 className="col-12">Cake of Life</h3>
        </div>
        <div className="row">
          <h4 className="col-12">在這你有吃不完的甜食還歡迎你的選購</h4>
        </div>
      </div>
      {/* intro */}
      <div className="container mainService">
        <div className="grid"></div>
        {/* 1. 第一類型蛋糕 */}
        <div className="row introArea">
          <div className="textArea">
            <img></img>
            <h4>信手工坊</h4>
            <h5>熟成土鳳梨酥、桂圓核桃酥、烏龍梅果酥</h5>
            <div className="desc">
              嚴選在地17號金鑽鳳梨 自然生成的有機纖維 內餡香氣醇美不膩
              </div>
          </div>
          <div className="imgArea">
            <div className="style">
              <img
                width="880px"
                height="550px"
                className="pluimg"
                src={iaplu1}
                alt="plu1"
              />
            </div>
          </div>
        </div>

        {/* 2. 第二類型蛋糕 */}
        {/* <div className="row introArea">
            <div className="col-8 textArea">3</div>
            <div className="col-4 imgArea">4</div>
          </div> */}

        {/* 3. 第一類型蛋糕 */}
        {/* <div className="row introArea">
            <div className="col-4 textArea">5</div>
            <div className="col-8 imgArea">6</div>
          </div> */}

      </div>
    </div>
  );
}
export default ContentPage;
