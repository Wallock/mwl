import CloneNavbar from "@/components/CloneNavbar";
import CloneHero from "@/components/CloneHero";
import CloneCTAButtons from "@/components/CloneCTAButtons";
import CloneTrust from "@/components/CloneTrust";
import CloneAbout from "@/components/CloneAbout";
import CloneClients from "@/components/CloneClients";
import CloneServices from "@/components/CloneServices";
import CloneGallery from "@/components/CloneGallery";
import ClonePackages from "@/components/ClonePackages";
import CloneReviews from "@/components/CloneReviews";
import CloneArticles from "@/components/CloneArticles";
import CloneSEOLinks from "@/components/CloneSEOLinks";
import CloneFooter from "@/components/CloneFooter";

export default function Home() {
  return (
    <>
      <CloneNavbar />
      <main>
        <CloneHero />
        <CloneCTAButtons />
        <CloneTrust />
        <CloneAbout />
        <CloneClients />
        <CloneServices />
        <CloneGallery />
        <ClonePackages />
        <CloneReviews />
        <CloneArticles />
        <CloneSEOLinks />
      </main>
      <CloneFooter />
    </>
  );
}
