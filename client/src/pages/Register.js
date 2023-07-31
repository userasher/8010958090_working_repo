import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Option } from "antd/es/mentions";

import "./LoginStyle.css";
const Register = () => {
  const navigate = useNavigate();
  // const { Option } = Select;
  const dispatch = useDispatch();
  //form handler

  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
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
                    "margin-bottom": "30px",
                  }}
                  src="https://seeklogo.com/images/V/vjti-college-logo-707F46CDA8-seeklogo.com.png"
                  alt=" VJTI logo"
                />
              </div>

              <div class="form-style">
                <Form
                  method="post"
                  layout="vertical"
                  onFinish={onfinishHandler}
                  className="register-form w-100"
                  oninput='up2.setCustomValidity(up2.value != up.value ? "Passwords do not match." : "")'
                >
                  <h3 className="text-center">Register Form</h3>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your Name" },
                      { whitespace: true },
                      { min: 3 },
                    ]}
                    hasFeedback
                  >
                    <Input type="text" />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your Email" },
                      { type: "email", message: "please enter a valid Email" },
                    ]}
                    hasFeedback
                  >
                    <Input type="email" required />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true }]}
                    hasFeedback
                  >
                    <Input.Password name="up" type="password" required />
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
                    <Input.Password name="up2" type="password" required />
                  </Form.Item>
                  <Link to="/login" className="m-2">
                    Already user login here
                  </Link>
                  <button className="btn btn-primary" type="submit">
                    Register
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div
        class="vh-100 bg-image"
        style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"
      >
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style="border-radius: 15px;">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form>
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example1cg">
                          Your Name
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example3cg">
                          Your Email
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example4cdg">
                          Repeat your password
                        </label>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label class="form-check-label" for="form2Example3g">
                          I agree all statements in{" "}
                          <a href="#!" class="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" class="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Register;
