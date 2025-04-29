
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import DataTable from '@/components/shared/DataTable';
import StatusBadge from '@/components/shared/StatusBadge';
import AddRecordDialog from '@/components/shared/AddRecordDialog';
import { customers, Customer } from '@/data/customersData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, Edit, Trash } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const CustomerManagement = () => {
  const [customersList, setCustomersList] = useState<Customer[]>(customers);
  const [searchQuery, setSearchQuery] = useState('');

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const columns = [
    { header: 'Customer ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    { header: 'Email', accessorKey: 'email' },
    { header: 'Phone', accessorKey: 'phone' },
    { header: 'Orders', accessorKey: 'orders' },
    { 
      header: 'Status', 
      accessorKey: 'status',
      cell: (row: Customer) => <StatusBadge status={row.status} />
    },
    { 
      header: 'Actions', 
      accessorKey: 'id',
      cell: (row: Customer) => (
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={() => handleViewCustomer(row.id)} title="View Details">
            <Eye size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleEditCustomer(row.id)} title="Edit">
            <Edit size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleDeleteCustomer(row.id)} title="Delete">
            <Trash size={16} className="text-red-500" />
          </Button>
        </div>
      )
    },
  ];

  const filteredCustomers = customersList.filter(customer => 
    customer.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewCustomer = (id: string) => {
    toast({
      title: "Customer Details",
      description: `Viewing details for customer ${id}`,
    });
  };

  const handleEditCustomer = (id: string) => {
    toast({
      title: "Edit Customer",
      description: `Editing customer ${id}`,
    });
  };

  const handleDeleteCustomer = (id: string) => {
    setCustomersList(customersList.filter(customer => customer.id !== id));
    toast({
      title: "Customer Deleted",
      description: `Customer ${id} has been deleted`,
    });
  };

  const handleAddCustomer = (formData: any) => {
    const newCustomer: Customer = {
      id: `CUST-${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.name || "New Customer",
      email: formData.email || "customer@example.com",
      phone: formData.phone || "+971 50 000 0000",
      orders: 0,
      status: "active",
      joinedDate: new Date().toISOString().split('T')[0]
    };
    setCustomersList([newCustomer, ...customersList]);
    toast({
      title: "Customer Added",
      description: `New customer ${newCustomer.name} has been added`,
    });
  };

  return (
    <MainLayout>
      <Header title="Customer Management" subtitle="Manage your customers" />
      <div className="p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <Input
              placeholder="Search customers..."
              className="max-w-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <AddRecordDialog 
              title="Add New Customer" 
              onSave={form.handleSubmit(handleAddCustomer)}
              triggerText="Add New Customer"
            >
              <Form {...form}>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter customer name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter email address" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter phone number" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </AddRecordDialog>
          </div>

          <DataTable
            data={filteredCustomers}
            columns={columns}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default CustomerManagement;
