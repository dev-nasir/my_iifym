
export interface Package {
  id: string;
  name: string;
  duration: string;
  price: string;
  features: string[];
  status: 'active' | 'inactive';
}

export const packages: Package[] = [
  {
    id: "PKG-001",
    name: "Basic Fitness",
    duration: "1 Month",
    price: "299 AED",
    features: ["Access to gym facilities", "Basic nutrition guide", "1 personal training session"],
    status: "active"
  },
  {
    id: "PKG-002",
    name: "Premium Fitness",
    duration: "3 Months",
    price: "799 AED",
    features: ["Access to gym facilities", "Advanced nutrition guide", "5 personal training sessions", "Weekly progress tracking"],
    status: "active"
  },
  {
    id: "PKG-003",
    name: "Gold Member",
    duration: "6 Months",
    price: "1,499 AED",
    features: ["Access to all facilities", "Custom meal planning", "10 personal training sessions", "Monthly body composition analysis"],
    status: "active"
  },
  {
    id: "PKG-004",
    name: "Platinum Member",
    duration: "12 Months",
    price: "2,799 AED",
    features: ["24/7 access to all facilities", "Custom meal planning", "20 personal training sessions", "Monthly body composition analysis", "Free supplements sample pack"],
    status: "active"
  },
  {
    id: "PKG-005",
    name: "Trial Package",
    duration: "1 Week",
    price: "99 AED",
    features: ["Limited time access to gym facilities", "Basic fitness assessment"],
    status: "inactive"
  }
];
