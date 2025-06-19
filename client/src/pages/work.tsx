import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";
import { Home, ShoppingCart, MapPin, Users } from "lucide-react";

export default function Work() {
  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8">What We're Working On</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Early experiments and prototypes exploring how AI can make everyday decisions smarter and easier
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Real Estate AI */}
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Modern apartment building" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                  <Home className="w-5 h-5 logo-blue" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">Real Estate Intelligence</h3>
              </div>
              <p className="text-secondary mb-6 leading-relaxed">
                AI agents that analyze property data, market trends, and personal preferences to help buyers and sellers make informed decisions faster.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">Market Analysis</Badge>
                <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100">Price Prediction</Badge>
                <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">Location Insights</Badge>
              </div>
              <div className="text-sm text-secondary">
                <strong>Status:</strong> Early Prototype • <strong>Launch:</strong> Q2 2024
              </div>
            </div>
          </FadeIn>

          {/* Smart Shopping */}
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Smart shopping with mobile device" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mr-4">
                  <ShoppingCart className="w-5 h-5 logo-yellow" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">Smart Shopping Assistant</h3>
              </div>
              <p className="text-secondary mb-6 leading-relaxed">
                Personal AI that learns your preferences, compares options across platforms, and finds the best deals while respecting your values and budget.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100">Price Tracking</Badge>
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">Preference Learning</Badge>
                <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100">Deal Discovery</Badge>
              </div>
              <div className="text-sm text-secondary">
                <strong>Status:</strong> Research Phase • <strong>Launch:</strong> Q3 2024
              </div>
            </div>
          </FadeIn>

          {/* Travel Planning */}
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Mountain hiking trail for travel planning" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 logo-coral" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">Intelligent Travel Planner</h3>
              </div>
              <p className="text-secondary mb-6 leading-relaxed">
                AI-powered travel planning that considers your interests, budget, weather, local events, and real-time conditions to create personalized itineraries.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">Route Optimization</Badge>
                <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100">Local Insights</Badge>
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">Dynamic Planning</Badge>
              </div>
              <div className="text-sm text-secondary">
                <strong>Status:</strong> Concept Development • <strong>Launch:</strong> Q4 2024
              </div>
            </div>
          </FadeIn>

          {/* Service Recommendations */}
          <FadeIn delay={0.4}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Professional service consultation" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-5 h-5 logo-emerald" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">Service Matchmaker</h3>
              </div>
              <p className="text-secondary mb-6 leading-relaxed">
                Connect with the right professionals and services based on your specific needs, location, budget, and quality requirements.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100">Professional Matching</Badge>
                <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">Quality Scoring</Badge>
                <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100">Availability Sync</Badge>
              </div>
              <div className="text-sm text-secondary">
                <strong>Status:</strong> Early Testing • <strong>Launch:</strong> Q1 2025
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <FadeIn delay={0.5}>
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Want to Shape These Ideas?</h3>
              <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
                We're looking for early testers, partners, and collaborators who want to help us build the future of AI-assisted decision making.
              </p>
              <Link href="/collaborate">
                <Button size="lg" className="px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
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
