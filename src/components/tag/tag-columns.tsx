import { App, Button, Popconfirm, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";
import { Tag } from "../../models/Tag";
import { useModalContext } from "../../context-hooks/AppModelContext";
import { TagForm } from "./tag-form";
import { TagService } from "../../services/TagService";
import { useRecoilState } from "recoil";
import { tagListAtom } from "../../recoil/tag-atom";

export const useTagColumns = () => {
  const { setShow, setTitle, setContent } = useModalContext();
  const [tags, setTags] = useRecoilState(tagListAtom);
  const { notification } = App.useApp();

  const handleEdit = (tag: Tag) => {
    setTitle("Edit tag");
    setContent(<TagForm formMode="update" tag={tag} />);
    setShow(true);
  };

  const handleDelete = async (tag: Tag) => {
    try {
      const feedback = await TagService.delete(tag);
      if (feedback.success) {
        setTags(tags.filter((item) => item.id !== tag.id));
        notification.success({
          message: feedback.message,
          placement: "topRight",
        });
      } else {
        notification.error({
          message: feedback.message,
          placement: "topRight",
        });
      }
    } catch (err) {
      console.log("Err: ", err);
      notification.error({
        message: "Somehing went wrong",
        placement: "topRight",
      });
    }
  };

  const tagTableColumns: ColumnsType<Tag> = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
    },
    {
      title: "Options",
      width: "10rem",
      render: (_, row) => (
        <Space>
          <Button
            onClick={() => handleEdit(row)}
            size="small"
            icon={<AiTwotoneEdit />}
            title="Edit"
          ></Button>
          <Popconfirm
            title="Dangerous action!"
            description="Are you sure you want to delete this tag?"
          >
            <Button
              onClick={() => handleDelete(row)}
              size="small"
              danger
              icon={<AiOutlineDelete />}
              title="delete"
            ></Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return {
    tagTableColumns,
  };
};
