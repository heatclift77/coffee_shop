import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { IconContext } from 'react-icons'

function DropdownCustom({ value }) {
    return (
        <div className=''>
            <div class="dropdown">
                <div class="rounded-md border p-3 c-pointer"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className='d-flex justify-content-between'>
                        <p className='color-gray m-0'>{value}</p>
                        <FaAngleDown 
                        color='#9F9F9F'
                        size='1.6em'
                        />
                    </div>
                </div>
                <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
    )
}

export default DropdownCustom
