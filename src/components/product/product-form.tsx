import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  TimePicker,
  message,
} from "antd";
import React from "react";
import { useRecoilState } from "recoil";
import { FormMode } from "../../constants/common.constants";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { useFormInit } from "../../hooks/FormInitHook";
import { Product, emptyProduct } from "../../models/Product";
import { productListAtom } from "../../recoil/product-atom";
import { ProductService } from "../../services/ProductService";
import TextArea from "antd/es/input/TextArea";

type Props = {
  formMode?: FormMode;
  product?: Product;
};

export const ProductForm: React.FC<Props> = ({
  formMode = "create",
  product = emptyProduct,
}) => {
  const { setShow } = useModalContext();
  const { initFormData } = useFormInit();
  const [products, setProducts] = useRecoilState(productListAtom);
  const [form] = Form.useForm();

  initFormData(form, formMode, product, [
    "availabilityStartDate",
    "availabilityStartTime",
    "availabilityEndDate",
    "availabilityEndTime",
  ]);

  const onFinish = async (values: Product) => {
    try {
      let response: any;
      if (formMode === "create") {
        response = await ProductService.create(values);
        setProducts([...products, response.data]);
      } else {
        response = await ProductService.update({ ...product, ...values });
        console.log("values: ", response);
        const others = products.filter(
          (item: Product) => item.id !== response.data.id
        );
        setProducts([...others, response.data]);
      }
      message.success(response.message);
      form.resetFields();
      setShow(false);
    } catch (err) {
      message.error("somthing went wrong");
    }
  };

  return (
    <Form<Product>
      onFinish={onFinish}
      name="product-form"
      form={form}
      layout="vertical"
      initialValues={product}
    >
      <Form.Item
        label="Name"
        name="description"
        rules={[{ required: true, message: "Name is required" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="longDescription"
        rules={[{ required: true, message: "Description is required" }]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          { required: true, message: "Amount is required" },
          { min: 0, message: "Min value can only be zero" },
          { type: "number", message: "Amount must be numberic" },
        ]}
      >
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Condition"
        name="condition"
        rules={[{ required: true, message: "Condition is required" }]}
      >
        <Input />
      </Form.Item>
      <Row gutter={[8, 8]}>
        <Col md={12}>
          <Form.Item
            label="Available from"
            name="availabilityStartDate"
            rules={[{ required: true, message: "Start date is required" }]}
          >
            <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item
            label="As from"
            name="availabilityStartTime"
            rules={[{ required: true, message: "Start time is required" }]}
          >
            <TimePicker format="hh:mm" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item
            label="Available till"
            name="availabilityEndDate"
            rules={[{ required: true, message: "End date is required" }]}
          >
            <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col md={12}>
          <Form.Item
            label="Latest"
            name="availabilityEndTime"
            rules={[{ required: true, message: "Latest time is required" }]}
          >
            <TimePicker format="hh:mm" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Button htmlType="submit" type="primary">
        Save
      </Button>
    </Form>
  );
};
