
// Mock data for dashboard components
export const salesData = [
  { name: 'Sun', amount: 1200 },
  { name: 'Mon', amount: 1900 },
  { name: 'Tue', amount: 2300 },
  { name: 'Wed', amount: 1800 },
  { name: 'Thu', amount: 2400 },
  { name: 'Fri', amount: 1700 },
  { name: 'Sat', amount: 1900 },
];

export const ordersByCityData = [
  { name: 'Dubai', value: 40 },
  { name: 'Sharjah', value: 20 },
  { name: 'Abu Dhabi', value: 2 }, // Changed from 02 to 2 to fix the octal literal error
];

export const salesByProductData = [
  { name: 'Product 1', value: 45 },
  { name: 'Product 2', value: 28 },
  { name: 'Product 3', value: 32 },
  { name: 'Product 4', value: 18 },
];

export const salesByPackageData = [
  { name: 'Package 1', value: 40 },
  { name: 'Package 2', value: 30 },
  { name: 'Package 3', value: 20 },
  { name: 'Package 4', value: 10 },
];

export const ordersData = [
  { 
    id: 'OD82134', 
    itemSold: '03', // Changed from Q3 to 03 as requested
    sales: '8,33,142 AED', 
    timeSlot: '4:00 GST' 
  },
  { 
    id: 'OD82134', 
    itemSold: '03', // Changed from Q3 to 03 as requested
    sales: '62,33,142 AED', 
    timeSlot: '4:00 GST' 
  },
  { 
    id: 'OD82134', 
    itemSold: '03', // Changed from Q3 to 03 as requested
    sales: '10,33,142 AED', 
    timeSlot: '4:00 GST' 
  },
];
