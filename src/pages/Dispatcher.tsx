
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import DataTable from '@/components/shared/DataTable';
import StatusBadge from '@/components/shared/StatusBadge';
import AddRecordDialog from '@/components/shared/AddRecordDialog';
import { dispatchers, Dispatcher } from '@/data/dispatchersData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Edit, Trash } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const DispatcherPage = () => {
  const [dispatchersList, setDispatchersList] = useState<Dispatcher[]>(dispatchers);
  const [searchQuery, setSearchQuery] = useState('');

  const form = useForm({
    defaultValues: {
      name: '',
      area: '',
      phone: '',
      vehicleNumber: ''
    }
  });

  const columns = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    { header: 'Area', accessorKey: 'area' },
    { header: 'Phone', accessorKey: 'phone' },
    { header: 'Vehicle Number', accessorKey: 'vehicleNumber' },
    { header: 'Active Orders', accessorKey: 'activeOrders' },
    { 
      header: 'Status', 
      accessorKey: 'status',
      cell: (row: Dispatcher) => <StatusBadge status={row.status} />
    },
    { 
      header: 'Actions', 
      accessorKey: 'id',
      cell: (row: Dispatcher) => (
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={() => handleCallDispatcher(row.phone)} title="Call">
            <Phone size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleEditDispatcher(row.id)} title="Edit">
            <Edit size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleDeleteDispatcher(row.id)} title="Delete">
            <Trash size={16} className="text-red-500" />
          </Button>
        </div>
      )
    },
  ];

  const filteredDispatchers = dispatchersList.filter(dispatcher => 
    dispatcher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dispatcher.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCallDispatcher = (phone: string) => {
    toast({
      title: "Call Dispatcher",
      description: `Calling dispatcher at ${phone}`,
    });
  };

  const handleEditDispatcher = (id: string) => {
    toast({
      title: "Edit Dispatcher",
      description: `Editing dispatcher ${id}`,
    });
  };

  const handleDeleteDispatcher = (id: string) => {
    setDispatchersList(dispatchersList.filter(dispatcher => dispatcher.id !== id));
    toast({
      title: "Dispatcher Deleted",
      description: `Dispatcher ${id} has been deleted`,
    });
  };

  const handleAddDispatcher = (formData: any) => {
    const newDispatcher: Dispatcher = {
      id: `DISP-${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.name || "New Dispatcher",
      area: formData.area || "Dubai",
      phone: formData.phone || "+971 50 000 0000",
      vehicleNumber: formData.vehicleNumber || "DXB-0000",
      activeOrders: 0,
      status: "active"
    };
    setDispatchersList([newDispatcher, ...dispatchersList]);
    toast({
      title: "Dispatcher Added",
      description: `New dispatcher ${newDispatcher.name} has been added`,
    });
  };

  return (
    <MainLayout>
      <Header title="Dispatcher" subtitle="Manage your dispatches" />
      <div className="p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <Input
              placeholder="Search dispatchers..."
              className="max-w-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <AddRecordDialog 
              title="Add New Dispatcher" 
              onSave={form.handleSubmit(handleAddDispatcher)}
              triggerText="Add New Dispatcher"
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
                          <Input placeholder="Enter dispatcher name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="area"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Area</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter service area" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter phone number" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="vehicleNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vehicle Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter vehicle number" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </AddRecordDialog>
          </div>

          <DataTable
            data={filteredDispatchers}
            columns={columns}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default DispatcherPage;
