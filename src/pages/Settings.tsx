
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const Settings = () => {
  return (
    <MainLayout>
      <Header title="Settings" subtitle="Configure app settings" />
      <div className="p-6">
        <Tabs defaultValue="account">
          <TabsList className="mb-6">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-medium mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive email about your account activity</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <Switch />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications" className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-medium mb-4">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Order Notifications</p>
                  <p className="text-sm text-muted-foreground">Get notified when a new order is placed</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Product Updates</p>
                  <p className="text-sm text-muted-foreground">Get notified when products are updated</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="security" className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-medium mb-4">Security Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Login Notifications</p>
                  <p className="text-sm text-muted-foreground">Get notified when someone logs into your account</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Session Timeout</p>
                  <p className="text-sm text-muted-foreground">Automatically log out after inactivity</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="appearance" className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-medium mb-4">Appearance Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Compact View</p>
                  <p className="text-sm text-muted-foreground">Use a more compact layout</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Show Statistics</p>
                  <p className="text-sm text-muted-foreground">Show performance statistics on dashboard</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Settings;
