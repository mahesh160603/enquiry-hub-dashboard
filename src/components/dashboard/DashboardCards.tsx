
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardSummary } from "@/lib/data";
import { LayoutDashboard, List, Calendar, Archive, ArchiveX, Grid2X2, Search } from "lucide-react";

export function DashboardCards() {
  const cards = [
    {
      title: "Total Enquiries",
      value: dashboardSummary.totalEnquiries,
      description: `${dashboardSummary.newEnquiries} new, ${dashboardSummary.inProgressEnquiries} in progress`,
      icon: Search,
      color: "blue"
    },
    {
      title: "Projects",
      value: dashboardSummary.ongoingProjects,
      description: `${dashboardSummary.completedProjects} completed, ${dashboardSummary.ongoingProjects} ongoing`,
      icon: List,
      color: "green"
    },
    {
      title: "Services",
      value: dashboardSummary.pendingServices,
      description: `${dashboardSummary.pendingServices} pending services`,
      icon: Calendar,
      color: "purple"
    },
    {
      title: "Inventory",
      value: dashboardSummary.lowStockItems,
      description: `${dashboardSummary.lowStockItems} low stock items`,
      icon: Grid2X2,
      color: "amber"
    },
    {
      title: "Deadlines",
      value: dashboardSummary.upcomingDeadlines,
      description: `${dashboardSummary.upcomingDeadlines} upcoming deadlines`,
      icon: Calendar,
      color: "red"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              {card.color === "blue" && <card.icon className="h-5 w-5 text-blue-500" />}
              {card.color === "green" && <card.icon className="h-5 w-5 text-green-500" />}
              {card.color === "purple" && <card.icon className="h-5 w-5 text-purple-500" />}
              {card.color === "amber" && <card.icon className="h-5 w-5 text-amber-500" />}
              {card.color === "red" && <card.icon className="h-5 w-5 text-red-500" />}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-gray-500 mt-1">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
