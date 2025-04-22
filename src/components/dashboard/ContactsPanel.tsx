import { useState, useEffect } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DataTable } from "@/components/ui/data-table";
import { contacts, Contact, ContactType } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ContactsPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<ContactType | "all">("all");

  // Get search term from URL or props if any
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlSearch = params.get('search');
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
  }, []);

  // Filter contacts based on search term and selected filter
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    return filter === "all" ? matchesSearch : contact.type === filter && matchesSearch;
  });

  // Define contact type colors
  const getTypeColor = (type: ContactType) => {
    switch (type) {
      case "Client": return "bg-green-100 text-green-800 border-green-200";
      case "Vendor": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Partner": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Lead": return "bg-amber-100 text-amber-800 border-amber-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const columns = [
    {
      key: "name",
      header: "Name",
      cell: (contact: Contact) => (
        <div>
          <div className="font-medium">{contact.name}</div>
          <div className="text-sm text-gray-500">{contact.company}</div>
        </div>
      ),
    },
    {
      key: "type",
      header: "Type",
      cell: (contact: Contact) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getTypeColor(contact.type)}`}>
          {contact.type}
        </span>
      ),
    },
    {
      key: "email",
      header: "Email",
      cell: (contact: Contact) => <span className="text-gray-600">{contact.email}</span>,
    },
    {
      key: "phone",
      header: "Phone",
      cell: (contact: Contact) => <span className="text-gray-600">{contact.phone}</span>,
    },
    {
      key: "lastContact",
      header: "Last Contact",
      cell: (contact: Contact) => <span className="text-gray-600">{contact.lastContact}</span>,
    },
  ];

  const contactTypes: ContactType[] = ["Client", "Vendor", "Partner", "Lead"];

  return (
    <div className="space-y-6">
      <DashboardHeader onSearch={setSearchTerm} title="Contacts" />
      
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
        >
          All Contacts
        </Button>
        {contactTypes.map((type) => (
          <Button
            key={type}
            variant={filter === type ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(type)}
          >
            {type}s
          </Button>
        ))}
      </div>

      <DataTable data={filteredContacts} columns={columns} />
    </div>
  );
}
