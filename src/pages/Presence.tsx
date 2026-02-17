import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Building2,
  Factory,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

// Location data
const locations = [
  {
    id: 1,
    name: "Corporate Headquarters",
    type: "headquarters",
    icon: Building2,
    address: "123 Solar Street, Energy City, CA 90210, United States",
    phone: "+1 (234) 567-890",
    email: "info@solartech.com",
    description:
      "Our global headquarters houses our executive team, R&D center, and main customer support.",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7234919839455!2d-118.25257358478257!3d34.04564608060489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b85dea2a93%3A0x1ff47c3ceb7bb2d5!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1635959481000!5m2!1sen!2s",
  },
  {
    id: 2,
    name: "Manufacturing Plant",
    type: "plant",
    icon: Factory,
    address: "456 Innovation Drive, Tech Park, TX 75001, United States",
    phone: "+1 (234) 567-891",
    email: "plant@solartech.com",
    description:
      "State-of-the-art manufacturing facility producing premium solar panels and components.",
    coordinates: { lat: 32.7767, lng: -96.797 },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.4064696285715!2d-96.80180068481654!3d32.78014488097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9916748ab3c9%3A0x97c0a8dea8b98e!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1635959600000!5m2!1sen!2s",
  },
  {
    id: 3,
    name: "European Office",
    type: "regional",
    icon: Users,
    address: "789 Renewable Avenue, Munich, 80331, Germany",
    phone: "+49 89 123 456",
    email: "europe@solartech.com",
    description:
      "Regional hub serving European markets with sales, support, and distribution services.",
    coordinates: { lat: 48.1351, lng: 11.582 },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85282.82976783853!2d11.4792!3d48.1351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75d67cd0c6b1%3A0x389a0c0e8e9c0a!2sMunich%2C%20Germany!5e0!3m2!1sen!2s!4v1635959700000!5m2!1sen!2s",
  },
];

// Global presence stats
const globalStats = [
  { label: "Countries", value: "25+", icon: Globe },
  { label: "Offices", value: "12", icon: Building2 },
  { label: "Manufacturing Plants", value: "3", icon: Factory },
  { label: "Employees", value: "2,500+", icon: Users },
];

const Presence = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-solar-dark py-16 md:py-24">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-solar-yellow">Presence</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            With offices and manufacturing facilities across the globe, we're
            committed to bringing solar energy solutions to every corner of the
            world.
          </p>
        </div>
      </section>

      {/* Global Stats */}
      <section className="gradient-solar py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
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

      {/* World Map Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground">
              Global Footprint
            </h2>
            <p className="text-muted-foreground mt-2">
              Serving customers in 25+ countries across 6 continents
            </p>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="relative bg-muted rounded-2xl overflow-hidden mb-12">
            <div className="aspect-[21/9] flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50000000!2d0!3d20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1635959800000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur rounded-lg p-4 shadow-lg">
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full gradient-solar" />
                  <span>Headquarters</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-solar-yellow" />
                  <span>Manufacturing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-solar-dark" />
                  <span>Regional Office</span>
                </div>
              </div>
            </div>
          </div>

          {/* Regions Served */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              "North America",
              "Europe",
              "Asia Pacific",
              "Middle East",
              "Africa",
              "Latin America",
            ].map((region) => (
              <div
                key={region}
                className="bg-muted rounded-lg p-4 text-center hover:bg-muted/80 transition-colors"
              >
                <Globe className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">{region}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground">
              Our Locations
            </h2>
            <p className="text-muted-foreground mt-2">
              Visit us at any of our offices worldwide
            </p>
          </div>

          <div className="space-y-8">
            {locations.map((location) => (
              <Card key={location.id} className="overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* Location Info */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg gradient-solar">
                        <location.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          {location.type}
                        </span>
                        <h3 className="text-xl font-semibold">
                          {location.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {location.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">
                          {location.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <a
                          href={`tel:${location.phone}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                        <a
                          href={`mailto:${location.email}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {location.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <Button asChild className="gradient-solar border-0">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get Directions
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to="/contact">Contact Office</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="h-64 lg:h-auto min-h-[300px]">
                    <iframe
                      src={location.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-solar-dark">
        <div className="container text-center text-white">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Want to Partner With Us?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-6">
            We're always looking to expand our global network. Join us in our
            mission to make solar energy accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="gradient-solar border-0 hover:opacity-90"
            >
              <Link to="/contact">Become a Partner</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Presence;
