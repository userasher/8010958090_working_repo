import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginStyle.css";
import loacalTrain from "../localtrain.jpg";
import BannerGov from "../components/uswdsCompo/BannerGov";
import vjtiimg from "../vjti logo.png";
import React, { useState } from "react";
import {
  Banner,
  BannerButton,
  BannerContent,
  BannerFlag,
  BannerGuidance,
  BannerHeader,
  BannerIcon,
  Button,
  Icon,
  MediaBlockBody,
} from "@trussworks/react-uswds";

import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

import flagImg from "../Assets/download.png";
import dotGovIcon from "../Assets/govicon.svg";
import httpsIcon from "../Assets/secureicon.svg";
import Footerbyme from "../components/Footer.js";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const [isOpen, setIsOpen] = useState(false);
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div class="container offset  ">
      <Banner
        className="bg-white "
        aria-label="Official website of the state department of something specific"
      >
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
              <BannerIcon src={dotGovIcon} alt="" />
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
        <div class="row m-5 no-gutters shadow-lg mt-2">
          <div class="col-md-6 d-none d-md-block">
            <img
              // src="https://w0.peakpx.com/wallpaper/49/544/HD-wallpaper-local-train-mumbai-aamchi-cst-localtrain-mumbaitrain-station-track-trains-whistle.jpg"
              src={loacalTrain}
              alt=""
              class="img-fluid"
              style={{ "min-height": "100%" }}
            />
          </div>
          <div class="col-md-6 bg-white p-5">
            <div>
              <img
                style={{
                  display: "block",
                  "margin-left": "auto",
                  "margin-right": "auto",
                  " height": "100px",
                  width: "70px",
                }}
                src={vjtiimg}
                alt=" VJTI logo"
              />
              <h4 className="text-center mt-2 font-serif underline">
                Welcome to Vjti Railway Pass Concession
              </h4>
            </div>
            <h4 className="pb-3 text-bold mt-3">Login Here </h4>
            <div class="form-style">
              <Form
                layout="vertical"
                onFinish={onfinishHandler}
                method="post"
                id="form"
                action="/"
              >
                <div class="form-group pb-3">
                  <Form.Item
                    label="Vjti Email id"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your Email" },
                      { type: "email", message: "please enter a valid Email" },
                    ]}
                    hasFeedback
                  >
                    <Input
                      class="form-control"
                      type="email"
                      required
                      placeholder="userb20@vjti.ac.in"
                    />
                  </Form.Item>
                </div>
                <div class="form-group pb-3">
                  <Form.Item label="Password" name="password">
                    <Input.Password
                      class="form-control"
                      type="password"
                      label="Password"
                      name="password"
                      placeholder="••••••••"
                      required
                      rules={[
                        { required: true, message: "Please enter a Password" },
                        // { min: 6 }
                      ]}
                      hasFeedback
                    />
                  </Form.Item>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <Link
                    style={{ fontWeight: "bold" }}
                    to="/password-reset"
                    className="no-underline text-black"
                  >
                    Forgot Password ?
                  </Link>
                </div>
                <div class="pb-2 mt-4">
                  <button
                    type="submit"
                    className=" bg-blue-500  hover:bg-blue-700 text-gray-800 font-bold py-2 px-4 rounded w-100 font-weight-bold"
                  >
                    Login
                  </button>
                </div>
              </Form>

              <div class="pt-4 text-center mt-2 ">
                <Link
                  to="/register"
                  className="bg-blue-500 border-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded no-underline "
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Banner>
      <Footerbyme />
    </div>
  );
};

export default Login;
