import Header from "./components/common/header";
import HomeHero from "./components/homepage/homeHero";
import OneApp from "./components/homepage/oneApp";
import SendReceive from "./components/homepage/sendReceive";

export default function Home() {
  return (
    <main>
     <Header />
     <HomeHero />
     <OneApp />
     <SendReceive />
    </main>
  );
}
