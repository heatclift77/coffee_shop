import './style.css'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { CustomButton } from '../../components/atoms'
import Navbar from '../../components/organisme/Navbar'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/templates'

export default function Products(){
   const [productCategory, setProductCategory] = useState("Favourite")
   return(
      <div className="showInAnimation poppinsFont productsDesktop">
         <Helmet>
            <title>In Cafe - Our Products</title>
         </Helmet>
         <Navbar/>
         <div className="displayRow ourProducts fontPoppins">
            <div className="displayColumn ourProductsLeftSide">
               <p className="noMargin promoForYouText">Promo for you</p>
               <p className="noMargin couponsWillBeUpdatedText" style={{paddingTop: "1.5vw"}}>Coupons will be updated every weeks</p>
               <p className="noMargin checkThemOutText" style={{paddingBottom: "1.5vw"}}>Check them out!</p>
               <div className="displayRow productCoupons">
                  <div className="yellowProductCoupons">
                     <div className="yellowTopCoupons">
                        <img src="https://doyanresep.com/wp-content/uploads/2018/12/cara-membuat-nasi-goreng-telur.jpg" style={{borderRadius: "50%", height: "8vw", marginBottom: "1vw"}}/>
                        <p className="foodCouponTitle noMargin">Fried Rice</p>
                        <p className="foodCouponTitle">20% OFF</p>
                        <p className="noMargin" style={{fontSize: "0.8vw", marginTop: "0.8vw"}}>Buy 1 Choco Oreo and get 20% off</p>
                        <p className="noMargin" style={{fontSize: "0.8vw"}}>for Fried Rice</p>
                     </div>
                     <div className="yellowBottomCoupons">
                        <p style={{fontSize: "1vw"}}>COUPON CODE</p>
                        <p style={{fontSize: "2vw", fontWeight: "bold"}}>3RW1N</p>
                        <p style={{fontSize: "0.7vw"}}>Valid until October 10th 2020</p>
                     </div>
                  </div>
                  <div className="blackProductCoupons"/>
                  <div className="brownProductCoupons"/>
               </div>
               <CustomButton bgClr="#6A4029" txClr="white" brRad="1vw" btnPdg="1vw 5vw" ftSize="1vw" ftWg="600" mrgn="3vw 0" value="Apply Coupon"/>
               <div className="couponsTermsAndCondition">
                  <p className="noMargin" style={{fontWeight: "bold"}}>Terms and Condition</p>
                  <p className="noMargin">1.) You can only apply 1 coupon per day</p>
                  <p className="noMargin">2.) It only for dine in</p>
                  <p className="noMargin">3.) Buy 1 get 1 only for new user</p>
                  <p className="noMargin">4.) Should make member card to apply coupon</p>
               </div>
            </div>
            <div className="displayColumn ourProductsRightSide">
               <div className="displayRow productCategory">
                  <Link className="productCategoryBtn" onClick={ () => {setProductCategory("Favourite")} } style={productCategory === "Favourite" ? {borderBottom: "0.2vw solid #6A4029", color: "#6A4029", fontWeight: "bold"} : null}>Favourite Product</Link>
                  <Link className="productCategoryBtn" onClick={ () => {setProductCategory("Coffee")} } style={productCategory === "Coffee" ? {borderBottom: "0.2vw solid #6A4029", color: "#6A4029", fontWeight: "bold"} : null}>Coffee</Link>
                  <Link className="productCategoryBtn" onClick={ () => {setProductCategory("NonCoffee")} } style={productCategory === "NonCoffee" ? {borderBottom: "0.2vw solid #6A4029", color: "#6A4029", fontWeight: "bold"} : null}>Non-Coffee</Link>
                  <Link className="productCategoryBtn" onClick={ () => {setProductCategory("Foods")} } style={productCategory === "Foods" ? {borderBottom: "0.2vw solid #6A4029", color: "#6A4029", fontWeight: "bold"} : null}>Foods</Link>
                  <Link className="productCategoryBtn" onClick={ () => {setProductCategory("AddOn")} } style={productCategory === "AddOn" ? {borderBottom: "0.2vw solid #6A4029", color: "#6A4029", fontWeight: "bold"} : null}>Add-on</Link>
               </div>
            </div>
         </div>
         <Footer/>
      </div>
   )
}