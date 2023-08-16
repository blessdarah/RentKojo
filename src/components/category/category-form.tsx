import { Button, Form, Input, message } from "antd";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { FormMode } from "../../constants/common.constants";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { Category, emptyCategory } from "../../models/Category";
import { categoryListAtom } from "../../recoil/category-atom";
import { CategoryService } from "../../services/CategoryService";
import { useFormInit } from "../../hooks/FormInitHook";

type Props = {
  formMode?: FormMode;
  category?: Category;
};

export const CategoryForm: React.FC<Props> = ({
  formMode = "create",
  category = emptyCategory,
}) => {
  const { setShow } = useModalContext();
  const { initFormData } = useFormInit();
  const [categories, setCategories] = useRecoilState(categoryListAtom);
  const [form] = Form.useForm();

  initFormData(form, formMode, category);

  const onFinish = async (values: Category) => {
    try {
      let response;
      if (formMode === "create") {
        response = await CategoryService.create(values);
        setCategories([...categories, response.data]);
      } else {
        console.log("values: ", { ...category, ...values });
        response = await CategoryService.update({ ...category, ...values });
        console.log("values: ", response);
        const others = categories.filter(
          (item) => item.id !== response.data.id
        );
        setCategories([...others, response.data]);
      }
      message.success(response.message);
      form.resetFields();
      setShow(false);
    } catch (err) {
      message.error("somthing went wrong");
    }
  };

  return (
    <Form<Category>
      onFinish={onFinish}
      name="category-form"
      form={form}
      layout="vertical"
      initialValues={category}
    >
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: "Name is required" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Description is required" }]}
      >
        <Input />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        Save
      </Button>
    </Form>
  );
};
