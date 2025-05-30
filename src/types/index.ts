export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
};

export type PartnerSignupData = {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  otp: string;
};

export type PartnerSigninData = {
  username: string;
  password: string;
  user_type: string;
};

export type ResponseData = {
  detail?: string;
  tokens?: { access: string; refresh: string };
  message: string;
};
