import TheAbout from "@/components/TheAbout";
import TheHomeHeader from "@/components/TheHomeHeader";
import TheSecondaryNavigation from "@/components/TheSecondaryNavigation";
import TheShowcase from "@/components/TheShowcase";

export default function Home() {
  return (
    <>
      <TheHomeHeader />
      <main>
        <TheSecondaryNavigation />
        <TheShowcase />
        <TheAbout />
      </main>
    </>
  );
}
