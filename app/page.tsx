import BannerSection from "@/components/Banner";
import WorkTogether from "@/components/Banner/WorkTogether";
import ProjectManagement from "@/components/ProjectManagement";

export default function Home() {
  return (
    <main className="">
      <BannerSection />
      <ProjectManagement />
      <WorkTogether/>
    </main>
  );
}
