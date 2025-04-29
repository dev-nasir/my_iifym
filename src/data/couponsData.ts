
export interface Coupon {
  id: string;
  code: string;
  discount: string;
  validFrom: string;
  validTo: string;
  usageLimit: number;
  usageCount: number;
  status: 'active' | 'expired';
}

export const coupons: Coupon[] = [
  {
    id: "CPN-001",
    code: "WELCOME20",
    discount: "20%",
    validFrom: "2025-04-01",
    validTo: "2025-05-31",
    usageLimit: 100,
    usageCount: 45,
    status: "active"
  },
  {
    id: "CPN-002",
    code: "SUMMER30",
    discount: "30%",
    validFrom: "2025-06-01",
    validTo: "2025-08-31",
    usageLimit: 200,
    usageCount: 0,
    status: "active"
  },
  {
    id: "CPN-003",
    code: "FREESHIP",
    discount: "Free Shipping",
    validFrom: "2025-03-01",
    validTo: "2025-03-31",
    usageLimit: 50,
    usageCount: 50,
    status: "expired"
  },
  {
    id: "CPN-004",
    code: "FLASH15",
    discount: "15%",
    validFrom: "2025-04-25",
    validTo: "2025-04-30",
    usageLimit: 30,
    usageCount: 12,
    status: "active"
  },
  {
    id: "CPN-005",
    code: "NEWUSER",
    discount: "10%",
    validFrom: "2025-01-01",
    validTo: "2025-12-31",
    usageLimit: 1000,
    usageCount: 328,
    status: "active"
  }
];
