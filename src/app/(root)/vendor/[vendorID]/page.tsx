"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const VendorPage = () => {
  const router = useRouter();

  return (
    <div className="w-full ">
      <section className="grid grid-cols-4 gap-8">
        <div className="col-span-3  py-12 px-8">
          <VendorContent />{" "}
        </div>
        <div className="col-span-1 py-12 px-8">
          <VendorServices />
        </div>
      </section>
    </div>
  );
};

const VendorContent = () => {
  return (
    <>
      <div>
        <VendorContentHeader />

        <Divider />

        <VendorContentNavigation />
      </div>
    </>
  );
};

const Divider = () => {
  return <div className="border-b-2 border-gray-100 my-4"></div>;
};

const VendorContentNavigation = () => {
  const [activeTab, setActiveTab] = useState("account");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Tabs defaultValue="details" className="">
        <TabsList className="flex gap-16 justify-start">
          <TabsTrigger className="bg-slate-300" value="details">
            Details
          </TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="past_work">Past Works</TabsTrigger>
          <TabsTrigger value="availablity">Availability</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <VendorDetails />
        </TabsContent>

        <TabsContent value="pricing">
          <VendorPricing />
        </TabsContent>

        <TabsContent value="past_work">
          <VendorPastWorks />
        </TabsContent>

        <TabsContent value="availablity">
          <div>Availablity</div>
        </TabsContent>
      </Tabs>
    </>
  );
};

const VendorContentHeader = () => {
  return (
    <div className="flex gap-6">
      <Image
        className=""
        src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715212800&semt=ais"
        alt="service_headers"
        width={400}
        height={400}
      />
      <div className="flex justify-between items-start w-full">
        <div>
          <div>
            <h1 className="text-3xl font-semibold mb-2">Raj Wedding Service</h1>
            <p className="h3-medium text-gray-500">
              Specializes in wedding catering, birthday catering, and corporate
            </p>
            <p>Rating</p>
          </div>

          <div className="my-2">
            <p>Loaction</p>
            <p>New Delhi, India</p>
          </div>
        </div>

        <div>
          <VendorContactDialog />
        </div>
      </div>
    </div>
  );
};

const VendorContactDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>Contact Vendor</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Contect Raj Catering Service</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const VendorDetails = () => {
  return (
    <div className="flex flex-col gap-12 mt-6">
      <VendorDetailItem heading="Services Offered" />
      <VendorDetailItem heading="Locations" />
      <VendorDetailItem heading="About the owner" />
    </div>
  );
};

const VendorDetailItem = ({ heading }: { heading: string }) => {
  return (
    <div>
      <div className="text-lg font-semibold mb-2">{heading}</div>
      <p className="text-base text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque earum
        voluptates, eligendi magnam delectus fugit! Natus eaque, modi minus quia
        officiis distinctio reiciendis repellendus nihil, dolorum mollitia eum a
        harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
        earum voluptates, eligendi magnam delectus fugit! Natus eaque, modi
        minus quia officiis distinctio reiciendis repellendus nihil, dolorum
        mollitia eum a harum.
      </p>
    </div>
  );
};

const VendorPricingTier = ({ heading }: { heading: string }) => {
  return (
    <div>
      <div className="text-lg font-semibold mb-2">{heading}</div>
      <p className="text-base text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque earum
        voluptates, eligendi magnam delectus fugit! Natus eaque, modi minus quia
        officiis distinctio reiciendis repellendus nihil, dolorum mollitia eum a
        harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
        earum voluptates, eligendi magnam delectus fugit! Natus eaque, modi
        minus quia officiis distinctio reiciendis repellendus nihil, dolorum
        mollitia eum a harum.
      </p>
    </div>
  );
};

const VendorPricing = () => {
  return (
    <div>
      <div className="flex flex-col gap-12 mt-6">
        <VendorPricingTier heading="Small Gathering" />
        <VendorPricingTier heading="Weddings and big events" />
        <VendorPricingTier heading="Custom Plans" />
      </div>
    </div>
  );
};

const VendorPastWorks = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <VendorPastWorksItem />
      <VendorPastWorksItem />
      <VendorPastWorksItem />
      <VendorPastWorksItem />
    </div>
  );
};

const VendorPastWorksItem = () => {
  return (
    <div>
      <Card className="rounded-md">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Image
              className=""
              src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715212800&semt=ais"
              alt="service_headers"
              width={250}
              height={250}
            />
            <div>
              <p className="text-base font-semibold">Wedding Ceremony</p>
              <p>Served 200 guest at the venue</p>
              <p>Location: Jaipur</p>
              <p>Host Contact: Available</p>
            </div>

            <div className="items-end justify-end">
              <p>More Info</p>
            </div>
          </div>
        </CardContent>
        {/* <CardFooter>
          <div>
            <p>More Info</p>
          </div>
        </CardFooter> */}
      </Card>
    </div>
  );
};

const VendorServices = () => {
  return (
    <>
      <div className="bg-gray-300 mb-4">
        <div className="text-2xl font-semibold">Services Offered</div>
      </div>
      <div className="flex flex-col gap-8">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </>
  );
};

const ServiceCard = () => {
  return (
    <>
      <div className="border-2 border-gray-200 rounded-xl cursor-pointer">
        <div className="flex gap-4">
          <Image
            className=""
            src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715212800&semt=ais"
            alt="service_headers"
            width={120}
            height={120}
          />
          <div>Service Name</div>
        </div>
      </div>
    </>
  );
};

export default VendorPage;
