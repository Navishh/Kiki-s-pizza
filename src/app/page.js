import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader subheader="our story" header="About us" />
        <div className="text-gray-500 max-w-screen-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
            Welcome to Kiki Pizza, your go-to destination for delicious and
            authentic pizza. We are a passionate team of pizza enthusiasts
            dedicated to serving you the best pizza experience. Our story began
            with a simple vision - to create mouthwatering pizzas using only the
            finest ingredients. From our handcrafted dough to our flavorful
            toppings, every bite is a taste of perfection. Whether you're
            craving a classic Margherita or a bold BBQ chicken pizza, we have a
            wide range of options to satisfy your cravings. Join us on this
            pizza journey and indulge in the ultimate pizza experience at Kiki
            Pizza.
          </p>
          <p>
            Welcome to Kiki Pizza, your go-to destination for delicious and
            authentic pizza. We are a passionate team of pizza enthusiasts
            dedicated to serving you the best pizza experience. Our story began
            with a simple vision - to create mouthwatering pizzas using only the
            finest ingredients. From our handcrafted dough to our flavorful
            toppings, every bite is a taste of perfection. Whether you're
            craving a classic Margherita or a bold BBQ chicken pizza, we have a
            wide range of options to satisfy your cravings. Join us on this
            pizza journey and indulge in the ultimate pizza experience at Kiki
            Pizza.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader subheader={"Don't hesitate"} header={"Contact us"} />
        <div className="mt-8">
          <a
            className="hover:text-[40px] transition-all text-gray-500 text-4xl mt-8"
            style={{ transitionDuration: "700ms" }}
            href="tel:+94743302201"
          >
            +94 743 302 201
          </a>
        </div>
      </section>
      <footer className=" border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 Kiki Pizza. All rights reserved.
        
      </footer>
    </>
  );
}
