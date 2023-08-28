export type User = {
  firstname: string;
  lastname: string;
  email: string;
  whatsappNumber: string;
  address: string;
  authStrategy: string;
  avatar: string;
  city: string;
  country: string;
  id: string;
  password: string;
  phoneNumber: string;
  token: string;
  username: string;
  verified: boolean;
};

export const emptyUser: User = {
  firstname: "",
  lastname: "",
  email: "",
  whatsappNumber: "",
  address: "",
  authStrategy: "",
  avatar: "",
  city: "",
  country: "",
  id: "",
  password: "",
  phoneNumber: "",
  token: "",
  username: "",
  verified: false
};
