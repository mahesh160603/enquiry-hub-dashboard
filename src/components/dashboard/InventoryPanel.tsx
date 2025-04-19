
import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DataTable } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { inventoryItems, InventoryItem } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function InventoryPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter and search logic
  const filteredItems = inventoryItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    if (filter === "low-stock") return matchesSearch && item.quantity <= item.threshold;
    return matchesSearch && item.category.toLowerCase() === filter.toLowerCase();
  });

  // Get unique categories for filter buttons
  const categories = [...new Set(inventoryItems.map(item => item.category))];

  const columns = [
    {
      key: "name",
      header: "Item Name",
      cell: (item: InventoryItem) => (
        <div>
          <div className="font-medium">{item.name}</div>
          <div className="text-sm text-gray-500">{item.id}</div>
        </div>
      )
    },
    {
      key: "category",
      header: "Category",
      cell: (item: InventoryItem) => <Badge variant="outline">{item.category}</Badge>
    },
    {
      key: "quantity",
      header: "Quantity",
      cell: (item: InventoryItem) => (
        <div className="font-medium">
          {item.quantity <= item.threshold ? (
            <span className="text-red-600">{item.quantity}</span>
          ) : (
            item.quantity
          )}
        </div>
      )
    },
    {
      key: "threshold",
      header: "Min. Quantity",
      cell: (item: InventoryItem) => <span className="text-gray-600">{item.threshold}</span>
    },
    {
      key: "status",
      header: "Status",
      cell: (item: InventoryItem) => (
        <StatusBadge status={item.quantity <= item.threshold ? "Low Stock" : "In Stock"} />
      )
    },
    {
      key: "supplier",
      header: "Supplier",
      cell: (item: InventoryItem) => <span className="text-gray-600">{item.supplier}</span>
    },
    {
      key: "lastUpdated",
      header: "Last Updated",
      cell: (item: InventoryItem) => <span className="text-gray-600">{item.lastUpdated}</span>
    }
  ];

  return (
    <div className="space-y-6">
      <DashboardHeader onSearch={setSearchTerm} title="Inventory Management" />
      
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Button 
          variant={filter === "all" ? "default" : "outline"} 
          size="sm"
          onClick={() => setFilter("all")}
        >
          All Items
        </Button>
        <Button
          variant={filter === "low-stock" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("low-stock")}
          className={filter === "low-stock" ? "bg-red-500 hover:bg-red-600" : ""}
        >
          Low Stock
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category.toLowerCase() ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(category.toLowerCase())}
          >
            {category}
          </Button>
        ))}
      </div>

      <DataTable data={filteredItems} columns={columns} />
    </div>
  );
}
