import React from "react";
import Layout from "../../components/Layout";
import { Form } from "react-router-dom";
import { Col, Input, Row } from "antd";

const addRegisterationNo = () => {
  return (
    <div>
      <Layout>
        <Form>
          <h4>Add Registration no of the user</h4>
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
          </Row>
        </Form>
      </Layout>
    </div>
  );
};

export default addRegisterationNo;
