import { useState, useEffect } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DataTable } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { deadlines, Deadline } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function DeadlinesPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // Get search term from URL or props if any
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlSearch = params.get('search');
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
  }, []);

  // Filter deadlines based on search term and filter
  const filteredDeadlines = deadlines.filter((deadline) => {
    const matchesSearch = 
      deadline.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deadline.relatedTo.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    return deadline.type.toLowerCase() === filter.toLowerCase() && matchesSearch;
  });

  const columns = [
    {
      key: "title",
      header: "Title",
      cell: (deadline: Deadline) => (
        <div className="font-medium">{deadline.title}</div>
      ),
    },
    {
      key: "type",
      header: "Type",
      cell: (deadline: Deadline) => (
        <Badge variant="outline">{deadline.type}</Badge>
      ),
    },
    {
      key: "date",
      header: "Due Date",
      cell: (deadline: Deadline) => <span className="text-gray-600">{deadline.date}</span>,
    },
    {
      key: "priority",
      header: "Priority",
      cell: (deadline: Deadline) => <StatusBadge status={deadline.priority} />,
    },
    {
      key: "relatedTo",
      header: "Related To",
      cell: (deadline: Deadline) => <span className="text-gray-600">{deadline.relatedTo}</span>,
    },
  ];

  const deadlineTypes = ["Project", "Service", "Task", "Payment"];

  return (
    <div className="space-y-6">
      <DashboardHeader onSearch={setSearchTerm} title="Deadlines" />
      
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
        >
          All Deadlines
        </Button>
        {deadlineTypes.map((type) => (
          <Button
            key={type}
            variant={filter === type.toLowerCase() ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(type.toLowerCase())}
          >
            {type}
          </Button>
        ))}
      </div>

      <DataTable data={filteredDeadlines} columns={columns} />
    </div>
  );
}
