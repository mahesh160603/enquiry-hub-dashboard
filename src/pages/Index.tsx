
import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardCards } from "@/components/dashboard/DashboardCards";
import { InventoryPanel } from "@/components/dashboard/InventoryPanel";
import { ProjectsPanel } from "@/components/dashboard/ProjectsPanel";
import { ContactsPanel } from "@/components/dashboard/ContactsPanel";
import { GoodsPanel } from "@/components/dashboard/GoodsPanel";
import { ServicesPanel } from "@/components/dashboard/ServicesPanel";
import { DeadlinesPanel } from "@/components/dashboard/DeadlinesPanel";
import { ExtrasPanel } from "@/components/dashboard/ExtrasPanel";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const Index = () => {
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  // Render the appropriate panel based on the selected tab
  const renderPanel = () => {
    switch (currentTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <DashboardHeader onSearch={setSearchTerm} title="Dashboard Overview" />
            <DashboardCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Recent Projects</h2>
                <ProjectsPanel />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-4">Upcoming Services</h2>
                <ServicesPanel />
              </div>
            </div>
          </div>
        );
      case "inventory":
        return <InventoryPanel />;
      case "projects":
        return <ProjectsPanel />;
      case "contacts":
        return <ContactsPanel />;
      case "incoming":
        return <GoodsPanel type="incoming" />;
      case "outgoing":
        return <GoodsPanel type="outgoing" />;
      case "services":
        return <ServicesPanel />;
      case "deadlines":
        return <DeadlinesPanel />;
      case "extras":
        return <ExtrasPanel />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4">
          {renderPanel()}
        </div>
      </div>
    </div>
  );
};

export default Index;
