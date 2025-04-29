
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  status: 'active' | 'inactive';
  joinedDate: string;
}

export const customers: Customer[] = [
  {
    id: "CUST-001",
    name: "Ahmed Ali",
    email: "ahmed.ali@example.com",
    phone: "+971 50 123 4567",
    orders: 8,
    status: "active",
    joinedDate: "2024-01-15"
  },
  {
    id: "CUST-002",
    name: "Sara Khan",
    email: "sara.khan@example.com",
    phone: "+971 55 234 5678",
    orders: 4,
    status: "active",
    joinedDate: "2024-02-03"
  },
  {
    id: "CUST-003",
    name: "Mohammed Hassan",
    email: "mohammed.h@example.com",
    phone: "+971 52 345 6789",
    orders: 12,
    status: "active",
    joinedDate: "2023-11-20"
  },
  {
    id: "CUST-004",
    name: "Fatima Abdullah",
    email: "fatima.a@example.com",
    phone: "+971 54 456 7890",
    orders: 2,
    status: "inactive",
    joinedDate: "2024-03-05"
  },
  {
    id: "CUST-005",
    name: "Yusuf Ahmed",
    email: "yusuf.a@example.com",
    phone: "+971 56 567 8901",
    orders: 6,
    status: "active",
    joinedDate: "2023-12-10"
  }
];
