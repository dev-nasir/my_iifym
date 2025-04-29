
import React from 'react';
import { 
  ChevronDown, 
  UserRound, 
  LogOut,
  Settings,
  User
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-6 px-8">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {subtitle && <p className="text-muted-foreground text-sm">{subtitle}</p>}
      </div>
      
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors">
              <Avatar className="bg-purple-600 text-white">
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium hidden md:block">Admin</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex items-center gap-2 p-2">
              <Avatar className="bg-purple-600 text-white">
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-medium">Admin</span>
                <span className="text-sm text-muted-foreground">admin@iifym.com</span>
              </div>
            </div>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuItem onClick={() => navigate('/profile')} className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            
            <DropdownMenuItem onClick={() => navigate('/settings')} className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuItem onClick={() => navigate('/logout')} className="cursor-pointer text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
