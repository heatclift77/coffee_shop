export default function YellowLogo({img, imgHeight, imgWidth}){
   return(
      <div className="displayRow" style={{alignItems: "center", background: "#FFBA33", borderRadius: "50%", height: "3.3vw", justifyContent: "center", width: "3.3vw"}}>
         <img src={img} style={{height: imgHeight, width: imgWidth}}/>
      </div>
   )
}