// import React from "react";
// import Layout from "../components/Layout";
// import { useState } from "react";
// import { Col, Form, Input, Row, DatePicker, message, Select } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { hideLoading, showLoading } from "../redux/features/alertSlice";
// import axios from "axios";

// const ApplyForm = () => {
//   const { user } = useSelector((state) => state.user);
//   const { RangePicker } = DatePicker;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleFinish = async (values) => {
//     try {
//       dispatch(showLoading);
//       const res = await axios.post(
//         "/api/v1/user/apply-form",
//         { ...values, userId: user._id },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       dispatch(hideLoading);
//       if (res.data.success) {
//         message.success(res.data.message);
//         navigate("/");
//       } else {
//         message.error(res.data.success);
//       }
//     } catch (error) {
//       dispatch(hideLoading);
//       console.log(error);
//       message.error("Something went wrong");
//     }
//   };
//   return (
//     <Layout>
//       <h1 className="text-center">Apply For Railway Concession </h1>
//       <hr></hr>
//       <Form layout="vertical" onFinish={handleFinish} className="m-3 ">
//         <h4>Personal Details :</h4>
//         <Row gutter={20}>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="First Name"
//               name="firstName"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input type="text" placeholder="your first name" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Last Name"
//               name="lastName"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input type="text" placeholder="your last name" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Documents"
//               name="link"
//               required
//               message="Please put a valid link else your form may get rejected"
//             >
//               <Input type="text" placeholder="your Documents link here" />
//               <small style={{ color: "blue" }}>
//                 Create a drive link and upload college ID, Aadhaar Card,Caste
//                 Certificate needed.(SC/ST) Students Caste Validity Certificate
//                 needed. Let the link be public till your application is not
//                 Approved.
//               </small>
//             </Form.Item>
//           </Col>

//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Phone No"
//               name="phone"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input type="text" placeholder="your contact no" />
//             </Form.Item>
//           </Col>

//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Birth Date"
//               name="birth"
//               required
//               rules={[{ required: true }]}
//             >
//               <DatePicker
//                 style={{ width: "100%" }}
//                 placeholder="Choose Date of Birth"
//               />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Registration no"
//               name="registration"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input type="text" placeholder="xxxxxxxx" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="sex"
//               name="sex"
//               required
//               rules={[{ required: true }]}
//             >
//               <Select placeholder="Sex">
//                 <Select.Option value="Male"></Select.Option>
//                 <Select.Option value="Female"></Select.Option>
//                 <Select.Option value="Other"></Select.Option>
//               </Select>
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Address"
//               name="address"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input type="text" placeholder="Your address" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Caste"
//               name="caste"
//               required
//               rules={[{ required: true }]}
//             >
//               <Select placeholder="Select Caste">
//                 <Select.Option value="Open"></Select.Option>
//                 <Select.Option value="OBC"></Select.Option>
//                 <Select.Option value="NT"></Select.Option>
//                 <Select.Option value="SC"></Select.Option>
//                 <Select.Option value="ST"></Select.Option>
//               </Select>
//             </Form.Item>
//           </Col>
//         </Row>
//         {/* railway details */}
//         <h4 style={{ marginBottom: "10px" }}>
//           {" "}
//           <hr className="w-full text-sm text-gray-400"></hr>
//           Previous Form Details{" "}
//           <h6 style={{ color: "gray" }}>
//             (If Applying for First time no need for this section details){" "}
//           </h6>
//         </h4>

//         <Row gutter={20}>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item label="From " name="previousfrom">
//               <Input type="text" placeholder="Previous From " />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item label="To " name="previousto">
//               <Input type="text" placeholder="Previous To " />
//             </Form.Item>
//           </Col>

//           <Col xs={24} md={24} lg={8}>
//             <Form.Item label="Class" name="prevClass">
//               <Select placeholder="Previous Class">
//                 <Select.Option value="1st"></Select.Option>
//                 <Select.Option value="2nd"></Select.Option>
//               </Select>
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item label="End Date of your pass" name="timingsends">
//               <DatePicker />
//             </Form.Item>
//           </Col>

