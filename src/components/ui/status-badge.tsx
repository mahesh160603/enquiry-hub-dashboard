
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  variant?: "default" | "outline";
  className?: string;
}

export function StatusBadge({ status, variant = "default", className }: StatusBadgeProps) {
  // Define color schemes based on status keywords
  let colorClass = "";
  
  if (status.toLowerCase().includes("new") || status.toLowerCase().includes("scheduled")) {
    colorClass = "bg-blue-100 text-blue-800 border-blue-200";
  } else if (status.toLowerCase().includes("progress")) {
    colorClass = "bg-amber-100 text-amber-800 border-amber-200";
  } else if (status.toLowerCase().includes("complete")) {
    colorClass = "bg-green-100 text-green-800 border-green-200";
  } else if (status.toLowerCase().includes("cancel") || status.toLowerCase().includes("hold")) {
    colorClass = "bg-gray-100 text-gray-800 border-gray-200";
  } else if (status.toLowerCase().includes("pending") || status.toLowerCase().includes("waiting")) {
    colorClass = "bg-purple-100 text-purple-800 border-purple-200";
  } else if (status.toLowerCase().includes("urgent") || status.toLowerCase().includes("high")) {
    colorClass = "bg-red-100 text-red-800 border-red-200";
  } else if (status.toLowerCase().includes("ordered") || status.toLowerCase().includes("shipped")) {
    colorClass = "bg-indigo-100 text-indigo-800 border-indigo-200";
  } else if (status.toLowerCase().includes("delivered")) {
    colorClass = "bg-emerald-100 text-emerald-800 border-emerald-200";
  } else {
    colorClass = "bg-slate-100 text-slate-800 border-slate-200";
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        colorClass,
        className
      )}
    >
      {status}
    </span>
  );
}
