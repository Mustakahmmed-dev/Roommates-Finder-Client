
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="rounded-xl bg-white shadow-lg"
            >
                <SwiperSlide>
                    <div className="p-6 text-center">
                        <p className="text-lg italic mb-4">
                            “FindMates helped me find a roommate within days. The platform is clean,
                            intuitive, and I felt safe connecting with people.”
                        </p>
                        <h4 className="text-sm font-semibold">— Sarah J., Student</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-6 text-center">
                        <p className="text-lg italic mb-4">
                            “I posted my spare room and got responses immediately. It’s the easiest way
                            I’ve ever found a reliable flatmate.”
                        </p>
                        <h4 className="text-sm font-semibold">— Ahmed K., Freelancer</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-6 text-center">
                        <p className="text-lg italic mb-4">
                            “This app made moving to a new city so much less stressful. I found a shared
                            space in my budget quickly!”
                        </p>
                        <h4 className="text-sm font-semibold">— Priya M., Intern</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-6 text-center">
                        <p className="text-lg italic mb-4">
                            “As someone with an extra room, FindMates gave me a smooth and fast way to
                            find respectful and friendly roommates.”
                        </p>
                        <h4 className="text-sm font-semibold">— John D., Remote Worker</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonials;