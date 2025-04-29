
export interface Dispatcher {
  id: string;
  name: string;
  area: string;
  phone: string;
  vehicleNumber: string;
  activeOrders: number;
  status: 'active' | 'busy' | 'offline';
}

export const dispatchers: Dispatcher[] = [
  {
    id: "DISP-001",
    name: "Rahul Singh",
    area: "Dubai Marina",
    phone: "+971 50 123 4567",
    vehicleNumber: "DXB-5678",
    activeOrders: 2,
    status: "active"
  },
  {
    id: "DISP-002",
    name: "Ali Mohammed",
    area: "Downtown Dubai",
    phone: "+971 55 234 5678",
    vehicleNumber: "DXB-9012",
    activeOrders: 3,
    status: "busy"
  },
  {
    id: "DISP-003",
    name: "Farhan Khan",
    area: "Jumeirah",
    phone: "+971 52 345 6789",
    vehicleNumber: "DXB-3456",
    activeOrders: 0,
    status: "active"
  },
  {
    id: "DISP-004",
    name: "Hassan Ahmed",
    area: "Business Bay",
    phone: "+971 54 456 7890",
    vehicleNumber: "DXB-7890",
    activeOrders: 0,
    status: "offline"
  },
  {
    id: "DISP-005",
    name: "Sajid Patel",
    area: "Palm Jumeirah",
    phone: "+971 56 567 8901",
    vehicleNumber: "DXB-1234",
    activeOrders: 1,
    status: "active"
  }
];
