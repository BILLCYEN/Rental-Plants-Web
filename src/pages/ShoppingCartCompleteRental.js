import React from 'react'
import Breadcrumb from '../component/Breadcrumb/Breadcrumb';
import Shoppingprocessbar from '../component/ShoppingCart-Process-Bar/shoppingprocessbar';
import CheckoutTableInfo from '../component/Checkout-Table-Info-Rental/CheckoutTableInfo'
import CheckoutTableItemListRental from '../component/Checkout-Table-ItemList-Rental/CheckoutTableItemListRental'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'


function ShoppingCartComplete() {
    const currentCart = JSON.parse(localStorage.getItem('rent')) || []
    return (
        <>
        <Header />
        {currentCart.length>0? 
        (<div className="test">
        <div className="b-paddingLR">
            <div className="b-completepage-header" style={{marginTop:0}}>
                    <div>
                        {/* <Breadcrumb /> */}
                        <div className="b-complete-cart-title" style={{marginTop:80}}>
                            <p className="mb-2">結帳</p>
                        </div>
                    </div>
                    <Shoppingprocessbar shopping address payment complete ></Shoppingprocessbar>
                </div>
                <CheckoutTableInfo />
                <CheckoutTableItemListRental />
        </div>
        </div>) 
        : 
        (<aside className="p-0">
            <div className="table-responsive d-flex justify-content-center flex-column text-center">
            <div style={{marginTop: 50, marginBottom: 30, fontSize: 20, color: "#838383"}}>尚未加入任何商品, 快到<a href="/" style={{color:"#E58F80", textDecoration:"none"}}>商品列表</a>選購您喜歡的植栽!!!</div>
            <div className="mb-5"><img style={{width:400, height:400}} src="http://localhost:3000/images/svg/svg/noresult.gif"/></div>
            </div>
        </aside>)
        }
        
        <Footer />
        </>
    )
}

export default ShoppingCartComplete
