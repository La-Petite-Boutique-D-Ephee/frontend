"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image.js";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Title } from "../../title/Title.jsx";
import { articles } from "./slide.js";

export function Articles() {
  return (
    <>
      <section className="relative mt-32 md:mt-40">
        <Title
          title="Nos dernières actualités"
          subtitle="Découvrez nos articles"
        />
        <Swiper
          className="my-16"
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              navigation: {
                enabled: false,
              },
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              navigation: {
                enabled: true,
              },
            },
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {articles.map((article, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="slide">
                  <Image
                    src={article.thumbnail}
                    loading="lazy"
                    alt={article.title}
                    className="w-full"
                  />
                  <div className="px-4 py-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl">{article.title}</h3>
                      <p className="text-body text-sm">{article.createdAt}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-base text-body line-clamp-2">
                        {article.content}
                      </p>
                      <div className="mt-4 plus text-right">
                        <span className="text-sm">Voir plus</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
