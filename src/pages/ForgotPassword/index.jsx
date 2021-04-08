import './style.css'
import { Helmet } from 'react-helmet'
import { MainInput, BtnLg, CustomButton } from '../../components/atoms'
import { Footer } from '../../components/templates'

export default function ForgotPassword(){
    return(
        <div className="showInAnimation poppinsFont">
            <Helmet>
                <title>In Cafe - Forgot Password</title>
            </Helmet>
            <div className="forgotPasswordDesktop">
                <div className="displayColumn forgotPassword">
                    <div className="forgotPasswordTitle" style={{textAlign: "center", marginTop: "10vh"}}>
                        <h3 className="forgotPasswordBigText">Forgot your password?</h3>
                        <p className="forgotPasswordSmallText">Don't worry, we got your back!</p>
                    </div>
                    <form className="displayRow forgotPasswordInput">
                        <MainInput label={null} placeholder="Enter your email address to get link" style={{borderRadius: "0.5vw", fontSize: "1vw", height: "3.8vw", width: "39vw"}} type="email" required/>
                        <BtnLg value="Send" color="btn-orange" rounded="rounded-lg"/>
                    </form>
                    <div className="forgotPasswordResendLink" style={{visibility: "hidden"}}>
                        <p style={{fontSize: "1.5vw", textAlign: "center"}}>Click here if you didn't receive any link <br/> in 2 minutes</p>
                        <CustomButton bgClr="#6A4029" txClr="white" brRad="0.5vw" btnPdg="1.5vw 9vw" ftSize="1.1vw" ftWg="600" mrgn="1vw 0" value="Resend Link"/>
                        <p style={{fontSize: "1vw", fontWeight: "600"}}>01:54</p>
                    </div>
                </div>
            </div>
            <div className="forgotPasswordMobile">
                <p className="dontWorryText">Don't worry!</p>
                <p className="getPasswordLinkText">Enter your email address to get reset password link</p>
                <img style={{margin: "24px 0"}} src="https://user-images.githubusercontent.com/77045083/113750005-74e21800-9734-11eb-9eab-027d6f927aa6.png"/>
                <form>
                    <input className="inputForgotPassword" placeholder="Enter your email address"/>
                    <p style={{margin: "24px 0"}}>Haven't received any link?</p>
                    <CustomButton bgClr="#6A4029" txClr="white" brRad="20px" btnPdg="20px 100px" ftSize="16px" ftWg="600" mrgn="1vw 0" value="Resend Link"/>
                </form>
            </div>
            <Footer/>
        </div>
    )
}