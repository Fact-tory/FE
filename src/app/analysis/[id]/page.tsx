"use client";

import YoutubeSlider from "@/components/YoutubeSlider/YoutubeSlider";
import ResultsCharts from "@/components/ResultsCharts/ResultsCharts";
import LayoutWithSidebar from "@/components/Sidebar/SidebarLayout";

export default function Page() {
  return (
    <LayoutWithSidebar>
      {/* === 레이아웃 요소(헤더/푸터/wrap/right_wrap/contents_wrap)는 전부 제거! === */}

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
                  APIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPI
                  APIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPI
                  APIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPIAPI
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
                    <span className="results_center">중립적인</span> 문장이에요.
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
    </LayoutWithSidebar>
  );
}
