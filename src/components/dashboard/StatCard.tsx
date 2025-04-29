
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { cva, type VariantProps } from "class-variance-authority";

const statIconVariants = cva("stat-icon", {
  variants: {
    variant: {
      total: "bg-metric-total/20 text-green-700",
      net: "bg-metric-net/20 text-blue-700",
      gross: "bg-metric-gross/20 text-red-700",
      order: "bg-metric-order/20 text-yellow-700",
      product: "bg-metric-product/20 text-pink-700",
      tax: "bg-metric-tax/20 text-orange-700",
      cancel: "bg-metric-cancel/20 text-purple-700",
      coupon: "bg-metric-coupon/20 text-lime-700",
    },
  },
  defaultVariants: {
    variant: "total",
  },
});

interface StatCardProps extends VariantProps<typeof statIconVariants> {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  percentageChange?: number;
  timeframe?: string;
}

const StatCard = ({ 
  title, 
  value, 
  icon, 
  variant, 
  percentageChange, 
  timeframe = "vs 20 last days" 
}: StatCardProps) => {
  const isPositive = percentageChange ? percentageChange > 0 : false;
  
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between mb-3">
        <div className={cn(statIconVariants({ variant }))}>
          {icon}
        </div>
        
        {percentageChange !== undefined && (
          <div className={cn(
            "flex items-center text-xs font-medium",
            isPositive ? "text-green-600" : "text-red-600"
          )}>
            <ArrowUpRight className={cn("w-3 h-3 mr-0.5", !isPositive && "rotate-180 text-red-600")} />
            <span>{Math.abs(percentageChange)}% {timeframe}</span>
          </div>
        )}
      </div>
      
      <div className="mb-1">
        <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
      </div>
      
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
};

export default StatCard;
