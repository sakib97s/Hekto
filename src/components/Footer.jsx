import Container from "./Container"
import logo from "../assets/Hekto.png"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <section className="bg-[#EEEFFB] py-10">
                <Container>
                    <div className="flex ">
                        <div className="w-[30%]">
                            <img src={logo} alt="" />
                            <div className="border-[1px] border-[#FFFFFF] w-[377px] rounded-md my-7">
                                <input type="email" name="" placeholder="Enter Email Address" className="w-[240px] border-none placeholder:font-lato placeholder:font-normal placeholder:text-[16px] placeholder:text-[#8A8FB9]" id="" />
                                <button className="font-lato font-medium text-[16px] text-[#fff] py-[9px] px-[40px] bg-[#FB2E86] rounded-md">Sign Up</button>
                            </div>
                            <div className="">
                                <p className="font-lato font-normal text-[16px] text-[#8A8FB9]">Contact Info</p>
                                <p className="font-lato font-normal text-[16px] text-[#8A8FB9]">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                            </div>
                        </div>
                        <div className="w-[60%] flex justify-around">
                            <div className="">
                                <h6 className="pb-[20px] font-jose font-semibold text-[22px] text-[#000000]">Catagories</h6>
                                <ul>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">Laptops & Computers</li>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">Cameras & Photography</li>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">Smart Phones & Tablets</li>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">Video Games & Consoles</li>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">Waterproof Headphones</li>
                                </ul>
                            </div>
                            <div className="">
                                <h6 className="pb-[20px] font-jose font-semibold text-[22px] text-[#000000]">Customer Care</h6>
                                <ul>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">My Account</li>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">Discount</li>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">Returns</li>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">Orders History</li>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">Order Tracking</li>
                                </ul>
                            </div>
                            <div className="">
                                <h6 className="pb-[20px] font-jose font-semibold text-[22px] text-[#000000]">Pages</h6>
                                <ul>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9] hover:text-[#FB2E86] ease-in-out duration-500"><Link to='/About-Us'>About Us</Link></li>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">Browse the Shop</li>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">Category</li>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">Pre-Built Pages</li>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">Visual Composer Elements</li>
                                    <li className="py-[10px] font-lato font-normal text-[16px] text-[#8A8FB9]">WooCommerce Pages</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="bg-[#E7E4F8] py-[17px]">
                <Container className='flex justify-around items-center'>
                    <p className="font-lato font-semibold text-[16px] text-[#9DA0AE]">©Webecy - All Rights Reserved</p>
                    <div className="flex items-center w-[8%] justify-between">
                        <div className="p-1 bg-[#151875] rounded-full">
                            <FaFacebookF className="text-[#fff] w-[15px] h-[15px]" />
                        </div>
                        <div className="p-1 bg-[#151875] rounded-full">
                            <FaInstagram className="text-[#fff] w-[15px] h-[15px]" />
                        </div>
                        <div className="p-1 bg-[#151875] rounded-full">
                            <FaTwitter className="text-[#fff] w-[15px] h-[15px]" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Footer