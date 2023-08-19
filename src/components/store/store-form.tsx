import { App, Button, Form, Input } from "antd";
import React from "react";
import { useRecoilState } from "recoil";
import { FormMode } from "../../constants/common.constants";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { useFormInit } from "../../hooks/FormInitHook";
import { Store, emptyStore } from "../../models/Store";
import { storeListAtom } from "../../recoil/store-atom";
import { StoreService } from "../../services/StoreService";

type Props = {
  formMode?: FormMode;
  store?: Store;
};

export const StoreForm: React.FC<Props> = ({
  formMode = "create",
  store = emptyStore,
}) => {
  const { setShow } = useModalContext();
  const { initFormData } = useFormInit();
  const { message } = App.useApp();
  const [stores, setStores] = useRecoilState(storeListAtom);
  const [form] = Form.useForm();

  initFormData(form, formMode, store);

  const onFinish = async (values: Store) => {
    try {
      let response: any;
      if (formMode === "create") {
        response = await StoreService.create(values);
        setStores([...stores, response.data]);
      } else {
        response = await StoreService.update({ ...store, ...values });
        console.log("values: ", response);
        const others = stores.filter(
          (item: Store) => item.id !== response.data.id
        );
        setStores([...others, response.data]);
      }
      message.success(response.message);
      form.resetFields();
      setShow(false);
    } catch (err) {
      message.error("somthing went wrong");
    }
  };

  return (
    <Form<Store>
      onFinish={onFinish}
      name="store-form"
      form={form}
      layout="vertical"
      initialValues={store}
    >
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: "Name is required" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Location"
        name="location"
        rules={[{ required: true, message: "Location is required" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Store banner"
        name="imageBannerUrl"
        rules={[{ required: true, message: "Banner is required" }]}
      >
        <Input />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        Save
      </Button>
    </Form>
  );
};
