import BannerSection from "@/components/Banner";
import WorkTogether from "@/components/WorkTogether";
import ProjectManagement from "@/components/ProjectManagement";
import UseAsExtension from "@/components/UseAsExtension";
import CustamiseToYourNeeds from "@/components/CustomiseToYourNeeds";
import ChooseThePlan from "@/components/ChooseThePlan";
import YourWork from "@/components/YourWork";
import YourData from "@/components/YourData";
import Oursponsors from "@/components/OurSponsors";
import WorkWithYour from "@/components/WorkWithYour";
import ClientsSay from "@/components/ClientsSay";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      {/* TODO::Aligh all the sections */}
      <BannerSection />
      <ProjectManagement />
      <WorkTogether/>
      <UseAsExtension/>
      <CustamiseToYourNeeds/>
      <ChooseThePlan/>
      <YourWork/>
      <YourData/>
      <Oursponsors/>
      <WorkWithYour/>
      <ClientsSay/>
      <Footer/>
    </main>
  );
}
