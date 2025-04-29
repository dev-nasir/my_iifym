
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import DataTable from '@/components/shared/DataTable';
import StatusBadge from '@/components/shared/StatusBadge';
import AddRecordDialog from '@/components/shared/AddRecordDialog';
import { orders, Order } from '@/data/ordersData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, Download, Trash } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const OrderManagement = () => {
  const [ordersList, setOrdersList] = useState<Order[]>(orders);
  const [searchQuery, setSearchQuery] = useState('');

  const form = useForm({
    defaultValues: {
      customerName: '',
      address: '',
      total: ''
    }
  });

  const columns = [
    { header: 'Order ID', accessorKey: 'id' },
    { header: 'Customer', accessorKey: 'customerName' },
    { header: 'Date', accessorKey: 'date' },
    { 
      header: 'Status', 
      accessorKey: 'status',
      cell: (row: Order) => <StatusBadge status={row.status} />
    },
    { header: 'Total', accessorKey: 'total' },
    { 
      header: 'Actions', 
      accessorKey: 'actions',
      cell: (row: Order) => (
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={() => handleViewOrder(row.id)} title="View Details">
            <Eye size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleDownloadInvoice(row.id)} title="Download Invoice">
            <Download size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleDeleteOrder(row.id)} title="Delete">
            <Trash size={16} className="text-red-500" />
          </Button>
        </div>
      )
    },
  ];

  const filteredOrders = ordersList.filter(order => 
    order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewOrder = (id: string) => {
    toast({
      title: "Order Details",
      description: `Viewing details for order ${id}`,
    });
  };

  const handleDownloadInvoice = (id: string) => {
    toast({
      title: "Invoice Downloaded",
      description: `Invoice for order ${id} has been downloaded`,
    });
  };

  const handleDeleteOrder = (id: string) => {
    setOrdersList(ordersList.filter(order => order.id !== id));
    toast({
      title: "Order Deleted",
      description: `Order ${id} has been deleted`,
    });
  };

  const handleAddOrder = (formData: any) => {
    const newOrder: Order = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: formData.customerName || "New Customer",
      date: new Date().toISOString().split('T')[0],
      status: "pending",
      total: formData.total ? `${formData.total} AED` : "0 AED",
      address: formData.address || "Address to be updated"
    };
    setOrdersList([newOrder, ...ordersList]);
    form.reset(); // Reset form after submission
    toast({
      title: "Order Added",
      description: `New order ${newOrder.id} has been added`,
    });
  };

  return (
    <MainLayout>
      <Header title="Order Management" subtitle="Manage and track all orders" />
      <div className="p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <Input
              placeholder="Search orders..."
              className="max-w-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <AddRecordDialog 
              title="Add New Order" 
              onSave={form.handleSubmit(handleAddOrder)}
              triggerText="Add New Order"
            >
              <Form {...form}>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="customerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Customer Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter customer name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter delivery address" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="total"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total Amount (AED)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter total amount" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </AddRecordDialog>
          </div>

          <DataTable
            data={filteredOrders}
            columns={columns}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default OrderManagement;
