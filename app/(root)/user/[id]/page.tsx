import { ThreeDCardDemo } from "@/components/ThreeDCard";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <>
      <section className="profile_container">
        <div className="border border-black/[0.2] dark:border-white/[0.2] items-center flex flex-col max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard
            text="hover"
            imageUrl="https://yt3.googleusercontent.com/ytc/AIdro_kuIV4rTALmWIPJoQw-rDIfsP6dorXFxwrgqRYN9Ld5Eg=s900-c-k-c0x00ffffff-no-rj"
          />

          <h2 className="dark:text-white text-black mt-4 text-lg font-bold text-center">
            Name Lastname
          </h2>
          <p className="text-sm border font-semibold pb-11 line-clamp-2 text-center dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae saepe
            atque accusantium illo? Ea, inventore in eum ullam sapiente
            consequuntur dolor pariatur, quibusdam eaque voluptate deleniti
            totam explicabo excepturi magnam qui ab ad? Reprehenderit cupiditate
            in dignissimos? Tenetur voluptas dignissimos sint nobis totam omnis,
            deserunt, corporis fuga obcaecati, iure nostrum.
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-5 lg:mt-5">
          <p className="text-30-bold">All Projects</p>
          <ul className="mt-7 card_grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 justify-center">
            {[
              { id: 123, title: "A NEW PROJECT", desc: "A GREATE DESCRIPTION" },
              { id: 124, title: "A NEW PROJECT", desc: "A GREATE DESCRIPTION" },
              { id: 125, title: "A NEW PROJECT", desc: "A GREATE DESCRIPTION" },
              { id: 126, title: "A NEW PROJECT", desc: "A GREATE DESCRIPTION" },
              { id: 127, title: "A NEW PROJECT", desc: "A GREATE DESCRIPTION" },
            ].map((item) => (
              <ThreeDCardDemo key={item.id} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Page;
