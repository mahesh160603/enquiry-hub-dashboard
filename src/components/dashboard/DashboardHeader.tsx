
import { SearchBox } from "@/components/ui/search-box";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect } from "react";

interface DashboardHeaderProps {
  onSearch: (term: string) => void;
  title: string;
}

export function DashboardHeader({ onSearch, title }: DashboardHeaderProps) {
  // Handle URL search parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlSearch = params.get('search');
    if (urlSearch) {
      onSearch(urlSearch);
    }
  }, [onSearch]);

  // Handle search and update URL
  const handleSearch = (term: string) => {
    // Update URL with search parameter
    const url = new URL(window.location.href);
    if (term) {
      url.searchParams.set('search', term);
    } else {
      url.searchParams.delete('search');
    }
    window.history.replaceState(null, '', url.toString());
    
    onSearch(term);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="flex-1 sm:w-64">
          <SearchBox onSearch={handleSearch} placeholder="Search items..." />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-1" /> Add New
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Quick Add</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>New Project</DropdownMenuItem>
            <DropdownMenuItem>New Inventory Item</DropdownMenuItem>
            <DropdownMenuItem>New Service</DropdownMenuItem>
            <DropdownMenuItem>New Contact</DropdownMenuItem>
            <DropdownMenuItem>Record Goods</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="outline">
              <Filter className="h-4 w-4 mr-1" /> Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Filter Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Last 7 days</DropdownMenuItem>
            <DropdownMenuItem>Last 30 days</DropdownMenuItem>
            <DropdownMenuItem>All time</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>High Priority</DropdownMenuItem>
            <DropdownMenuItem>Medium Priority</DropdownMenuItem>
            <DropdownMenuItem>Low Priority</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
