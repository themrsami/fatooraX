"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  // Track submission attempts to prevent rapid resubmissions
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple client-side rate limiting (prevent submissions within 10 seconds)
    const now = Date.now();
    if (now - lastSubmitTime < 10000 && formStatus !== "idle") {
      alert("Please wait a moment before submitting again.");
      return;
    }
    
    setLastSubmitTime(now);
    setFormStatus("submitting");
    try {
      // Send directly to the external API endpoint
      const response = await fetch('https://api.fatoorax.com/API/Email/SendEmailContactUs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          message: formData.message,
          username: "junaid",
          password: "fat@123"
        }),
      });
      
      const result = await response.json();
      
      if (!result.isError) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        console.error("API Error:", result.errorDescription || result.message);
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
  }
  
  return (    <section id="contact" className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="relative max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
            Get in Touch With Our Team
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
            Have questions about our services or want to discuss how we can help your business? Reach out to us today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {/* Contact information - 2 columns */}
          <div className="md:col-span-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-8 md:p-10">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-none bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-gray-700 dark:text-neutral-300" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Office Location</h4>
                  <p className="text-gray-600 dark:text-neutral-400 text-sm">
                    Downtown Dubai, Business Bay<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-none bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-gray-700 dark:text-neutral-300" />
                </div>
                <div>                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Phone Number</h4>
                  <p className="text-gray-600 dark:text-neutral-400 text-sm">
                    <a href="tel:+971527804545" className="hover:text-black dark:hover:text-white transition-colors">
                      +971 527804545
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-none bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-gray-700 dark:text-neutral-300" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Email Address</h4>
                  <p className="text-gray-600 dark:text-neutral-400 text-sm">
                    <a href="mailto:info@fatoora-x.com" className="hover:text-black dark:hover:text-white transition-colors">
                      info@fatoorax.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-none bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-5 w-5 text-gray-700 dark:text-neutral-300" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Working Hours</h4>
                  <p className="text-gray-600 dark:text-neutral-400 text-sm">
                    Monday - Saturday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form - 3 columns */}
          <div className="md:col-span-3 bg-gray-50 dark:bg-neutral-800/50 border border-gray-200 dark:border-neutral-800 p-8 md:p-10">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2"
                  >
                    Full Name
                  </Label>                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-700 rounded-none focus:ring-0 focus:border-gray-900 dark:focus:border-white text-gray-900 dark:text-gray-900"
                    required
                  />
                </div>
                
                <div>
                  <Label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2"
                  >
                    Email Address
                  </Label>                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-700 rounded-none focus:ring-0 focus:border-gray-900 dark:focus:border-white text-gray-900 dark:text-gray-900"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label 
                  htmlFor="phone" 
                  className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2"
                >
                  Phone Number
                </Label>                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-700 rounded-none focus:ring-0 focus:border-gray-900 dark:focus:border-white text-gray-900 dark:text-gray-900"
                />
              </div>
              
              <div>
                <Label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2"
                >
                  Your Message
                </Label>                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-700 rounded-none focus:ring-0 focus:border-gray-900 dark:focus:border-white resize-none text-gray-900 dark:text-gray-900"
                  required
                />
              </div>
              
              <div>
                <Button 
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="border-2 border-gray-900 dark:border-white bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-transparent hover:text-gray-900 dark:hover:bg-transparent dark:hover:text-white transition-all duration-300 rounded-none px-8 py-3 text-base font-medium w-full md:w-auto flex items-center justify-center"
                >
                  {formStatus === "submitting" ? (
                    <>Sending...</>
                  ) : formStatus === "success" ? (
                    <>Message Sent</>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                
                {formStatus === "success" && (
                  <p className="mt-4 text-sm text-green-600 dark:text-green-400">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                )}
                
                {formStatus === "error" && (
                  <p className="mt-4 text-sm text-red-600 dark:text-red-400">
                    There was an error sending your message. Please try again later.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
        
        {/* Dubai Map */}
        <div className="relative w-full h-96 md:h-[500px] border border-gray-200 dark:border-neutral-800 overflow-hidden">
          <div className="absolute inset-0 grayscale contrast-125 brightness-90">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785100404378!2d55.26765791501164!3d25.188487383891478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3eaf4f96!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1649681469127!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
