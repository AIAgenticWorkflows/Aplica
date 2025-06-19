import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";
import { Home, ShoppingCart, MapPin, Users } from "lucide-react";

export default function Work() {
  return (
    <section className="py-32 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <FadeIn>
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-12 tracking-tight">What We're Working On</h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Early experiments and prototypes exploring how AI can make everyday decisions smarter and easier
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Real Estate AI */}
          <FadeIn delay={0.1}>
            <div className="floating-card bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-100/50">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Modern apartment building" 
                className="w-full h-56 object-cover rounded-2xl mb-8"
              />
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Real Estate Intelligence</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                AI agents that analyze property data, market trends, and personal preferences to help buyers and sellers make informed decisions faster.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-full font-medium">Market Analysis</Badge>
                <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100 px-4 py-2 rounded-full font-medium">Price Prediction</Badge>
                <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100 px-4 py-2 rounded-full font-medium">Location Insights</Badge>
              </div>
              <div className="text-gray-500 font-medium">
                <strong className="text-slate-900">Status:</strong> Early Prototype • <strong className="text-slate-900">Launch:</strong> Q2 2024
              </div>
            </div>
          </FadeIn>

          {/* Smart Shopping */}
          <FadeIn delay={0.2}>
            <div className="floating-card bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-100/50">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Smart shopping with mobile device" 
                className="w-full h-56 object-cover rounded-2xl mb-8"
              />
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6">
                  <ShoppingCart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Smart Shopping Assistant</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Personal AI that learns your preferences, compares options across platforms, and finds the best deals while respecting your values and budget.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 px-4 py-2 rounded-full font-medium">Price Tracking</Badge>
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-full font-medium">Preference Learning</Badge>
                <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100 px-4 py-2 rounded-full font-medium">Deal Discovery</Badge>
              </div>
              <div className="text-gray-500 font-medium">
                <strong className="text-slate-900">Status:</strong> Research Phase • <strong className="text-slate-900">Launch:</strong> Q3 2024
              </div>
            </div>
          </FadeIn>

          {/* Travel Planning */}
          <FadeIn delay={0.3}>
            <div className="floating-card bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-100/50">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Mountain hiking trail for travel planning" 
                className="w-full h-56 object-cover rounded-2xl mb-8"
              />
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Intelligent Travel Planner</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                AI-powered travel planning that considers your interests, budget, weather, local events, and real-time conditions to create personalized itineraries.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100 px-4 py-2 rounded-full font-medium">Route Optimization</Badge>
                <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 px-4 py-2 rounded-full font-medium">Local Insights</Badge>
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-full font-medium">Dynamic Planning</Badge>
              </div>
              <div className="text-gray-500 font-medium">
                <strong className="text-slate-900">Status:</strong> Concept Development • <strong className="text-slate-900">Launch:</strong> Q4 2024
              </div>
            </div>
          </FadeIn>

          {/* Service Recommendations */}
          <FadeIn delay={0.4}>
            <div className="floating-card bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-100/50">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Professional service consultation" 
                className="w-full h-56 object-cover rounded-2xl mb-8"
              />
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Service Matchmaker</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Connect with the right professionals and services based on your specific needs, location, budget, and quality requirements.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100 px-4 py-2 rounded-full font-medium">Professional Matching</Badge>
                <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100 px-4 py-2 rounded-full font-medium">Quality Scoring</Badge>
                <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 px-4 py-2 rounded-full font-medium">Availability Sync</Badge>
              </div>
              <div className="text-gray-500 font-medium">
                <strong className="text-slate-900">Status:</strong> Early Testing • <strong className="text-slate-900">Launch:</strong> Q1 2025
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <FadeIn delay={0.5}>
            <div className="floating-card bg-white/90 backdrop-blur-xl rounded-3xl p-16 shadow-2xl border border-gray-100/50">
              <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Want to Shape These Ideas?</h3>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                We're looking for early testers, partners, and collaborators who want to help us build the future of AI-assisted decision making.
              </p>
              <Link href="/collaborate">
                <Button size="lg" className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 rounded-2xl">
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
