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
import { Button } from "@/components/ui/button";
import { PartyPopperIcon, StarIcon } from "lucide-react";

interface ServiceCardProps {
  name: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
  email: string;
  phoneNumber: string;
}

const ServiceCard = ({ service }: { service: any }) => {
  const { basicInformation } = JSON.parse(service);

  return (
    <div>
      <Card className="w-[340px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl ">
        <CardHeader className="relative">
          <Image
            className="w-full h-full mb-2 rounded-tr-xl rounded-tl-xl"
            src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715212800&semt=ais"
            alt="service_headers"
            width={800}
            height={160}
          />
          <span className="absolute top-4 left-4 bg-white/50 text-white text-xs font-bold px-3 py-1 rounded-full">
            Tag
          </span>
        </CardHeader>
        <CardContent className="px-4">
          <div className="flex items-center gap-2 mb-1 mt-2">
            <p className="font-semibold text-lg">Meragi Wedding Planner</p>
          </div>

          <p className="text-gray-500 text-base mb-2">
            Fulfill all your weddings needs with us. We provide all the services
          </p>

          <div className="flex items-center gap-8">
            <div className="flex gap-2 items-center">
              <StarIcon size={24} className="text-transparent" fill="#ced4da" />
              <p className="text-sm">4.3</p>
            </div>
            <div className="flex gap-1 items-center">
              <PartyPopperIcon
                size={28}
                className="text-transparent"
                fill="#ced4da"
              />
              <p className="text-sm">250+ guest served</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <div className="flex justify-between items-center w-full mt-6">
            {basicInformation.allowDirectCall ? (
              <ContactDialog email={""} phoneNumber={""} />
            ) : (
              <RequestCallbackDialog />
            )}

            <Button className="px-8 py-2 border-2 border-primary-400 text-primary-400  hover:text-white hover:bg-primary-400 text-sm">
              View Profile
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ServiceCard;
