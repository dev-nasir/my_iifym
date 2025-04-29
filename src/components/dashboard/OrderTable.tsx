
import React from 'react';

interface Order {
  id: string;
  itemSold: string;
  sales: string;
  timeSlot: string;
}

interface OrderTableProps {
  orders: Order[];
  title?: string;
}

const OrderTable = ({ orders, title = "Order Sold" }: OrderTableProps) => {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
      <h3 className="font-medium mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item Sold
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Net Sales
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time Slot
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="py-4 px-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-700">
                  {order.itemSold}
                </td>
                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-700">
                  {order.sales}
                </td>
                <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-700">
                  {order.timeSlot}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
