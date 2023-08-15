import { Button, Form, Input } from "antd";
import React from "react";
import { AuthService } from "../../services/auth/AuthService";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userAtom } from "../../recoil/user/user-atom";
import { Navigate, useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const setUser = useSetRecoilState(userAtom);
  const navigate = useNavigate();

  const initialValues = {
    phoneNumber: "679988809",
    email: "bayehniville@gmail.com",
    password: "bayehniville@2023",
  };

  const onFinish = async (values: any) => {
    try {
      const response = await AuthService.login(values);
      if (response.success) {
        setUser(response.data);
        navigate("/dashboard");
      }
    } catch (err) {
      console.log("err: ", err);
    }
  };

  return (
    <>
      <Form
        form={form}
        initialValues={initialValues}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item label="Phone number" name="phoneNumber">
          <Input type="tel" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" />
        </Form.Item>
        <Button htmlType="submit">Login</Button>
      </Form>
    </>
  );
};
