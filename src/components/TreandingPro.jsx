import Container from "./Container"
import tren1 from "../assets/trending/tren1.png"
import tren2 from "../assets/trending/tren2.png"
import tren3 from "../assets/trending/tren3.png"
import tren4 from "../assets/trending/tren4.png"
import offone from "../assets/trending/off/offone.png"
import offtwo from "../assets/trending/off/offtwo.png"
import seat from "../assets/trending/seat/seat.png"
import seat2 from "../assets/trending/seat/seat2.png"
import seat3 from "../assets/trending/seat/seat3.png"
import LatestProreusable from "./reusable/LatestProreusable"
import NameTrendingreusable from "./reusable/NameTrendingreusable"
import uniqsofa from "../assets/shopex/uniqsofa.png"


const TreandingPro = ({ name, price, pricex }) => {
    return (
        <section>
            <Container>
                <div className="bg-[#F1F0FF] flex justify-center mb-10">
                    <img src={uniqsofa} alt="uniqsofa" />
                </div>
                <div className="text-center my-10">
                    <h2 className="font-jose font-bold text-[40px] text-[#1A0B5B]">Trending Products</h2>
                </div>
                <div className="flex justify-around items-center mb-10">
                    <div className="">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren1} className="w-[200px] h-[200px]" alt="tren1" />
                                <LatestProreusable />
                            </div>
                            <NameTrendingreusable name='Cantilever chair' price='$26.00' pricex='$42.00' />
                        </div>
                    </div>
                    <div className="">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren2} className="w-[200px] h-[200px]" alt="tren2" />
                                <LatestProreusable />
                            </div>
                            <NameTrendingreusable name='Cantilever chair' price='$26.00' pricex='$42.00' />
                        </div>
                    </div>
                    <div className="">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren3} className="w-[200px] h-[200px]" alt="tren3" />
                                <LatestProreusable />
                            </div>
                            <NameTrendingreusable name='Cantilever chair' price='$26.00' pricex='$42.00' />
                        </div>
                    </div>
                    <div className="">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren4} className="w-[200px] h-[200px]" alt="tren4" />
                                <LatestProreusable />
                            </div>
                            <NameTrendingreusable name='Cantilever chair' price='$26.00' pricex='$42.00' />
                        </div>
                    </div>
                    <div className="">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren1} className="w-[200px] h-[200px]" alt="tren1" />
                                <LatestProreusable />
                            </div>
                            <NameTrendingreusable name='Cantilever chair' price='$26.00' pricex='$42.00' />
                        </div>
                    </div>
                </div>
                <div className="my-10 flex justify-between items-center">
                    <div className="w-[30%]">
                        <div className="relative border-[1px] border-[#FFF6FB] bg-[#FFF6FB] p-[25px] pb-[190px]">
                            <h6 className="font-jose font-semibold text-[26px] text-[#151875]">23% off in all products</h6>
                            <button className="font-lato font-semibold text-[16px] text-[#FB2E86] border-b-[2px] border-[#FB2E86]">Shop Now</button>
                            <div className="absolute bottom-0 right-0">
                                <img src={offtwo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[35%]">
                        <div className="relative border-[1px] border-[#EEEFFB] bg-[#EEEFFB] p-[25px] pb-[190px]">
                            <h6 className="font-jose font-semibold text-[26px] text-[#151875]">23% off in all products</h6>
                            <button className="font-lato font-semibold text-[16px] text-[#FB2E86] border-b-[2px] border-[#FB2E86]">View Collection</button>
                            <div className="absolute bottom-0 right-0">
                                <img src={offone} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <div className="flex justify-evenly items-center">
                            <img src={seat} className="px-[20px] py-[5px] bg-[#F5F6F8]" alt="seat" />
                            <div className="">
                                <h5 className="font-jose font-semibold text-[16px] text-[#151875]">Executive Seat chair</h5>
                                <h6 className="font-jose font-normal text-[12px] text-[#151875] line-through">$32.00</h6>
                            </div>
                        </div>
                        <div className="flex justify-evenly items-center my-5">
                            <img src={seat2} className="px-[20px] py-[5px] bg-[#F5F6F8]" alt="seat2" />
                            <div className="">
                                <h5 className="font-jose font-semibold text-[16px] text-[#151875]">Executive Seat chair</h5>
                                <h6 className="font-jose font-normal text-[12px] text-[#151875] line-through">$32.00</h6>
                            </div>
                        </div>
                        <div className="flex justify-evenly items-center">
                            <img src={seat3} className="px-[20px] py-[4px] bg-[#F5F6F8]" alt="seat3" />
                            <div className="">
                                <h5 className="font-jose font-semibold text-[16px] text-[#151875]">Executive Seat chair</h5>
                                <h6 className="font-jose font-normal text-[12px] text-[#151875] line-through">$32.00</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default TreandingPro