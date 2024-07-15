import { useState } from 'react';
import Container from "./Container";
import LatestProreusable from './reusable/LatestProreusable';
import latest2 from "../assets/latestpro/latest2.png"
import latest3 from "../assets/latestpro/latest3.png"
import latest4 from "../assets/latestpro/latest4.png"
import latest5 from "../assets/latestpro/latest5.png"
import latest1 from "../assets/latestpro/latest1.png"
import NameProLatest from './reusable/NameProLatest';
import sale from "../assets/latestpro/sale.png"

const LatestProduct = ({ name, price, pricex }) => {
    const [activeTab, setActiveTab] = useState('NewArrival');

    return (
        <section>
            <Container className='my-10'>
                <div className="text-center ">
                    <h2 className='font-jose font-bold text-[40px] text-[#1A0B5B]'>Leatest Products</h2>
                </div>
                <div className="">
                    <div className="mb-4">
                        <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-4 font-lato font-normal text-[18px] ${activeTab === 'NewArrival' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="NewArrival-tab" onClick={() => setActiveTab('NewArrival')} type="button" role="tab" aria-controls="NewArrival" aria-selected={activeTab === 'NewArrival'}>New Arrival</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-4 font-lato font-normal text-[18px] ${activeTab === 'BestSeller' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="BestSeller-tab" onClick={() => setActiveTab('BestSeller')} type="button" role="tab" aria-controls="BestSeller" aria-selected={activeTab === 'BestSeller'}>Best Seller</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-4 font-lato font-normal text-[18px] ${activeTab === 'Featured' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="Featured-tab" onClick={() => setActiveTab('Featured')} type="button" role="tab" aria-controls="Featured" aria-selected={activeTab === 'Featured'}>Featured</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-4 font-lato font-normal text-[18px] ${activeTab === 'SpecialOffer' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="SpecialOffer-tab" onClick={() => setActiveTab('SpecialOffer')} type="button" role="tab" aria-controls="SpecialOffer" aria-selected={activeTab === 'SpecialOffer'}>Special Offer</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div className={`${activeTab === 'NewArrival' ? 'block' : 'hidden'}  rounded-lg bg-gray-50 dark:bg-gray-800`} id="NewArrival" role="tabpanel" aria-labelledby="NewArrival-tab">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest2} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest3} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                        <div className="absolute top-[20px] left-[20px]">
                                            <img src={sale} alt="" />
                                        </div>
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest4} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest5} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest3} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest4} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest5} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest1} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                        <div className="absolute top-[20px] left-[20px]">
                                            <img src={sale} alt="" />
                                        </div>
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                            </div>
                        </div>
                        <div className={`${activeTab === 'BestSeller' ? 'block' : 'hidden'} rounded-lg bg-gray-50 dark:bg-gray-800`} id="BestSeller" role="tabpanel" aria-labelledby="BestSeller-tab">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest4} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest4} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest4} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest4} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest4} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                            </div>
                        </div>
                        <div className={`${activeTab === 'Featured' ? 'block' : 'hidden'} rounded-lg bg-gray-50 dark:bg-gray-800`} id="Featured" role="tabpanel" aria-labelledby="Featured-tab">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest4} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest3} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest3} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest2} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest5} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest3} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                            </div>
                        </div>
                        <div className={`${activeTab === 'SpecialOffer' ? 'block' : 'hidden'} rounded-lg bg-gray-50 dark:bg-gray-800`} id="SpecialOffer" role="tabpanel" aria-labelledby="SpecialOffer-tab">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest5} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest5} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest4} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest5} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest5} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                                <div className="group mb-[20px]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest4} className="w-[245px] h-[245px] " alt="" />
                                        <LatestProreusable />
                                    </div>
                                    <NameProLatest name='Comfort Handy Craft' price='$42.00' pricex='$65.00' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default LatestProduct;
