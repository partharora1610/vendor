"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
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

  ownerName: z.string().optional(),

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
    youtube: z
      .string()
      .url({
        message: "Invalid URL.",
      })
      .optional(),
  }),

  location: z.object({
    address: z.string(),
    city: z.string(),
    state: z.string(),
  }),

  about: z.object({
    ownerName: z.string().optional(),
    companyDescription: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),

  clientsServiced: z.number().optional(),
  serviceLocations: z.array(z.string()).optional(),
  allowDirectCall: z.boolean().optional(),
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
      ownerName: "",
      socialLinks: {
        facebook: "",
        instagram: "",
        youtube: "",
      },
      location: {
        address: "",
        city: "",
        state: "",
      },
      about: {
        ownerName: "",
        companyDescription: "",
        images: [],
      },
      clientsServiced: 0,
      serviceLocations: [],
      allowDirectCall: false,
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
      youtube: values.socialLinks.youtube,
      clientServiced: values.clientsServiced,
      serviceLocations: values.serviceLocations,
      allowDirectCall: values.allowDirectCall,
      location: {
        address: values.location.address,
        city: values.location.city,
        state: values.location.state,
      },
    });
  }

  const grid3 = `grid grid-cols-3 gap-6`;
  const grid2 = `grid grid-cols-2 gap-6`;

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
            name="ownerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Owner Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Owner Name" {...field} />
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

          <FormField
            control={form.control}
            name="allowDirectCall"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel>Allow Direct Contact</FormLabel>
                  <FormDescription>
                    Allow you customers to directly contact you, otherwise they
                    will request callbacks
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
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

          <div className={`${grid3}`}>
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
              name="socialLinks.youtube"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Linkedin</FormLabel>
                  <FormControl>
                    <Input placeholder="Youtube" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-6 mt-12 text-gray-500">
              Business Location
            </h2>
            <div className={`${grid3}`}>
              <FormField
                control={form.control}
                name="location.address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location.city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location.state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-6 mt-12 text-gray-500">
              Other Details
            </h2>
            <div className={`${grid2}`}>
              <FormField
                control={form.control}
                name="clientsServiced"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Served</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Number of client served"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="clientsServiced"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Locations</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Select the regions you provide services in, for example Delhi, Mumbai, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-primary-500 text-white">
              Save Basic Information
            </Button>
          </div>
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
          form.setValue("socialLinks.youtube", "https://facebook.com");
          form.setValue("location.address", "address");
          form.setValue("location.city", "city");
          form.setValue("location.state", "state");
          form.setValue("clientsServiced", 0);
          form.setValue("serviceLocations", ["Delhi", "Mumbai"]);
          form.setValue("allowDirectCall", true);
        }}
      >
        AUTO
      </Button>
    </>
  );
}

export default BasicInformationForm;
