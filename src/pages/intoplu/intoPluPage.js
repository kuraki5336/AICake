import React from 'react'
import './intoPlu.scss'

function ContactPage() {

  /** 類別按鈕 */
  const btnList = ['Allprod', '餅乾', '甜點', '中式']
  const lists = btnList.map((list, index) => { return <li key={`li_${index}`}><button className="productCategory">{list}</button></li> })

  return (
    <div className="container">
      <div className="ly_content">
        <div className="row">
          <h3 className="col-12">商品總覽</h3>
        </div>
      </div>
      <div className="productCnt">
        <div className="productMenuWrap">
          <ul className="productMenu">
            {lists}
          </ul>
        </div>
        <ul className="productList">
          <li className="product">
            <span className="product_content">
              111111111111
            </span>
          </li>
          <li className="product">
            <span className="product_content">
              22222
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactPage
