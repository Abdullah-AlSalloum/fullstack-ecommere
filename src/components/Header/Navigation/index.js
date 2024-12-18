import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

// import { CiHome } from "react-icons/ci";
// import { GiClothes } from "react-icons/gi";
// import { SiStmicroelectronics } from "react-icons/si";
// import { MdBakeryDining } from "react-icons/md";
// import { GiTomato } from "react-icons/gi";
// import { RiBloggerLine } from "react-icons/ri";
// import { MdOutlineContacts } from "react-icons/md";


function Navigation() {

    const [isOpenSideBarVal, setIsOpenSideBarVal] = useState(false);
    return (
        <>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 navPart1">
                            <div className="catWrapper">
                                <Button className="allCatTab align-items-center" onClick={() => setIsOpenSideBarVal(!isOpenSideBarVal)}>
                                    <span className="icon1 mr-2"><IoIosMenu /></span>
                                    <span className="text">ALL CATEGORIES</span>
                                    <span className="icon2 ml-2"><FaAngleDown /></span>
                                </Button>
                                <div className={`sidebarNav ${isOpenSideBarVal === true ? 'open' : ''}`}>
                                    <ul>
                                        <li><Link to="/"><Button>Men <FaAngleRight className="ml-auto"/></Button></Link>
                                            <div className="submenu">
                                                <Link to="/"><Button>Clothes</Button></Link>
                                                <Link to="/"><Button>Footwear</Button></Link>
                                                <Link to="/"><Button>Watches</Button></Link>
                                                <Link to="/"><Button>Clothes</Button></Link>
                                                <Link to="/"><Button>Footwear</Button></Link>
                                                <Link to="/"><Button>Watches</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link to="/"><Button>Women <FaAngleRight className="ml-auto"/></Button></Link></li>
                                        <li><Link to="/"><Button>Beauty</Button></Link></li>
                                        <li><Link to="/"><Button>Watches</Button></Link></li>
                                        <li><Link to="/"><Button>Kids</Button></Link></li>
                                        <li><Link to="/"><Button>Gifts</Button></Link></li>
                                        <li><Link to="/"><Button>Men</Button></Link></li>
                                        <li><Link to="/"><Button>Women</Button></Link></li>
                                        <li><Link to="/"><Button>Beauty</Button></Link></li>
                                        <li><Link to="/"><Button>Watches</Button></Link></li>
                                        <li><Link to="/"><Button>Kids</Button></Link></li>
                                        <li><Link to="/"><Button>Gifts</Button></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 navPart2 d-flex align-items-center">
                            <ul className="list list-inline ml-auto">
                                <li className="list-inline-item"><Link to="/"><Button>Home</Button></Link></li>
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Men</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothes</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothes</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Women</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothes</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothes</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className="list-inline-item"><Link to="/"><Button>Beauty</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothes</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothes</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className="list-inline-item"><Link to="/"><Button>Watched</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothes</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothes</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div></li>
                                <li className="list-inline-item"><Link to="/"><Button>Kids</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothes</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothes</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div></li>
                                <li className="list-inline-item"><Link to="/"><Button>Gifts</Button></Link></li>
                                <li className="list-inline-item"><Link to="/"><Button>Contact</Button></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;