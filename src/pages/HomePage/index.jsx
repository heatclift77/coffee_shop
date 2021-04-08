import './style.css'
import { Helmet } from 'react-helmet'
import Navbar from '../../components/organisme/Navbar'
import { Homepage } from '../../components/templates'

export default function HomePage(){
   return(
      <div className="showInAnimation homepageDesktop">
         <Helmet>
            <title>In Cafe - Home</title>
         </Helmet>
         <Navbar/>
         <Homepage/>
      </div>
   )
}