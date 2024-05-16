import React from "react";
import createFormStore from "@/zustand/create-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
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
const SERVIVES = [
  {
    id: 1,
    name: "Photography",
    description: "Photography description",
  },
  {
    id: 2,
    name: "Videography",
    description: "Videography description",
  },
  {
    id: 3,
    name: "Catering",
    description: "Catering description",
  },
  {
    id: 4,
    name: "Decoration",
    description: "Decoration description",
  },
  {
    id: 5,
    name: "MC",
    description: "MC description",
  },
  {
    id: 6,
    name: "DJ",
    description: "DJ description",
  },
  {
    id: 7,
    name: "Music Band",
    description: "Music Band description",
  },
  {
    id: 9,
    name: "Destination Wedding",
    description: "Destination Wedding description",
  },
  {
    id: 10,
    name: "Birthday",
    description: "Birthday description",
  },
  {
    id: 11,
    name: "Anniversary",
    description: "Anniversary description",
  },
  {
    id: 12,
    name: "Corporate",
    description: "Corporate description",
  },
  {
    id: 13,
    name: "Wedding Planning",
    description: "We handle all",
    flag: true,
  },
  {
    id: 14,
    name: "Venue Booking",
    description: "Venue Booking description",
  },
];

const ServicesOffered = () => {
  const { updateServicesOffered, servicesOffered } = createFormStore();

  if (servicesOffered.length === 0) {
    return (
      <div className="">
        <ServiceDailog addServiceWork={updateServicesOffered} />
      </div>
    );
  }

  return (
    <div className="">
      <div className="my-4">
        <ServiceDailog addServiceWork={updateServicesOffered} />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {servicesOffered.map((service: any, index: number) => {
          return (
            <div key={index} className="border p-4 rounded-md">
              <h3 className="text-lg font-semibold">{service.serviceType}</h3>
              <p>{service?.serviceDescription}</p>
              <p>{service.approxPricing}</p>
              <div>
                {service.serviceImages.map((image: any, index: any) => {
                  return (
                    <img
                      key={index}
                      src={image}
                      alt="event"
                      className="w-32 h-32"
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const formSchema = z.object({
  serviceType: z.string(),
  serviceDescription: z.string(),
  serviceImages: z.array(z.string()),
  approxPricing: z.string(),
});

const ServiceDailog = ({ addServiceWork }: any) => {
  return (
    <Dialog>
      <DialogTrigger className="">
        <p className="text-base text-primary-500 font-bold hover:underline">
          Add Services
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Event Details</DialogTitle>
          <DialogDescription>
            <AddServiceForm add={addServiceWork} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

function AddServiceForm({ add }: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: "",
      serviceDescription: "",
      serviceImages: [],
      approxPricing: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    add(data);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Service</FormLabel>
                <FormControl>
                  <Input placeholder="Select Service" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Description</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Service Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceImages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Images</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Service Images" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="approxPricing"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Approx Pricing</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Approx Pricing" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="bg-primary-500 text-white">
            Add Service
          </Button>
        </form>
      </Form>
    </div>
  );
}

const ServiceCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className="p-2 px-4 rounded-md border-2 border-gray-300 text-gray-600 cursor-pointer">
      {name}
    </div>
  );
};

export default ServicesOffered;
