import { FormInstance } from "antd";
import dayjs from "dayjs";
import { FieldData } from "rc-field-form/lib/interface";
import { FormMode } from "../constants/common.constants";

export const useFormInit = () => {
  function initFormData<T>(
    form: FormInstance<any>,
    formMode: FormMode,
    obj: T,
    dateColumns?: Array<string>
  ) {
    let keys = Object.keys(obj as any);
    if (dateColumns && dateColumns.length > 0) {
      keys = keys.filter((key) => !dateColumns.includes(key));
    }

    if (formMode === "create") {
      form.resetFields();
    }

    if (formMode === "update") {
      const fieldData: FieldData[] = [];
      keys.map((key) => {
        fieldData.push({
          name: [key],
          value: obj[key as keyof T],
        });
      });

      if (dateColumns && dateColumns.length > 0) {
        dateColumns.map((col) => {
          fieldData.push({
            name: [col],
            value: dayjs(obj[col as keyof T] as Date),
          });
        });
      }
      form.setFields(fieldData);
    }
  }

  return {
    initFormData,
  };
};
