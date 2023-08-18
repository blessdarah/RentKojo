import { App, Button, Col, Form, Input, Row, Space, Typography } from "antd";
import React, { useState } from "react";
import { AuthService } from "../../services/auth/AuthService";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useSetup } from "../../hooks/SetupHook";
import { userAtom } from "../../recoil/user-atom";
import { ROUTES } from "../../routes/routes";

export const SignupPage: React.FC = () => {
  const [form] = Form.useForm();
  const { setDefaultStates } = useSetup();
  const setUser = useSetRecoilState(userAtom);
  const navigate = useNavigate();
  const [submiting, setSubmiting] = useState(false);
  const { modal, notification } = App.useApp();

  const onFinish = async (values: any) => {
    try {
      setSubmiting(true);
      const response = await AuthService.signup(values);
      if (response.success) {
        setUser(response.data);
        setDefaultStates();
        notification.success({
          message: "Registration successfull",
          placement: "topRight",
        });
        navigate("/dashboard");
        setSubmiting(false);
      }
    } catch (err) {
      modal.error({
        title: "Oops error signing up",
        content: "Check you form again",
      });
      setSubmiting(false);
    }
  };

  return (
    <div style={{ display: "grid", justifyItems: "center" }}>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        style={{ width: "30rem", marginTop: "4rem" }}
      >
        <Typography.Title>Sign Up</Typography.Title>
        <Row gutter={[16, 0]}>
          <Col md={12}>
            <Form.Item label="First name" name="firstname">
              <Input placeholder="Your first name" />
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item label="Last name" name="lastname">
              <Input placeholder="Your last name" />
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item label="Username" name="username">
              <Input placeholder="Create a username" />
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              label="Whatsapp number"
              name="phoneNumber"
              rules={[
                { required: true, message: "Required" },
                { min: 9, message: "Number must be exactly 9 chars" },
                { max: 9, message: "Number must be exactly 9 chars" },
              ]}
            >
              <Input
                prefix="+237"
                type="tel"
                placeholder="Enter a valid phone number"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Must be a valid email" },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Password is required" },
            { min: 6, message: "Password must be min 6 chars" },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Space>
          <Button htmlType="submit" type="primary" loading={submiting}>
            Sign up
          </Button>
          <Button type="link" onClick={() => navigate(ROUTES.AUTH.LOGIN)}>
            Login instead
          </Button>
        </Space>
      </Form>
    </div>
  );
};
