"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Article = {
  title?: string;
  summary?: string;
  url?: string;
  mediaOutletName?: string;
  publishedAt?: string;
  analysisId?: string;
};

export default function TrendingSlider({ articles }: { articles: Article[] }) {
  const formatDate = (iso?: string) => {
    if (!iso) return "";
    try {
      const d = new Date(iso);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${y}-${m}-${day}`;
    } catch {
      return iso ?? "";
    }
  };

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={45}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      className="sec04_slider swiper"
    >
      {articles.map((a, i) => (
        <SwiperSlide key={a.analysisId ?? `${a.title}-${i}`}>
          <div className="swiper-slide-inner ">
            <div className="sec04_img">
              <img src="/img/main/img_sec04_img.png" alt="" />
            </div>

            <ul className="sec04_txtbox">
              <li className="sec04_tit">
                {a.title ?? `For frontier models ${i + 1}`}
              </li>
              <li className="sec04_txt p_txt">
                {a.summary ??
                  "For frontier models For frontier modelsFor frontier models For frontier models…"}
              </li>
            </ul>

            <div className="sec04_txt_bott">
              <ul className="sec04_new_ect">
                <li>{formatDate(a.publishedAt)}</li>
                <li>{a.mediaOutletName ?? ""}</li>
              </ul>
              <a
                href={a.url ?? "#"}
                className="se04_more_btn"
                target="_blank"
                rel="noreferrer"
              >
                MORE
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
