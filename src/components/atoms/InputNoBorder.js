import React from 'react'

function InputNoBorder({label, type, value, color, ...rest}) {
    return (
        <div className='my-3'>
            <label htmlFor="input" className={`d-block label-for-main-input ${color}`} >{label}</label>
            <input type={type} name='input' className='input-style-2 w-100 py-2' value={value} {...rest} />
        </div>
    )
}

export default InputNoBorder
