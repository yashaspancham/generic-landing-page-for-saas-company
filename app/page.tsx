import BannerSection from "@/components/Banner";
import WorkTogether from "@/components/Banner/WorkTogether";
import ProjectManagement from "@/components/ProjectManagement";
import UseAsExtension from "@/components/UseAsExtension";
import CustamiseToYourNeeds from "@/components/CustomiseToYourNeeds";

export default function Home() {
  return (
    <main className="">
      {/* TODO::Aligh all the sections */}
      <BannerSection />
      <ProjectManagement />
      <WorkTogether/>
      <UseAsExtension/>
      <CustamiseToYourNeeds/>
    </main>
  );
}
