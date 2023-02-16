import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="logo-container" onClick={() => console.log("ss")}>
            <img
              className="logoImg"
              src="/img/logo_solar.svg"
              title="회사 로고"
              alt=""
            />
            <img
              className="logoImg"
              src="/img/logo_title.svg"
              title="회사 로고"
              alt=""
            />
          </div>
          <nav>
            <ul className="main-menu">
              <li className="">
                <a href="#">소개</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">서비스 소개</a>
                  </li>
                  <li>
                    <a href="#">회사 소개</a>
                  </li>
                  <li>
                    <a href="#">연혁</a>
                  </li>
                  <li>
                    <a href="#">오시는 길</a>
                  </li>
                </ul>
              </li>

              <li className="menu-text-container">
                <a href="#">
                  개인거래<span className="menu-text-top">무료 P2P</span>
                </a>

                <ul className="sub-menu">
                  <li>
                    <a href="#">발전소 판매</a>
                  </li>
                  <li>
                    <a href="#">발전소 구매</a>
                  </li>
                  <li>
                    <a href="#">발전소 분양</a>
                  </li>
                  <li>
                    <a href="#">부지 거래</a>
                  </li>
                </ul>
              </li>
              <li className="menu-text-container">
                <a href="#">
                  서비스<span className="menu-text-top">All-in-one</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">태양광 사업 부지검토</a>
                  </li>
                  <li>
                    <a href="#">양수양도시 서비스</a>
                  </li>
                  <li>
                    <a href="#">유지보수 관련신청</a>
                  </li>
                  <li>
                    <a href="#">안전거래 신청</a>
                  </li>
                  <li>
                    <a href="#">태양광 성능향상 서비스</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">태양광정보</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">태양광 계산기</a>
                  </li>
                  <li>
                    <a href="#">태양광 뉴스</a>
                  </li>
                  <li>
                    <a href="#">REC 거래동향</a>
                  </li>
                  <li>
                    <a href="#">SMP 개통한계가격</a>
                  </li>
                  <li>
                    <a href="#">선로 연계용량</a>
                  </li>
                  <li>
                    <a href="#">예측발전량 조회</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">고객지원</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">고시/공고</a>
                  </li>
                  <li>
                    <a href="#">문의 게시판</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="right-menu">
            <input
              className="input-text"
              type="text"
              placeholder="검색어를 입력하세요"
            />
            <a href="/search">
              <i className="fa fa-search search-icon" aria-hidden="true"></i>
            </a>
          </div>
          <a href="/login">
            <i className="fa fa-user-o  login-icon" aria-hidden="true"></i>
          </a>
        </div>
      </header>
      <section className="section-solen">
        <div className="section-solen-box">
          <span className="section-box-text-1">
            수수료, 중개료, 영업비용? 네 없습니다.
          </span>
          <div className="section-box-text-2">
            <span className="bold">오! 소리나오는 놀라움 </span>
            <span>태양광 직거래 플랫폼 오솔렌</span>
          </div>
        </div>

        <div className="section-solen-sun">
          <img src="/img/sun.png" alt="" />
        </div>
        <div className="section-solen-logo">
          <img src="/img/white_solen.svg" alt="" />
        </div>
        <div className="section-solen-forest">
          <img src="/img/forest.svg" alt="" />
        </div>
      </section>
      <section className="section-deal">
        <p className="section-deal-text-1">
          <span>투명하고 깨끗한 태양광 거래</span>
        </p>
        <p className="section-deal-text-2">
          <span>오쏠렌에서 경험해보세요</span>
        </p>

        <p className="section-deal-text-3">
          <span>
            {" "}
            태양광 직거래 플랫폼 오솔렌입니다 오솔렌은 무료 P2P 태양광거래를
            지원하고 있습니다
          </span>
          <span>
            {" "}
            판매자와 구매자 모두의 입장에서 좋은 거래가 이루어질수 있도록 최선을
            다하겠습니다.
          </span>
        </p>
        <p className="section-deal-text-4">
          <span>
            어려운 태양광 대관업무, 유지보수 관리 부지검토 등의 부가 서비스를
            통하여
          </span>
          <span className="bold">태양광 All in one 플랫폼</span>을 경험해보세요.
        </p>
        <div className="section-deal-tree">
          <img src="/img/forest_2.svg" alt="" />
        </div>
      </section>

      <section className="section-oh">
        <p className="section-oh-text-1">
          <span>Oh(감탄사) + 쏠라(태양) + 'ren'own (명성)</span>
        </p>
        <p className="section-oh-text-2">
          <span>=오쏠렌</span>
        </p>
        <p className="section-oh-text-3">
          <span>
            오쏠렌은 그동안 경험하지 못한, 새로움을 가미한 에너지 올인원
            플랫폼입니다.
          </span>
          <span>어려운 태양광? 이제는 쉽게 오쏠렌에서 만나보세요.</span>
        </p>
      </section>

      <section className="section-ecosystem">
        <div className="section-ecosystem-comma">
          <img src="/img/comma_start.svg" alt="" />
        </div>
        <p className="section-ecosystem-text-1">
          <span>오! 놀라운 태양광발전소 거래 생태계</span>
        </p>
        <p className="section-ecosystem-text-2">
          <span>무료 발전소 P2P거래 with 오쏠렌</span>
        </p>

        {/* <p className="section-ecosystem-text-3">
          <span>무료 발전소 P2P거래 with 오쏠렌</span>
        </p>
        

        <p className="section-ecosystem-text-4">
          <span>태양광 생태계를 통한 Green 프로젝트</span>
        </p>
        <p className="section-ecosystem-text-5">
          <span>여러분의 이익이 환경의 이익입니다</span>
        </p> */}
      </section>

      <section className="section-price">{/* 아이템 3개 */}</section>

      <section className="section-item_notice"></section>

      <section className="section-item_work"></section>

      <section className="section-oh_end"></section>
      {/* <content>
        <div>
          <img
            className="logoImg"
            src="/img/logo_title.svg"
            title="회사 로고"
            alt=""
          />
        </div>
        <div>
          <img
            className="logoImg"
            src="/img/logo_title.svg"
            title="회사 로고"
            alt=""
          />
        </div>
      </content> */}
    </div>
  );
}

export default App;
