
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import DataTable from '@/components/shared/DataTable';
import StatusBadge from '@/components/shared/StatusBadge';
import AddRecordDialog from '@/components/shared/AddRecordDialog';
import { promotions, Promotion } from '@/data/promotionsData';
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

const OffersPromotions = () => {
  const [promotionsList, setPromotionsList] = useState<Promotion[]>(promotions);
  const [searchQuery, setSearchQuery] = useState('');

  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      discountValue: '',
      startDate: '',
      endDate: ''
    }
  });

  const columns = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Title', accessorKey: 'title' },
    { 
      header: 'Description', 
      accessorKey: 'description',
      cell: (row: Promotion) => (
        <div className="max-w-xs truncate" title={row.description}>
          {row.description}
        </div>
      )
    },
    { header: 'Discount', accessorKey: 'discountValue' },
    { header: 'Start Date', accessorKey: 'startDate' },
    { header: 'End Date', accessorKey: 'endDate' },
    { 
      header: 'Status', 
      accessorKey: 'status',
      cell: (row: Promotion) => <StatusBadge status={row.status} />
    },
    { 
      header: 'Actions', 
      accessorKey: 'id',
      cell: (row: Promotion) => (
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={() => handleEditPromotion(row.id)} title="Edit">
            <Edit size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleDeletePromotion(row.id)} title="Delete">
            <Trash size={16} className="text-red-500" />
          </Button>
        </div>
      )
    },
  ];

  const filteredPromotions = promotionsList.filter(promotion => 
    promotion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    promotion.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditPromotion = (id: string) => {
    toast({
      title: "Edit Promotion",
      description: `Editing promotion ${id}`,
    });
  };

  const handleDeletePromotion = (id: string) => {
    setPromotionsList(promotionsList.filter(promotion => promotion.id !== id));
    toast({
      title: "Promotion Deleted",
      description: `Promotion ${id} has been deleted`,
    });
  };

  const handleAddPromotion = (formData: any) => {
    const newPromotion: Promotion = {
      id: `PROMO-${Math.floor(1000 + Math.random() * 9000)}`,
      title: formData.title || "New Promotion",
      description: formData.description || "Promotion description",
      discountType: "percentage",
      discountValue: formData.discountValue || "10%",
      startDate: formData.startDate || new Date().toISOString().split('T')[0],
      endDate: formData.endDate || "2025-12-31",
      status: "active"
    };
    setPromotionsList([newPromotion, ...promotionsList]);
    toast({
      title: "Promotion Added",
      description: `New promotion ${newPromotion.title} has been added`,
    });
  };

  return (
    <MainLayout>
      <Header title="Offers & Promotions" subtitle="Manage your offers and promotions" />
      <div className="p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <Input
              placeholder="Search promotions..."
              className="max-w-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <AddRecordDialog 
              title="Add New Promotion" 
              onSave={form.handleSubmit(handleAddPromotion)}
              triggerText="Add New Promotion"
            >
              <Form {...form}>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter promotion title" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter promotion description" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="discountValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Discount Value</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter discount value" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </Form>
            </AddRecordDialog>
          </div>

          <DataTable
            data={filteredPromotions}
            columns={columns}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default OffersPromotions;
