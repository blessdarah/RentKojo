import dayjs from "dayjs";
import type { Dayjs } from "dayjs";

export type Product = {
  id: string;
  name: string;
  storeId: string;
  amount: number;
  description: string;
  longDescription: string;
  durationOfRentage: number;
  condition: string;
  availabilityStartDate: Dayjs;
  availabilityStartTime: Dayjs;
  availabilityEndDate: Dayjs;
  availabilityEndTime: Dayjs;
  images: string[];
};

export const emptyProduct: Product = {
  id: "",
  storeId: "",
  amount: 0,
  description: "",
  longDescription: "",
  condition: "",
  availabilityStartDate: dayjs(new Date()),
  availabilityStartTime: dayjs(new Date()),
  availabilityEndDate: dayjs(new Date()),
  availabilityEndTime: dayjs(new Date()),
  images: [],
  name: "",
  durationOfRentage: 0
};
