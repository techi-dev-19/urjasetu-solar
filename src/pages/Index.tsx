import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sun,
  Zap,
  Shield,
  Award,
  Users,
  Globe,
  TrendingUp,
  ChevronRight,
  Newspaper,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Premium Monofacial Panel",
    category: "Solar Panels",
    power: "550W",
    efficiency: "21.5%",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Bifacial Solar Module",
    category: "Solar Panels",
    power: "660W",
    efficiency: "22.8%",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Hybrid Inverter Pro",
    category: "Inverters",
    power: "10kW",
    efficiency: "98.6%",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Smart Battery System",
    category: "Storage",
    power: "15kWh",
    efficiency: "95%",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop",
  },
];

// Mock data for stats
const stats = [
  { icon: Calendar, value: "15+", label: "Years Experience" },
  { icon: Zap, value: "500+", label: "MW Installed" },
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Globe, value: "25+", label: "Countries Served" },
];

// Mock data for why choose us
const whyChooseUs = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Industry-leading solar products with tier-1 certifications and extended warranties.",
  },
  {
    icon: TrendingUp,
    title: "Innovation First",
    description:
      "Cutting-edge technology that maximizes energy output and long-term savings.",
  },
  {
    icon: Shield,
    title: "Reliable Support",
    description:
      "24/7 customer service and dedicated technical support for all installations.",
  },
  {
    icon: Sun,
    title: "Sustainable Future",
    description:
      "Contributing to a greener planet with clean, renewable energy solutions.",
  },
];

// Mock data for news
const latestNews = [
  {
    id: 1,
    title: "SolarTech Expands Manufacturing Capacity by 50%",
    excerpt:
      "New state-of-the-art facility to meet growing global demand for premium solar panels.",
    date: "Jan 28, 2025",
    category: "Company News",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Breakthrough in Bifacial Panel Technology",
    excerpt:
      "Our R&D team achieves record-breaking 24% efficiency in laboratory tests.",
    date: "Jan 22, 2025",
    category: "Innovation",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Partnership with Leading EV Charging Network",
    excerpt:
      "Strategic alliance to integrate solar solutions with electric vehicle infrastructure.",
    date: "Jan 15, 2025",
    category: "Partnership",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-solar-darker/95 via-solar-dark/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium">
              #1 Solar Solutions Provider
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Powering a{" "}
              <span className="text-gradient-solar">Sustainable</span> Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Leading the renewable energy revolution with premium solar panels,
              innovative technology, and unmatched customer service. Join
              thousands of satisfied customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="gradient-solar border-0 text-lg hover:opacity-90"
              >
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="gradient-solar py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold">
                  {stat.value}
                </div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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
              <span className="text-primary font-semibold">
                About SolarTech
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Leading the Way in Renewable Energy Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Since our founding, SolarTech has been at the forefront of the
                solar energy revolution. We design, manufacture, and install
                premium solar solutions that help homes and businesses reduce
                their carbon footprint while saving on energy costs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to innovation, quality, and customer satisfaction
                has made us a trusted partner for over 10,000 customers across
                25+ countries. We believe in a future powered by clean energy,
                and we're dedicated to making that future accessible to
                everyone.
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

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
              Premium Solar Solutions
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Discover our range of high-efficiency solar products designed to
              maximize your energy production and savings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>Power: {product.power}</span>
                    <span>Eff: {product.efficiency}</span>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <Link to="/products">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="gradient-solar border-0">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
              Your Trusted Solar Partner
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-solar mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <span className="text-primary font-semibold">Latest Updates</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
                News & Insights
              </h2>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/news">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <Card
                key={article.id}
                className="group overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-foreground text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Newspaper className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2">
                    {article.excerpt}
                  </CardDescription>
                  <Link
                    to="/news"
                    className="inline-flex items-center text-primary font-medium text-sm mt-4 hover:underline"
                  >
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-solar-dark">
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Get a free consultation and quote from our expert team. Join
            thousands of satisfied customers who have made the switch to clean
            energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="gradient-solar border-0 text-lg hover:opacity-90"
            >
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;


