import TheAbout from "@/components/TheAbout";
import TheHeader from "@/components/TheHeader";
import TheProductCard from "@/components/TheProductCard";
import TheProductDetail from "@/components/TheProductDetail";
import TheProductGallery from "@/components/TheProductGallery";
import TheProductRecommendation from "@/components/TheProductRecommendation";
import TheSecondaryNavigation from "@/components/TheSecondaryNavigation";

export default function Home() {
  return (
    <>
      <TheHeader />
      <main>
        <TheProductCard />
        <TheProductDetail />
        <TheProductGallery />
        <TheProductRecommendation />
        <TheSecondaryNavigation />
        <TheAbout />
      </main>
    </>
  );
}
