import Button from "@mui/material/Button";
import { IoSearchOutline } from "react-icons/io5";

function SearchBox() {
  return (
    <div className="headerSearch ml-3 mr-3">
      <input type="text" placeholder="Search for product" />
      <Button>
        <IoSearchOutline />
      </Button>
    </div>
  );
}

export default SearchBox;
