import { Boxes } from "@/components/ui/background-boxes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <p className="tag relative">28 December 2024</p>
        <h1 className="heading relative">
          This is a greate masterpiece project.
        </h1>
        <p className="sub-heading !max-w-5xl relative line-clamp-3">
          This is a nice project description.
        </p>
      </div>

      <section className="section_container">
        <img
          src="https://www.ossia.com/hubfs/rccar-min.png"
          alt=""
          className="w-full h-auto rounded-xl "
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link href={"/"} className="flex gap-2 items-center mb-3">
              <Image
                src={
                  "https://yt3.googleusercontent.com/ytc/AIdro_kuIV4rTALmWIPJoQw-rDIfsP6dorXFxwrgqRYN9Ld5Eg=s900-c-k-c0x00ffffff-no-rj"
                }
                alt=""
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
              <div>
                <p className="text-20-medium">AUTHOR NAME</p>
                <p className="text-16-medium !text-black-300">@USERNAME</p>
              </div>
            </Link>

            <p className="category-tag">Electronics</p>
          </div>
          <h3 className="text-30-bold">PROJECT DETAILS</h3>
          <p className="no-result">No Details Provided</p>
        </div>
        <hr  className="divider"/>
      </section>
    </>
  );
};

export default Page;
