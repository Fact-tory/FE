import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Footer from "../Footer/Footer";
import TopButton from "./TopButton";

const historyItems = [
  // test data
  "이건희 회장 항가나가나나내",
  "이건희 회장 단독주택",
  "이재용 부회장 청문회",
];

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="wrap">
      <header>
        <div className="header_inner gap20">
          {/* 검색 */}
          <div className="header_top gap24">
            <Link href="/" className="header_logo">
              <Image
                src="/img/common/header_logo.png"
                alt="로고"
                width={84}
                height={97}
              />
            </Link>
            <Link href="#" className="history_search">
              <span>기사 히스토리 검색</span>
            </Link>
          </div>

          {/* 메뉴 */}
          <nav className="header_nav">
            <ul className="header_depth gap8">
              <li>
                <Link href="/">
                  <span className="header_ico haader_home">홈화면</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="header_ico haader_user">
                    사용자 분석페이지
                  </span>
                </Link>
              </li>
            </ul>

            <div className="history_depth_wrap">
              <ul className="history_depth">
                <li className="gap24">
                  <p>기사 히스토리 분석</p>
                  <Sidebar items={historyItems} />
                </li>
              </ul>

              <Link href="#" className="list_trash">
                <span className="skip">휴지통삭제아이콘입니다.</span>
              </Link>
            </div>

            {/* 하단 고정 메뉴 */}
            <ul className="header_depth header_bott gap8">
              <li className="btn_login">
                <Link href="/auth/login">
                  <span className="header_ico haader_login">Login</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="header_ico haader_about">About Us</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 콘텐츠 영역 */}
      <div className="right_wrap">
        <div id="contents_wrap" className="main_contents">
          {children}
        </div>
        <Footer></Footer>
      </div>

      <TopButton></TopButton>

      {/* <button id="top_btn" type="button">
        <span className="skip">스크롤아이콘입니다.</span>
      </button> */}
    </div>
  );
}
