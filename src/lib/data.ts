
// Mock data for the Enquiry Management Dashboard

export type EnquiryStatus = 'New' | 'In Progress' | 'Pending' | 'Completed' | 'Cancelled';
export type ProjectStatus = 'Planning' | 'In Progress' | 'On Hold' | 'Completed';
export type ServiceStatus = 'Scheduled' | 'In Progress' | 'Waiting Parts' | 'Completed';
export type GoodsStatus = 'Ordered' | 'Shipped' | 'Delivered' | 'Returned';
export type ContactType = 'Client' | 'Vendor' | 'Partner' | 'Lead';

export interface Enquiry {
  id: string;
  title: string;
  client: string;
  date: string;
  status: EnquiryStatus;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
}

export interface Project {
  id: string;
  name: string;
  client: string;
  startDate: string;
  deadline: string;
  status: ProjectStatus;
  progress: number;
  team: string[];
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  threshold: number;
  lastUpdated: string;
  supplier: string;
}

export interface Contact {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  type: ContactType;
  lastContact: string;
}

export interface Service {
  id: string;
  name: string;
  client: string;
  type: string;
  assignedTo: string;
  scheduledDate: string;
  status: ServiceStatus;
  notes?: string;
}

export interface Goods {
  id: string;
  name: string;
  quantity: number;
  source: string;
  destination: string;
  date: string;
  status: GoodsStatus;
}

export interface Deadline {
  id: string;
  title: string;
  date: string;
  type: 'Project' | 'Service' | 'Task' | 'Payment';
  relatedTo: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
}

// Mock Projects
export const projects: Project[] = [
  {
    id: "PRJ-001",
    name: "Office Renovation",
    client: "ABC Corp",
    startDate: "2025-03-15",
    deadline: "2025-05-20",
    status: "In Progress",
    progress: 45,
    team: ["John D.", "Sarah L.", "Robert K."]
  },
  {
    id: "PRJ-002",
    name: "Network Infrastructure Upgrade",
    client: "Tech Solutions Inc.",
    startDate: "2025-02-01",
    deadline: "2025-04-30",
    status: "In Progress",
    progress: 68,
    team: ["Michael B.", "Emma T."]
  },
  {
    id: "PRJ-003",
    name: "Security System Installation",
    client: "Secure Buildings Ltd",
    startDate: "2025-04-05",
    deadline: "2025-04-25",
    status: "Planning",
    progress: 10,
    team: ["Chris M.", "Olivia P."]
  },
  {
    id: "PRJ-004",
    name: "Server Room Cooling",
    client: "DataHost Services",
    startDate: "2025-03-10",
    deadline: "2025-05-10",
    status: "On Hold",
    progress: 35,
    team: ["James W.", "Lisa R."]
  },
  {
    id: "PRJ-005",
    name: "Solar Panel Installation",
    client: "GreenEnergy Co.",
    startDate: "2025-02-20",
    deadline: "2025-04-22",
    status: "In Progress",
    progress: 72,
    team: ["Daniel H.", "Sophia G."]
  }
];

// Mock Inventory Items
export const inventoryItems: InventoryItem[] = [
  {
    id: "INV-001",
    name: "Network Cable (Cat6)",
    category: "Networking",
    quantity: 250,
    threshold: 100,
    lastUpdated: "2025-04-10",
    supplier: "NetSupplies Inc."
  },
  {
    id: "INV-002",
    name: "Wireless Access Point",
    category: "Networking",
    quantity: 12,
    threshold: 5,
    lastUpdated: "2025-04-08",
    supplier: "TechVendor Ltd."
  },
  {
    id: "INV-003",
    name: "Server Rack",
    category: "Hardware",
    quantity: 3,
    threshold: 2,
    lastUpdated: "2025-04-05",
    supplier: "DataEquip Co."
  },
  {
    id: "INV-004",
    name: "HDMI Cables",
    category: "Accessories",
    quantity: 45,
    threshold: 15,
    lastUpdated: "2025-04-12",
    supplier: "CableSource"
  },
  {
    id: "INV-005",
    name: "UPS Battery",
    category: "Power",
    quantity: 8,
    threshold: 10,
    lastUpdated: "2025-04-01",
    supplier: "PowerBackup Systems"
  },
  {
    id: "INV-006",
    name: "Security Cameras",
    category: "Security",
    quantity: 15,
    threshold: 5,
    lastUpdated: "2025-04-09",
    supplier: "SecureTech Inc."
  },
  {
    id: "INV-007",
    name: "Laptop Computers",
    category: "Hardware",
    quantity: 7,
    threshold: 3,
    lastUpdated: "2025-04-15",
    supplier: "CompTech Solutions"
  }
];

