import React from 'react'
import {BtnSm} from '../atoms'
function CardFly() {
    return (
        <div className='container rounded-md bg-white shadow py-4 px-5 card-fly-position show-in-md'>
            <div className="d-flex justify-content-between">
                <div>
                    <h3>Get your member card now!</h3>
                    <p>Let's join with our member and enjoy the deals.</p>
                </div>
                <BtnSm 
                color='btn-orange'
                rounded='rounded-sm'
                value='Create Now'
                />
            </div>
        </div>
    )
}

export default CardFly
