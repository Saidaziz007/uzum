import React from "react";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import "./Header.css";
import logo from "../../assets/logo.jpg";
import { GrCatalog } from "react-icons/gr";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import nav1 from "../../assets/nav-1.png";
import nav2 from "../../assets/nav-2.png";
import nav3 from "../../assets/nav-3.png";
import nav4 from "../../assets/nav-4.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar-1">
        <div className="container">
          <div className="navbar-1-all">
            <div className="navbar-1-city">
              <IoLocationOutline />
              <p>Shahar:</p>
              <select name="" id="">
                <option value="tashkent">Toshkent</option>
                <option value="namangan">Namangan</option>
                <option value="buxoro">Buxoro</option>
                <option value="samarqand">Samarqand</option>
              </select>
              <p>Topshirish punktlari</p>
            </div>
            <div className="navbar-1-order">
              <p>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
            </div>
            <div className="navbar-1-cell">
              <p>Uzumda soting</p>
              <p>Savol-javoblar</p>
              <p>Buyurtmalarim</p>
              <select name="" id="">
                <option value="uz">O'zbekcha</option>
                <option value="ru">Ruscha</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar-2">
        <div className="container">
          <div className="nav-center">
            <div className="nav-logo">
              <img src={logo} alt="" />
            </div>
            <div className="nav-input">
              <div className="nav-catalog">
                <GrCatalog />
                <p>Katalog</p>
              </div>
              <div className="nav-inp">
                <input
                  type="text"
                  placeholder="Mahsulotlar va turkumlar izlash"
                />
                <button>
                  <IoSearch />
                </button>
              </div>
            </div>
            <div className="nav-info">
              <div className="nav-info-1">
                <FaRegUser />
                <p>Kirish</p>
              </div>
              <div className="nav-info-1">
                <FaRegHeart />
                <p>Saralangan</p>
              </div>
              <div className="nav-info-1">
                <FiShoppingCart />
                <p>Savat</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar-3">
        <div className="container">
          <div className="nav-3">
            <div className="nav-3-1">
              <img src={nav1} alt="" />
              <p>Muddatli to'lov</p>
            </div>
            <div className="nav-3-1">
              <img src={nav2} alt="" />
              <p>Yozgi savdo</p>
            </div>
            <div className="nav-3-1">
              <img src={nav3} alt="" />
              <p>Uyda salqinlik</p>
            </div>
            <div className="nav-3-1">
              <img src={nav4} alt="" />
              <p>Hovuzlar</p>
            </div>
            <p>Elektronika</p>
            <p>Maishiy texnika</p>
            <p>Kiyim</p>
            <p>Poyabzallar</p>
            <p>Aksessuarlar</p>
            <p>G'ozallik va parvarish</p>
            <p>Yana</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
