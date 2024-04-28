import React, { useState } from "react";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "./../Data/data";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";

import {
  Banner,
  BannerButton,
  BannerContent,
  BannerFlag,
  BannerGuidance,
  BannerHeader,
  BannerIcon,
  Button,
  Footer,
  Address,
  FooterNav,
  Logo,
  Icon,
  MediaBlockBody,
} from "@trussworks/react-uswds";

import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

import flagImg from "../Assets/download.png";
import dotGovIcon from "../Assets/govicon.svg";
import httpsIcon from "../Assets/secureicon.svg";

import Footerbyme from "./Footer";
const Layout = ({ children }) => {
  // const { user } = useSelector((state) => state.user);
  // console.log(user);
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };
  // const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;
  return (
    <>
      <Banner
        className="bg-white "
        aria-label="Official website of the state department of something specific"
      >
        <div className="main">
          <BannerHeader
            isOpen={isOpen}
            flagImg={<BannerFlag src={flagImg} aria-hidden alt="" />}
            headerText="This is an official website of the state department of something specific"
            headerActionText="Here's how you know"
          >
            <BannerButton
              isOpen={isOpen}
              aria-controls="custom-banner"
              onClick={() => {
                setIsOpen((previousIsOpen) => !previousIsOpen);
              }}
            >
              Here&apos;s how you know
            </BannerButton>
          </BannerHeader>
          <BannerContent id="custom-banner" isOpen={isOpen}>
            <div className="grid-row grid-gap-lg">
              <BannerGuidance className="tablet:grid-col-6">
                <BannerIcon
                  src={dotGovIcon}
                  alt="image of the official flag of United states of America"
                />
                <MediaBlockBody>
                  <p>
                    <strong>Official websites use .gov</strong>
                    <br />A <strong>.gov</strong> website belongs to an official
                    government organization in the United States.
                  </p>
                </MediaBlockBody>
              </BannerGuidance>
              <BannerGuidance className="tablet:grid-col-6">
                <BannerIcon src={httpsIcon} alt="" />
                <MediaBlockBody>
                  <p>
                    <strong>Secure .gov websites use HTTPS</strong>
                    <br />A{" "}
                    <strong>
                      lock (<Icon.Lock aria-label="Locked padlock icon" />)
                    </strong>{" "}
                    or <strong>https://</strong> means you&apos;ve safely
                    connected to the .gov website. Share sensitive information
                    only on official, secure websites.
                  </p>
                </MediaBlockBody>
              </BannerGuidance>
            </div>
          </BannerContent>
          <div className="layout">
<<<<<<< HEAD
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex float-right px-3  rounded  hover:text-black-400"
            >
              {/* <svg
                className={`fill-current float-right h-3 w-3 ${
                  isOpen ? "hidden" : "block"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-3  ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg> */}
            </button>
            <div className="sidebar">
              <div
                className={`w-15 block pr-4 flex-grow  lg:flex lg:items-center lg:w-auto ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <hr />
                <div className="">
                  <div className="">
                    {SidebarMenu.map((menu) => {
                      const isActive = location.pathname === menu.path;
                      return (
                        <div
                          key={menu.path} // Add the key prop here
                          className={`menu-item ${
                            isActive && "active"
                          } flex flex-row w-full md:py-0 `}
                        >
                          <i className={menu.icon}></i>
                          <Link to={menu.path}>{menu.name}</Link>
                        </div>
                      );
                    })}

                    <div className={`menu-item `} onClick={handleLogout}>
                      <i className="fa-solid fa-right-from-bracket "></i>
                      <Link to="/login">Logout</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
=======
>>>>>>> e7d5399 (layout added)
            <div className="content">
              <div className="header">
                <div className="header-content" style={{ cursor: "pointer" }}>
                  <Badge
                    // count={user && user.notifcation.length}
                    onClick={() => {
                      navigate("/notification");
                    }}
                  >
                    <i class="fa-solid fa-bell"></i>
                  </Badge>
                  {/* <Link to="/">{user?.name}</Link> */}
                </div>
              </div>
              <div className="body">{children}</div>
            </div>
          </div>
        </div>
      </Banner>
    </>
  );
};

export default Layout;
