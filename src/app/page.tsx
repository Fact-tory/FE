"use client";

import LayoutWithSidebar from "../components/Sidebar/SidebarLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Home() {
  const categories = ["정치", "경제", "사회", "문화"];
  const slideData = [1, 2, 3, 4];

  return (
    <LayoutWithSidebar>
      <section className="section01">
        <div className="inner_size sec01_inner">
          <div className="sec01_left">
            <p className="sec01_left_tit">
              뉴스 편향성 분석 AI <br />
              <span>Fact-tory</span>
            </p>
            <p className="sec01_left_txt">
              Deepgram's voice AI platform provides APIs for speech-to-
              <br />
              Deepgram's voice AI platform provides APIs for speech-to-
              <br />
              Deepgram's voice AI platform provides APIs for speech-to-
            </p>
            <div className="main_searhbox">
              <input
                type="text"
                placeholder="기사 URL을 입력하면 AI가 분석해요."
              />
              <a href="#" className="searh_btn">
                <span>검색하기</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section02">
        <div className="inner_size sec02_inner">
          <p className="sec02_tit">
            Fact-tory AI와 함께하는 API 회사를 불러왔어요
          </p>
          <ul className="api_list">
            <li>
              <a href="#">
                <img src="/img/main/img_daum_logo.png" alt="Daum" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/main/img_google_logo.png" alt="Google" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/main/img_naver_logo.png" alt="Naver" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section03">
        <div className="inner_size sec03_inner">
          <p className="main_tit">뉴스를 더 쉽게, 더 균형 있게</p>
          <ul className="sec03_list_wrap">
            {[1, 2, 3].map((num) => (
              <li key={num}>
                <div className="sec03_img">
                  <img src={`/img/main/img_sec02_0${num}.png`} alt="" />
                </div>
                <ul className="sec03_txtbox">
                  <li className="sec03_list_tit">
                    뉴스 안에 <span>숨은 방향</span>을 짚어줘요
                  </li>
                  <li className="sec03_list_txt">
                    Goodbye, boring copies. Make your content
                    <br />
                    engaging, relevant, and optimised for conversion
                    <br />
                    with Cohesive.
                  </li>
                </ul>
                <span>{`0${num}`}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section04">
        <div className="inner_size sec04_inner">
          <p className="main_tit">실시간 인기 급상승 뉴스에요</p>

          <div className="sec04_tab_wrap">
            <ul className="sec04_tab">
              {categories.map((tab, idx) => (
                <li key={tab} className={idx === 0 ? "on" : ""}>
                  <a href="#">{tab}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sec04_slider_wrap">
            <Swiper
              modules={[Pagination]}
              spaceBetween={45}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="sec04_slider swiper"
            >
              {slideData.map((i) => (
                <SwiperSlide key={i}>
                  <div className="swiper-slide-inner">
                    <div className="sec04_img">
                      <img src="/img/main/img_sec04_img.png" alt="" />
                    </div>

                    <ul className="sec04_txtbox">
                      <li className="sec04_tit">For frontier models {i}</li>
                      <li className="sec04_txt p_txt">
                        For frontier models For frontier modelsFor frontier
                        models For frontier modelsForfrontrfsddfsdfsddfsdfsddff
                      </li>
                    </ul>

                    <div className="sec04_txt_bott">
                      <ul className="sec04_new_ect">
                        <li>2025-07-20</li>
                        <li>조선일보</li>
                      </ul>
                      <a href="#" className="se04_more_btn">
                        MORE
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </LayoutWithSidebar>
  );
}
