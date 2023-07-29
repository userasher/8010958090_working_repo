import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Form, Input, Row, DatePicker, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [userprofile, setUsersProfile] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  /** update dock */
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading);
      const res = await axios.post(
        "/api/v1/profile/updateProfileInfo",
        { ...values, userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading);
      if (res.data.success) {
        message.success(res.data.success);
        navigate("/");
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      dispatch(hideLoading);
      console.log(error);
      message.error("Something went wrong");
    }
  };
  //get user details
  const getUserInfo = async () => {
    try {
      const res = await axios.post(
        "/api/v1/profile/getProfileInfo",
        {
          userId: params.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.message) {
        setUsersProfile(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
    // handleFinish();
  }, []);
  return (
    <Layout>
      <h1>Manage Profile</h1>
      <Form
        layout="vertical"
        onFinish={handleFinish}
        className="m-3"
        initialValues={userprofile}
      >
        <h4>Personal Details: </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your first name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your last name" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone No"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Your Age"
              name="age"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your age" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Enter you'r Birthdate"
              name="birth"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your Birthday" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Registration no"
              name="registration"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="registration no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="sex"
              name="sex"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="sex" />
            </Form.Item>
          </Col>
        </Row>
        {/* railway details */}
        <h4> Railway Form Details </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="From"
              name="from"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="From" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="To"
              name="to"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="To" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Caste"
              name="caste"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your caste" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Season Ticket No"
              name="seasonticketNo"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Season Ticket no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Reason for applying "
              name="reason"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Internship purpose" />
            </Form.Item>
          </Col>
          {/* <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Timings"
              name="timings"
              required
              rules={[{ required: true }]}
            >
              {/* <RangePicker /> */}
          {/* </Form.Item>
          </Col>  */}
          <Col xs={24} md={24} lg={8}></Col>

          <Col xs={24} md={24} lg={8}>
            <button className="btn btn-primary form-btn">Submit</button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default Profile;
