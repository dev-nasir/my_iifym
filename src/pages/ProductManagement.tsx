
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import DataTable from '@/components/shared/DataTable';
import StatusBadge from '@/components/shared/StatusBadge';
import AddRecordDialog from '@/components/shared/AddRecordDialog';
import { products, Product } from '@/data/productsData';
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

const ProductManagement = () => {
  const [productsList, setProductsList] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState('');
  
  const form = useForm({
    defaultValues: {
      name: '',
      category: '',
      price: '',
      stock: 0
    }
  });

  const columns = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Product Name', accessorKey: 'name' },
    { header: 'Category', accessorKey: 'category' },
    { header: 'Price', accessorKey: 'price' },
    { header: 'Stock', accessorKey: 'stock' },
    { 
      header: 'Status', 
      accessorKey: 'status',
      cell: (row: Product) => <StatusBadge status={row.status} />
    },
    { 
      header: 'Actions', 
      accessorKey: 'id',
      cell: (row: Product) => (
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={() => handleEditProduct(row.id)} title="Edit">
            <Edit size={16} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleDeleteProduct(row.id)} title="Delete">
            <Trash size={16} className="text-red-500" />
          </Button>
        </div>
      )
    },
  ];

  const filteredProducts = productsList.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditProduct = (id: string) => {
    toast({
      title: "Edit Product",
      description: `Editing product ${id}`,
    });
  };

  const handleDeleteProduct = (id: string) => {
    setProductsList(productsList.filter(product => product.id !== id));
    toast({
      title: "Product Deleted",
      description: `Product ${id} has been deleted`,
    });
  };

  const handleAddProduct = (formData: any) => {
    const newProduct: Product = {
      id: `PROD-${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.name || "New Product",
      category: formData.category || "Other",
      price: formData.price ? `${formData.price} AED` : "0 AED",
      stock: formData.stock || 0,
      status: "active"
    };
    setProductsList([newProduct, ...productsList]);
    toast({
      title: "Product Added",
      description: `New product ${newProduct.name} has been added`,
    });
  };

  return (
    <MainLayout>
      <Header title="Product Management" subtitle="Manage your products" />
      <div className="p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <Input
              placeholder="Search products..."
              className="max-w-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <AddRecordDialog 
              title="Add New Product" 
              onSave={form.handleSubmit(handleAddProduct)}
              triggerText="Add New Product"
            >
              <Form {...form}>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter product name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter product category" {...field} />
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
                    name="stock"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stock</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter stock quantity" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </AddRecordDialog>
          </div>

          <DataTable
            data={filteredProducts}
            columns={columns}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductManagement;
