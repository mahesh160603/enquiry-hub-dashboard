
import { useState, useEffect } from "react";
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
  const [isSearchApplied, setIsSearchApplied] = useState(false);

  useEffect(() => {
    // Reset search term when changing tabs
    setSearchTerm("");
    setIsSearchApplied(false);
  }, [currentTab]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setIsSearchApplied(!!term);
  };

  // Render the appropriate panel based on the selected tab
  const renderPanel = () => {
    const commonProps = { searchTerm };

    switch (currentTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <DashboardHeader onSearch={handleSearch} title="Dashboard Overview" />
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
        return (
          <div>
            <DashboardHeader onSearch={handleSearch} title="Inventory Management" />
            <InventoryPanel searchTerm={searchTerm} />
          </div>
        );
      case "projects":
        return (
          <div>
            <DashboardHeader onSearch={handleSearch} title="Projects" />
            <ProjectsPanel searchTerm={searchTerm} />
          </div>
        );
      case "contacts":
        return (
          <div>
            <DashboardHeader onSearch={handleSearch} title="Contacts" />
            <ContactsPanel searchTerm={searchTerm} />
          </div>
        );
      case "incoming":
        return (
          <div>
            <DashboardHeader onSearch={handleSearch} title="Incoming Goods" />
            <GoodsPanel type="incoming" searchTerm={searchTerm} />
          </div>
        );
      case "outgoing":
        return (
          <div>
            <DashboardHeader onSearch={handleSearch} title="Outgoing Goods" />
            <GoodsPanel type="outgoing" searchTerm={searchTerm} />
          </div>
        );
      case "services":
        return (
          <div>
            <DashboardHeader onSearch={handleSearch} title="Services" />
            <ServicesPanel searchTerm={searchTerm} />
          </div>
        );
      case "deadlines":
        return (
          <div>
            <DashboardHeader onSearch={handleSearch} title="Deadlines" />
            <DeadlinesPanel searchTerm={searchTerm} />
          </div>
        );
      case "extras":
        return (
          <div>
            <DashboardHeader onSearch={handleSearch} title="Settings & Extras" />
            <ExtrasPanel searchTerm={searchTerm} />
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4">
          {isSearchApplied && searchTerm && (
            <div className="mb-4 bg-blue-50 p-3 rounded-md">
              <p className="text-sm text-blue-700">
                Showing results for: <span className="font-medium">"{searchTerm}"</span>
              </p>
            </div>
          )}
          {renderPanel()}
        </div>
      </div>
    </div>
  );
};

export default Index;
