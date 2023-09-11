import TheAbout from "@/components/TheAbout";
import TheCategoryHeader from "@/components/TheCategoryHeader";
import TheProductList from "@/components/TheProductList";
import TheSecondaryNavigation from "@/components/TheSecondaryNavigation";

export default function Home() {
  return (
    <>
      <TheCategoryHeader />
      <main>
        <TheProductList />
        <TheSecondaryNavigation />
        <TheAbout />
      </main>
    </>
  );
}
