
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength)}...`;
}

export function calculateDaysRemaining(dateString: string): number {
  const targetDate = new Date(dateString);
  const currentDate = new Date();
  
  // Reset time part for accurate day calculation
  currentDate.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);
  
  // Calculate difference in milliseconds
  const differenceMs = targetDate.getTime() - currentDate.getTime();
  
  // Convert to days
  return Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
}

export function getStatusColor(status: string): string {
  const lowerStatus = status.toLowerCase();
  
  if (lowerStatus.includes('completed') || lowerStatus.includes('delivered')) {
    return 'bg-green-100 text-green-800';
  }
  
  if (lowerStatus.includes('progress')) {
    return 'bg-blue-100 text-blue-800';
  }
  
  if (lowerStatus.includes('pending') || lowerStatus.includes('waiting')) {
    return 'bg-amber-100 text-amber-800';
  }
  
  if (lowerStatus.includes('cancelled') || lowerStatus.includes('failed')) {
    return 'bg-red-100 text-red-800';
  }
  
  return 'bg-gray-100 text-gray-800';
}
