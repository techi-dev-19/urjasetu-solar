import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  ChevronRight,
  Search,
  Tag,
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
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

// News categories
const categories = [
  { id: "all", label: "All News" },
  { id: "company", label: "Company News" },
  { id: "industry", label: "Industry Updates" },
  { id: "innovation", label: "Innovation" },
  { id: "partnerships", label: "Partnerships" },
];

// Mock news data
const newsArticles = [
  {
    id: 1,
    title: "SolarTech Expands Manufacturing Capacity by 50%",
    excerpt:
      "New state-of-the-art facility to meet growing global demand for premium solar panels. The expansion marks a significant milestone in our journey towards making solar energy accessible to everyone.",
    content: `SolarTech is proud to announce a major expansion of our manufacturing capabilities with the opening of our new state-of-the-art production facility. This expansion represents a 50% increase in our production capacity and will allow us to better serve our growing customer base worldwide.

The new facility features the latest in solar panel manufacturing technology, including automated production lines, advanced quality control systems, and sustainable manufacturing practices. We've invested heavily in reducing our carbon footprint while increasing output.

This expansion creates over 500 new jobs in the local community and positions SolarTech as a leader in the renewable energy manufacturing sector. We remain committed to producing the highest quality solar products while maintaining our environmental responsibility.`,
    date: "Jan 28, 2025",
    category: "company",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop",
    featured: true,
    author: "SolarTech News Team",
  },
  {
    id: 2,
    title:
      "Breakthrough in Bifacial Panel Technology Achieves Record Efficiency",
    excerpt:
      "Our R&D team achieves record-breaking 24% efficiency in laboratory tests, setting new industry standards for solar panel performance.",
    content: `Our research and development team has achieved a significant breakthrough in bifacial solar panel technology, reaching a record-breaking 24% efficiency in laboratory conditions. This achievement sets new benchmarks for the industry and demonstrates our commitment to innovation.

The breakthrough came through a combination of advanced cell architecture, improved light-trapping techniques, and optimized materials. These improvements will be incorporated into our next-generation bifacial modules, offering customers even greater energy production from the same footprint.`,
    date: "Jan 22, 2025",
    category: "innovation",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop",
    featured: true,
    author: "Dr. Sarah Chen, R&D Director",
  },
  {
    id: 3,
    title: "Strategic Partnership with Leading EV Charging Network",
    excerpt:
      "Strategic alliance to integrate solar solutions with electric vehicle infrastructure, creating a comprehensive clean energy ecosystem.",
    content: `SolarTech is excited to announce a strategic partnership with one of the leading electric vehicle charging networks. This collaboration aims to integrate our solar solutions with EV charging infrastructure, creating a truly sustainable transportation ecosystem.

The partnership will see the installation of solar-powered charging stations across major highways and urban centers. This initiative represents a significant step towards reducing the carbon footprint of transportation while promoting renewable energy adoption.`,
    date: "Jan 15, 2025",
    category: "partnerships",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    featured: false,
    author: "SolarTech News Team",
  },
  {
    id: 4,
    title: "Global Solar Market Outlook 2025: Key Trends and Predictions",
    excerpt:
      "Industry analysts predict record growth in solar installations worldwide as costs continue to decline and efficiency improves.",
    content: `The global solar energy market is poised for unprecedented growth in 2025, with analysts predicting record installations worldwide. Several factors are driving this growth, including continued cost reductions, improved technology, and increasing environmental awareness.

Key trends to watch include the rise of bifacial modules, the integration of AI in solar installations, and the growth of residential energy storage systems. SolarTech remains at the forefront of these developments.`,
    date: "Jan 10, 2025",
    category: "industry",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
    featured: false,
    author: "Market Research Team",
  },
  {
    id: 5,
    title: "SolarTech Receives Top Sustainability Award",
    excerpt:
      "Recognition of our commitment to sustainable manufacturing practices and environmental stewardship in the renewable energy sector.",
    content: `SolarTech has been honored with the prestigious Green Manufacturing Excellence Award for our commitment to sustainable production practices. This recognition reflects our ongoing efforts to minimize environmental impact while maximizing the quality of our products.

Our manufacturing facilities operate on 100% renewable energy, and we've implemented comprehensive recycling programs that have reduced waste by 80% over the past five years.`,
    date: "Jan 5, 2025",
    category: "company",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=400&fit=crop",
    featured: false,
    author: "SolarTech News Team",
  },
  {
    id: 6,
    title: "New Smart Monitoring System Launches for Residential Customers",
    excerpt:
      "Real-time monitoring and AI-powered optimization for home solar installations now available through our mobile app.",
    content: `We're excited to introduce our new Smart Solar Monitoring System, designed specifically for residential customers. This advanced system provides real-time monitoring of your solar installation through our user-friendly mobile app.

Features include AI-powered energy optimization, predictive maintenance alerts, and detailed analytics to help you maximize your solar investment. The system is compatible with all SolarTech panels and inverters.`,
    date: "Dec 28, 2024",
    category: "innovation",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=400&fit=crop",
    featured: false,
    author: "Product Development Team",
  },
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<
    (typeof newsArticles)[0] | null
  >(null);

  const filteredNews = newsArticles.filter((article) => {
    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsArticles.filter((article) => article.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-solar-dark py-16 md:py-24">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            News & <span className="text-solar-yellow">Insights</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest news, industry trends, and innovations
            from the world of solar energy.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      {!selectedArticle && featuredNews.length > 0 && (
        <section className="py-12 bg-muted/50">
          <div className="container">
            <h2 className="text-2xl font-display font-bold mb-8">
              Featured Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.map((article) => (
                <Card
                  key={article.id}
                  className="group overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 gradient-solar text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center capitalize">
                        <Tag className="h-4 w-4 mr-1" />
                        {article.category.replace("-", " ")}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters & Search */}
      {!selectedArticle && (
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Category Tabs */}
              <Tabs
                value={activeCategory}
                onValueChange={setActiveCategory}
                className="w-full md:w-auto"
              >
                <TabsList className="flex flex-wrap h-auto gap-1">
                  {categories.map((cat) => (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className="text-sm"
                    >
                      {cat.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Detail View */}
      {selectedArticle ? (
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center text-primary hover:underline mb-6"
            >
              <ChevronRight className="h-4 w-4 rotate-180 mr-1" />
              Back to all news
            </button>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
            />

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {selectedArticle.date}
              </span>
              <span className="flex items-center capitalize">
                <Tag className="h-4 w-4 mr-1" />
                {selectedArticle.category.replace("-", " ")}
              </span>
              <span>By {selectedArticle.author}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {selectedArticle.title}
            </h1>

            <div className="prose prose-lg max-w-none mb-8">
              {selectedArticle.content.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share */}
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Share this article:</span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* News Grid */
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl font-display font-bold mb-8">
              All Articles
            </h2>

            {filteredNews.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No articles found matching your criteria.
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((article) => (
                  <Card
                    key={article.id}
                    className="group overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-foreground text-xs font-medium rounded-full capitalize">
                        {article.category.replace("-", " ")}
                      </span>
                    </div>
                    <CardHeader>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-2 mb-4">
                        {article.excerpt}
                      </CardDescription>
                      <span className="inline-flex items-center text-primary font-medium text-sm hover:underline">
                        Read More
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      {!selectedArticle && (
        <section className="py-16 gradient-solar">
          <div className="container text-center text-white">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-6">
              Subscribe to our newsletter for the latest news, industry
              insights, and product updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default News;