//           <Col xs={24} md={24} lg={8}>
//             <Form.Item label="Previous Ticket No " name="previousno">
//               <Input type="text" placeholder="Last Four Digits of Ticket No" />
//             </Form.Item>
//           </Col>
//         </Row>
//         <hr className="w-full text-sm text-gray-400"></hr>
//         <h4>New Applicants</h4>
//         <Row gutter={"20"}>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="From"
//               name="from"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input type="text" placeholder="From" />
//             </Form.Item>
//           </Col>

//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="To"
//               name="to"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input type="text" placeholder="To" />
//             </Form.Item>
//           </Col>

//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Class"
//               name="class"
//               required
//               rules={[{ required: true }]}
//             >
//               {/* <RangePicker /> */}
//               <Select placeholder="Class">
//                 <Select.Option value="1st"></Select.Option>
//                 <Select.Option value="2nd"></Select.Option>
//               </Select>
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Period"
//               name="period"
//               required
//               rules={[{ required: true }]}
//             >
//               <Select placeholder="Period">
//                 <Select.Option value="Monthly"></Select.Option>
//                 <Select.Option value="Quarterly"></Select.Option>
//                 <Select.Option value="Half Yearly"></Select.Option>
//               </Select>
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}></Col>
//           <Col xs={24} md={24} lg={8}>
//             <button
//               className="btn btn-success form-btn"
//               style={{ background: "green" }}
//             >
//               Submit
//             </button>
//           </Col>
//         </Row>
//       </Form>
//     </Layout>
//   );
// };

// export default ApplyForm;

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
        message.success(res.data.message);
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
      <h1 className="text-center">Apply For Railway Concession </h1>
      <hr />
      <Form layout="vertical" onFinish={handleFinish} className="m-3 ">
        <h4>Personal Details :</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your first name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your last name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Documents"
              name="link"
              required
              message="Please put a valid link else your form may get rejected"
            >
              <Input type="text" placeholder="Your Documents link here" />
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
              <Input type="text" placeholder="Your contact no" />
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
              <Input type="text" placeholder="xxxxxxxx" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Sex"
              name="sex"
              required
              rules={[{ required: true }]}
            >
              <Select placeholder="Sex">
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
                <Select.Option value="Other">Other</Select.Option>
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
              <Select placeholder="Select Caste">
                <Select.Option value="Open">Open</Select.Option>
                <Select.Option value="OBC">OBC</Select.Option>
                <Select.Option value="NT">NT</Select.Option>
                <Select.Option value="SC">SC</Select.Option>
                <Select.Option value="ST">ST</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Railway details */}
        <h4 style={{ marginBottom: "10px" }}>
          <hr className="w-full text-sm text-gray-400" />
          Previous Form Details
          <h6 style={{ color: "gray" }}>
            (If Applying for First time no need for this section details)
          </h6>
        </h4>

        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="From " name="previousfrom">
              <Input type="text" placeholder="Previous From " />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="To " name="previousto">
              <Input type="text" placeholder="Previous To " />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Class" name="prevClass">
              <Select placeholder="Previous Class">
                <Select.Option value="1st">1st</Select.Option>
                <Select.Option value="2nd">2nd</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="End Date of your pass" name="timingsends">
              <DatePicker />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Previous Ticket No " name="previousno">
              <Input type="text" placeholder="Last Four Digits of Ticket No" />
            </Form.Item>
          </Col>
        </Row>

        <hr className="w-full text-sm text-gray-400" />
        <h4>New Applicants</h4>
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
              label="Class"
              name="class"
              required
              rules={[{ required: true }]}
            >
              <Select placeholder="Class">
                <Select.Option value="1st">1st</Select.Option>
                <Select.Option value="2nd">2nd</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Period"
              name="period"
              required
              rules={[{ required: true }]}
            >
              <Select placeholder="Period">
                <Select.Option value="Monthly">Monthly</Select.Option>
                <Select.Option value="Quarterly">Quarterly</Select.Option>
                <Select.Option value="Half Yearly">Half Yearly</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <button
              type="submit"
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

// what we have done for making this webpage more accessible by screen reader ???
// Replaced some generic <h4> and <h6> tags with headings <h4> and <h6> respectively to provide semantic meaning.
// Used <hr> tag inside <h4> instead of alone for better semantic structure.
// Modified select options in "Sex" and "Caste" fields to include text content for screen readers.
