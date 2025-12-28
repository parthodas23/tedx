import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const organizers = [
  {
    id: 1,
    name: "Shafayet Ullah",
    role: "Lead Organizer And Licensee",
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942376/Shafayet_Ullah_w098et.jpg",
  },
  { 
    id: 2, 
    name: "Umme Hafsa", 
    role: "Curator", 
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942377/umme_hafsa_bezeeb.jpg" 
  },
  { 
    id: 3, 
    name: "Mahmudul Hasan Sojib", 
    role: "Curator", 
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942376/Mahmudul_Hasan_Sojib_rxcmoo.jpg" 
  },
  { 
    id: 4, 
    name: "Nayem Khalifa", 
    role: "Curator", 
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942376/nayem_khalifa_mval17.jpg" 
  },
  { 
    id: 6, 
    name: "Oishi Dey", 
    role: "Sponsor Officer", 
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942374/oishi_dey_woltp2.jpg" 
  },
  { 
    id: 7, 
    name: "Efty Al Maruf", 
    role: "Head Of Marketing", 
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942374/Efty_al_maruf_zwmmlo.jpg" 
  },
  {
    id: 8,
    name: "Md. Siamul Islam",
    role: "Head Of Operations",
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942374/Siamul_Islam_nxfcnn.jpg",
  },
  {
    id: 10,
    name: "Moriom Sabia",
    role: "Head Of Partnership",
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942376/Moriom_Sabia_fbjo66.jpg",
  },
  {
    id: 12,
    name: "Abedur Rahman Sayem",
    role: "Head Of Event Management",
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942375/Abedur_Rahman_Sayem_qfdet7.jpg",
  },
  {
    id: 13,
    name: "Md. Junaed Al Sajid",
    role: "Event Management Officer",
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942375/Juned_Al_Sajid_dlnhho.jpg",
  },
  {
    id: 14,
    name: "Monjoy Kumar Adhikary",
    role: "Event Management Officer",
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942376/monjoy_kumar_adhikari_oqxhq1.jpg",
  },
  {
    id: 15,
    name: "Taslim Ahmed Nadim",
    role: "Event Management Executive",
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942376/taslim_ahmed_nadim_vo2uyf.jpg",
  },
  { 
    id: 16, 
    name: "Tanvir Mahtab", 
    role: "Head Of IT", 
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942377/Tanvir_Mahtab_l0iewx.jpg" 
  },
  { 
    id: 17, 
    name: "Aysha Siddika Papry", 
    role: "IT Officer", 
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942375/aysha_siddika_papry_njjplj.jpg" 
  },
  {
    id: 18,
    name: "Abida Islam Ahona",
    role: "Head Of Communication",
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942375/ABIDA_ISLAM_AHONA_tknia6.jpg",
  },
  {
    id: 19,
    name: "Tanjila Islam",
    role: "Communication Officer",
    image: "https://res.cloudinary.com/dkmwu9ec1/image/upload/v1766942376/TANJILA_ISLAM_gtqwfk.jpg",
  },
];

const Organizers = () => {
  return (
    <section
      id="organizers"
      className="py-24 bg-transparent text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="text-red-600 font-bold uppercase text-sm mb-4"
          >
            The Team Behind the Magic
          </motion.h2>
          <motion.h3
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-black italic tracking-tighter"
          >
            ORGANIZING COMMITTEE
          </motion.h3>
        </div>

        {/* 3D Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative px-4"
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="committee-swiper pb-20"
          >
            {organizers.map((member) => (
              <SwiperSlide
                key={member.id}
                className="max-w-[280px] md:max-w-[350px]"
              >
                <div className="group relative perspective-1000">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-zinc-800 transition-all duration-500 md:group-hover:border-red-600 md:group-hover:rotate-y-12 transform-gpu">
                    {/* Image Logic: Color on mobile, Grayscale on Desktop hover */}
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-700
                                   grayscale-0 brightness-100 
                                   md:grayscale md:brightness-50 
                                   md:group-hover:grayscale-0 md:group-hover:brightness-100 md:group-hover:scale-110"
                      />
                    </div>

                    {/* Overlay Tint */}
                    <div className="absolute inset-0 bg-red-600/10 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Text Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                      <h4 className="text-xl md:text-2xl font-black text-white translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                        {member.name}
                      </h4>
                      <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mt-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 delay-100">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Visual Glow behind card */}
                  <div className="absolute -z-10 inset-0 bg-red-600/20 blur-2xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-75"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @media (min-width: 768px) {
          .rotate-y-12 {
            transform: rotateY(-12deg);
          }
        }
        .committee-swiper {
          overflow: visible !important;
        }
        .swiper-pagination-bullet {
          background: #444 !important;
          height: 4px !important;
          width: 15px !important;
          border-radius: 2px !important;
          transition: all 0.4s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #eb0028 !important;
          width: 30px !important;
        }
      `}</style>
    </section>
  );
};

export default Organizers;