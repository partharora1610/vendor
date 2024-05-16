"use client";
import React from "react";
import BasicInformationForm from "./create/BasicInformation";
import PastWorkForm from "./create/PastWork";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import createFormStore from "@/zustand/create-form";
import ServicesOffered from "./create/ServicesOffered";
import { Button } from "@/components/ui/button";
import { createVendorProfile } from "@/lib/actions/profile.action";

const CreateVendor = () => {
  const { basicInformation, pastWork, servicesOffered } = createFormStore();

  const submitCreateForm = async () => {
    const profile = await createVendorProfile({
      basicInformation,
      pastWork,
      servicesOffered,
    });
  };

  const allowSubmit =
    pastWork.length > 0 &&
    servicesOffered.length > 0 &&
    basicInformation.name !== "" &&
    basicInformation.email !== "" &&
    basicInformation.phoneNumber !== "";

  return (
    <div className="grid grid-cols-7 gap-6">
      <div className="col-span-5">
        <div className="mb-8 text-gray-500">
          *** Take time to fill the form properly, since this will get you get
          customers.
          <span className="ml-4 underline cursor-pointer">How this works?</span>
          <p>{JSON.stringify(basicInformation)}</p>
          <p>{JSON.stringify(pastWork)}</p>
          <p>{JSON.stringify(servicesOffered)}</p>
        </div>

        <div className="flex justify-end  mb-6 p-2 rounded-md">
          <Button
            onClick={submitCreateForm}
            disabled={!allowSubmit}
            className={`bg-primary-500 text-white text-lg px-8 py-6`}
          >
            Submit
          </Button>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-6 ">
          <AccordionItem
            value="basic_form"
            className="border-2 px-6 rounded-md"
          >
            <AccordionTrigger className="text-xl font-semibold">
              Basic Information
            </AccordionTrigger>
            <AccordionContent>
              <BasicInformationForm />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="past_work" className="border-2 px-6 rounded-md">
            <AccordionTrigger className="text-xl font-semibold">
              Past Work
            </AccordionTrigger>
            <AccordionContent>
              <PastWorkForm />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="services" className="border-2 px-6 rounded-md">
            <AccordionTrigger className="text-xl font-semibold">
              Services Provided
            </AccordionTrigger>
            <AccordionContent>
              <ServicesOffered />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/*  */}
      <div className="col-span-2 px-6 py-6">
        <h2 className="text-xl font-semibold text-center">
          Overview of the form
        </h2>
      </div>
    </div>
  );
};

export default CreateVendor;
