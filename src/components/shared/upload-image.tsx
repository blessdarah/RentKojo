// components/UploadImage.tsx
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../constants/common.constants";

interface Prop {
  maxCount?: number;
  onUpload: (url: string) => void;
  folderName: string;
}
const UploadImage = ({ onUpload, maxCount = 1, folderName }: Prop) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange = (info: any) => {
    setFileList(info.fileList);
    if (info.file.status === "done") {
      const url = info.file.response.data; // Assume the response contains the URL
      onUpload(url);
    }
  };

  const customRequest = async ({ file, onSuccess }: any) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await axios.post(
      `${apiUrl}/uploads/${folderName}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    onSuccess(response.data);
  };

  return (
    <Upload
      maxCount={maxCount}
      name="image"
      customRequest={customRequest}
      onChange={handleChange}
      fileList={fileList}
    >
      <Button block style={{ width: "100%" }} icon={<UploadOutlined />}>
        Upload Image
      </Button>
    </Upload>
  );
};

export default UploadImage;
