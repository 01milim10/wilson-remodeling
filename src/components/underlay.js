import backdrop from "../assets/Remodel-VS-Relocate-MAIN-1.webp";

export default function Underlay() {
  return (
    <>
      <div id="underlay" className="h-screen fixed top-0 opacity-50 -z-10">
        <img src={backdrop} className="h-screen w-screen object-cover" />
      </div>
    </>
  );
}
