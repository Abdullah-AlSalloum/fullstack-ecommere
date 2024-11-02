import React from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props,ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function CountryDrapdown() {

    const [isOpenModel , setIsOpenModel] = useState(false);


    return (
        <>
            <Button className="countryDrop" onClick={()=>setIsOpenModel(true)}>
                <div className="info d-flex flex-column">
                    <span className='label'>Your Location</span>
                    <span className='name'>Syria</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModel} onClose={()=>setIsOpenModel(false)} className='locationModel' TransitionComponent={Transition}>
                <h3 className='mb-0'>Choose Your Delivery Location</h3>
                <p className=''>Enter your address and we will specify the offer for your area.</p>
                <Button className='close_' onClick={()=>setIsOpenModel(false)}><IoMdClose /></Button>
                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search your area" />
                    <Button>
                        <IoSearchOutline />
                    </Button>
                </div>

                <ul className='countryList mt-3'>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Syria</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Germany</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Turkey</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Jordan</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Syria</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Germany</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Turkey</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Jordan</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Syria</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Germany</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Turkey</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Jordan</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Syria</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Germany</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Turkey</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Jordan</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Syria</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Germany</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Turkey</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Jordan</Button></li>
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDrapdown;