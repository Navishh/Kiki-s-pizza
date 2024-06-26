import Image from "next/image";

export default function MenuCard() {
    return (
        <div className="bg-gray-300 px-8 py-8 rounded-lg group transition-all z-10 text-center hover:bg-white hover:border-2 hover:border-primary border-0">
            <div className="text-center">
                <Image
                    src={"/pizza.png"}
                    alt={"pizza"}
               
                    width={200}
                    height={200}
                    className="max-h-auto block mx-auto"
                />
            </div>
            <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsa.</p>
            <button className="mt-4 bg-primary text-white rounded-full px-6 py-2">Add to cart $12</button>
        </div>
    );
}
