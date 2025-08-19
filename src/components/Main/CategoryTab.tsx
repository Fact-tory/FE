"use client";

import { useState, MouseEvent, useMemo } from "react";
import type { CategoryGroup, CategoryItem } from "@/types/Main/dashboard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  categories: CategoryGroup[];
};

export default function CategoryTab({ categories }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);

  const safeCategories =
    categories.length > 0
      ? categories
      : [
          {
            categoryId: 1,
            categoryName: "정치",
            totalCount: 0,
            articles: [],
          },
          {
            categoryId: 2,
            categoryName: "경제",
            totalCount: 0,
            articles: [],
          },
          {
            categoryId: 3,
            categoryName: "사회",
            totalCount: 0,
            articles: [],
          },
          {
            categoryId: 4,
            categoryName: "문화",
            totalCount: 0,
            articles: [],
          },
        ];

  const activeArticles: CategoryItem[] = useMemo(
    () => safeCategories[activeIdx]?.articles ?? [],
    [safeCategories, activeIdx]
  );

  const onTabClick = (e: MouseEvent<HTMLAnchorElement>, idx: number) => {
    e.preventDefault();
    setActiveIdx(idx);
  };

  return (
    <div>
      <div className="sec04_tab_wrap">
        <ul className="sec04_tab">
          {safeCategories.map((c, idx) => (
            <li
              key={`${c.categoryId}-${idx}`}
              className={idx === activeIdx ? "on" : ""}
            >
              <a href="#" onClick={(e) => onTabClick(e, idx)}>
                {c.categoryName}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sec04_slider_wrap">
        <Swiper
          modules={[Pagination]}
          spaceBetween={45}
          slidesPerView={1}
          loop={activeArticles.length > 1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="sec04_slider swiper"
        >
          {activeArticles.length > 0 ? (
            activeArticles.map((a, idx) => (
              <SwiperSlide key={`${a.analysisId ?? a.id}-${idx}`}>
                <div className="swiper-slide-inner ">
                  <div className="sec04_img">
                    <img src="/img/main/img_sec04_img.png" alt="" />
                  </div>

                  <ul className="sec04_txtbox">
                    <li className="sec04_tit">{a.title}</li>
                    <li className="sec04_txt p_txt">{a.summary ?? ""}</li>
                  </ul>

                  <div className="sec04_txt_bott">
                    <ul className="sec04_new_ect">
                      <li></li>
                      <li></li>
                    </ul>
                    <a
                      href={`/analysis/${a.analysisId}`}
                      className="se04_more_btn"
                    >
                      MORE
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="swiper-slide-inner ">
                <div className="sec04_txtbox">
                  <li className="sec04_tit">기사 없음</li>
                  <li className="sec04_txt p_txt">
                    이 카테고리에 표시할 기사가 없습니다.
                  </li>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}
