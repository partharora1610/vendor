import ServiceCard from "@/components/shared/Cards/ServiceCard";
import ServiceFilter from "@/components/shared/Filter/ServiceFilter";
import HeroTitle from "@/components/shared/HeroTitle";
import { Input } from "@/components/ui/input";
import { getAllVendors } from "@/lib/actions/profile.action";
import { getServerSession } from "next-auth";

export default async function Home() {
  const data = await getAllVendors();
  const session = await getServerSession();

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
