
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  List, 
  Calendar, 
  Archive, 
  ArchiveX, 
  Grid2X2, 
  Settings,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export function Sidebar({ currentTab, setCurrentTab }: SidebarProps) {
  // Navigation items
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "inventory", label: "Inventory", icon: Grid2X2 },
    { id: "projects", label: "Projects", icon: List },
    { id: "services", label: "Services", icon: Search },
    { id: "contacts", label: "Contacts", icon: Calendar },
    { id: "incoming", label: "Incoming Goods", icon: Archive },
    { id: "outgoing", label: "Outgoing Goods", icon: ArchiveX },
    { id: "deadlines", label: "Deadlines", icon: Calendar },
    { id: "extras", label: "Extras", icon: Settings }
  ];

  return (
    <div className="h-full w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-700">Enquiry Hub</h1>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start text-gray-600 hover:text-blue-700 hover:bg-blue-50",
                currentTab === item.id && "text-blue-700 bg-blue-50"
              )}
              onClick={() => setCurrentTab(item.id)}
            >
              <Icon className="mr-2 h-5 w-5" />
              {item.label}
            </Button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 mb-2">Enquiry Management Dashboard v1.0</p>
        <p className="text-xs text-gray-400">© 2025 Your Company</p>
      </div>
    </div>
  );
}
