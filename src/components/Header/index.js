import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import CountryDrapdown from "../CountryDropdown";
import Button from "@mui/material/Button";
import { CiUser } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";


function Header() {
    const context = useContext(MyContext);
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Wellcome to full Stack E-Commerce
                        </p>
                    </div>
                </div>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex aline-items-center col-sm-2">
                                <Link to={"/"}>
                                    <img src={Logo} alt="logo"></img>
                                </Link>
                            </div>
                            <div className="col-sm-10 d-flex aline-items-center part2">
                                {context.countryList.length !== 0 && <CountryDrapdown />}
                                <SearchBox />


                                {/** user Icon  */}

                                <div className="part3 d-flex align-items-center ml-auto">
                                    <Button className="circle mr-3">
                                        <CiUser />
                                    </Button>
                                    <div className="ml-auto cartTab d-flex align-items-center">
                                        <span className="price">$9.99</span>
                                        <div className="position-relative ml-2">
                                            <Button className="circle ml-2">
                                                <IoBagHandleOutline />
                                            </Button>
                                            <span className="count d-flex align-items-center justify-content-center">
                                                1
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Navigation />

            </div>
        </>
    );
}

export default Header;