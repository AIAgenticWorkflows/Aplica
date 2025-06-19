import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";
import { Home, MapPin, Users } from "lucide-react";

export default function Work() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h1 className="text-5xl lg:text-6xl font-light text-black mb-8 text-balance">What We're Working On</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Early experiments and prototypes exploring how AI can make everyday decisions smarter and easier
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Short Term Rental Tools */}
          <FadeIn delay={0.1} direction="left">
            <div className="minimal-card rounded-2xl p-8 group">
              <div className="overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="Modern short term rental property" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-black">Short Term Rental Intelligence</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI-powered tools for short term rental hosts to optimize pricing, manage bookings, automate guest communication, and maximize revenue while maintaining exceptional guest experiences.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105">Dynamic Pricing</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105">Guest Automation</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105">Revenue Optimization</Badge>
              </div>
              <div className="text-sm text-gray-500">
                <strong className="text-black">Status:</strong> Early Prototype • <strong className="text-black">Launch:</strong> Q2 2025
              </div>
            </div>
          </FadeIn>

          {/* Travel Planning */}
          <FadeIn delay={0.2} direction="right">
            <div className="minimal-card rounded-2xl p-8 group">
              <div className="overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="Mountain hiking trail for travel planning" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-black">Intelligent Travel Planner</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI-powered travel planning that considers your interests, budget, weather, local events, and real-time conditions to create personalized itineraries.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105">Route Optimization</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105">Local Insights</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105">Dynamic Planning</Badge>
              </div>
              <div className="text-sm text-gray-500">
                <strong className="text-black">Status:</strong> Concept Development • <strong className="text-black">Launch:</strong> Q2 2026
              </div>
            </div>
          </FadeIn>

          {/* Service Recommendations */}
          <FadeIn delay={0.3} direction="left">
            <div className="minimal-card rounded-2xl p-8 group">
              <div className="overflow-hidden rounded-xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="Professional service consultation" 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-black">Service Matchmaker</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect with the right professionals and services based on your specific needs, location, budget, and quality requirements.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105">Professional Matching</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105">Quality Scoring</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-all duration-200 hover:scale-105">Availability Sync</Badge>
              </div>
              <div className="text-sm text-gray-500">
                <strong className="text-black">Status:</strong> Early Testing • <strong className="text-black">Launch:</strong> Q4 2025
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <FadeIn delay={0.4}>
            <div className="minimal-card rounded-2xl p-12">
              <h3 className="text-3xl font-light text-black mb-4 text-balance">Want to Shape These Ideas?</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                We're looking for early testers, partners, and collaborators who want to help us build the future of AI-assisted decision making.
              </p>
              <Link href="/collaborate">
                <Button size="lg" className="px-8 py-4 text-base font-medium bg-black text-white hover:bg-gray-800 transition-colors duration-200 rounded-full">
                  Get Involved
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
