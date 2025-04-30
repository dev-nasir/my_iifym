
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import StatCard from '@/components/dashboard/StatCard';
import BarChart from '@/components/dashboard/BarChart';
import PieChart from '@/components/dashboard/PieChart';
import OrderTable from '@/components/dashboard/OrderTable';
import HorizontalBarChart from '@/components/dashboard/HorizontalBarChart';
import { 
  Activity, 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Tag, 
  Receipt, 
  AlertOctagon, 
  Ticket,
  Download,
  CalendarIcon // Renamed from Calendar to CalendarIcon to avoid conflict
} from 'lucide-react';

import { 
  salesData, 
  ordersByCityData, 
  salesByProductData, 
  salesByPackageData,
  ordersData 
} from '@/data/dashboardData';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format, subDays } from 'date-fns';
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [exportType, setExportType] = useState<string>("export");
  const [date, setDate] = useState<{from: Date; to: Date}>({
    from: subDays(new Date(), 30),
    to: new Date()
  });

  const handleExport = () => {
    switch(exportType) {
      case "pdf":
        toast({
          title: "PDF Export",
          description: "Exporting dashboard data as PDF...",
        });
        break;
      case "excel":
        toast({
          title: "Excel Export",
          description: "Exporting dashboard data as Excel...",
        });
        break;
      default:
        toast({
          title: "Export",
          description: "Please select an export format",
        });
    }
  };

  const formatDateRange = () => {
    if (date.from && date.to) {
      return `${format(date.from, "MMM d, yyyy")} - ${format(date.to, "MMM d, yyyy")}`;
    }
    return "Select date range";
  };

  return (
 
    <MainLayout>
      <Header title="Dashboard" subtitle="Lorem ipsum" />
      
      <div className="p-6">
        {/* Top filter area */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Download</h3>
            <div className="flex items-center gap-2">
              <Select value={exportType} onValueChange={setExportType}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="export">Import/Export</SelectItem>
                  <SelectItem value="pdf">Export PDF</SelectItem>
                  <SelectItem value="excel">Export Excel</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" onClick={handleExport}>
                <Download size={16} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Date Range</h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full md:w-[250px] justify-between">
                  <span>{formatDateRange()}</span>
                  <CalendarIcon className="h-4 w-4 text-green-500" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={(selected: any) => {
                    if (selected?.from && selected?.to) {
                      setDate(selected as {from: Date; to: Date});
                    }
                  }}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        {/* Stat cards - first row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard 
            title="Total Sales" 
            value="78,783.00 AED" 
            icon={<Activity size={18} />} 
            variant="total"
            percentageChange={16}
          />
          
          <StatCard 
            title="Net Sales" 
            value="78,783.00 AED" 
            icon={<BarChart3 size={18} />} 
            variant="net"
            percentageChange={16}
          />
          
          <StatCard 
            title="Gross Sales" 
            value="18,829.51 AED" 
            icon={<Activity size={18} />} 
            variant="gross"
            percentageChange={16}
          />
          
          <StatCard 
            title="Orders" 
            value="26" 
            icon={<ShoppingCart size={18} />} 
            variant="order"
            percentageChange={16}
          />
        </div>
        
        {/* Stat cards - second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard 
            title="Product Sold" 
            value="27" 
            icon={<Package size={18} />} 
            variant="product"
            percentageChange={16}
          />
          
          <StatCard 
            title="Taxes" 
            value="941.49 AED" 
            icon={<Receipt size={18} />} 
            variant="tax"
            percentageChange={16}
          />
          
          <StatCard 
            title="Cancel Orders" 
            value="06" 
            icon={<AlertOctagon size={18} />} 
            variant="cancel"
            percentageChange={10}
          />
          
          <StatCard 
            title="Coupons" 
            value="06/12" 
            icon={<Ticket size={18} />} 
            variant="coupon"
          />
        </div>
        
        {/* Charts - first row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <BarChart 
            data={salesData} 
            dataKey="amount"
            title="Sales Data"
          />
          
          <OrderTable orders={ordersData} />
        </div>
        
        {/* Charts - second row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PieChart 
            data={ordersByCityData} 
            dataKey="value"
            title="Orders by City"
          />
          
          <HorizontalBarChart 
            data={salesByProductData} 
            dataKey="value"
            title="Sales by Product"
            barColor="#4ECDC4"
          />
          
          <HorizontalBarChart 
            data={salesByPackageData} 
            dataKey="value"
            title="Sales by Package"
            barColor="#FF9F40"
          />
        </div>
      </div>
    </MainLayout>

  );
};

export default Dashboard;
