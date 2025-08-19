import LayoutWithSidebar from "../components/Sidebar/SidebarLayout";
import { getMainDashboardOnServer } from "@/services/dashboard";
import TrendingSlider from "@/components/Main/TrendingSlider";
import CategoryTabsWithSlider from "@/components/Main/CategoryTab";
import type { CategoryGroup } from "@/types/Main/dashboard";

export default async function Home() {
  const res = await getMainDashboardOnServer({
    realtime_limit: 20,
    trending_limit: 10,
    category_limit: 5,
    search_limit: 10,
  });

  const data = res.data;

  const categoryGroups: CategoryGroup[] = Object.values<CategoryGroup>(
    data.categories ?? {}
  );

  const slideArticles = data.trending?.articles ?? [];

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
              Deepgram&apos;s voice AI platform provides APIs for speech-to-
              <br />
              Deepgram&apos;s voice AI platform provides APIs for speech-to-
              <br />
              Deepgram&apos;s voice AI platform provides APIs for speech-to-
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

          <CategoryTabsWithSlider categories={categoryGroups} />
        </div>
      </section>
    </LayoutWithSidebar>
  );
}
