
export interface Order {
  id: string;
  customerName: string;
  date: string;
  status: 'pending' | 'delivered' | 'cancelled';
  total: string;
  address: string;
}

export const orders: Order[] = [
  {
    id: "ORD-001",
    customerName: "Ahmed Ali",
    date: "2025-04-28",
    status: "delivered",
    total: "1,240 AED",
    address: "Dubai Marina, Building 4, Apt 302"
  },
  {
    id: "ORD-002",
    customerName: "Sara Khan",
    date: "2025-04-27",
    status: "pending",
    total: "860 AED",
    address: "Downtown Dubai, Tower 8, Suite 1201"
  },
  {
    id: "ORD-003",
    customerName: "Mohammed Hassan",
    date: "2025-04-26",
    status: "delivered",
    total: "2,105 AED",
    address: "Jumeirah Beach Residence, Plaza 2, Apt 505"
  },
  {
    id: "ORD-004",
    customerName: "Fatima Abdullah",
    date: "2025-04-25",
    status: "cancelled",
    total: "490 AED",
    address: "Business Bay, Executive Tower C, Office 1502"
  },
  {
    id: "ORD-005",
    customerName: "Yusuf Ahmed",
    date: "2025-04-24",
    status: "delivered",
    total: "1,750 AED",
    address: "Palm Jumeirah, Shoreline 6, Villa 24"
  }
];
