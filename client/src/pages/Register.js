import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

import "./LoginStyle.css";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onfinishHandler = async (values) => {
    console.log(values);
    const EmailData = {
      email: values.email,
    };
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/OTP", EmailData);
      localStorage.setItem("registereduser", JSON.stringify(values));
      dispatch(hideLoading());
      console.log(res.data);
      console.log(res.data.otp);
      if (res.data.success) {
        // message.success("Registered Successfully!");
        localStorage.setItem("OTP", res.data.otp);
        navigate("/email-verification");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <>
      <div className="form-container ">
        <div class="container offset">
          <div class="row m-5 no-gutters shadow-lg">
            <div class="col-md-6 d-none d-md-block">
              <img
                src="https://w0.peakpx.com/wallpaper/49/544/HD-wallpaper-local-train-mumbai-aamchi-cst-localtrain-mumbaitrain-station-track-trains-whistle.jpg"
                className="img-fluid "
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
                    "margin-bottom": "20px",
                  }}
                  src="https://seeklogo.com/images/V/vjti-college-logo-707F46CDA8-seeklogo.com.png"
                  alt=" VJTI logo"
                />
              </div>

              <div class="form-style ">
                <Form
                  method="post"
                  layout="vertical"
                  onFinish={onfinishHandler}
                  className="w-100"
                  oninput='up2.setCustomValidity(up2.value != up.value ? "Passwords do not match." : "")'
                >
                  <h3 className="text-center ">Create New Account </h3>
                  <Form.Item
                    label="Name"
                    // style={{ font: "bold" }}
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your Name" },
                      { whitespace: true },
                      { min: 3 },
                    ]}
                    hasFeedback
                  >
                    <Input type="text" placeholder="Your Name" />
                  </Form.Item>
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
                      type="email"
                      placeholder="userb20@vjti.ac.in"
                      required
                    />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      { required: true },
                      {
                        min: 6,
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      name="up"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </Form.Item>
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                      { required: true, message: "Password is required" },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "The two Passwords that you entered does not match "
                          );
                        },
                      }),
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      name="up2"
                      placeholder="••••••••"
                      type="password"
                      required
                    />
                  </Form.Item>
                  <Link
                    to="/login"
                    style={{ fontWeight: "bold" }}
                    className="m-2 "
                  >
                    Already a user login here
                  </Link>
                  <button
                    className=" bg-blue-400 hover:cursor-pointer hover:bg-blue-700 text-gray-800 font-bold py-2 px-4 rounded w-100 font-weight-bold mt-4"
                    type="submit"
                  >
                    Submit
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
