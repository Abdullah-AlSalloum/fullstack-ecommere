import SideBar from "../../components/SideBar";

function Listing(){
    return(
        <>
        <section className="product_Listing_Page">
            <div className="container">
                <div className="productListing d-flex">
                    <SideBar />

                    <div className="content_right">
                        content_right
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default Listing;