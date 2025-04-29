
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Profile = () => {
  return (
    <MainLayout>
      <Header title="Profile" subtitle="Manage your account" />
      <div className="p-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col items-center mb-6">
            <Avatar className="w-24 h-24 bg-purple-600 text-white text-4xl">
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
            <h2 className="mt-4 text-xl font-bold">Admin</h2>
            <p className="text-gray-500">admin@iifym.com</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1">Full Name</label>
                  <Input defaultValue="Admin User" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Email Address</label>
                  <Input defaultValue="admin@iifym.com" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Phone Number</label>
                  <Input defaultValue="+971 50 123 4567" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Account Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1">Role</label>
                  <Input defaultValue="Administrator" disabled />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Password</label>
                  <Input type="password" defaultValue="password" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Confirm Password</label>
                  <Input type="password" defaultValue="password" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
