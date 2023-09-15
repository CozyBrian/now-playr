import AlbumView from "@/components/albumView";
import Header from "@/components/header";
import ParticlesView from "@/particles";

export default function Home() {
  // const colorss = ["#912E17", "#3d832cb0", "#1C3ECC", "#6fecfabc"];
  return (
    <>
      <ParticlesView />
      <main className="relative flex items-center justify-center h-screen backdrop-blur-[128px]">
        <Header />
        <AlbumView />
      </main>
    </>
  );
}
