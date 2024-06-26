import Image from "next/image";
import RightArrow from "../icons/rightarrow";

export default function Hero() {
  return (
    <section className="hero my-4"> 
      <div className="py-8">
        <h1 className=" leading-tight text-[45px] font-semibold">
          Nothing <br/> feels better than <br/> a wood fried <span className=" text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-md leading-6">
          Pizza is the missing piece of love.Pizza is the missing piece of
          love.Pizza is the missing piece of love.Pizza is the missing piece of
          love.Pizza is the missing piece of love.Pizza is the missing piece of
          love.osinshvnvihsnvsinsfisnisnfsifnsfnscj ijs isifnsjnsc ois soc scsosnfsocnsojs sodnsofns
        </p>
        <div className="flex gap-6 mt-8 text-sm">
          <button className="  items-center uppercase  gap-2 flex px-4 py-2 bg-primary text-white rounded-full">
            Order Now <RightArrow />
          </button>
          <button className=" flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more <RightArrow />
          </button>
        </div>
      </div>
      <div className="relative mx-auto">
        <Image
          src={"/pizza.png"}
          alt={"pizza"}
          objectFit={"contain"}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
