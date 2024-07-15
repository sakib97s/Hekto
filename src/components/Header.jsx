import Container from "./Container"
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { RiArrowDropDownLine, RiShoppingCartFill } from "react-icons/ri";
import { FaHeart, FaRegUser } from "react-icons/fa";


const Header = () => {
    return (
        <section className="bg-[#7E33E0] py-[14px]">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="w-[25%] flex items-center justify-between">
                        <div className="flex items-center">
                            <MdOutlineMail className="text-[#F1F1F1] text-[16px] mr-[10px]" />
                            <p className="font-jose font-semibold text-[#F1F1F1] text-[16px]">mhhasanul@gmail.com</p>
                        </div>
                        <div className="flex items-center">
                            <IoCall className="text-[#F1F1F1] text-[16px] mr-[10px]" />
                            <p className="font-jose font-semibold text-[#F1F1F1] text-[16px]">(12345)67890</p>
                        </div>
                    </div>
                    <div className="w-[25%] flex items-center justify-between">
                        <div className="flex items-center ">
                            <h6 className="font-jose font-semibold text-[#F1F1F1] text-[16px]">English</h6>
                            <RiArrowDropDownLine className="text-[#F1F1F1] h-[30px] w-[30px] ml-[3px]" />
                        </div>
                        <div className="flex items-center ">
                            <h6 className="font-jose font-semibold text-[#F1F1F1] text-[16px]">UDS</h6>
                            <RiArrowDropDownLine className="text-[#F1F1F1] h-[30px] w-[30px] ml-[3px]" />
                        </div>
                        <div className="flex items-center">
                            <h6 className="font-jose font-semibold text-[#F1F1F1] text-[16px]">Login</h6>
                            <FaRegUser className="text-[#F1F1F1] h-[14px] w-[14px] ml-[5px]" />
                        </div>
                        <div className="flex items-center">
                            <h6 className="font-jose font-semibold text-[#F1F1F1] text-[16px]">Wishlist</h6>
                            <FaHeart className="text-[#F1F1F1] ml-[5px]" />
                        </div>
                        <RiShoppingCartFill className="text-[#F1F1F1] h-[20px] w-[20px]" />
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Header