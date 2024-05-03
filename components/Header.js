import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import Router from "next/router";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Avengers");
  const router = useRouter();

  useEffect(() => {
    const activeItem = document.querySelector(".tabs a.active");
    const activeWidth = activeItem ? activeItem.clientWidth : 0;
    const itemPos = activeItem ? activeItem.offsetLeft : 0;

    const selector = document.querySelector(".selector");
    if (selector) {
      selector.style.left = `${itemPos}px`;
      selector.style.width = `${activeWidth}px`;
    }
  }, [activeTab]);

  const handleTabClick = (e, tabName) => {
    if (tabName == "Home") {
      router.push("/");
    } else if (tabName == "About Us") {
      router.push("/About");
    } else if (tabName == "Contact Us") {
      router.push("/ContactUs");
    } else if (tabName == "Portfolio") {
      router.push("/Portfolio");
    } else if (tabName == "Blog") {
      router.push("/Blog");
    }

    setActiveTab(tabName);
  };

  return (
    <div className="header">
      <nav className="tabs ">
        <Link href="/">
          <img className="NavImg" src="/logo-2orange-1.png" alt="" />
        </Link>
        <div className="selector"></div>

        <Link
          href="/"
          className={activeTab === "Home" ? "active" : ""}
          onClick={(e) => handleTabClick(e, "Home")}
        >
          Home
        </Link>

        <Link
          href="/About"
          className={activeTab === "About Us" ? "active" : ""}
          onClick={(e) => handleTabClick(e, "About Us")}
        >
          About Us
        </Link>
        <span className={activeTab === "Services" ? "active" : ""}>
          <Menu
            className="headerSubmenu"
            menuButton={<MenuButton>Services</MenuButton>}
            transition
          >
            <MenuItem onClick={(e) => Router.push("/Hiring")}>
              Hire Dedicated Developer
            </MenuItem>
            <MenuItem onClick={(e) => Router.push("/website-design")}>
              Website Development
            </MenuItem>
            <MenuItem onClick={(e) => Router.push("/software-development")}>
              Software Development
            </MenuItem>
            <MenuItem onClick={(e) => Router.push("/Mobile")}>
              Mobile App Development
            </MenuItem>
            <MenuItem onClick={(e) => Router.push("/Marketing")}>
              Digital Marketing
            </MenuItem>
          </Menu>
          <MdKeyboardArrowDown />
        </span>

        {/* <a href="#" onClick={(e) => handleTabClick(e, "Services")}>
          <i className="fas fa-bolt"></i>Services
        </a> */}
        <Link
          href="/ContactUs"
          className={activeTab === "Contact Us" ? "active" : ""}
          onClick={(e) => handleTabClick(e, "Contact Us")}
        >
          Contact Us
        </Link>
        <Link
          href="/Portfolio"
          className={activeTab === "Portfolio" ? "active" : ""}
          onClick={(e) => handleTabClick(e, "Portfolio")}
        >
          Portfolio
        </Link>
        <Link
          href="/Blog"
          className={activeTab === "Blog" ? "active" : ""}
          onClick={(e) => handleTabClick(e, "Blog")}
        >
          Blog
        </Link>
        <a href="/ContactUs">
          <button id="header-btn">Let's Discuss</button>
        </a>
      </nav>
    </div>
  );
};

export default Header;
