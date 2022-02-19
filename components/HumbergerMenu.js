const HumbergerMenu = ({ setMenu }) => {
  setMenu(true);
  return (
    <>
      <div
        className=" h-screen w-screen  absolute top-0 right-0 z-[900] backdrop-blur-sm"
        onClick={() => setMenu(false)}
      />
      <div className="h-screen w-64 bg-neutral-900 absolute top-0 left-0 overflow-x-scroll z-[1000] pt-16">
        <p className="hover:bg-[#1d1d1d] duration-300 px-4 py-3 cursor-pointer">
          Home
        </p>
        <p className="hover:bg-[#1d1d1d] duration-300 px-4 py-3 cursor-pointer">
          About Us
        </p>
        <p className="hover:bg-[#1d1d1d] duration-300 px-4 py-3 cursor-pointer">
          Services
        </p>
        <p className="hover:bg-[#1d1d1d] duration-300 px-4 py-3 cursor-pointer">
          Shop
        </p>
        <p className="hover:bg-[#1d1d1d] duration-300 px-4 py-3 cursor-pointer">
          Blog
        </p>
        <p className="hover:bg-[#1d1d1d] duration-300 px-4 py-3 cursor-pointer">
          Contacts
        </p>
      </div>
    </>
  );
};

export default HumbergerMenu;
