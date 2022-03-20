import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../../util/Dropdown";
import styles from "./Header.module.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <nav className="navbar navbar-expand-xxl navbar-dark bg-danger">
      <div className="container px-5 ">
        <Link to={`/`} className={`${styles.logo} text-white`}>
          Silk Road
        </Link>
        {/* <a className={`${styles.logo} text-white`} href="/">
          Silk Road
        </a> */}
        <button
          className="navbar-toggler my-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
          onClick={onClick}
        >
          <span className="navbar-toggler-icon"></span>
          {isActive ? <DropdownMenu /> : null}
        </button>

        <div className="navbar-collapse" id="mynavbar">
          <ul className="navbar-nav align-items-center">
            <li>
              <form class="d-inline-flex">
                <select class="ms-2 rounded-0 border border-4 border-primary form-select w-25">
                  <option>전체</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>

                <input
                  type="text"
                  size="50"
                  class="form-control rounded-0 border-start-0 border-end-0  border-primary border-4"
                  placeholder="검색"
                />
                <button
                  class="btn rounded-0 bg-white border-start-0  border-primary border-4"
                  type="button "
                >
                  <img
                    className={`${styles.fill}`}
                    src={require(`../../images/돋보기.png`)}
                  />
                </button>
              </form>
            </li>
            <li className="nav-item mx-1 d-flex align-items-center">
              <a className="nav-link text-white " href="#">
                로그인
              </a>
            </li>
            <li className="nav-item mx-1 d-flex align-items-center">
              <a className="nav-link text-white" href="#">
                회원가입
              </a>
            </li>
            <li className="nav-item mx-1 d-flex align-items-center">
              <a className="nav-link text-white" href="#">
                장바구니
              </a>
            </li>
            <li className="nav-item mx-1 d-flex align-items-center">
              <a className="nav-link text-white" href="#">
                마이페이지
              </a>
            </li>
            <li className="nav-item mx-1 d-flex align-items-center">
              <a className="nav-link text-white" href="#">
                판매하기
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
