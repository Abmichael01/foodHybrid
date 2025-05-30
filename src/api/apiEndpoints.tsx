import apiClient from "./apiClient";
import { PartnerSignupData } from "@/types";

export const partnerSignup = async (
  data: Partial<PartnerSignupData>,
  options: { method: "POST" | "PATCH" }
): Promise<unknown> => {
  const url = "/users/signup/partner/";

  if (options.method === "POST") {
    const res = await apiClient.post(url, data);
    return res.data;
  } else if (options.method === "PATCH") {
    const res = await apiClient.patch(url, data);
    return res.data;
  }

  throw new Error("Invalid method");
};

export const verifyOtp = async (
  data: Partial<PartnerSignupData>
): Promise<unknown> => {
  const res = await apiClient.post("/users/verify-otp/partner/", data);
  return res.data;
};

export const partnerSignin = async (
  data: Partial<PartnerSignupData>
): Promise<unknown> => {
  const res = await apiClient.post("/users/signin/partner/", data);
  return res.data;
};
