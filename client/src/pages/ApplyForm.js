import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import { Col, Form, Input, Row, DatePicker, message, Select } from "antd";
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
      <h1 className="text-center">Apply For Concession </h1>
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
              required
              message="Please put a valid link else your form may get rejected"
            >
              <Input type="text" placeholder="your Documents link here" />
              <small style={{ color: "blue" }}>
                Create a drive link and upload college ID, Aadhaar Card,Caste
                Certificate needed.(SC/ST) Students Caste Validity Certificate
                needed. Let the link be public till your application is not
                Approved.
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
              <DatePicker
                style={{ width: "100%" }}
                placeholder="Choose Date of Birth"
              />
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
              <Select placeholder="Sex">
                <Select.Option value="Male"></Select.Option>
                <Select.Option value="Female"></Select.Option>
                <Select.Option value="Other"></Select.Option>
              </Select>
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
              label="Caste"
              name="caste"
              required
              rules={[{ required: true }]}
            >
              <Select placeholder="Select you'r caste">
                <Select.Option value="Open"></Select.Option>
                <Select.Option value="SC"></Select.Option>
                <Select.Option value="ST"></Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        {/* railway details */}
        <h4 style={{ marginBottom: "10px" }}>
          {" "}
          Previous Form Details{" "}
          <h6 style={{ color: "gray" }}>
            (If Applying for First time no need for this section details){" "}
          </h6>
        </h4>

        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="From "
              name="previousfrom"
              // required
              // rules={[{ required: true }]}
            >
              {/* <RangePicker /> */}
              <Input type="text" placeholder="previous from " />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="To "
              name="previousto"
              // required
              // rules={[{ required: true }]}
            >
              {/* <RangePicker /> */}
              <Input type="text" placeholder="previous to " />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Class"
              name="previousno"
              // required
              // rules={[{ required: true }]}
            >
              {/* <RangePicker /> */}
              <Select placeholder="Class">
                <Select.Option value="1st"></Select.Option>
                <Select.Option value="2nd"></Select.Option>
              </Select>
              {/* <Input type="text" placeholder="previous no" /> */}
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="End Date of your pass"
              name="timingsends"
              // required
              // rules={[{ required: true }]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Ticket No"
              name="previousticket"
              // required
              rules={[{ max: 4 }]}
            >
              {/* <RangePicker /> */}
              <Input type="text" placeholder="previous ticket no " />
              <small style={{ color: "blue" }}>
                Last Four digits of Previous Ticket No needed
              </small>
            </Form.Item>
          </Col>
        </Row>
        <h4>New Applicants</h4>
        <Row gutter={"20"}>
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
              label="Class"
              name="class"
              required
              rules={[{ required: true }]}
            >
              {/* <RangePicker /> */}
              <Select placeholder="Class">
                <Select.Option value="1st"></Select.Option>
                <Select.Option value="2nd"></Select.Option>
                {/* <Select.Option value="ST"></Select.Option> */}
              </Select>
              {/* <Input type="text" placeholder="class" /> */}
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
              <Select placeholder="Period">
                <Select.Option value="Monthly"></Select.Option>
                <Select.Option value="Quaterly"></Select.Option>
                <Select.Option value="Half Yearly"></Select.Option>
              </Select>
              {/* <Input type="text" placeholder="period" /> */}
            </Form.Item>
          </Col>
          {/* <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Season Ticket No"
              name="seasonticketNo"
              // required
              // rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Season Ticket no" />
            </Form.Item>
          </Col> */}
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <button
              className="btn btn-success form-btn"
              style={{ background: "green" }}
            >
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyForm;
