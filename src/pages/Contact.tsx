import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  MessageSquare,
  FileText,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const enquiryTypes = [
  { id: "general", label: "General", icon: MessageSquare },
  // { id: "product", label: "Product", icon: FileText },
  // { id: "dealer", label: "Dealer", icon: Briefcase },
];



const regions = [
  "North America",
  "Europe",
  "Asia Pacific",
  "Middle East",
  "Africa",
  "Latin America",
];

const productCategories = [
  "Monofacial Solar Panels",
  "Bifacial Solar Panels",
  "Inverters",
  "Battery Storage",
  "Mounting Systems",
  "Complete Systems",
];

const Contact = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    region: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Enquiry Submitted!",
      description:
        "Thank you for your interest. Our team will contact you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      region: "",
      category: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-solar-dark py-16 md:py-24">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Contact <span className="text-solar-yellow">Us</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help.
            Reach out to us and our team will respond promptly.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid grid-cols-3 mb-6">
                      {enquiryTypes.map((type) => (
                        <TabsTrigger
                          key={type.id}
                          value={type.id}
                          className="flex items-center gap-2"
                        >
                          <type.icon className="h-4 w-4" />
                          {type.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="+1 (234) 567-890"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="pl-10"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="company"
                              name="company"
                              placeholder="Your Company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="pl-10"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="region">Region *</Label>
                          <select
                            id="region"
                            name="region"
                            value={formData.region}
                            onChange={handleInputChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            required
                          >
                            <option value="">Select Region</option>
                            {regions.map((region) => (
                              <option key={region} value={region}>
                                {region}
                              </option>
                            ))}
                          </select>
                        </div>

                        {activeTab === "product" && (
                          <div className="space-y-2">
                            <Label htmlFor="category">Product Category *</Label>
                            <select
                              id="category"
                              name="category"
                              value={formData.category}
                              onChange={handleInputChange}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              required={activeTab === "product"}
                            >
                              <option value="">Select Category</option>
                              {productCategories.map((cat) => (
                                <option key={cat} value={cat}>
                                  {cat}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {activeTab === "dealer" && (
                          <div className="space-y-2">
                            <Label htmlFor="category">Business Type *</Label>
                            <select
                              id="category"
                              name="category"
                              value={formData.category}
                              onChange={handleInputChange}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              required={activeTab === "dealer"}
                            >
                              <option value="">Select Type</option>
                              <option value="distributor">Distributor</option>
                              <option value="installer">Installer</option>
                              <option value="reseller">Reseller</option>
                              <option value="epc">EPC Contractor</option>
                            </select>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder={
                            activeTab === "general"
                              ? "How can we help you?"
                              : activeTab === "product"
                                ? "Tell us about your project requirements..."
                                : "Tell us about your business and partnership interests..."
                          }
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gradient-solar border-0"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="tel:+1234567890"
                    className="flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        +91-9369873546
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sales Hotline
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@solartech.com"
                    className="flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        info@solartech.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        General Enquiries
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Mon - Sun: 9AM - 6PM</p>
                      <p className="text-sm text-muted-foreground">
                        Business Hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps?q=26.558604,80.227920&hl=en&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "200px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    <MapPin className="inline-block h-4 w-4 mr-1" />
                    View our headquarters on Google Maps
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
