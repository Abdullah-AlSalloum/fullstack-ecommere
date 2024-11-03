import React, { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CountryDrapdown() {

    const [isOpenModel, setIsOpenModel] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [countryList, setCountryList] = useState([]);
    const context = useContext(MyContext);

    function selectCountry(index, country) {
        setSelectedTab(index)
        setIsOpenModel(false)
        context.setSelectedCountry(country);
    }

    useEffect(() => {
        setCountryList(context.countryList)
    }, [])

    function filterList(event) {
        const keyword = event.target.value.toLowerCase();

        if (keyword !== "") {
            const list = countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword)
            });
            setCountryList(list)
        } else {
            setCountryList(context.countryList)

        }


    }


    return (
        <>
            <Button className="countryDrop" onClick={() => setIsOpenModel(true)}>
                <div className="info d-flex flex-column">
                    <span className='label'>Your Location</span>
                    <span className='name'>{context.selectedCountry !== "" ?
                        context.selectedCountry.length > 10 ? context.selectedCountry.substr(0, 10) + '...'
                            : context.selectedCountry : "Select a location"}</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModel} onClose={() => setIsOpenModel(false)} className='locationModel' TransitionComponent={Transition}>
                <h3 className='mb-0'>Choose Your Delivery Location</h3>
                <p className=''>Enter your address and we will specify the offer for your area.</p>
                <Button className='close_' onClick={() => setIsOpenModel(false)}><IoMdClose /></Button>
                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search your area" onChange={filterList} />
                    <Button>
                        <IoSearchOutline />
                    </Button>
                </div>

                <ul className='countryList mt-3'>
                    {countryList?.length !== 0 && countryList?.map((item, index) => {
                        return (
                            <li key={index}><Button onClick={() => selectCountry(index, item.country)}
                                className={`${selectedTab === index ? 'active' : ''}`}>{item.country}</Button></li>
                        )
                    })}


                </ul>
            </Dialog>
        </>
    )
}

export default CountryDrapdown;