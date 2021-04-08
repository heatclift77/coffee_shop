import { useState } from 'react'

export default function PeopleFavorite(){
   const [tesMilihMakanan, makananEnak] = useState("")
   const foodData = [
      {
      foodName: "Mie Ayam",
      foodUrl: "https://img.kurio.network/pY4cYqp4YeERqvn2Ya7Dct5YN4U=/400x400/filters:quality(80):format(jpeg)/https://kurio-img.kurioapps.com/20/04/20/a3b5b3fb-3f1f-428c-a43a-6f110cf14fa4.jpeg",
      foodPrice: "17.000"
      }, 
      {
      foodName: "Nasi Goreng",
      foodUrl: "https://doyanresep.com/wp-content/uploads/2018/12/cara-membuat-nasi-goreng-telur.jpg",
      foodPrice: "15.000"
      }, 
      {
      foodName: "Nasi Padang",
      foodUrl: "https://assets.grab.com/wp-content/uploads/sites/9/2019/12/19112921/ID-nasi-padang-pedas1-700x700.jpg",
      foodPrice: "20.000"
      }
   ]
   return(
      <div className="displayColumn peopleFavorite rubikFont">
         <div style={{textAlign: "center"}}>
            <p className="homeBigText">Here is People's Favorite</p>
            <p className="homeMediumText">Let's choose and have a bit taste of people's favorite. It might be yours too!</p>
         </div>
         <div className="displayRow peopleFavoriteMenuList">
            {foodData.map((item) => 
               <div className="displayColumn peopleFavoriteFoodCard" style={tesMilihMakanan === item.foodName ? {border: "0.2vw solid #6A4029"} : null}>
                  <div className="displayColumn" style={{textAlign: "center"}}>
                     <img className="favoriteFoodImage" src={item.foodUrl}/>
                     <div style={{padding: "3vw 0"}}>
                        <p className="homeMediumText" style={{fontWeight: "bold", marginBottom: "2vw"}}>{item.foodName}</p>
                        <div className="displayRow homeSmallText peopleFavoriteCategory">
                           <img src="https://user-images.githubusercontent.com/77045083/113905664-95c27000-97fd-11eb-9711-62c1c0298107.png" style={{height: "1vw", marginRight: "2.2vw"}}/>
                           (keterangan 1)
                        </div>
                        <div className="displayRow homeSmallText peopleFavoriteCategory">
                           <img src="https://user-images.githubusercontent.com/77045083/113905664-95c27000-97fd-11eb-9711-62c1c0298107.png" style={{height: "1vw", marginRight: "2.2vw"}}/>
                           (keterangan 2)
                        </div>
                        <div className="displayRow homeSmallText peopleFavoriteCategory">
                           <img src="https://user-images.githubusercontent.com/77045083/113905664-95c27000-97fd-11eb-9711-62c1c0298107.png" style={{height: "1vw", marginRight: "2.2vw"}}/>
                           (keterangan 3)
                        </div>
                        <div className="displayRow homeSmallText peopleFavoriteCategory">
                           <img src="https://user-images.githubusercontent.com/77045083/113905664-95c27000-97fd-11eb-9711-62c1c0298107.png" style={{height: "1vw", marginRight: "2.2vw"}}/>
                           (keterangan 4)
                        </div>
                     </div>
                  </div>
                  <div className="displayColumn favoriteMenuSelection">
                     <span className="favoriteFoodPrice">{"IDR " + item.foodPrice}</span>
                     <button className="hoverThis selectFavoriteFoodButton" onClick={(e) => {makananEnak(item.foodName)}} style={tesMilihMakanan === item.foodName ? {background: "#FFBA33"} : null }>Select</button>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}