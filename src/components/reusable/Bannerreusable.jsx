import { Link } from "react-router-dom"
import Container from "../Container"

const Bannerreusable = ({ headline, pname, home, page }) => {
    return (
        <section className="bg-[#F6F5FF] py-[100px] my-10">
            <Container>
                <div className="">
                    <h2 className="font-jose font-bold text-[36px] text-[#101750]">{headline}</h2>
                    <div className="">
                        <span className="font-lato font-medium text-[16px] text-[#000000]"><Link to="/">{home}</Link> &bull; {page} <span className="font-lato font-medium text-[16px] text-[#FB2E86]">&bull; {pname}</span> </span>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Bannerreusable