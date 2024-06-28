import Image from 'next/image';
import MenuCard from '../homepagemenu/pizzacard/page';
import SectionHeader from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section className=" mt-10">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className=" -top-[120px]  absolute left-0 -z-10 text-left">
          <Image
            src={"/sallad1.png"}
            alt={"sallad"}
            width={150}
            height={195}
        
          />
        </div>
        <div className=" -top-[200px] h-full absolute right-0 -z-10 ">
          <Image
            src={"/sallad2.png"}
            alt={"sallad"}
           width={150}
           height={195}
          />
        </div>
      </div>
      <div className="text-center mb-4">
       <SectionHeader subheader="check out" header="Menu" />
      </div>
      <div className=" grid grid-cols-3 gap-6 ">
      <div className="col-span-3 h-0 invisible -z-10"></div>

       <MenuCard />
       <MenuCard />
       <MenuCard />
       <MenuCard />
       <MenuCard />
       <MenuCard />
      </div>
    </section>
  );
}
