import React from "react";
import SearchForm from "@/components/SearchForm";
import { ThreeDCardDemo } from "@/components/ThreeDCard";
import { Boxes } from "@/components/ui/background-boxes";
import { auth } from "@/auth";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/queries";

export default async function Home({searchParams} : {
  searchParams : Promise<{query? : string}>
}) {
  const query = (await searchParams).query;
  
  const params = {search : query || null}
  const session = await auth();
  // console.log(session?.id);

  const {data : posts} = await sanityFetch({query : PROJECT_QUERY, params})


const Page = () => {
  return (
    <>
      <div className="h-[530px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1 className="heading relative">Welcome To ProjectHub</h1>
        <p className="sub-heading !max-w-3xl relative">
          Where project meet like-minded people.
        </p>
        <SearchForm />
      </div>

      <section className="section_container">
        <p className="text-30-semibold">{"Trendy Projects"}</p>
        <ul className="mt-7 card_grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-1 justify-center">
          {[
            { id: 123, title: "A NEW PROJECT", desc: "A GREATE DESCRIPTION" },
            { id: 124, title: "A NEW PROJECT", desc: "A GREATE DESCRIPTION" },
            { id: 125, title: "A NEW PROJECT", desc: "A GREATE DESCRIPTION" },
            { id: 126, title: "A NEW PROJECT", desc: "A GREATE DESCRIPTION" },
            { id: 127, title: "A NEW PROJECT", desc: "A GREATE DESCRIPTION" },
          ].map((item, i) => (
            <ThreeDCardDemo key={item.id} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Page;
