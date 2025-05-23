"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Loader2, CheckCircle2, XCircle, Upload } from "lucide-react"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const MAX_FILE_SIZE = 5000000 // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf"]

const resumeFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  expertiseArea: z.string({
    required_error: "Please select an area of expertise.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(5, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().optional(),
  resume: z
    .any()
    .refine((files) => files && files instanceof FileList && files.length === 1, "Please upload a resume.")
    .refine(
      (files) => files && files instanceof FileList && files[0] && files[0].size <= MAX_FILE_SIZE,
      `File size should be less than 5MB.`
    )
    .refine(
      (files) => files && files instanceof FileList && files[0] && ACCEPTED_FILE_TYPES.includes(files[0].type),
      "Only PDF files are accepted."
    ),
})

type ResumeFormValues = z.infer<typeof resumeFormSchema>

export function ResumeSubmissionForm() {  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  
  const expertiseAreas = [
    "Accounting & Bookkeeping",
    "Sales & Client Acquisition",
    "Financial Management & Advisory",
    "ERP Implementation & Development",
    "Audit & Compliance",
    "Tax Advisory & Planning",
    "Business Valuation & Strategy",
    "Technology & Automation",
    "Operations & Project Management"
  ]
  const form = useForm<ResumeFormValues>({
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      fullName: "",
      expertiseArea: "",
      email: "",
      phone: "",
      message: "",
    },
  })
  async function onSubmit(data: ResumeFormValues) {
    setIsSubmitting(true)
    
    try {
      // Get the file data as base64 if a file is uploaded
      let fileData = null;
      let fileType = "";
      let fileName = "";
      let fileExtension = "";
      
      if (data.resume && data.resume[0]) {
        const file = data.resume[0];
        fileName = file.name;
        fileType = file.type;
        fileExtension = fileName.split('.').pop() || "";
        
        // Convert file to base64
        const reader = new FileReader();
        fileData = await new Promise<string>((resolve) => {
          reader.onload = (e) => {
            if (e.target && e.target.result) {
              // Extract the base64 data part (remove the prefix)
              const base64String = e.target.result.toString();
              // Remove the data:application/pdf;base64, prefix
              const base64Data = base64String.split(',')[1];
              resolve(base64Data);
            }
          };
          reader.readAsDataURL(file);
        });
      }

      const payload = {
        fullName: data.fullName,
        area: data.expertiseArea,
        email: data.email,
        phone: data.phone,
        message: data.message || "",
        fileData,
        fileType,
        fileName,
        fileExtension,
        username: "junaid",
        password: "fat@123"
      };

      const response = await fetch("https://api.fatoorax.com/API/Email/SendEmailCareer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      
      const result = await response.json();
      
      if (result.isError) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      toast({
        title: "Resume Submitted",
        description: "We've received your application. Thank you!",
        variant: "default",
      });
      
      form.reset();
      setFileName(null);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      setFileName(files[0].name)
      form.setValue("resume", files)
    } else {
      setFileName(null)
    }
  }
  return (
    <div className="w-full mx-auto p-6 md:p-8 bg-white dark:bg-neutral-950 border border-gray-200 dark:border-neutral-800">
      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-center sm:text-left">Submit Your Resume</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    {...field}
                    className="border-gray-200 dark:border-neutral-800 bg-white dark:bg-black focus:ring-1 focus:ring-gray-300 dark:focus:ring-neutral-700" 
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="expertiseArea"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">Area of Expertise</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value} 
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-gray-200 dark:border-neutral-800 bg-white dark:bg-black focus:ring-1 focus:ring-gray-300 dark:focus:ring-neutral-700">
                      <SelectValue placeholder="Select an area where you can make an impact" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white dark:bg-black border-gray-200 dark:border-neutral-800">
                    {expertiseAreas.map((area) => (
                      <SelectItem key={area} value={area} className="focus:bg-gray-100 dark:focus:bg-neutral-900">
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="you@example.com" 
                    type="email"
                    {...field}
                    className="border-gray-200 dark:border-neutral-800 bg-white dark:bg-black focus:ring-1 focus:ring-gray-300 dark:focus:ring-neutral-700" 
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">Phone Number</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="+1 (555) 123-4567" 
                    {...field}
                    className="border-gray-200 dark:border-neutral-800 bg-white dark:bg-black focus:ring-1 focus:ring-gray-300 dark:focus:ring-neutral-700" 
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">Additional Message (Optional)</FormLabel>
                <FormControl>
                  <textarea 
                    placeholder="Tell us a bit about yourself and why you're interested in this role..." 
                    {...field}
                    className="w-full min-h-24 p-3 border border-gray-200 dark:border-neutral-800 bg-white dark:bg-black focus:ring-1 focus:ring-gray-300 dark:focus:ring-neutral-700 rounded-md" 
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="resume"
            render={() => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">Resume (PDF only, max 5MB)</FormLabel>
                <FormControl>
                  <div className="flex flex-col space-y-2">
                    <div className="relative border-2 border-dashed border-gray-200 dark:border-neutral-800 rounded-md p-6 flex flex-col items-center justify-center hover:border-gray-300 dark:hover:border-neutral-700 transition-colors cursor-pointer">
                      <Input 
                        type="file" 
                        accept=".pdf" 
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                      />
                      <Upload className="h-8 w-8 text-gray-400 dark:text-neutral-500 mb-2" />
                      <span className="text-sm text-gray-600 dark:text-neutral-400">
                        {fileName ? fileName : "Click or drag file to upload"}
                      </span>
                    </div>
                    {fileName && (
                      <div className="text-sm text-gray-600 dark:text-neutral-400 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                        File selected: {fileName}
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : "Submit Application"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
