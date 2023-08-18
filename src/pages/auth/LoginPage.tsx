import { App, Button, Form, Input, Space, Typography } from "antd";
import React, { useState } from "react";
import { AuthService } from "../../services/auth/AuthService";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useSetup } from "../../hooks/SetupHook";
import { userAtom } from "../../recoil/user-atom";
import { ROUTES } from "../../routes/routes";

export const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const { notification } = App.useApp();
  const { setDefaultStates } = useSetup();
  const setUser = useSetRecoilState(userAtom);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    phoneNumber: "679988809",
    email: "bayehniville@gmail.com",
    password: "bayehniville@2023",
  };

  const onFinish = async (values: any) => {
    setIsLoading(true);
    try {
      const response = await AuthService.login(values);
      if (response.success) {
        setUser(response.data);
        setDefaultStates();
        setIsLoading(false);
        navigate("/dashboard");
        notification.success({
          message: "Authentication successul!",
          placement: "topRight",
        });
      }
    } catch (err) {
      notification.error({
        message: "Login error",
        placement: "topRight",
      });
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: "grid", justifyItems: "center" }}>
      <Form
        form={form}
        initialValues={initialValues}
        onFinish={onFinish}
        layout="vertical"
        style={{ width: "30rem", maxWidth: "90%", marginTop: "4rem" }}
      >
        <Typography.Title>Login</Typography.Title>
        <Form.Item label="Phone number" name="phoneNumber">
          <Input type="tel" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" />
        </Form.Item>

        <Space>
          <Button htmlType="submit" type="primary" loading={isLoading}>
            Login
          </Button>
          <Button type="link" onClick={() => navigate(ROUTES.AUTH.SIGNUP)}>
            Sign up instead
          </Button>
        </Space>
      </Form>
    </div>
  );
};
