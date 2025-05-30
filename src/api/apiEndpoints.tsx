import apiClient from "./apiClient";
import { PartnerSignupData } from "@/types";

export const  partnerSignup = async (data: Partial<PartnerSignupData>, post?: boolean, patch?: boolean): Promise<unknown> => {
    if (post) {
        const res = await apiClient.post("/users/signup/partner/", data);
        return res.data;
    }
    if (patch) {
        const res = await apiClient.patch("/users/signup/partner/", data);
        return res.data;
    }
}

export const  verifyOtp = async (data: Partial<PartnerSignupData>): Promise<unknown> => {
    const res = await apiClient.post("/users/verify-otp/partner/", data);
    return res.data;
}

export const partnerSignin = async (data: Partial<PartnerSignupData>): Promise<unknown> => {
    const res = await apiClient.post("/users/signin/partner/", data);
    return res.data;
}