"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import createFormStore from "@/zustand/create-form";

const BasicInformationForm = () => {
  return (
    <>
      <div>
        <ComponentForm />
      </div>
    </>
  );
};

const formSchema = z.object({
  companyName: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),

  description: z.string().min(1, {
    message: "Description must be at least 10 characters.",
  }),

  email: z.string().email({
    message: "Invalid email address.",
  }),

  phoneNumbers: z.array(
    z.string().min(10, {
      message: "Phone number must be at least 10 characters.",
    })
  ),

  website: z.string().optional(),

  services: z.array(
    z.string().min(2, {
      message: "Service must be at least 2 characters.",
    })
  ),

  socialLinks: z.object({
    facebook: z
      .string()
      .url({
        message: "Invalid URL.",
      })
      .optional(),
    instagram: z
      .string()
      .url({
        message: "Invalid URL.",
      })
      .optional(),
    linkedin: z
      .string()
      .url({
        message: "Invalid URL.",
      })
      .optional(),
    twitter: z
      .string()
      .url({
        message: "Invalid URL.",
      })
      .optional(),
  }),
});

export function ComponentForm() {
  const { updateBasicInformation } = createFormStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      description: "",
      email: "",
      website: "",
      phoneNumbers: [],
      services: [],
      socialLinks: {
        facebook: "",
        instagram: "",
        linkedin: "",
        twitter: "",
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    updateBasicInformation({
      name: values.companyName,
      description: values.description,
      email: values.email,
      phoneNumber: values.phoneNumbers[0],
      website: "hello",
      instagram: values.socialLinks.instagram,
      facebook: values.socialLinks.facebook,
    });
  }

  const grid1 = `grid grid-cols-1 gap-6`;
  const grid2 = `grid grid-cols-2 gap-6`;
  const grid3 = `grid grid-cols-3 gap-6`;
  const grid4 = `grid grid-cols-4 gap-6`;

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Compnay Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Company Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe you brand and what it stands for..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className={`${grid3}`}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumbers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Numbers</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Numbers" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter website" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className={`${grid4}`}>
            <FormField
              control={form.control}
              name="socialLinks.facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook</FormLabel>
                  <FormControl>
                    <Input placeholder="Facebook" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socialLinks.instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl>
                    <Input placeholder="Instagram" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socialLinks.linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Linkedin</FormLabel>
                  <FormControl>
                    <Input placeholder="Linkedin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socialLinks.twitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Twitter</FormLabel>
                  <FormControl>
                    <Input placeholder="Twitter" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Button
        className=""
        onClick={() => {
          // auto fill the complte  form
          form.setValue("companyName", "shadcn");
          form.setValue("description", "shadcn");
          form.setValue("email", "email@gmail.com");
          form.setValue("phoneNumbers", ["1234567890"]);
          form.setValue("services", ["service1", "service2"]);
          form.setValue("website", "https://shadcn.com");
          form.setValue("socialLinks.facebook", "https://facebook.com");
          form.setValue("socialLinks.instagram", "https://facebook.com");
          form.setValue("socialLinks.linkedin", "https://facebook.com");
          form.setValue("socialLinks.twitter", "https://facebook.com");
        }}
      >
        AUTO
      </Button>
    </>
  );
}

export default BasicInformationForm;