// Mock Contacts
export const contacts: Contact[] = [
  {
    id: "CON-001",
    name: "John Smith",
    company: "ABC Corp",
    email: "john.smith@abccorp.com",
    phone: "555-123-4567",
    type: "Client",
    lastContact: "2025-04-15"
  },
  {
    id: "CON-002",
    name: "Sarah Johnson",
    company: "Tech Solutions Inc.",
    email: "sarah.j@techsolutions.com",
    phone: "555-987-6543",
    type: "Client",
    lastContact: "2025-04-12"
  },
  {
    id: "CON-003",
    name: "Michael Wilson",
    company: "NetSupplies Inc.",
    email: "m.wilson@netsupplies.com",
    phone: "555-456-7890",
    type: "Vendor",
    lastContact: "2025-04-10"
  },
  {
    id: "CON-004",
    name: "Emma Brown",
    company: "DataHost Services",
    email: "emma.b@datahost.com",
    phone: "555-789-0123",
    type: "Client",
    lastContact: "2025-04-08"
  },
  {
    id: "CON-005",
    name: "Robert Davis",
    company: "SecureTech Inc.",
    email: "r.davis@securetech.com",
    phone: "555-321-6547",
    type: "Vendor",
    lastContact: "2025-04-16"
  },
  {
    id: "CON-006",
    name: "Jennifer Miller",
    company: "GreenEnergy Co.",
    email: "j.miller@greenenergy.com",
    phone: "555-159-7532",
    type: "Client",
    lastContact: "2025-04-14"
  },
  {
    id: "CON-007",
    name: "Thomas Anderson",
    company: "Future Technologies",
    email: "t.anderson@futuretech.com",
    phone: "555-753-9514",
    type: "Lead",
    lastContact: "2025-04-11"
  }
];

// Mock Services
export const services: Service[] = [
  {
    id: "SRV-001",
    name: "Network Troubleshooting",
    client: "ABC Corp",
    type: "Maintenance",
    assignedTo: "Michael B.",
    scheduledDate: "2025-04-22",
    status: "Scheduled"
  },
  {
    id: "SRV-002",
    name: "Server Configuration",
    client: "Tech Solutions Inc.",
    type: "Installation",
    assignedTo: "Emma T.",
    scheduledDate: "2025-04-20",
    status: "In Progress"
  },
  {
    id: "SRV-003",
    name: "Security System Audit",
    client: "Secure Buildings Ltd",
    type: "Audit",
    assignedTo: "Chris M.",
    scheduledDate: "2025-04-25",
    status: "Scheduled",
    notes: "Annual security review"
  },
  {
    id: "SRV-004",
    name: "Cooling System Repair",
    client: "DataHost Services",
    type: "Repair",
    assignedTo: "James W.",
    scheduledDate: "2025-04-18",
    status: "Waiting Parts",
    notes: "Replacement parts ordered"
  },
  {
    id: "SRV-005",
    name: "Software Upgrade",
    client: "GreenEnergy Co.",
    type: "Upgrade",
    assignedTo: "Sophia G.",
    scheduledDate: "2025-04-19",
    status: "Completed"
  }
];

