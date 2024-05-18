import ServiceCard from "@/components/shared/Cards/ServiceCard";
import ServiceFilter from "@/components/shared/Filter/ServiceFilter";
import HeroTitle from "@/components/shared/HeroTitle";
import { Input } from "@/components/ui/input";
import { getAllVendors } from "@/lib/actions/profile.action";
import { getServerSession } from "next-auth";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Home() {
  const data = await getAllVendors();
  const session = await getServerSession();
  console.log("Session: ", session);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <p>{JSON.stringify(session)}</p>
        <main className="px-12">
          <div className="mb-20">
            <div className="mb-10">
              <HeroTitle />
              <p className="text-center text-2xl text-gray-500">
                Browse through 2500+ verifies vendors to plan your special day
                and make it memorable.
              </p>
            </div>
            <div className="">
              <Input
                className="w-[1000px] m-auto rounded-full px-8 py-8 text-xl border-2 border-gray-300 dark:border-gray-800"
                placeholder="Search for different services and vendors...."
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Popular Categories
            </h2>
            <p></p>

            <div className="">
              <CarouselComponent />
            </div>
          </div>

          <div className="mb-6">
            <ServiceFilter />
          </div>
          <div className="flex flex-wrap flex-1 gap-16">
            {data.map((service: any) => {
              return <ServiceCard service={JSON.stringify(service)} />;
            })}
          </div>
        </main>
      </div>
    </>
  );
}

const CategoryCard = () => {
  return <div className="w-[170px] h-[170px] bg-pink-200 rounded-lg"></div>;
};

const CarouselComponent = () => {
  return (
    <Carousel className="">
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <CarouselItem className="basis-1/6  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <CategoryCard />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
