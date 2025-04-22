import { useState, useEffect } from "react";
import { DataTable } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { Goods, incomingGoods, outgoingGoods } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function GoodsPanel({ type = "incoming" }: { type?: "incoming" | "outgoing" }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"incoming" | "outgoing">(type);

  // Get search term from URL or props if any
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlSearch = params.get('search');
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
  }, []);

  // Filter goods based on search term
  const filteredIncomingGoods = incomingGoods.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredOutgoingGoods = outgoingGoods.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      key: "name",
      header: "Item",
      cell: (item: Goods) => (
        <div>
          <div className="font-medium">{item.name}</div>
          <div className="text-sm text-gray-500">{item.id}</div>
        </div>
      ),
    },
    {
      key: "quantity",
      header: "Quantity",
      cell: (item: Goods) => <span className="font-medium">{item.quantity}</span>,
    },
    {
      key: "source",
      header: "Source",
      cell: (item: Goods) => <span className="text-gray-600">{item.source}</span>,
    },
    {
      key: "destination",
      header: "Destination",
      cell: (item: Goods) => <span className="text-gray-600">{item.destination}</span>,
    },
    {
      key: "status",
      header: "Status",
      cell: (item: Goods) => <StatusBadge status={item.status} />,
    },
    {
      key: "date",
      header: "Date",
      cell: (item: Goods) => <span className="text-gray-600">{item.date}</span>,
    },
  ];

  const title = activeTab === "incoming" ? "Incoming Goods" : "Outgoing Goods";

  return (
    <div className="space-y-6">      
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "incoming" | "outgoing")}>
        <TabsList className="mb-4">
          <TabsTrigger value="incoming">Incoming Goods</TabsTrigger>
          <TabsTrigger value="outgoing">Outgoing Goods</TabsTrigger>
        </TabsList>
        
        <TabsContent value="incoming">
          <DataTable data={filteredIncomingGoods} columns={columns} />
        </TabsContent>
        
        <TabsContent value="outgoing">
          <DataTable data={filteredOutgoingGoods} columns={columns} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
