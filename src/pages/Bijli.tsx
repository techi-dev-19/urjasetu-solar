import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  ChevronRight,
  Zap,
  Sun,
  Battery,
  Grid3X3,
  IndianRupee,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/layout/Layout";

// Product categories
const categories = [
  { id: "all", label: "All Products", icon: Grid3X3 },
  { id: "panels", label: "Solar Panels", icon: Sun },
  { id: "inverters", label: "Inverters", icon: Zap },
  { id: "storage", label: "Storage", icon: Battery },
];

// Mock products data
const products = [
  {
    id: 1,
    name: "Premium Monofacial Panel 550W",
    category: "panels",
    power: "550W",
    efficiency: "21.5%",
    warranty: "25 Years",
    description:
      "High-efficiency monocrystalline solar panel with advanced PERC technology for maximum energy output.",
    specs: [
      "144 Half-Cut Cells",
      "Anti-reflective Glass",
      "IP68 Junction Box",
      "Salt Mist Resistant",
    ],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    name: "Bifacial Solar Module 660W",
    category: "panels",
    power: "660W",
    efficiency: "22.8%",
    warranty: "30 Years",
    description:
      "Dual-sided solar module that captures light from both sides for up to 30% more energy generation.",
    specs: [
      "Bifacial Technology",
      "N-Type Cells",
      "Transparent Backsheet",
      "Low LID/PID",
    ],
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&h=400&fit=crop",
    featured: true,
  },
  {
    id: 3,
    name: "Commercial Panel 400W",
    category: "panels",
    power: "400W",
    efficiency: "20.2%",
    warranty: "25 Years",
    description:
      "Cost-effective solution for large-scale commercial and industrial installations.",
    specs: [
      "120 Cells",
      "High Wind Resistance",
      "Hail Resistant",
      "Easy Installation",
    ],
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=400&fit=crop",
    featured: false,
  },
  {
    id: 4,
    name: "Hybrid Inverter Pro 10kW",
    category: "inverters",
    power: "10kW",
    efficiency: "98.6%",
    warranty: "10 Years",
    description:
      "Advanced hybrid inverter with seamless grid/off-grid switching and battery management.",
    specs: [
      "MPPT Tracking",
      "Wi-Fi Monitoring",
      "IP65 Rating",
      "Parallel Connection",
    ],
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=400&fit=crop",
    featured: true,
  },
  {
    id: 5,
    name: "String Inverter 5kW",
    category: "inverters",
    power: "5kW",
    efficiency: "97.8%",
    warranty: "10 Years",
    description:
      "Reliable string inverter for residential applications with smart monitoring features.",
    specs: [
      "Dual MPPT",
      "LCD Display",
      "Arc Fault Protection",
      "Compact Design",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
    featured: false,
  },
  {
    id: 6,
    name: "Micro Inverter 450W",
    category: "inverters",
    power: "450W",
    efficiency: "96.5%",
    warranty: "25 Years",
    description:
      "Module-level power electronics for maximum energy harvest and individual panel monitoring.",
    specs: [
      "Per-Panel MPPT",
      "Cloud Monitoring",
      "25-Year Warranty",
      "Rapid Shutdown",
    ],
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=500&h=400&fit=crop",
    featured: false,
  },
  {
    id: 7,
    name: "Home Battery System 15kWh",
    category: "storage",
    power: "15kWh",
    efficiency: "95%",
    warranty: "10 Years",
    description:
      "Lithium-ion battery storage for energy independence and backup power during outages.",
    specs: ["LFP Chemistry", "6000+ Cycles", "Scalable Design", "Smart BMS"],
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=400&fit=crop",
    featured: true,
  },
  {
    id: 8,
    name: "Commercial Battery 100kWh",
    category: "storage",
    power: "100kWh",
    efficiency: "94%",
    warranty: "15 Years",
    description:
      "Large-scale energy storage solution for commercial and industrial applications.",
    specs: [
      "Modular Design",
      "Active Cooling",
      "Grid Services Ready",
      "Fire Suppression",
    ],
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=500&h=400&fit=crop",
    featured: false,
  },
];

const Bijli = () => {
   const [activeCategory, setActiveCategory] = useState("all");
   const [searchQuery, setSearchQuery] = useState("");
   const [selectedProduct, setSelectedProduct] = useState<
     (typeof products)[0] | null
   >(null);
 
   const filteredProducts = products.filter((product) => {
     const matchesCategory =
       activeCategory === "all" || product.category === activeCategory;
     const matchesSearch =
       product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       product.description.toLowerCase().includes(searchQuery.toLowerCase());
     return matchesCategory && matchesSearch;
   });
 
   return (
     <Layout>
       {/* Hero Section */}
       <section className="gradient-solar-dark py-16 md:py-24">
         <div className="container text-center text-white">
           <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
             PM <span className="text-solar-yellow">Muft Bijli Yojana</span>
           </h1>
           <p className="text-lg text-white/80 max-w-2xl mx-auto">
             The PM Surya Ghar Muft Bijli Yojana is free electricity — and it’s
             about a brighter, greener future for generations to come.
           </p>
         </div>
       </section>

       {/* About PM Bijli muft */}
       <section className="py-16 md:py-24 bg-background">
         <div className="container">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="relative">
               <img
                 src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop"
                 alt="Solar installation team"
                 className="rounded-2xl shadow-2xl"
               />
               <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
                 <div className="text-3xl font-bold">15+</div>
                 <div className="text-sm">Years of Excellence</div>
               </div>
             </div>
             <div className="space-y-6">
               <span className="text-primary font-semibold">Who Can Apply</span>
               <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                 Free Govt. Subsidy Upto Rs. 78,000
               </h2>
               <p className="leading-relaxed text-primary font-bold">
                 All house owners having 1-2-3 Kw Sanctioned Load with 200-300
                 Shadow free Roof
               </p>
               <p className="text-muted-foreground leading-relaxed">
                 The PM Surya Ghar Muft Bijli Yojana (also spelled Surya Grah or
                 Surya Ghar Yojna) is a government-backed solar rooftop project
                 designed to help Indian homeowners generate and use their own
                 clean solar electricity. It makes solar power more accessible
                 by offering subsidies and support to reduce upfront costs.
               </p>
               <Button asChild variant="outline" size="lg">
                 <Link to="/presence">
                   Learn More About Us
                   <ChevronRight className="ml-2 h-4 w-4" />
                 </Link>
               </Button>
             </div>
           </div>
         </div>
       </section>

       {/* list of muft bijli */}
       <div className="max-w-4xl mx-auto p-6 bg-gray-50 font-sans text-gray-800">
         {/* Header Section */}
         <div className="text-center mb-10">
           <h1 className="text-3xl font-bold text-orange-600 mb-2 flex items-center justify-center gap-2">
             <Zap className="w-8 h-8" /> Solar Power Generation & Benefits
           </h1>
           <p className="text-gray-600">
             Transform your rooftop into a power plant under the PM Surya Ghar
             scheme.
           </p>
         </div>

         <div className="grid md:grid-cols-2 gap-8">
           {/* Left Column: Generation Table */}
           <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
             <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
               <Sun className="w-5 h-5 text-orange-500" />
               Power Generation Estimates
             </h2>
             <div className="overflow-hidden rounded-lg border border-gray-200">
               <table className="w-full text-left">
                 <thead className="bg-blue-50">
                   <tr>
                     <th className="p-3 text-sm font-semibold text-blue-900">
                       System Capacity
                     </th>
                     <th className="p-3 text-sm font-semibold text-blue-900">
                       Approx. Monthly Power
                     </th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                   <tr>
                     <td className="p-3">1 kW</td>
                     <td className="p-3 font-medium">~120 Units</td>
                   </tr>
                   <tr>
                     <td className="p-3">2 kW</td>
                     <td className="p-3 font-medium">~240 Units</td>
                   </tr>
                   <tr>
                     <td className="p-3">3 kW</td>
                     <td className="p-3 font-medium">~360 Units</td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </div>

           {/* Right Column: Benefits List */}
           <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
             <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
               <CheckCircle className="w-5 h-5" />
               Key Benefits
             </h2>
             <ul className="space-y-3">
               <li className="flex items-start gap-3">
                 <span className="mt-1 w-2 h-2 bg-green-500 rounded-full"></span>
                 <span>
                   Significantly reduce or{" "}
                   <strong>eliminate electricity bills</strong>.
                 </span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="mt-1 w-2 h-2 bg-green-500 rounded-full"></span>
                 <span>
                   Generate <strong>clean energy</strong> right from your
                   rooftop.
                 </span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="mt-1 w-2 h-2 bg-green-500 rounded-full"></span>
                 <span>
                   <strong>Sell excess power</strong> back to the grid (via
                   net-metering).
                 </span>
               </li>
             </ul>
           </div>
         </div>

         {/* Bottom Section: Subsidy Table */}
         <div className="mt-8 bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
           <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
             <IndianRupee className="w-6 h-6 text-green-600" />
             Subsidies & Financial Support
           </h2>
           <p className="mb-4 text-gray-700">
             Government subsidies are sent directly to your bank account upon
             approval.
           </p>

           <div className="overflow-x-auto">
             <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
               <thead className="bg-orange-500 text-white">
                 <tr>
                   <th className="p-3 text-left">System Size (kW)</th>
                   <th className="p-3 text-left">Government Subsidy</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-200">
                 <tr>
                   <td className="p-3 font-semibold text-gray-700">1 kW</td>
                   <td className="p-3 text-green-700 font-bold">
                     Up to ₹30,000
                   </td>
                 </tr>
                 <tr className="bg-gray-50">
                   <td className="p-3 font-semibold text-gray-700">2 kW</td>
                   <td className="p-3 text-green-700 font-bold">
                     Up to ₹60,000
                   </td>
                 </tr>
                 <tr>
                   <td className="p-3 font-semibold text-gray-700">3 kW</td>
                   <td className="p-3 text-green-700 font-bold">
                     Up to ₹78,000
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       </div>


       {/* CTA Section */}
       <section className="py-16 gradient-solar">
         <div className="container text-center text-white">
           <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
             Need Help Choosing the Right Product?
           </h2>
           <p className="text-white/80 max-w-xl mx-auto mb-6">
             Our expert team is here to help you find the perfect solar solution
             for your needs.
           </p>
           <Button asChild size="lg" variant="secondary">
             <Link to="/contact">Contact Our Experts</Link>
           </Button>
         </div>
       </section>
     </Layout>
   );
 };


export default Bijli