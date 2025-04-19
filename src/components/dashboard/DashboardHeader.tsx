
import { SearchBox } from "@/components/ui/search-box";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardHeaderProps {
  onSearch: (term: string) => void;
  title: string;
}

export function DashboardHeader({ onSearch, title }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="flex-1 sm:w-64">
          <SearchBox onSearch={onSearch} placeholder="Search items..." />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-1" /> Add New
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Quick Add</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>New Project</DropdownMenuItem>
            <DropdownMenuItem>New Inventory Item</DropdownMenuItem>
            <DropdownMenuItem>New Service</DropdownMenuItem>
            <DropdownMenuItem>New Contact</DropdownMenuItem>
            <DropdownMenuItem>Record Goods</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
