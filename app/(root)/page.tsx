import SearchForm from "@/components/SearchForm";
import { Boxes } from "@/components/ui/background-boxes";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="h-[730px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1 className="heading relative">Tailwind is Awesome</h1>
        <p className="sub-heading !max-w-3xl relative">
          Framer motion is the best animation library ngl
        </p>
        <SearchForm />
      </div>
    </>
  );
};

export default Page;
