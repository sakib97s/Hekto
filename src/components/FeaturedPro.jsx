import Container from "./Container"
import chair from "../assets/Feature/chair.png"
import chair2 from "../assets/Feature/chair2.png"
import chair3 from "../assets/Feature/chair3.png"
import chair4 from "../assets/Feature/chair4.png"
import Featurereusable from "./reusable/Featurereusable"
import FeatureButtonreusable from "./reusable/FeatureButtonreusable"
import Slider from "react-slick";
import Viewreusable from "./reusable/Viewreusable"

const FeaturedPro = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="my-8">
            <Container className=''>
                <div className="text-center my-10">
                    <h2 className="font-jose font-bold text-[40px] text-[#1A0B5B]">Featured Products</h2>
                </div>
                <Slider {...settings}>
                    <div className="mb-3">
                        <div className="group  w-[270px] drop-shadow-lg">
                            <div className="relative">
                                <img src={chair} className="w-[270px] h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <Viewreusable />
                                <div className="absolute top-[-12px] left-[-12px] opacity-0 group-hover:opacity-100 group-hover:left-3 group-hover:top-3 ease-in-out duration-700">
                                    <Featurereusable />
                                </div>
                            </div>
                            <div className="">
                                <FeatureButtonreusable />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="group  w-[270px] drop-shadow-lg">
                            <div className="relative">
                                <img src={chair} className="w-[270px] h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <Viewreusable />
                                <div className="absolute top-[-12px] left-[-12px] opacity-0 group-hover:opacity-100 group-hover:left-3 group-hover:top-3 ease-in-out duration-700">
                                    <Featurereusable />
                                </div>
                            </div>
                            <div className="">
                                <FeatureButtonreusable />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="group  w-[270px] drop-shadow-lg">
                            <div className="relative">
                                <img src={chair2} className="w-[270px] h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <Viewreusable />
                                <div className="absolute top-[-12px] left-[-12px] opacity-0 group-hover:opacity-100 group-hover:left-3 group-hover:top-3 ease-in-out duration-700">
                                    <Featurereusable />
                                </div>
                            </div>
                            <div className="">
                                <FeatureButtonreusable />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="group  w-[270px] drop-shadow-lg">
                            <div className="relative">
                                <img src={chair3} className="w-[270px] h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <Viewreusable />
                                <div className="absolute top-[-12px] left-[-12px] opacity-0 group-hover:opacity-100 group-hover:left-3 group-hover:top-3 ease-in-out duration-700">
                                    <Featurereusable />
                                </div>
                            </div>
                            <div className="">
                                <FeatureButtonreusable />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="group w-[270px] drop-shadow-lg">
                            <div className="relative">
                                <img src={chair4} className="w-[270px] h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <Viewreusable />
                                <div className="absolute top-[-12px] left-[-12px] opacity-0 group-hover:opacity-100 group-hover:left-3 group-hover:top-3 ease-in-out duration-700">
                                    <Featurereusable />
                                </div>
                            </div>
                            <div className=" ">
                                <FeatureButtonreusable />
                            </div>
                        </div>
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default FeaturedPro