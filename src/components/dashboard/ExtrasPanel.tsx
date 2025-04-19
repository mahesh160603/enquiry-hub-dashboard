
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Settings, History } from "lucide-react";

export function ExtrasPanel() {
  // This is a placeholder panel for future features
  
  return (
    <div className="space-y-6">
      <DashboardHeader onSearch={() => {}} title="Extras" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Export Options */}
        <Card>
          <CardHeader>
            <CardTitle>Export Data</CardTitle>
            <CardDescription>Export your data in different formats</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" /> Export to Excel
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" /> Export to PDF
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" /> Export to CSV
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Settings Panel */}
        <Card>
          <CardHeader>
            <CardTitle>User Settings</CardTitle>
            <CardDescription>Manage your account and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" /> Account Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" /> Notification Preferences
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" /> Display Options
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Activity Log */}
        <Card>
          <CardHeader>
            <CardTitle>Activity Log</CardTitle>
            <CardDescription>Recent activities on the dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 pl-4 py-1">
                <p className="text-sm font-medium">New project added</p>
                <p className="text-xs text-gray-500">Today, 10:30 AM</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4 py-1">
                <p className="text-sm font-medium">Inventory item updated</p>
                <p className="text-xs text-gray-500">Yesterday, 2:15 PM</p>
              </div>
              <div className="border-l-2 border-amber-500 pl-4 py-1">
                <p className="text-sm font-medium">Service status changed</p>
                <p className="text-xs text-gray-500">Yesterday, 11:45 AM</p>
              </div>
              <Button variant="link" className="text-xs p-0">
                <History className="mr-1 h-3 w-3" /> View complete history
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
