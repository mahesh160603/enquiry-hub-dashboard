
import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DataTable } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { services, Service } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

export function ServicesPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter services based on search term and status filter
  const filteredServices = services.filter((service) => {
    const matchesSearch = 
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    return service.status.toLowerCase() === filter.toLowerCase() && matchesSearch;
  });

  const columns = [
    {
      key: "name",
      header: "Service",
      cell: (service: Service) => (
        <div className="flex items-center">
          <div>
            <div className="font-medium">{service.name}</div>
            <div className="text-sm text-gray-500">{service.client}</div>
          </div>
          {service.notes && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoIcon className="h-4 w-4 text-gray-400 ml-2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{service.notes}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      ),
    },
    {
      key: "type",
      header: "Type",
      cell: (service: Service) => <span className="text-gray-600">{service.type}</span>,
    },
    {
      key: "assignedTo",
      header: "Assigned To",
      cell: (service: Service) => (
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs mr-2">
            {service.assignedTo.split(" ").map((n) => n[0]).join("")}
          </div>
          <span>{service.assignedTo}</span>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (service: Service) => <StatusBadge status={service.status} />,
    },
    {
      key: "scheduledDate",
      header: "Scheduled Date",
      cell: (service: Service) => <span className="text-gray-600">{service.scheduledDate}</span>,
    },
  ];

  const statusTypes = ["Scheduled", "In Progress", "Waiting Parts", "Completed"];

  return (
    <div className="space-y-6">
      <DashboardHeader onSearch={setSearchTerm} title="Services" />
      
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
        >
          All Services
        </Button>
        {statusTypes.map((status) => (
          <Button
            key={status}
            variant={filter === status.toLowerCase() ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(status.toLowerCase())}
          >
            {status}
          </Button>
        ))}
      </div>

      <DataTable data={filteredServices} columns={columns} />
    </div>
  );
}
