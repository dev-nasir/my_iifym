
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import DataTable from '@/components/shared/DataTable';
import StatusBadge from '@/components/shared/StatusBadge';
import AddRecordDialog from '@/components/shared/AddRecordDialog';
import { packages, Package } from '@/data/packagesData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Edit, Trash } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const PackageManagement = () => {
  const [packagesList, setPackagesList] = useState<Package[]>(packages);
  const [searchQuery, setSearchQuery] = useState('');

  const form = useForm({
    defaultValues: {
      name: '',
      duration: '',
      price: '',
      features: ''
    }
  });

  const columns = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Package Name', accessorKey: 'name' },
    { header: 'Duration', accessorKey: 'duration' },
    { header: 'Price', accessorKey: 'price' },
    { 
      header: 'Features', 
      accessorKey: 'features',
      cell: (row: Package) => (
        <div className="max-w-xs truncate" title={row.features.join(', ')}>
          {row.features.join(', ')}
        </div>
      )
    },
    { 
      header: 'Status', 
      accessorKey: 'status',
      cell: (row: Package) => <StatusBadge status={row.status} />
    },
    { 
      header: 'Actions', 
      accessorKey: 'id',
      cell: (row: Package) => (
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={() => handleEditPackage(row.id)} title="Edit">
            <Edit size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleDeletePackage(row.id)} title="Delete">
            <Trash size={16} className="text-red-500" />
          </Button>
        </div>
      )
    },
  ];

  const filteredPackages = packagesList.filter(pkg => 
    pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.duration.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditPackage = (id: string) => {
    toast({
      title: "Edit Package",
      description: `Editing package ${id}`,
    });
  };

  const handleDeletePackage = (id: string) => {
    setPackagesList(packagesList.filter(pkg => pkg.id !== id));
    toast({
      title: "Package Deleted",
      description: `Package ${id} has been deleted`,
    });
  };

  const handleAddPackage = (formData: any) => {
    const features = formData.features ? formData.features.split(',').map((f: string) => f.trim()) : ["Basic feature"];
    
    const newPackage: Package = {
      id: `PKG-${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.name || "New Package",
      duration: formData.duration || "1 Month",
      price: formData.price || "0 AED",
      features: features,
      status: "active"
    };
    setPackagesList([newPackage, ...packagesList]);
    toast({
      title: "Package Added",
      description: `New package ${newPackage.name} has been added`,
    });
  };

  return (
    <MainLayout>
      <Header title="Package Management" subtitle="Manage your packages" />
      <div className="p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <Input
              placeholder="Search packages..."
              className="max-w-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <AddRecordDialog 
              title="Add New Package" 
              onSave={form.handleSubmit(handleAddPackage)}
              triggerText="Add New Package"
            >
              <Form {...form}>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Package Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter package name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Duration</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter package duration" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price (AED)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter price" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="features"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Features (comma-separated)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter features" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </AddRecordDialog>
          </div>

          <DataTable
            data={filteredPackages}
            columns={columns}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default PackageManagement;
