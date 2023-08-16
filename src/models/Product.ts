export type Product = {
  id: string;
  storeId: string;
  amount: string;
  description: string;
  longDescription: string;
  condition: string;
  availabilityStartDate: Date;
  availabilityStartTime: Date;
  availabilityEndDate: Date;
  availabilityEndTime: Date;
};

export const emptyProduct: Product = {
  id: "",
  storeId: "",
  amount: "",
  description: "",
  longDescription: "",
  condition: "",
  availabilityStartDate: new Date(),
  availabilityStartTime: new Date(),
  availabilityEndDate: new Date(),
  availabilityEndTime: new Date(),
};
