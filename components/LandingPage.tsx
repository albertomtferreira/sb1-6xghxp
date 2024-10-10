"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Laptop, Server, Users, BarChart3, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Laptop className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">InvenTrack Pro</span>
              </div>
            </div>
            <div className="flex items-center">
              <Button asChild variant="ghost">
                <Link href="#features">Features</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="#pricing">Pricing</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="#testimonials">Testimonials</Link>
              </Button>
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Streamline Your IT Inventory Management
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
              Effortlessly track, manage, and optimize your organization's IT assets with InvenTrack Pro.
            </p>
            <div className="mt-10 flex justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="ml-4" asChild>
                <Link href="#demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Powerful Features for Efficient Management
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Discover how InvenTrack Pro can revolutionize your IT asset management process.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
                  title: "Real-time Analytics",
                  description: "Get instant insights into your IT inventory with powerful analytics and reporting tools."
                },
                {
                  icon: <Shield className="h-8 w-8 text-indigo-600" />,
                  title: "Asset Security",
                  description: "Ensure the safety of your IT assets with advanced security features and access controls."
                },
                {
                  icon: <Zap className="h-8 w-8 text-indigo-600" />,
                  title: "Automated Workflows",
                  description: "Streamline your processes with customizable, automated workflows for asset management."
                },
                {
                  icon: <Server className="h-8 w-8 text-indigo-600" />,
                  title: "Cloud Integration",
                  description: "Seamlessly integrate with cloud services for enhanced flexibility and scalability."
                },
                {
                  icon: <Users className="h-8 w-8 text-indigo-600" />,
                  title: "Multi-user Collaboration",
                  description: "Enable team collaboration with role-based access and real-time updates."
                },
                {
                  icon: <Laptop className="h-8 w-8 text-indigo-600" />,
                  title: "Mobile Accessibility",
                  description: "Access your inventory data on-the-go with our responsive mobile application."
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white dark:bg-gray-800 py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Pricing Plans
            </h2>
            <p className="mt-5 text-xl text-gray-500 dark:text-gray-300">
              Choose the perfect plan for your organization's needs
            </p>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
            {[
              {
                name: "Free",
                price: "$0",
                features: ["Up to 50 items", "Basic reporting", "Email support"],
                ribbon: "Free",
                ribbonColor: "bg-green-500",
              },
              {
                name: "Pro",
                price: "$49",
                features: ["Up to 500 items", "Advanced reporting", "Priority support", "API access"],
                ribbon: "Best Value",
                ribbonColor: "bg-blue-500",
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Unlimited items", "Custom integrations", "Dedicated account manager", "24/7 phone support"],
                ribbon: "Custom",
                ribbonColor: "bg-purple-500",
              },
            ].map((plan) => (
              <Card key={plan.name} className="flex flex-col h-full overflow-hidden">
                <div className="relative flex-grow">
                  <div className={`absolute top-0 right-0 ${plan.ribbonColor} text-white px-3 py-1 text-xs font-semibold rounded-bl-md`}>
                    {plan.ribbon}
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-lg font-medium text-gray-900 dark:text-white">{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mt-4 text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</p>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">per month</p>
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardFooter className="mt-auto">
                  <Button className="w-full">
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl">
            What Our Customers Say
          </h2>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "Sarah Thompson",
                role: "IT Manager, TechCorp",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                quote: "InvenTrack Pro has revolutionized our IT asset management. It's intuitive, powerful, and has saved us countless hours."
              },
              {
                name: "Michael Chen",
                role: "CTO, StartUp Inc.",
                image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                quote: "The real-time analytics and reporting features have given us unprecedented insights into our IT inventory."
              },
              {
                name: "Emily Rodriguez",
                role: "System Administrator, EduTech",
                image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                quote: "The customer support team is exceptional. They've been incredibly helpful in optimizing our asset management processes."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center">
                    <Image className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} width={48} height={48} />
                    <div className="ml-4">
                      <div className="text-lg font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-300">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="hover:text-indigo-400">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-indigo-400">Pricing</Link></li>
                <li><Link href="#" className="hover:text-indigo-400">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-indigo-400">About Us</Link></li>
                <li><Link href="#" className="hover:text-indigo-400">Careers</Link></li>
                <li><Link href="#" className="hover:text-indigo-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-indigo-400">Documentation</Link></li>
                <li><Link href="#" className="hover:text-indigo-400">Blog</Link></li>
                <li><Link href="#" className="hover:text-indigo-400">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-indigo-400">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-indigo-400">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-indigo-400">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
            <p>&copy; 2023 InvenTrack Pro. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage