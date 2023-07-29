import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import { Col, Form, Input, Row, DatePicker, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
const ApplyForm = () => {
  const { user } = useSelector((state) => state.user);
  const { RangePicker } = DatePicker;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFinish = async (values) => {
    try {
      dispatch(showLoading);
      const res = await axios.post(
        "/api/v1/user/apply-form",
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
  return (
    <Layout>
      <h1 className="text-center">Apply here</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4>Personal Details :</h4>
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
              label="Documents"
              name="link"
              // required
              // rules={[{ required: true }]}
            >
              <Input type="text" placeholder="put your documents link here" />
              <small>
                Create a drive link and upload you'r college ID ,cast validity
                (SC/ST), Aadhaar Card
              </small>
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
              label="Birth Date"
              name="birth"
              required
              rules={[{ required: true }]}
            >
              <DatePicker />
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
        </Row>
        {/* railway details */}
        <h4> Current Form Details </h4>
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
              label="Season Ticket No"
              name="seasonticketNo"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Season Ticket no" />
            </Form.Item>
          </Col>
          {/* <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Reason for applying "
              name="reason"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Internship purpose" />
            </Form.Item>
          </Col> */}
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Timings"
              name="timings"
              required
              rules={[{ required: true }]}
            >
              <RangePicker />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Class"
              name="class"
              required
              rules={[{ required: true }]}
            >
              {/* <RangePicker /> */}
              <Input type="text" placeholder="class" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Period"
              name="period"
              required
              rules={[{ required: true }]}
            >
              {/* <RangePicker /> */}
              <Input type="text" placeholder="period" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="previous class no"
              name="previousno"
              required
              rules={[{ required: true }]}
            >
              {/* <RangePicker /> */}
              <Input type="text" placeholder="previous no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="previous from "
              name="previousfrom"
              required
              rules={[{ required: true }]}
            >
              {/* <RangePicker /> */}
              <Input type="text" placeholder="previous from " />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="previous to "
              name="previousto"
              required
              rules={[{ required: true }]}
            >
              {/* <RangePicker /> */}
              <Input type="text" placeholder="previous to " />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="previous ticket no "
              name="previousticket"
              required
              rules={[{ required: true }]}
            >
              {/* <RangePicker /> */}
              <Input type="text" placeholder="previous ticket no " />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}></Col>

          <Col xs={24} md={24} lg={8}>
            <button className="btn btn-primary form-btn">Submit</button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyForm;
