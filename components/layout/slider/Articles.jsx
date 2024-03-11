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
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
              navigation: {
                enabled: true,
              },
            },
            1540: {
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
                    className="h-full w-full"
                  />
                  <div className="px-4 py-4">
                    <div className="flex items-center justify-between">
                      <h3 className="line-clamp-1 text-xl">{article.title}</h3>
                      <p className="text-body text-sm">{article.createdAt}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-body line-clamp-2 text-base">
                        {article.content}
                      </p>
                      <div className="plus relative mt-4 cursor-pointer text-right before:absolute before:bottom-0 before:h-[2px] before:w-[10%] before:rounded-sm before:border-b-2 before:border-secondary-500 before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] hover:before:w-[12%]">
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
