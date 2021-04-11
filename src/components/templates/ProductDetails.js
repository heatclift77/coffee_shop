import { useState } from 'react'
import { CustomButton, YellowLogo } from '../atoms/'
import ColdBrew from '../../assets/image25.png'

export default function ProductDetails(){
   const [sizeChosen, chooseSize] = useState("")
   const [deliveryChosen, chooseDelivery] = useState("")
   const [howMuchProduct, plusMinusProductNumber] = useState(0)
   return(
      <div className="showInAnimation productDetails">
         <div style={{fontSize: "1.1vw"}}>Favorite &amp; Promo<span style={{color: "#6A4029", fontWeight: "bold"}}>{" > Cold Brew"}</span></div>
         <div className="displayRow">
            <div className="displayColumn leftProductDetails rubikFont">
               <img src={ColdBrew} style={{borderRadius: "50%", width: "100%"}}/>
               <div style={{margin: "3vw 0", textAlign: "center"}}>
                  <div style={{fontSize: "3.7vw", fontWeight: "bold"}}>COLD BREW</div>
                  <div style={{fontSize: "2vw"}}>IDR 30.000</div>
               </div>
               <CustomButton bgClr="#6A4029" brRad="1vw" btnPdg="1vw 3vw" ftSize="1.1vw" ftWg="bold" mrgn="0.77vw 0" txClr="white" value="Add to Cart" wd="100%"></CustomButton>
               <CustomButton bgClr="#FFBA33" brRad="1vw" btnPdg="1vw 3vw" ftSize="1.1vw" ftWg="bold" mrgn="0.77vw 0" txClr="#6A4029" value="Ask a Staff" wd="100%"></CustomButton>
            </div>
            <div className="displayColumn rightProductDetails">
               <div className="chooseSizeZone poppinsFont">
                  Delivery only on <b>Monday to Friday</b>
                  <br/>
                  at <b>1 - 7 pm</b>
                  <div style={{margin: "3vw 0"}}>
                     Cold brewing is a method of
                     brewing that combines ground 
                     coffee and cool water and uses 
                     time instead of heat to extract the 
                     flavor. It is brewed in small batches 
                     and steeped for as long as 48 hours.
                  </div>
                  <div style={{color: "black", fontWeight: "bold", textAlign: "center"}}>
                     Choose a size
                     <div className="displayRow chooseSizeBtnZone">
                        <div className="hoverThis" onClick={() => { chooseSize("R") }} style={sizeChosen === "R" ? {opacity: "0.5"} : null }><YellowLogo value="R"/></div>
                        <div className="hoverThis" onClick={() => { chooseSize("L") }} style={sizeChosen === "L" ? {opacity: "0.5"} : null }><YellowLogo value="L"/></div>
                        <div className="hoverThis" onClick={() => { chooseSize("XL") }} style={sizeChosen === "XL" ? {opacity: "0.5"} : null }><YellowLogo value="XL"/></div>
                     </div>
                  </div>
               </div>
               <div className="chooseDeliveryMethods" style={{textAlign: "center"}}>
                  <span style={{fontSize: "1.2vw", fontWeight: "bold"}}>Choose Delivery Methods</span>
                  <div className="displayRow chooseDeliveryBtnArea" style={{margin: "1vw 0"}}>
                     <div onClick={() => { chooseDelivery("DineIn") }}>
                        <CustomButton 
                        bgClr={deliveryChosen === "DineIn" ? "#6A4029" : "#F4F4F8"} 
                        brdr={deliveryChosen === "DineIn" ? "none" : "0.1vw solid rgba(186, 186, 186, 0.35)"} 
                        brRad="0.5vw" 
                        btnPdg="0.5vw 1.5vw" 
                        ftSize="0.9vw" 
                        ftWg={deliveryChosen === "DineIn" ? "bold" : "300"} 
                        mrgn="0.77vw 0" 
                        txClr={deliveryChosen === "DineIn" ? "white" : "#9F9F9F"} 
                        value="Dine In"/>
                     </div>
                     <div onClick={() => { chooseDelivery("Door Delivery") }}>
                        <CustomButton 
                        bgClr={deliveryChosen === "Door Delivery" ? "#6A4029" : "#F4F4F8"} 
                        brdr={deliveryChosen === "Door Delivery" ? "none" : "0.1vw solid rgba(186, 186, 186, 0.35)"} 
                        brRad="0.5vw" 
                        btnPdg="0.5vw 1.5vw" 
                        ftSize="0.9vw" 
                        ftWg={deliveryChosen === "Door Delivery" ? "bold" : "300"} 
                        mrgn="0.77vw 0" 
                        txClr={deliveryChosen === "Door Delivery" ? "white" : "#9F9F9F"} 
                        value="Door Delivery"/>
                     </div>
                     <div onClick={() => { chooseDelivery("Pick Up") }}>
                        <CustomButton 
                        bgClr={deliveryChosen === "Pick Up" ? "#6A4029" : "#F4F4F8"} 
                        brdr={deliveryChosen === "Pick Up" ? "none" : "0.1vw solid rgba(186, 186, 186, 0.35)"} 
                        brRad="0.5vw" 
                        btnPdg="0.5vw 1.5vw" 
                        ftSize="0.9vw" 
                        ftWg={deliveryChosen === "Pick Up" ? "bold" : "300"} 
                        mrgn="0.77vw 0" 
                        txClr={deliveryChosen === "Pick Up" ? "white" : "#9F9F9F"} 
                        value="Pick Up"/>
                     </div>
                  </div>
                  <div className="displayRow poppinsFont" style={{fontSize: "1.1vw", justifyContent: "space-between"}}>
                     Set time :
                     <input className="orderSetTimeInput" placeholder="Enter the time you'll arrived"/>
                  </div>
               </div>
            </div>
         </div>
         <div className="checkoutZone displayRow">
            <div className="displayRow insideCheckOutZone">
               <div className="displayRow" style={{alignItems: "center"}}>
                  <img src={ColdBrew} style={{borderRadius: "50%", height: "5vw", width: "5vw"}}/>
                  <div className="displayColumn poppinsFont" style={{fontSize: "1vw", margin: "0 3vw"}}>
                     <p style={{fontSize: "1.5vw", fontWeight: "bold"}}>COLD BREW</p>
                     <div>x1 (Large)</div>
                     <div>x1 (Regular)</div>
                  </div>
               </div>
               <div className="displayRow" style={{alignItems: "center", justifyContent: "space-between", width: "20%"}}>
                  {/* <div className="displayColumn hoverThis plusMinusBtn" onClick={() => { howMuchProduct <= 0 ? null : plusMinusProductNumber(howMuchProduct - 1) }}>-</div> */}
                  <div style={{fontSize: "1.5vw", fontWeight: "1000"}}>{howMuchProduct}</div>
                  <div className="displayColumn hoverThis plusMinusBtn" onClick={() => { plusMinusProductNumber(howMuchProduct + 1) }}>+</div>
               </div>
            </div>
            <div style={{borderRadius: "1.1vw", boxShadow: "0 0.3vw 0.5vw #DEDEDE"}}><CustomButton className="checkoutBtn" bgClr="#FFBA33" brRad="1.1vw" btnPdg="3vw" ftSize="1.5vw" ftWg="bold" txClr="#6A4029" value="CHECKOUT"/></div>
         </div>
      </div>
   )
}