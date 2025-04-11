"use client"

import { useState } from "react"
import { 
  Calendar, 
  CalendarIcon, 
  Check, 
  ChevronsUpDown, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare,
  ArrowRight,
  X
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM", 
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
]

const serviceTypes = [
  { value: "erp", label: "ERP Implementation" },
  { value: "accounting", label: "Accounting Services" },
  { value: "tax", label: "Tax Consultancy" },
  { value: "bookkeeping", label: "Bookkeeping Services" },
  { value: "wealth", label: "Wealth Management" },
  { value: "other", label: "Other Services" },
]

export function BookingForm() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>("")
  const [timeOpen, setTimeOpen] = useState(false)
  const [service, setService] = useState("")
  const [serviceOpen, setServiceOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  }

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  }

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      
      // Reset form after showing success message
      setTimeout(() => {
        setOpen(false)
        setSuccess(false)
        setStep(1)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        })
        setDate(undefined)
        setTime("")
        setService("")
      }, 3000)
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-white text-black hover:bg-black hover:text-white rounded-none px-8 py-6 text-base font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black shadow-lg shadow-zinc-900/20 group">
          <span>Book a Consultation</span>
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-black border border-zinc-800 rounded-xl shadow-xl p-0 overflow-hidden">
        <DialogClose className="absolute right-4 top-4 rounded-full p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 focus:ring-white">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        {success ? (
          <div className="flex flex-col items-center justify-center py-16 px-6">
            <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center mb-6 animate-pulse">
              <Check className="h-10 w-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed</h3>
            <p className="text-zinc-400 text-center max-w-md mb-8">
              Thank you for scheduling a consultation. We'll reach out to confirm your appointment soon.
            </p>
            <div className="flex items-center space-x-2 text-zinc-500 text-sm border-t border-zinc-800 pt-6 w-full justify-center">
              <CalendarIcon className="h-4 w-4" />
              <span>{date ? format(date, "MMMM d, yyyy") : ""}</span>
              <span>•</span>
              <Clock className="h-4 w-4" />
              <span>{time}</span>
            </div>
          </div>
        ) : (
          <>            <div className="bg-zinc-900 px-6 py-4 border-b border-zinc-800">
              <DialogHeader>
                <div className="mb-4">
                  <DialogTitle className="text-xl font-semibold text-white flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center mr-3 font-bold text-sm">
                      {step}
                    </div>
                    {step === 1 && "Your Information"}
                    {step === 2 && "Service Details"}
                    {step === 3 && "Schedule Appointment"}
                  </DialogTitle>
                </div>
                
                <div className="flex items-center justify-between w-full mt-2">
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${step === 1 ? "bg-white" : step > 1 ? "bg-white" : "bg-zinc-700"} mb-1`}></div>
                    <span className={`text-xs ${step === 1 ? "text-white" : step > 1 ? "text-white" : "text-zinc-500"}`}>Details</span>
                  </div>
                  <div className={`h-0.5 flex-1 mx-2 ${step > 1 ? "bg-white" : "bg-zinc-700"}`}></div>
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${step === 2 ? "bg-white" : step > 2 ? "bg-white" : "bg-zinc-700"} mb-1`}></div>
                    <span className={`text-xs ${step === 2 ? "text-white" : step > 2 ? "text-white" : "text-zinc-500"}`}>Service</span>
                  </div>
                  <div className={`h-0.5 flex-1 mx-2 ${step > 2 ? "bg-white" : "bg-zinc-700"}`}></div>
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${step === 3 ? "bg-white" : "bg-zinc-700"} mb-1`}></div>
                    <span className={`text-xs ${step === 3 ? "text-white" : "text-zinc-500"}`}>Schedule</span>
                  </div>
                </div>
              </DialogHeader>
            </div>
            
            <form onSubmit={handleSubmit} className="px-6 py-6">
              {step === 1 && (
                <div className="space-y-6">
                  <DialogDescription className="text-zinc-400 mb-6">
                    Tell us about yourself so we can personalize your consultation experience.
                  </DialogDescription>
                
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-zinc-300 font-medium text-sm">Full Name</Label>
                      <div className="relative">
                        <Input 
                          id="name" 
                          placeholder="John Smith" 
                          className="bg-zinc-900 border-zinc-700 pl-10 h-12 rounded-lg focus:border-white focus:ring-white text-white"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        <User className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-zinc-300 font-medium text-sm">Email Address</Label>
                      <div className="relative">
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          className="bg-zinc-900 border-zinc-700 pl-10 h-12 rounded-lg focus:border-white focus:ring-white text-white"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <Mail className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-zinc-300 font-medium text-sm">Phone Number</Label>
                        <div className="relative">
                          <Input 
                            id="phone" 
                            placeholder="+1 (555) 000-0000" 
                            className="bg-zinc-900 border-zinc-700 pl-10 h-12 rounded-lg focus:border-white focus:ring-white text-white"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                          <Phone className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-zinc-300 font-medium text-sm">Company Name</Label>
                        <div className="relative">
                          <Input 
                            id="company" 
                            placeholder="Acme Inc." 
                            className="bg-zinc-900 border-zinc-700 pl-10 h-12 rounded-lg focus:border-white focus:ring-white text-white"
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                          <Building className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-6">
                  <DialogDescription className="text-zinc-400 mb-6">
                    Tell us about the services you're interested in discussing.
                  </DialogDescription>
                
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-zinc-300 font-medium text-sm">Service Type</Label>
                      <Popover open={serviceOpen} onOpenChange={setServiceOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={serviceOpen}
                            className="w-full justify-between bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800 h-12 rounded-lg focus:border-white focus:ring-white"
                          >
                            {service
                              ? serviceTypes.find((serviceType) => serviceType.value === service)?.label
                              : "Select service type"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0 bg-zinc-900 border-zinc-700 rounded-lg shadow-xl">
                          <Command className="bg-transparent">
                            <CommandInput placeholder="Search services..." className="text-zinc-200" />
                            <CommandEmpty>No service found.</CommandEmpty>
                            <CommandGroup className="max-h-60 overflow-y-auto">
                              {serviceTypes.map((serviceType) => (
                                <CommandItem
                                  key={serviceType.value}
                                  value={serviceType.value}
                                  onSelect={(currentValue) => {
                                    setService(currentValue)
                                    setServiceOpen(false)
                                  }}
                                  className="text-zinc-200 hover:bg-zinc-800"
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4 text-white",
                                      service === serviceType.value ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  {serviceType.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-zinc-300 font-medium text-sm">Additional Details</Label>
                      <div className="relative">
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your specific needs and what you'd like to discuss..." 
                          className="min-h-32 bg-zinc-900 border-zinc-700 pl-10 pt-3 rounded-lg focus:border-white focus:ring-white text-white"
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-zinc-500" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="space-y-6">
                  <DialogDescription className="text-zinc-400 mb-6">
                    Select your preferred date and time for the consultation.
                  </DialogDescription>
                
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-zinc-300 font-medium text-sm">Preferred Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800 h-12 rounded-lg focus:border-white focus:ring-white",
                              !date && "text-zinc-500"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-5 w-5" />
                            {date ? format(date, "MMMM d, yyyy") : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-zinc-900 border-zinc-700 rounded-lg shadow-xl">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                            className="bg-zinc-900 text-white rounded-lg"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-zinc-300 font-medium text-sm">Preferred Time</Label>
                      <Popover open={timeOpen} onOpenChange={setTimeOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={timeOpen}
                            className="w-full justify-between bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800 h-12 rounded-lg focus:border-white focus:ring-white"
                          >
                            <div className="flex items-center">
                              <Clock className="mr-2 h-5 w-5" />
                              {time || "Select a time"}
                            </div>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0 bg-zinc-900 border-zinc-700 rounded-lg shadow-xl">
                          <Command className="bg-transparent">
                            <CommandGroup className="max-h-60 overflow-y-auto">
                              {timeSlots.map((slot) => (
                                <CommandItem
                                  key={slot}
                                  value={slot}
                                  onSelect={(currentValue) => {
                                    setTime(currentValue)
                                    setTimeOpen(false)
                                  }}
                                  className="text-zinc-200 hover:bg-zinc-800"
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4 text-white",
                                      time === slot ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  {slot}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  {date && time && (
                    <div className="mt-6 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                      <h4 className="font-medium text-white mb-2">Appointment Summary</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-zinc-400">Service:</div>
                        <div className="text-white font-medium">{serviceTypes.find(s => s.value === service)?.label || "Not selected"}</div>
                        <div className="text-zinc-400">Date:</div>
                        <div className="text-white font-medium">{date ? format(date, "MMMM d, yyyy") : ""}</div>
                        <div className="text-zinc-400">Time:</div>
                        <div className="text-white font-medium">{time}</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <DialogFooter className="flex sm:justify-between border-t border-zinc-800 mt-6 pt-6">
                {step > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={handlePrevStep}
                    className="bg-transparent text-white border-zinc-700 hover:bg-zinc-800 hover:text-white rounded-lg"
                  >
                    Back
                  </Button>
                ) : (
                  <div></div> // Empty div to maintain layout with justify-between
                )}
                
                {step < 3 ? (
                  <Button 
                    type="button" 
                    onClick={handleNextStep}
                    className="bg-white text-black hover:bg-gray-100 transition-all rounded-lg font-medium"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    disabled={loading || !date || !time || !service}
                    className="bg-white text-black hover:bg-gray-100 transition-all rounded-lg font-medium flex items-center"
                  >
                    {loading ? "Processing..." : "Schedule Consultation"}
                    {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                )}
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}