
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import DataTable from '@/components/shared/DataTable';
import StatusBadge from '@/components/shared/StatusBadge';
import AddRecordDialog from '@/components/shared/AddRecordDialog';
import { coupons, Coupon } from '@/data/couponsData';
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

const CouponManagement = () => {
  const [couponsList, setCouponsList] = useState<Coupon[]>(coupons);
  const [searchQuery, setSearchQuery] = useState('');

  const form = useForm({
    defaultValues: {
      code: '',
      discount: '',
      validFrom: '',
      validTo: '',
      usageLimit: 100
    }
  });

  const columns = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Coupon Code', accessorKey: 'code' },
    { header: 'Discount', accessorKey: 'discount' },
    { header: 'Valid From', accessorKey: 'validFrom' },
    { header: 'Valid To', accessorKey: 'validTo' },
    { 
      header: 'Usage', 
      accessorKey: 'usageCount',
      cell: (row: Coupon) => `${row.usageCount}/${row.usageLimit}`
    },
    { 
      header: 'Status', 
      accessorKey: 'status',
      cell: (row: Coupon) => <StatusBadge status={row.status} />
    },
    { 
      header: 'Actions', 
      accessorKey: 'id',
      cell: (row: Coupon) => (
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={() => handleEditCoupon(row.id)} title="Edit">
            <Edit size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleDeleteCoupon(row.id)} title="Delete">
            <Trash size={16} className="text-red-500" />
          </Button>
        </div>
      )
    },
  ];

  const filteredCoupons = couponsList.filter(coupon => 
    coupon.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coupon.discount.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditCoupon = (id: string) => {
    toast({
      title: "Edit Coupon",
      description: `Editing coupon ${id}`,
    });
  };

  const handleDeleteCoupon = (id: string) => {
    setCouponsList(couponsList.filter(coupon => coupon.id !== id));
    toast({
      title: "Coupon Deleted",
      description: `Coupon ${id} has been deleted`,
    });
  };

  const handleAddCoupon = (formData: any) => {
    const newCoupon: Coupon = {
      id: `CPN-${Math.floor(1000 + Math.random() * 9000)}`,
      code: formData.code || `NEW${Math.floor(1000 + Math.random() * 9000)}`,
      discount: formData.discount || "10%",
      validFrom: formData.validFrom || new Date().toISOString().split('T')[0],
      validTo: formData.validTo || "2025-12-31",
      usageLimit: formData.usageLimit || 100,
      usageCount: 0,
      status: "active"
    };
    setCouponsList([newCoupon, ...couponsList]);
    toast({
      title: "Coupon Added",
      description: `New coupon ${newCoupon.code} has been added`,
    });
  };

  return (
    <MainLayout>
      <Header title="Coupon Management" subtitle="Manage your coupons" />
      <div className="p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <Input
              placeholder="Search coupons..."
              className="max-w-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <AddRecordDialog 
              title="Add New Coupon" 
              onSave={form.handleSubmit(handleAddCoupon)}
              triggerText="Add New Coupon"
            >
              <Form {...form}>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Coupon Code</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter coupon code" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="discount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Discount</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter discount" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="validFrom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Valid From</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="validTo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Valid To</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="usageLimit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Usage Limit</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter usage limit" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </AddRecordDialog>
          </div>

          <DataTable
            data={filteredCoupons}
            columns={columns}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default CouponManagement;
