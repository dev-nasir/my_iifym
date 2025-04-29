
export interface Promotion {
  id: string;
  title: string;
  description: string;
  discountType: 'percentage' | 'fixed' | 'free item';
  discountValue: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'inactive' | 'scheduled';
}

export const promotions: Promotion[] = [
  {
    id: "PROMO-001",
    title: "Summer Sale",
    description: "Get 25% off on all summer fitness packages",
    discountType: "percentage",
    discountValue: "25%",
    startDate: "2025-06-01",
    endDate: "2025-08-31",
    status: "scheduled"
  },
  {
    id: "PROMO-002",
    title: "Buy One Get One",
    description: "Buy one protein shake, get one free",
    discountType: "free item",
    discountValue: "1 Free Item",
    startDate: "2025-04-15",
    endDate: "2025-05-15",
    status: "active"
  },
  {
    id: "PROMO-003",
    title: "Flash Deal",
    description: "Flat 100 AED off on orders above 500 AED",
    discountType: "fixed",
    discountValue: "100 AED",
    startDate: "2025-04-28",
    endDate: "2025-04-30",
    status: "active"
  },
  {
    id: "PROMO-004",
    title: "Seasonal Offer",
    description: "Get 15% off on all fitness equipment",
    discountType: "percentage",
    discountValue: "15%",
    startDate: "2025-03-01",
    endDate: "2025-04-15",
    status: "inactive"
  },
  {
    id: "PROMO-005",
    title: "New Year Special",
    description: "30% off on all yearly memberships",
    discountType: "percentage",
    discountValue: "30%",
    startDate: "2026-01-01",
    endDate: "2026-01-31",
    status: "scheduled"
  }
];
