import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getVendorProfile } from "@/lib/actions/profile.action";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session?.user) {
    redirect("/auth");
  }

  const profile = await getVendorProfile({ email: session.user.email });
  console.log(profile);

  if (!profile) {
    redirect("/onboarding");
  }

  return (
    <div>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default AdminPage;
