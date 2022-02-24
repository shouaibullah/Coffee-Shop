const HumbergerMenu = ({ setMenu }) => {
  setMenu(true);
  return (
    <>
      <div
        className=" h-screen w-screen  absolute top-0 right-0 z-[900] backdrop-blur-sm"
        onClick={() => setMenu(false)}
      />
      <div className="h-screen w-64 bg-neutral-900 absolute top-0 left-0 overflow-x-scroll z-[1000] pt-16">
        <p className="humberger-menu-item">Home</p>
        <p className="humberger-menu-item">About Us</p>
        <p className="humberger-menu-item">Services</p>
        <p className="humberger-menu-item">Shop</p>
        <p className="humberger-menu-item">Blog</p>
        <p className="humberger-menu-item">Contacts</p>
      </div>
    </>
  );
};

export default HumbergerMenu;