// Mock Goods (Incoming/Outgoing)
export const incomingGoods: Goods[] = [
  {
    id: "IN-001",
    name: "Network Switches",
    quantity: 10,
    source: "NetSupplies Inc.",
    destination: "Main Warehouse",
    date: "2025-04-22",
    status: "Ordered"
  },
  {
    id: "IN-002",
    name: "Server Racks",
    quantity: 2,
    source: "DataEquip Co.",
    destination: "Main Warehouse",
    date: "2025-04-20",
    status: "Shipped"
  },
  {
    id: "IN-003",
    name: "Security Cameras",
    quantity: 15,
    source: "SecureTech Inc.",
    destination: "Project Site: ABC Corp",
    date: "2025-04-18",
    status: "Delivered"
  }
];

export const outgoingGoods: Goods[] = [
  {
    id: "OUT-001",
    name: "Network Cable (Cat6)",
    quantity: 100,
    source: "Main Warehouse",
    destination: "Tech Solutions Inc.",
    date: "2025-04-21",
    status: "Shipped"
  },
  {
    id: "OUT-002",
    name: "Wireless Access Points",
    quantity: 5,
    source: "Main Warehouse",
    destination: "Project Site: GreenEnergy Co.",
    date: "2025-04-19",
    status: "Delivered"
  },
  {
    id: "OUT-003",
    name: "UPS Battery",
    quantity: 2,
    source: "Main Warehouse",
    destination: "DataHost Services",
    date: "2025-04-23",
    status: "Ordered"
  }
];

// Mock Deadlines
export const deadlines: Deadline[] = [
  {
    id: "DL-001",
    title: "Project Completion: Office Renovation",
    date: "2025-05-20",
    type: "Project",
    relatedTo: "PRJ-001",
    priority: "Medium"
  },
  {
    id: "DL-002",
    title: "Network Infrastructure Upgrade Final Testing",
    date: "2025-04-28",
    type: "Project",
    relatedTo: "PRJ-002",
    priority: "High"
  },
  {
    id: "DL-003",
    title: "Security System Installation",
    date: "2025-04-25",
    type: "Project",
    relatedTo: "PRJ-003",
    priority: "Medium"
  },
  {
    id: "DL-004",
    title: "Network Troubleshooting for ABC Corp",
    date: "2025-04-22",
    type: "Service",
    relatedTo: "SRV-001",
    priority: "Low"
  },
  {
    id: "DL-005",
    title: "Invoice Payment: Tech Solutions",
    date: "2025-04-30",
    type: "Payment",
    relatedTo: "ABC Corp",
    priority: "Urgent"
  }
];

// Mock Enquiries
export const enquiries: Enquiry[] = [
  {
    id: "ENQ-001",
    title: "Office Expansion Consultation",
    client: "Future Technologies",
    date: "2025-04-15",
    status: "New",
    priority: "Medium"
  },
  {
    id: "ENQ-002",
    title: "Security System Upgrade",
    client: "ABC Corp",
    date: "2025-04-10",
    status: "In Progress",
    priority: "High"
  },
  {
    id: "ENQ-003",
    title: "Network Assessment",
    client: "Tech Solutions Inc.",
    date: "2025-04-08",
    status: "Pending",
    priority: "Low"
  },
  {
    id: "ENQ-004",
    title: "Server Room Design",
    client: "DataHost Services",
    date: "2025-04-12",
    status: "In Progress",
    priority: "Medium"
  },
  {
    id: "ENQ-005",
    title: "Wireless Network Installation",
    client: "GreenEnergy Co.",
    date: "2025-04-16",
    status: "New",
    priority: "Medium"
  }
];

// Dashboard summary data
export const dashboardSummary = {
  totalEnquiries: 5,
  newEnquiries: 2,
  inProgressEnquiries: 2,
  completedProjects: 0,
  ongoingProjects: 4,
  pendingServices: 3,
  lowStockItems: 1,
  upcomingDeadlines: 3
};
