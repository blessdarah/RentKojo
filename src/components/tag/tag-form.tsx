import { App, Button, Form, Input } from "antd";
import React from "react";
import { useRecoilState } from "recoil";
import { FormMode } from "../../constants/common.constants";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { useFormInit } from "../../hooks/FormInitHook";
import { Tag, emptyTag } from "../../models/Tag";
import { tagListAtom } from "../../recoil/tag-atom";
import { TagService } from "../../services/TagService";

type Props = {
  formMode?: FormMode;
  tag?: Tag;
};

export const TagForm: React.FC<Props> = ({
  formMode = "create",
  tag = emptyTag,
}) => {
  const { setShow } = useModalContext();
  const { initFormData } = useFormInit();
  const { message } = App.useApp();
  const [tags, setTags] = useRecoilState(tagListAtom);
  const [form] = Form.useForm();

  initFormData(form, formMode, tag);

  const onFinish = async (values: Tag) => {
    try {
      let response: any;
      if (formMode === "create") {
        response = await TagService.create(values);
        setTags([...tags, response.data]);
      } else {
        response = await TagService.update({ ...tag, ...values });
        console.log("values: ", response);
        const others = tags.filter((item: Tag) => item.id !== response.data.id);
        setTags([...others, response.data]);
      }
      message.success(response.message);
      form.resetFields();
      setShow(false);
    } catch (err) {
      message.error("somthing went wrong");
    }
  };

  return (
    <Form<Tag>
      onFinish={onFinish}
      name="tag-form"
      form={form}
      layout="vertical"
      initialValues={tag}
    >
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: "Name is required" }]}
      >
        <Input />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        Save
      </Button>
    </Form>
  );
};
