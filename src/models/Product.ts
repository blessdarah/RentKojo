import dayjs from "dayjs";
import type { Dayjs } from "dayjs";

export type Product = {
  id: string;
  storeId: string;
  amount: string;
  description: string;
  longDescription: string;
  condition: string;
  availabilityStartDate: Dayjs;
  availabilityStartTime: Dayjs;
  availabilityEndDate: Dayjs;
  availabilityEndTime: Dayjs;
};

export const emptyProduct: Product = {
  id: "",
  storeId: "",
  amount: "",
  description: "",
  longDescription: "",
  condition: "",
  availabilityStartDate: dayjs(new Date()),
  availabilityStartTime: dayjs(new Date()),
  availabilityEndDate: dayjs(new Date()),
  availabilityEndTime: dayjs(new Date()),
};
