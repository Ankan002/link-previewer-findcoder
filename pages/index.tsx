import type { NextPage } from 'next';
import {CustomHead, Header, HeroSection, ThemeToggler} from "components";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-primaryLight dark:bg-primaryDark relative transition-all ease-in-out">
      <CustomHead title="Link Previews" />

      {/*<Header title="Link 🔗 Previews" />*/}

      <main className="flex-grow w-full flex flex-col w-full">
          <HeroSection />
      </main>

      <ThemeToggler />
    </div>
  );
};

export default Home;
