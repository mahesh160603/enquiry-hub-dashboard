
import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ProgressCard } from "@/components/ui/progress-card";
import { projects, Project } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProjectsPanel() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on search term
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <DashboardHeader onSearch={setSearchTerm} title="Projects" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="flex flex-col h-full">
            <ProgressCard
              title={project.name}
              progress={project.progress}
              status={project.status}
              date={project.deadline}
              client={project.client}
              className="flex-1"
            />
            <div className="px-4 py-3 bg-gray-50 rounded-b-lg border border-t-0 border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">Team</p>
                <div className="flex -space-x-2">
                  {project.team.map((member, index) => (
                    <Avatar key={index} className="h-6 w-6 border-2 border-white">
                      <AvatarFallback className="bg-blue-500 text-[10px] text-white">
                        {member.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
