import React from 'react'
// -----------component-------------
import {CardFly} from '../organisme'
import {MainInput, BtnSm, BtnLg, Heading5} from '../atoms'
import {Logo} from '../molekuls'
// ----img-------
import img from '../../assets/img-1.png'
function AuthLogin() {
    return (
        <div className='container-fluid position-relative'>
            <div className="row">
                <div className="col-12 col-md-6 show-in-md">
                    <img src={img} className='img-fluid'/>
                </div>
                <div className="col-12 col-md-5">
                    <div className="d-flex my-4 justify-content-between">
                        <div>
                            <Logo />
                        </div>
                        <div>
                            <BtnSm 
                            value='Login'
                            color='btn-orange'
                            rounded='rounded-xl'
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className='text-center mb-5'>
                                <Heading5 value='Sign Up' />
                            </div>
                            <div className='my-4'>
                                <MainInput label='Email Adress:' placeholder='Enter Your Email Adress'/>
                            </div>
                            <div className='my-4'>
                                <MainInput label='Password:' placeholder='Enter Your Password' type='password'/>
                            </div>
                            <div>
                                <BtnLg 
                                value='Sign Up'
                                color='btn-orange'
                                rounded='rounded-md'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CardFly />
        </div>
    )
}

export default AuthLogin
