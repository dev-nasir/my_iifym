
export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: 'active' | 'inactive';
}

export const products: Product[] = [
  {
    id: "PROD-001",
    name: "Premium Protein Powder",
    category: "Supplements",
    price: "199 AED",
    stock: 45,
    status: "active"
  },
  {
    id: "PROD-002",
    name: "Fitness Smart Watch",
    category: "Accessories",
    price: "550 AED",
    stock: 23,
    status: "active"
  },
  {
    id: "PROD-003",
    name: "Resistance Bands Set",
    category: "Equipment",
    price: "120 AED",
    stock: 67,
    status: "active"
  },
  {
    id: "PROD-004",
    name: "Vegan Protein Bars",
    category: "Nutrition",
    price: "85 AED",
    stock: 0,
    status: "inactive"
  },
  {
    id: "PROD-005",
    name: "Adjustable Dumbbell Set",
    category: "Equipment",
    price: "899 AED",
    stock: 12,
    status: "active"
  }
];
