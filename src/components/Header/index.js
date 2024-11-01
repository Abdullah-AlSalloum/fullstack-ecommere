import Logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";
import CountryDrapdown from "../CountryDropdown";
import { IoSearchOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import { CiUser } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";


function Header(){
    return( 
    <>
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">Wellcome to full Stack E-Commerce</p>
                </div>
            </div>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex aline-items-center col-sm-2">
                            <Link to={'/'}><img src={Logo} alt="logo"></img></Link>
                        </div>
                        <div className="col-sm-10 d-flex aline-items-center part2">
                            <CountryDrapdown />

                            {/* header section */}
                            <div className="headerSearch ml-3 mr-3">
                                <input type="text" placeholder="Search for product"/>
                                <Button><IoSearchOutline /></Button>
                            </div>


                            {/** user Icon  */}

                            <div className="part3 d-flex align-items-center ml-auto">
                               <Button className="circle mr-3"><CiUser /></Button>

                               <div className="ml-auto cartTab d-flex align-items-center">
                                    <span className="price">$9.99</span>
                                    <div className="position-relative ml-2">
                                    <Button className="circle ml-2"><IoBagHandleOutline /></Button>
                                    <span className="count d-flex align-items-center justify-content-center">1</span>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </>);
}


export default Header;