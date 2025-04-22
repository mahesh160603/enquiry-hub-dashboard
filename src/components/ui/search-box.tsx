
import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchBoxProps {
  onSearch: (term: string) => void;
  placeholder?: string;
}

export function SearchBox({ onSearch, placeholder = "Search..." }: SearchBoxProps) {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Use debounce for better performance
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  // Initialize search from URL parameter if exists
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlSearch = params.get('search');
    if (urlSearch) {
      setSearchTerm(urlSearch);
      onSearch(urlSearch);
    }
  }, [onSearch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
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
        aria-label={`Search ${placeholder}`}
      />
      {searchTerm && (
        <button 
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" 
          onClick={clearSearch}
          aria-label="Clear search"
        >
          <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </div>
  );
}
