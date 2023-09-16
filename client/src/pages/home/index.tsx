import AlbumView from "@/components/albumView";
import Header from "@/components/header";
import ParticlesView from "@/particles";

export default function Home() {
  return (
    <main className="bg-zinc-900">
      <ParticlesView />
      <div className="relative flex items-center justify-center h-screen backdrop-blur-[128px]">
        <Header />
        <AlbumView />
      </div>
    </main>
  );
}
