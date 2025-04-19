
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBoxProps {
  onSearch: (term: string) => void;
  placeholder?: string;
}

export function SearchBox({ onSearch, placeholder = "Search..." }: SearchBoxProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}
