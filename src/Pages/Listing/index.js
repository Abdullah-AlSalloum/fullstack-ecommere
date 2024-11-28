import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { BiBorderRadius } from "react-icons/bi";

function Listing() {
  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <SideBar />

            <div className="content_right">
              <Link to={"#"}>
                <img
                  src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427470/1731427468095_New_Project_13.jpg"
                  className="w-100"
                  style={{borderRadius: "8px"}}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Listing;
