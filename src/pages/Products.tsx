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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

const Products = () => {
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
            Our <span className="text-solar-yellow">Products</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover our comprehensive range of premium solar products designed
            for maximum efficiency and reliability.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-muted/50 border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Tabs */}
            <Tabs
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full md:w-auto"
            >
              <TabsList className="grid grid-cols-4 w-full md:w-auto">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="flex items-center gap-2"
                  >
                    <cat.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{cat.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No products found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.featured && (
                      <span className="absolute top-3 right-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-foreground text-xs font-medium rounded-full capitalize">
                      {product.category}
                    </span>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                      <div className="bg-muted rounded-md px-3 py-2 text-center">
                        <div className="font-semibold text-foreground">
                          {product.power}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Power
                        </div>
                      </div>
                      <div className="bg-muted rounded-md px-3 py-2 text-center">
                        <div className="font-semibold text-foreground">
                          {product.efficiency}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Efficiency
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-background rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full capitalize">
                  {selectedProduct.category}
                </span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">
                  {selectedProduct.warranty} Warranty
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                {selectedProduct.name}
              </h2>
              <p className="text-muted-foreground mb-6">
                {selectedProduct.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">
                    {selectedProduct.power}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Power Output
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">
                    {selectedProduct.efficiency}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Efficiency
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">
                    {selectedProduct.warranty}
                  </div>
                  <div className="text-sm text-muted-foreground">Warranty</div>
                </div>
              </div>

              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {selectedProduct.specs.map((spec, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <ChevronRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Button asChild className="flex-1 gradient-solar border-0">
                  <Link to="/contact">Request Quote</Link>
                </Button>
                <Button variant="outline" className="flex-1">
                  Download Datasheet
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default Products;
