import { Link } from "react-router-dom";
import Hekto from "../assets/Hekto.png"
import Container from "./Container"
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Home');

    return (
        <section className="my-[15px]">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="w-[10%]">
                        <Link to="/"><img src={Hekto} alt="Hekto" /></Link>
                    </div>
                    <div className="flex justify-between items-center w-[80%]">
                        <ul className="flex justify-between items-center w-[50%]">
                            <li className={`font-lato font-normal text-[16px] hover:text-[#FB2E86] ${activeTab === 'Home' ? 'text-[#FB2E86]' : 'text-[#0D0E43]'}`} id="Home-tab" onClick={() => setActiveTab('Home')}><Link to="/">Home</Link></li>
                            <li className={`font-lato font-normal text-[16px] hover:text-[#FB2E86] ${activeTab === 'Page' ? 'text-[#FB2E86]' : 'text-[#0D0E43]'}`} onClick={() => setActiveTab('Page')}><Link to="/page">Pages</Link></li>
                            <li className={`font-lato font-normal text-[16px] hover:text-[#FB2E86] ${activeTab === 'blog' ? 'text-[#FB2E86]' : 'text-[#0D0E43]'}`} onClick={() => setActiveTab('blog')}><Link to="/blog">Blog</Link></li>
                            <li className="font-lato font-normal text-[#0D0E43] text-[16px] hover:text-[#FB2E86]">Products</li>
                            <li className="font-lato font-normal text-[#0D0E43] text-[16px] hover:text-[#FB2E86]">Shop</li>
                            <li className="font-lato font-normal text-[#0D0E43] text-[16px] hover:text-[#FB2E86]">Contact</li>
                        </ul>
                        <div className="">
                            <div className="relative">
                                <input type="search" className='border-[1px] border-[#D9D9D9] outline-none w-[260px] h-[38px] p-2 mr-[38px] bg-[#D9D9D9]' placeholder="Search Products" />
                                <div className="absolute top-[50%] translate-y-[-50%] right-[0px] border-[1px] border-[#FB2E86] bg-[#FB2E86] p-[10px]">
                                    <FaSearch className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar