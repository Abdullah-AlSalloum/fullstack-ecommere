import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { SiStmicroelectronics } from "react-icons/si";
import { MdBakeryDining } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { RiBloggerLine } from "react-icons/ri";
import { MdOutlineContacts } from "react-icons/md";


function Navigation(){
    return(
        <>
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 navPart1">
                        <Button className="allCatTab align-items-center">
                            <span className="icon1 mr-2"><IoIosMenu /></span>
                            <span className="text">ALL CATEGORIES</span>
                            <span className="icon2 ml-2"><FaAngleDown /></span>
                        </Button>
                    </div>
                    <div className="col-sm-9 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ml-auto">
                            <li className="list-inline-item"><Link to="/"><CiHome />&nbsp; Home</Link></li>
                            <li className="list-inline-item"><Link to="/"><GiClothes />&nbsp; Fashion</Link></li>
                            <li className="list-inline-item"><Link to="/"><SiStmicroelectronics />&nbsp; Electronics</Link></li>
                            <li className="list-inline-item"><Link to="/"><MdBakeryDining />&nbsp; Bakery</Link></li>
                            <li className="list-inline-item"><Link to="/"><GiFullPizza />&nbsp; Grocery</Link></li>
                            <li className="list-inline-item"><Link to="/"><RiBloggerLine />&nbsp; Blog</Link></li>
                            <li className="list-inline-item"><Link to="/"><MdOutlineContacts />&nbsp; Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navigation;