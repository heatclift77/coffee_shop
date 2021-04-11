import React, {useState} from 'react'
import default_img from '../../assets/default.png'
import {InputNoBorder, CustomButton} from '../../components/atoms'
import { FaAngleDown } from 'react-icons/fa'
import {Navbar} from '../../components/organisme'
import {Footer} from '../../components/templates'
import axios from 'axios'
import swal from 'sweetalert'
function AdminAddPromo() {
    const [data, setData] = useState({
        name : '',
        promoCode : '',
        description : '',
        size : [],
        startDate : '',
        expiredDate : '',
        deliveryMethod : [],
        image : '',
        minPrice : 0,
        discount : 0,
        maxDiscount : 25000
    })
    const [dropdown, setDropdown] = useState({
        discount : [5, 10, 20, 30, 50, 70],
        codeCupon : ["DKSM","DKMD","DKLG"],
        date : ["1","2","3","4","5","6","7","8","9","10",
        "11","12","13","14","15","16","17","18","19","20"
        ,"21","22","23","24","25","26","27","28","29","30","31"],
        dropdown : {
            discount : {
                value : "Input discount"
            },
            startDate : {
                value : "Select start date"
            },
            endDate : {
                value : "Select end date"
            },
            cuponCode : {
                value : "Input stock"
            }
        }
    })
    const [size, setSize] = useState({
        list : [],
        status : {
            active : "#FFBA33",
            inActive : "#F8F8F8"
        }
    })
    const [delivery, setDelivery] = useState({
        list : [],
        status : {
            active : "#FFBA33",
            inActive : "#F8F8F8"
        }
    })
    function remove(arr) {
        var what, a = arguments, L = a.length, ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax= arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    }
    function handleSize(e){
        if(size.list.length == 0){
            size.list.push(e.target.value)
            setSize({
                ...size,
                list : size.list
            })
        }else{
            if(size.list.includes(e.target.value)){
                remove(size.list, e.target.value)
                setSize({
                    ...size,
                    list : size.list
                })
            }else{
                size.list.push(e.target.value)
                setSize({
                    ...size,
                    list : size.list
                })
            }
        }
        setData({
            ...data,
            size : size.list
        })
    }
    function handleDelivery(e){
        if(delivery.list.length == 0){
            delivery.list.push(e.target.value)
            setDelivery({
                ...delivery,
                list : delivery.list
            })
        }else{
            if(delivery.list.includes(e.target.value)){
                remove(delivery.list, e.target.value)
                setDelivery({
                    ...delivery,
                    list : delivery.list
                })
            }else{
                delivery.list.push(e.target.value)
                setDelivery({
                    ...delivery,
                    list : delivery.list
                })
            }
        }
        setData({
            ...data,
            deliveryMethod : delivery.list
        })
    }
    function handleSubmit(){
        const token = localStorage.getItem('token')
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("promoCode", data.promoCode)
        formData.append("description", data.description)
        formData.append("size", data.size)
        formData.append("startDate", data.startDate)
        formData.append("expiredDate", data.expiredDate)
        formData.append("deliveryMethod", data.deliveryMethod)
        formData.append("image", data.image)
        formData.append("minPrice", data.minPrice)
        formData.append("discount", data.discount)
        formData.append("maxDiscount", data.maxDiscount)
        axios({
            method : "POST",
            url : `${process.env.REACT_APP_SERVER}/v1/promo`,
            data : formData,
            headers : { Authorization : `Bearer ${token}` }
        })
        .then(response=>{
            console.log(response.data);
        })
        .catch(err=>{
            console.log(err.response);
        })
    }
    return (
        <div>
            <Navbar />
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-12 col-md-4 my-3">
                        <div className='rounded-circle d-flex justify-content-center mx-auto mb-3' style={{background: "#F8F8F8", width: "200px", height:"200px"}}>
                            <div className='align-self-center'>
                                <img src={default_img} style={{width:"80px", height:"auto"}}/>
                            </div>
                        </div>
                        <div>
                            <CustomButton bgClr="#0B132A" brRad="1.1rem" btnPdg="1rem" ftSize="14px" ftWg="bold" mrgn="0.77vw 0" txClr="white" value="Choose From Galery" wd="100%"></CustomButton>
                            <div className='position-relative'>
                                <CustomButton bgClr="#FFBA33" brRad="1.1rem" btnPdg="1rem" ftSize="14px" ftWg="bold" mrgn="0.77vw 0" txClr="#6A4029" value="Choose From Galery" wd="100%"></CustomButton>
                                <div style={{position:"absolute", top:20}}>
                                    <input className="c-pointer w-100" type="file" style={{opacity:"0"}} onChange={(e)=>{setData({...data, image : e.target.files})}} />
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p className='text-coklat font-weight-bold'>Enter the discount :</p>
                            <div class="dropdown">
                                <div class="rounded-md border p-3 c-pointer"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className='d-flex justify-content-between'>
                                        <p className='color-gray m-0'>{dropdown.dropdown.discount.value}</p>
                                        <FaAngleDown 
                                        color='#9F9F9F'
                                        size='1.6em'
                                        />
                                    </div>
                                </div>
                                <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                    {dropdown.discount.map(item=>{
                                        return  <a class="dropdown-item" onClick={(e)=>{
                                            e.preventDefault()
                                            setDropdown({
                                                ...dropdown,
                                                dropdown : {
                                                    ...dropdown.dropdown,
                                                    discount : {
                                                        value : item
                                                    }
                                                }
                                            })
                                            setData({
                                                ...data,
                                                discount : item
                                            })
                                        }}>{item}</a>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='text-coklat font-weight-bold'>Expired date :</p>
                            <div class="dropdown">
                                <div class="rounded-md border p-3 c-pointer"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className='d-flex justify-content-between'>
                                        <p className='color-gray m-0'>{dropdown.dropdown.startDate.value}</p>
                                        <FaAngleDown 
                                        color='#9F9F9F'
                                        size='1.6em'
                                        />
                                    </div>
                                </div>
                                <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                    {dropdown.date.map(item=>{
                                        return  <a class="dropdown-item" onClick={(e)=>{
                                            e.preventDefault()
                                            setDropdown({
                                                ...dropdown,
                                                dropdown : {
                                                    ...dropdown.dropdown,
                                                    startDate : {
                                                        value : item
                                                    }
                                                }
                                            })
                                            setData({
                                                ...data,
                                                startDate : item
                                            })
                                        }}>{item}</a>
                                    })}
                                </div>
                            </div>
                            <div class="dropdown mt-3">
                                <div class="rounded-md border p-3 c-pointer"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className='d-flex justify-content-between'>
                                        <p className='color-gray m-0'>{dropdown.dropdown.endDate.value}</p>
                                        <FaAngleDown 
                                        color='#9F9F9F'
                                        size='1.6em'
                                        />
                                    </div>
                                </div>
                                <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                    {dropdown.date.map(item=>{
                                        return  <a class="dropdown-item" onClick={(e)=>{
                                            e.preventDefault()
                                            setDropdown({
                                                ...dropdown,
                                                dropdown : {
                                                    ...dropdown.dropdown,
                                                    endDate : {
                                                        value : item
                                                    }
                                                }
                                            })
                                            setData({
                                                ...data,
                                                expiredDate : item
                                            })
                                        }}>{item}</a>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 mb-5'>
                            <p className='text-coklat font-weight-bold'>Input code cupon :</p>
                            <div class="dropdown">
                                <div class="rounded-md border p-3 c-pointer"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className='d-flex justify-content-between'>
                                        <p className='color-gray m-0'>{dropdown.dropdown.cuponCode.value}</p>
                                        <FaAngleDown 
                                        color='#9F9F9F'
                                        size='1.6em'
                                        />
                                    </div>
                                </div>
                                <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                    {dropdown.codeCupon.map(item=>{
                                        return  <a class="dropdown-item" onClick={(e)=>{
                                            e.preventDefault()
                                            setDropdown({
                                                ...dropdown,
                                                dropdown : {
                                                    ...dropdown.dropdown,
                                                    cuponCode : {
                                                        value : item
                                                    }
                                                }
                                            })
                                            setData({
                                                ...data,
                                                promoCode : item
                                            })
                                        }}>{item}</a>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 ml-auto my-3">
                        <div>
                            <div className='mb-4'>
                                <InputNoBorder 
                                label='Name :'
                                placeholder='Type product name min. 50 characters' 
                                color='text-coklat'
                                onChange={(e)=>{setData({...data, name : e.target.value})}}
                                />
                            </div>
                            <div className='mb-4'>
                                <InputNoBorder 
                                label='Normal Price :'
                                placeholder='Type the price' 
                                color='text-coklat'
                                onChange={(e)=>{setData({...data, minPrice : e.target.value})}}
                                />
                            </div>
                            <div className='mb-4'>
                                <InputNoBorder 
                                label='Description :'
                                placeholder='Describe your product min. 150 characters' 
                                color='text-coklat'
                                onChange={(e)=>{setData({...data, description : e.target.value})}}
                                />
                            </div>
                            <p className='text-coklat'>Input Product Size :</p>
                            <p style={{color:"#9F9F9F"}}>Click size you want to use for this product</p>
                        </div>
                        <div className='row'>
                            <div className="col-10">
                                <div className="d-flex justify-content-between"> 
                                    <CustomButton bgClr={(size.list.includes('R')) ? size.status.active: size.status.inActive} brRad="100%" btnPdg="1rem" ftSize="1.1rem" ftWg="bold" mrgn="0.77vw 0" txClr="#0B132A" value="R" wd="60px" onClick={handleSize} ></CustomButton>
                                    <CustomButton bgClr={(size.list.includes('L')) ? size.status.active: size.status.inActive} brRad="100%" btnPdg="1rem" ftSize="1.1rem" ftWg="bold" mrgn="0.77vw 0" txClr="#0B132A" value="L" wd="60px" onClick={handleSize} ></CustomButton>
                                    <CustomButton bgClr={(size.list.includes('XL')) ? size.status.active: size.status.inActive} brRad="100%" btnPdg="1rem" ftSize="1.1rem" ftWg="bold" mrgn="0.77vw 0" txClr="#0B132A" value="XL" wd="60px" onClick={handleSize} ></CustomButton>
                                    <CustomButton bgClr={(size.list.includes('250 gr')) ? size.status.active: size.status.inActive} brRad="100%" btnPdg="1rem" ftSize="10px" ftWg="bold" mrgn="0.77vw 0" txClr="#0B132A" value="250 gr" wd="60px" onClick={handleSize} ></CustomButton>
                                    <CustomButton bgClr={(size.list.includes('300 gr')) ? size.status.active: size.status.inActive} brRad="100%" btnPdg="1rem" ftSize="10px" ftWg="bold" mrgn="0.77vw 0" txClr="#0B132A" value="300 gr" wd="60px" onClick={handleSize} ></CustomButton>
                                    <CustomButton bgClr={(size.list.includes('500 gr')) ? size.status.active: size.status.inActive} brRad="100%" btnPdg="1rem" ftSize="10px" ftWg="bold" mrgn="0.77vw 0" txClr="#0B132A" value="500 gr" wd="60px" onClick={handleSize} ></CustomButton>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='font-weight-bold text-coklat'>Input delivery methods :</p>
                            <p className='fs-8' style={{color: "#9F9F9F"}}></p>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <CustomButton bgClr={(delivery.list.includes('Home Delivery')) ? delivery.status.active: delivery.status.inActive} brRad="1rem" btnPdg="1rem 0.4rem" ftSize="14px" ftWg="bold" mrgn="0.77vw 0" txClr="#6A4029" value="Home Delivery" wd="100%" onClick={handleDelivery} ></CustomButton>
                            </div>
                            <div className="col-4">
                                <CustomButton bgClr={(delivery.list.includes('Dine in')) ? delivery.status.active: delivery.status.inActive} brRad="1rem" btnPdg="1rem 0.4rem" ftSize="14px" ftWg="bold" mrgn="0.77vw 0" txClr="#6A4029" value="Dine in" wd="100%" onClick={handleDelivery} ></CustomButton>
                            </div>
                            <div className="col-4">
                                <CustomButton bgClr={(delivery.list.includes('Take away')) ? delivery.status.active: delivery.status.inActive} brRad="1rem" btnPdg="1rem 0.4rem" ftSize="14px" ftWg="bold" mrgn="0.77vw 0" txClr="#4F5665" value="Take away" wd="100%" onClick={handleDelivery} ></CustomButton>
                            </div>
                        </div>
                        <div className='my-5'>
                            <CustomButton bgClr="#6A4029" brRad="1rem" btnPdg="1.1rem 0.4rem" ftSize="14px" ftWg="bold" mrgn="0.77vw 0" txClr="white" value="Save Product" wd="100%" onClick={handleSubmit}></CustomButton>
                            <CustomButton bgClr="#F8F8F8" brRad="1rem" btnPdg="1.1rem 0.4rem" ftSize="14px" ftWg="bold" mrgn="0.77vw 0" txClr="#4F5665" value="Cancel" wd="100%"></CustomButton>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AdminAddPromo
