"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

import createFormStore from "@/zustand/create-form";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PastWorkForm = () => {
  const { basicInformation, pastWork, servicesOffered, addPastWork } =
    createFormStore();

  if (pastWork.length === 0) {
    return (
      <div className="">
        <AddWorkDailog addPastWork={addPastWork} />

        <p className="mt-2 text-gray-500">
          Adding past work will help you get more customers.You can add upto 10
          past works.
        </p>
      </div>
    );
  }

  // Need to fix the types
  return (
    <div>
      <div className="my-4">
        <AddWorkDailog addPastWork={addPastWork} />
      </div>

      <div className="flex flex-col gap-8">
        {pastWork.map((work: any, index) => {
          return (
            <div key={index} className="border p-4 rounded-md">
              <h3 className="text-lg font-semibold">{work.eventName}</h3>
              <p>{work?.eventDescription}</p>
              <p>{work.eventDate}</p>
              <p>{work?.eventLocation}</p>
              <p>{work.guestCount}</p>
              <p>{work.hostName}</p>
              <p>{work?.hostContact}</p>
              <div>
                {work.images.map((image: any, index: any) => {
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
  eventName: z.string(),
  eventDate: z.string(),
  eventLocation: z.string(),
  eventDescription: z.string(),
  guestCount: z.number(),
  hostName: z.string(),
  hostContact: z.string(),
  images: z.array(z.string()),
});

function AddPastWorkForm({ add }: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
      eventDate: "",
      eventLocation: "",
      eventDescription: "",
      guestCount: 0,
      hostName: "",
      hostContact: "",
      images: [],
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
            name="eventName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter eventName" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* complete the form */}
          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter eventLocation" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Description</FormLabel>
                <FormControl>
                  <Input placeholder="Enter eventDescription" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guestCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Guest Count</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hostName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Host Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter hostName" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hostContact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Host Contact</FormLabel>
                <FormControl>
                  <Input placeholder="Enter hostContact" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <Input placeholder="Enter images" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="bg-primary-500 text-white">
            Add Event
          </Button>
        </form>
      </Form>

      <Button
        className="bg-primary-500 text-white"
        onClick={() => {
          form.setValue("eventName", "Wedding");
          form.setValue("eventDate", "2022-12-31");
          form.setValue("eventLocation", "Lagos");
          form.setValue("eventDescription", "Wedding");
          form.setValue("guestCount", 100);
          form.setValue("hostName", "John Doe");
          form.setValue("hostContact", "08012345678");
          form.setValue("images", ["https://via.placeholder.com/150"]);
        }}
      >
        AUTO
      </Button>
    </div>
  );
}

const AddWorkDailog = ({ addPastWork }: any) => {
  return (
    <Dialog>
      <DialogTrigger className="">
        <p className="text-base text-primary-500 font-bold hover:underline">
          Add Past Work
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Event Details</DialogTitle>
          <DialogDescription>
            <AddPastWorkForm add={addPastWork} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PastWorkForm;
