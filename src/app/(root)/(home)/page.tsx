import ServiceCard from "@/components/shared/Cards/ServiceCard";
import ServiceFilter from "@/components/shared/Filter/ServiceFilter";
import { getAllVendors } from "@/lib/actions/profile.action";

export default async function Home() {
  const data = await getAllVendors();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <main className="px-12">
          <div className="mb-6">
            <ServiceFilter />
          </div>
          <div className="flex flex-wrap flex-1 gap-16">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />

            {data.map((service: any) => {
              return <ServiceCard />;
            })}
          </div>
        </main>
      </div>
    </>
  );
}
