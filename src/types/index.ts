export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
};

// ...existing code...

export type PersonalDetails = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  profile_picture: string | null;
};

export type UserDetails = {
  daily_roi: number;
  total_roi: number;
  total_roi_expected: number;
  total_roi_paid: number;
  roi_pending: number;
  total_invested: number;
  wallet_balance: number;
  investment_summary: unknown[]; // You might want to create a specific type for this
  roi_over_time: unknown[]; // You might want to create a specific type for this
  personal_details: PersonalDetails;
  has_pin: boolean;
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
  message?: string;
};

export type ShopProduct = {
  id: number;
  name: string;
  price: string;
  product_id: string;
  roi_percentage: string;
  stock_quantity: number;
  description: string;
}

export type BeneficiaryData = {
  id?: number;
  bank_name: string;
  account_number: string;
  name: string;
}

export type WithdrawalData = {
  amount: number;
  to: BeneficiaryData;
  transaction_pin: string;
}

export type TransactionPinData = {
  transaction_pin?: string;
  otp?: string;
  pin?: string;
}

export type AddToCartData = {
  product_id: string;
  quantity: number;
}

export type RoiCycle = {
  cycle: number;
  amount: number;
  payout_date: string;
};

export type CartItem = {
  product_id: string;
  product_name: string;
  quantity: number;
  price: number;
  total_amount: number;
  roi_percentage: number;
  total_roi: number;
  roi_cycles: RoiCycle[];
};

export type ViewCartData = {
  total_items: number;
  items: CartItem[];
};


export type WithdrawalPinFormData = {
  transaction_pin: string;
  otp: string;
  pin: string;
}

export type ChangePasswordData = {
  old_password: string;
  new_password: string;
}
