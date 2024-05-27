import { App, Button, Form, Input, Upload } from "antd";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { FormMode } from "../../constants/common.constants";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { useFormInit } from "../../hooks/FormInitHook";
import { Store, emptyStore } from "../../models/Store";
import { storeListAtom } from "../../recoil/store-atom";
import { StoreService } from "../../services/StoreService";
import { UploadOutlined } from "@ant-design/icons";
import { UploadFile } from "antd/lib";

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
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
  const [form] = Form.useForm();

  console.log("fileList: ", fileList);
  initFormData(form, formMode, store);

  const progress = {
    strokeColor: {
      "0%": "#108ee9",
      "100%": "#87d068",
    },
    strokeWidth: 3,
    format: (percent: any) => percent && `${parseFloat(percent.toFixed(2))}%`,
  };

  const onRemove = (file: UploadFile<any>) => {
    setFileList((prevFileList) =>
      prevFileList.filter((item: any) => item.uid !== file.uid)
    );
  };
  const beforeUpload = (file: UploadFile<any>) => {
    const maxSize = 2 * 1024 * 1024; // 2MB
    const fileSize = file.size as number;
    if (fileSize > maxSize) {
      message.error("File must be smaller than 2MB");
      return false;
    }
    setFileList((prevFileList) => [...prevFileList, file]);
    return true;
  };

  const onChange = (info: any) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = async (values: Store) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("location", values.location);

      // Append the selected file(s) to the FormData object
      fileList.forEach((file: any) => {
        console.log("search:", file.originFileObj);
        formData.append("imageBannerUrl", file);
      });

      let response: any;
      if (formMode === "create") {
        response = await StoreService.create(formData as any);
        setStores([...stores, response.data]);
      } else {
        response = await StoreService.update({
          ...store,
          ...(formData as any),
        });
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
      onFinishFailed={onFinishFailed}
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
        name="imageBannerUrl"
        label="Upload Banner"
        rules={[
          {
            required: true,
            message: "Please select a file to upload",
          },
        ]}
      >
        <Upload
          maxCount={1}
          beforeUpload={beforeUpload}
          onChange={onChange}
          onRemove={onRemove}
          progress={progress}
          fileList={fileList}
        >
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </Form.Item>
      <Button htmlType="submit" type="primary">
        Save
      </Button>
    </Form>
  );
};
