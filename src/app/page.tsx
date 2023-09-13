import Navbar from "./components/Navbar/Navbar";
import InfoCard from "./components/InfoCard/InfoCard";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-full flex justify-center items-center py-8">
        <div className="flex gap-4">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </main>
  );
}
