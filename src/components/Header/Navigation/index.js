import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { SiStmicroelectronics } from "react-icons/si";
import { MdBakeryDining } from "react-icons/md";
import { GiTomato } from "react-icons/gi";
import { RiBloggerLine } from "react-icons/ri";
import { MdOutlineContacts } from "react-icons/md";


function Navigation(){
    return(
        <>
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 navPart1">
                        <Button className="allCatTab align-items-center">
                            <span className="icon1 mr-2"><IoIosMenu /></span>
                            <span className="text">ALL CATEGORIES</span>
                            <span className="icon2 ml-2"><FaAngleDown /></span>
                        </Button>
                    </div>
                    <div className="col-sm-10 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ml-auto">
                            <li className="list-inline-item"><Link to="/"><Button><CiHome />&nbsp; Home</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button><GiClothes />&nbsp; Fashion</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button><SiStmicroelectronics />&nbsp; Electronics</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button><MdBakeryDining />&nbsp; Bakery</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button><GiTomato />&nbsp; Grocery</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button><RiBloggerLine />&nbsp; Blog</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button><MdOutlineContacts />&nbsp; Contact</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navigation;