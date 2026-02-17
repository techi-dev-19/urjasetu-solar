import {
  Sun,
  Battery,
  Zap,
  Home,
  ArrowRight,
  CheckCircle2,
  Building2,
  Store,
} from "lucide-react";
import Layout from "../components/layout/Layout";

const HybridComponent = () => {


  return (
    <Layout>
      <header className="relative bg-blue-900 text-white py-24 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/30 -skew-x-12 translate-x-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-orange-500 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Best of Both Worlds
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Hybrid Solar Power System
            </h1>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Combine the reliability of grid power with the independence of
              battery backup. Enjoy uninterrupted power 24x7 while reducing your
              electricity bills.
            </p>
            <div className="flex flex-wrap gap-4">
              
            </div>
          </div>
          {/* Hero Image Placeholder */}
          <div className="bg-gradient-to-tr from-blue-800 to-blue-600 rounded-2xl p-2 shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
            <div className="bg-gray-200 rounded-xl h-64 md:h-80 w-full flex items-center justify-center overflow-hidden relative">
              <img
                src="/api/placeholder/600/400"
                alt="Hybrid Solar System Diagram"
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                <img
                  src="https://cdn.pixabay.com/photo/2017/11/11/17/05/solar-system-2939551_640.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      ;{/* --- What is it Section --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What is a Hybrid Solar System?
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded mb-6"></div>
          <p className="text-gray-600 text-lg">
            A Hybrid Solar System is an intelligent combination of on-grid and
            off-grid solar technologies. It connects to the electricity grid but
            also includes a battery backup. This ensures you have power during
            outages while still allowing you to sell excess energy back to the
            grid via net-metering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Sun className="w-10 h-10 text-orange-500" />,
              title: "Solar Generation",
              desc: "Primary power source. Runs your home loads directly from the sun during the day.",
            },
            {
              icon: <Battery className="w-10 h-10 text-green-600" />,
              title: "Battery Storage",
              desc: "Stores excess energy. Automatically powers your home when the grid fails or at night.",
            },
            {
              icon: <Zap className="w-10 h-10 text-blue-600" />,
              title: "Grid Connection",
              desc: "Acts as a backup and allows net-metering. Pull power when needed, export when full.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 text-center group"
            >
              <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-50 transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      ;{/* --- How It Works Steps --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                How It Works
              </h2>
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Daytime Operation",
                    text: "Solar panels generate power to run your home appliances first.",
                  },
                  {
                    step: "02",
                    title: "Smart Charging",
                    text: "Excess solar energy charges your batteries for later use.",
                  },
                  {
                    step: "03",
                    title: "Grid Export",
                    text: "Once batteries are full, remaining power is sent to the grid for credits.",
                  },
                  {
                    step: "04",
                    title: "Power Outage",
                    text: "System instantly switches to battery backup. You won't even notice the cut.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagram Placeholder */}
            <div className="bg-gray-100 rounded-3xl p-8 border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[400px]">
              <div className="text-center text-gray-400">
                <img
                  src="https://images.unsplash.com/photo-1668097613572-40b7c11c8727?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      ;{/* --- Key Benefits --- */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Hybrid?
            </h2>
            <p className="text-gray-600 mt-4">
              The most reliable solar solution for areas with frequent power
              cuts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Uninterrupted Power",
              "Reduce Electricity Bill",
              "Low Maintenance",
              "Net Metering Support",
              "Works Day & Night",
              "Load Shifting Capable",
              "Scalable Capacity",
              "Protect Appliances",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3"
              >
                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      ;{/* --- Applications --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Ideal Applications
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-orange-100 flex items-center justify-center">
              <Home className="w-16 h-16 text-orange-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Residential Homes</h3>
              <p className="text-gray-600 text-sm">
                Perfect for families needing ACs and lights during summer power
                cuts.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <Building2 className="w-16 h-16 text-blue-600" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Medical Clinics</h3>
              <p className="text-gray-600 text-sm">
                Critical equipment requires 24/7 uptime without generator
                noise/pollution.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-green-100 flex items-center justify-center">
              <Store className="w-16 h-16 text-green-600" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Shops & Offices</h3>
              <p className="text-gray-600 text-sm">
                Keep computers, servers, and lighting running to ensure business
                continuity.
              </p>
            </div>
          </div>
        </div>
      </section>
      ;
    </Layout>
  );
};

export default HybridComponent;
