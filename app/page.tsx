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
import GSAPAnimations from "@/components/GSAPAnimations";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <CloneNavbar />
      <GSAPAnimations />
      <main>
        <CloneHero />

        {/* white */}
        <CloneAbout />
        <WaveDivider bgColor="#ffffff" fillColor="#FAFAF9" />

        {/* #FAFAF9 */}
        <CloneTrust />
        <WaveDivider bgColor="#FAFAF9" fillColor="#ffffff" />

        {/* white */}
        <CloneCTAButtons />
        <CloneClients />

        {/* white → #FBF8F2 */}
        <CloneServices />
        <WaveDivider bgColor="#ffffff" fillColor="#FBF8F2" />

        {/* #FBF8F2 */}
        <CloneGallery />
        <WaveDivider bgColor="#FBF8F2" fillColor="#ffffff" />

        {/* white */}
        <ClonePackages />
        <WaveDivider bgColor="#ffffff" fillColor="#FBF8F2" />

        {/* #FBF8F2 */}
        <CloneReviews />
        <WaveDivider bgColor="#FBF8F2" fillColor="#ffffff" />

        {/* white */}
        <CloneArticles />
        <WaveDivider bgColor="#ffffff" fillColor="#FAFAF9" />

        {/* #FAFAF9 */}
        <CloneSEOLinks />
      </main>
      <CloneFooter />
    </>
  );
}
