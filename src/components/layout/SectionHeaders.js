export default function SectionHeader({ subheader, header }) {
  return (
    <>
      <h3 className="uppercase text-gray-500 font-semibold leading-4 text-md">
        {subheader}{" "}
      </h3>
      <h2 className="text-primary font-bold text-4xl">{header}</h2>
    </>
  );
}
