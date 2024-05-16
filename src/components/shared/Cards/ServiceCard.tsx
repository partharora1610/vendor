"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import RequestCallbackDialog from "@/components/dialog/RequestCallbackDialog";
import ContactDialog from "@/components/dialog/ContactDialog";

const ServiceCard = () => {
  return (
    <Card className="w-[300px] box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; 0px 5px 15px; rounded-xl">
      <CardHeader>
        <Image
          className="w-full h-full mb-2 rounded-tr-xl rounded-tl-xl"
          src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715212800&semt=ais"
          alt="service_headers"
          width={800}
          height={160}
        />
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-[24px] h-[24px] bg-gray-500 rounded-full flex items-center justify-center mb-1">
            A
          </div>
          <p className="font-semibold text-md ">Raj Catering Service</p>
        </div>
        <p className="text-gray-600 text-base mb-2">
          Specializing in North Indian and Chinese Cuisine
        </p>

        <div className="flex gap-4 items-center justify-between">
          <p className="text-sm">1200 / person (Approx Charge)</p>
          <p>stars</p>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <div className="flex justify-between items-center w-full">
          {/* <Button
            variant="outline"
            className="border-2 border-[#2c4c41] text-[#2c4c41] "
          >
            Contact Details
          </Button> */}

          <RequestCallbackDialog />
          <ContactDialog email={""} phoneNumber={""} />
          {/* <Button className="p-4 bg-[#2c4c41]">Full Profile</Button> */}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
