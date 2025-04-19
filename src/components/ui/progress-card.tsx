
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { cn } from "@/lib/utils";

interface ProgressCardProps {
  title: string;
  progress: number;
  status: string;
  date: string;
  client: string;
  className?: string;
}

export function ProgressCard({ title, progress, status, date, client, className }: ProgressCardProps) {
  return (
    <Card className={cn("w-full h-full", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-medium">{title}</CardTitle>
          <StatusBadge status={status} />
        </div>
        <p className="text-sm text-gray-500">{client}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{progress}% Complete</span>
            <span className="text-xs text-gray-500">Due {date}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}
