"use client";
import Image from "next/image";
import YoutubeSlider from "@/components/YoutubeSlider/YoutubeSlider";
import ResultsCharts from "@/components/ResultsCharts/ResultsCharts";
import ScrollTopButton from "@/components/ScrollTopButton/ScrollTopButton";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <div id="wrap">
      {/* header */}
      <header>
        <div className="header_inner gap20">
          <div className="header_top gap24">
            <a href="/" className="header_logo">
              <Image
                src="/img/common/header_logo.png"
                alt="Fact-tory"
                width={160}
                height={32}
              />
            </a>
            <button className="history_search" type="button">
              <span>기사 히스토리 검색</span>
            </button>
          </div>
          {/* depth01 */}
          <nav className="header_nav">
            <ul className="header_depth gap8">
              <li>
                <a href="#">
                  <span className="header_ico haader_home">홈화면</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="header_ico haader_user">
                    사용자 분석페이지
                  </span>
                </a>
              </li>
            </ul>
            <div className="history_depth_wrap">
              <ul className="history_depth">
                <li className="gap24">
                  <p>기사 히스토리 분석</p>
                  <ul className="history_depth02">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <li key={i}>
                        <a href="#">
                          <span className="p_txt fw500">
                            이건희 회장 샘플 {i + 1}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <button className="list_trash" aria-label="휴지통삭제">
                <span className="skip">휴지통삭제아이콘입니다.</span>
              </button>
            </div>
          </nav>
          <ul className="header_depth header_bott gap8">
            <li className="btn_login">
              <a href="#">
                <span className="header_ico haader_login">Login</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="header_ico haader_about">About Us</span>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div className="right_wrap">
        {/* contents */}
        <div id="contents_wrap" className="main_contents">
          <div className="results_wrap">
            <div className="results_section01 inner_size">
              <ul className="results_top">
                <li>
                  <span>
                    사실 검증이 <em>완료된 기사</em>입니다
                  </span>
                </li>
                <li>
                  <p>이재명 전과자임에도 대통령을 하는 것이 맞는가요 ?</p>
                </li>
              </ul>

              <div className="results_news_wrap">
                <a href="#" className="results_news_btn">
                  <span>기사 원문보기</span>
                </a>
                <div className="results_news_con">
                  <p>
                    <span>AI 요약</span>
                  </p>
                  <div className="results_news_box p_txt">
                    <p className="p_txt">
                      APIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPI
                      APIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPI
                      APIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPI
                      APIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPI
                      APIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPI
                      APIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPI
                      APIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPI
                      APIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPI
                      APIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPI
                      APIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPI
                    </p>
                  </div>
                </div>
              </div>

              <ul className="results_summary">
                <li className="results_summary01">
                  <p className="results_summary_tit">기사 요약</p>
                  <p className="results_summary_txt">
                    <span>'이재명 대통령 짜증나'</span>에<br />
                    대한 기사에요
                  </p>
                </li>
                <li>
                  <p className="results_summary_tit">편향 분석</p>
                  <p className="results_summary_txt">
                    <span>'보수'</span> 쪽으로
                    <br />
                    <em className="results_summary_number">80%</em>기울었어요
                  </p>
                </li>
                <li>
                  <p className="results_summary_tit">사실 검증</p>
                  <p className="results_summary_txt">
                    <span>'의견'</span>은{" "}
                    <em className="results_summary_number">20%</em>
                    <br />
                    <span>'사실'</span>은{" "}
                    <em className="results_summary_number">80%</em>
                    <br />
                    차지해요
                  </p>
                </li>
                <li>
                  <p className="results_summary_tit">핵심 단어</p>
                  <ul className="results_summary_txt">
                    <li>
                      <span>'이재명'</span>
                    </li>
                    <li>
                      <span>'대통령'</span>
                    </li>
                    <li>
                      <span>'사실'</span>
                    </li>
                    <li>핵심이에요</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="results_section02">
              <div className="inner_size">
                <p className="sub_tit">상세 분석</p>
                <ul className="results_list">
                  <li className="results_list01">
                    <ul className="results_list_box">
                      <li>
                        <span>APEC</span>이 2025년 12월에 개최된다.
                      </li>
                      <li>
                        APEC이 <span>2025년</span> 12월에 개최된다.
                      </li>
                      <li>
                        <span>APEC</span>이 2025년 12월에 개최된다.
                      </li>
                    </ul>
                  </li>
                  <li className="results_list02">
                    <ul className="results_list_box">
                      <li>
                        <span className="results_center">중립적인</span>
                        문장이에요.
                      </li>
                      <li>
                        <span className="results_right">보수시각</span>으로 10%
                        기울었어요.
                      </li>
                      <li>
                        <span className="results_left">진보적인</span>시각을
                        의미하고 있어요.
                      </li>
                    </ul>
                  </li>

                  {/* 차트 */}
                  <ResultsCharts />
                </ul>
              </div>
            </div>

            <div className="results_section03 inner_size">
              <p className="sub_tit">관련 유튜브 영상</p>
              <div className="results_slider_wrap">
                <YoutubeSlider
                  items={[
                    "-lMYmCcba4U",
                    "-lMYmCcba4U",
                    "-lMYmCcba4U",
                    "-lMYmCcba4U",
                    "-lMYmCcba4U",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
        {/* footer */}
        {/* <footer>
          <div className="footer_inner inner_size">
            <div className="project_link">
              <p>Project</p>
              <ul className="project_link_icon">
                <li>
                  <a href="#">
                    <img src="/img/common/ico_face_icon.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/common/ico_notion_icon.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/common/ico_github_icon.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_center gap32">
              <div className="footer_link_wrap">
                <ul className="footer_link_depth gap40">
                  <li className="gap32">
                    <a href="#">오픈소스 안내</a>
                    <ul className="footer_link_depth02 gap12">
                      <li className="p_txt">
                        <a href="#">오픈소스 라이센스</a>
                      </li>
                      <li className="p_txt">
                        <a href="#">기여 가이드</a>
                      </li>
                    </ul>
                  </li>
                  <li className="gap32">
                    <a href="#">빠른 이동</a>
                    <ul className="footer_link_depth02 gap12">
                      <li className="p_txt">
                        <a href="#">About Us</a>
                      </li>
                      <li className="p_txt">
                        <a href="#">분석 시작하기</a>
                      </li>
                      <li className="p_txt">
                        <a href="#">내가 본 뉴스 보기</a>
                      </li>
                      <li className="p_txt">
                        <a href="#">분석 내용 검색</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="project_member gap32">
                <p>뉴스 편향성 분석 AI 만든 사람들</p>
                <ul className="member_list gap24">
                  <li>
                    <a href="#" className="gap16">
                      <div className="member_img" />
                      <p>
                        Front-End 개발 &<br />
                        UIUX설계 디자인
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="gap16">
                      <div className="member_img" />
                      <p>
                        Back-End 개발 &<br />
                        AI 기능 구현
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="gap16">
                      <div className="member_img" />
                      <p>
                        Front-End 개발 &<br />
                        Back-End 기능 지원
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_bottom">
              <ul className="footer_bott_list gap20 p_txt">
                <li>© 2025 Fact-tory. All rights reserved.</li>
                <li>v1.0.0 Beta</li>
                <li>
                  <a href="#" className="user_agree fw700">
                    개인정보처리방침
                  </a>
                </li>
                <li>Icons by Unicons (Iconscout) – CC BY 4.0</li>
              </ul>
            </div>
          </div>
        </footer> */}
      </div>
      <ScrollTopButton />
    </div>
  );
}
