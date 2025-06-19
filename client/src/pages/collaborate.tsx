import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FadeIn } from "@/components/fade-in";
import { Users, FlaskRound, Lightbulb, Mail, Linkedin, Twitter } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const collaborationFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  collaborationType: z.string().min(1, "Please select a collaboration type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacy: z.boolean().refine(val => val === true, "You must agree to the privacy policy"),
});

type CollaborationFormData = z.infer<typeof collaborationFormSchema>;

export default function Collaborate() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<CollaborationFormData>({
    resolver: zodResolver(collaborationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      collaborationType: "",
      message: "",
      privacy: false,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: Omit<CollaborationFormData, "privacy">) => {
      return await apiRequest("POST", "/api/collaborate", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    },
  });

  const onSubmit = (data: CollaborationFormData) => {
    const { privacy, ...submitData } = data;
    submitMutation.mutate(submitData);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <Card>
              <CardContent className="pt-12 pb-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-slate-800 mb-4">Thank You!</h1>
                <p className="text-lg text-secondary mb-8">
                  Your message has been sent successfully. We'll review your collaboration proposal and get back to you soon.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h1 className="text-5xl lg:text-6xl font-light text-black mb-8 text-balance">Let's Collaborate</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe the best products come from collaboration. Whether you're a potential partner, 
              early tester, or someone with ideas to share, we'd love to hear from you.
            </p>
          </FadeIn>
        </div>

        {/* Collaboration Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FadeIn delay={0.1} direction="scale">
            <div className="minimal-card rounded-2xl p-8 text-center group">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Partners</h3>
              <p className="text-gray-600">
                Business partners, technology collaborators, and strategic allies who want to build the future together
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="scale">
            <div className="minimal-card rounded-2xl p-8 text-center group">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <FlaskRound className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Early Testers</h3>
              <p className="text-gray-600">
                Individuals and organizations willing to test our prototypes and provide valuable feedback
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="scale">
            <div className="minimal-card rounded-2xl p-8 text-center group">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Idea Contributors</h3>
              <p className="text-gray-600">
                Creative thinkers with insights about AI applications and real-world problem solving
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Contact Form */}
        <FadeIn delay={0.4}>
          <Card>
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Start the Conversation</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="collaborationType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How would you like to collaborate? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="partnership">Business Partnership</SelectItem>
                            <SelectItem value="testing">Early Testing</SelectItem>
                            <SelectItem value="ideas">Share Ideas/Feedback</SelectItem>
                            <SelectItem value="investment">Investment Opportunity</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us more *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="What specific collaboration are you interested in? What problems are you trying to solve? What ideas do you want to share?"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="privacy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm">
                            I agree to Aplica's privacy policy and understand that my information will be used to facilitate our collaboration *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitMutation.isPending}
                      className="px-12 py-4 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      {submitMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Alternative Contact Methods */}
        <div className="mt-16">
          <FadeIn delay={0.5}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Prefer Another Way to Connect?</h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="mailto:hello@aplica.ai"
                  className="flex items-center justify-center bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-500 text-slate-800 px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  hello@aplica.ai
                </a>
                <a
                  href="https://linkedin.com/company/aplica"
                  className="flex items-center justify-center bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-500 text-slate-800 px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/aplica_ai"
                  className="flex items-center justify-center bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-500 text-slate-800 px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <Twitter className="w-5 h-5 mr-3" />
                  Twitter
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
