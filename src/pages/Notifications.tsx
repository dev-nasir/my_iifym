
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, CheckCircle, AlertTriangle, Info, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Notification {
  id: string;
  type: 'alert' | 'warning' | 'info' | 'success';
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 'notif-1',
      type: 'alert',
      title: 'Low Stock Alert',
      description: 'Product "Premium Protein Powder" is running low on stock. Only 5 units left.',
      timestamp: '2025-04-28T14:30:00',
      read: false,
    },
    {
      id: 'notif-2',
      type: 'warning',
      title: 'Payment Failed',
      description: 'Customer payment for order #OD82139 failed. Please follow up.',
      timestamp: '2025-04-28T10:15:00',
      read: false,
    },
    {
      id: 'notif-3',
      type: 'info',
      title: 'New Order Received',
      description: 'New order #OD82142 received from customer Ahmed Ali.',
      timestamp: '2025-04-27T16:45:00',
      read: true,
    },
    {
      id: 'notif-4',
      type: 'success',
      title: 'Order Delivered',
      description: 'Order #OD82130 was successfully delivered to the customer.',
      timestamp: '2025-04-26T09:20:00',
      read: true,
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
    toast({
      title: "Notification Marked as Read",
      description: "The notification has been marked as read.",
    });
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
    toast({
      title: "Notification Deleted",
      description: "The notification has been deleted.",
    });
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
    toast({
      title: "All Notifications Marked as Read",
      description: "All notifications have been marked as read.",
    });
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return <Bell className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getUnreadCount = () => {
    return notifications.filter(notif => !notif.read).length;
  };

  return (
    <MainLayout>
      <Header title="Notifications & Alerts" subtitle="Manage your notifications" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium">All Notifications</h2>
            {getUnreadCount() > 0 && (
              <span className="inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                {getUnreadCount()} Unread
              </span>
            )}
          </div>
          {getUnreadCount() > 0 && (
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              Mark All as Read
            </Button>
          )}
        </div>
        
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <div className="text-center py-10">
              <Bell className="h-10 w-10 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-gray-900">No notifications</h3>
              <p className="text-gray-500">You're all caught up!</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <Card key={notification.id} className={notification.read ? "opacity-70" : ""}>
                <CardHeader className="p-4 pb-2 flex flex-row items-start justify-between space-y-0">
                  <div className="flex gap-3 items-center">
                    {getNotificationIcon(notification.type)}
                    <div>
                      <CardTitle className="text-base">{notification.title}</CardTitle>
                      <CardDescription className="text-xs">
                        {formatDate(notification.timestamp)}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {!notification.read && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => markAsRead(notification.id)}>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => deleteNotification(notification.id)}>
                      <X className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-sm text-gray-700">{notification.description}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Notifications;
