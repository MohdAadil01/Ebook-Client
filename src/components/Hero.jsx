const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl py-10  px-5">
      <div className="relative">
        <img
          src={
            "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="billboard"
          className="h-72 w-full rounded-lg"
          height={0}
          width={0}
          sizes="100vw"
        />
        <div className="absolute inset-0 h-full w-full rounded-lg bg-gray-950 opacity-30" />
        <img
          src={"../../public/assets/images/book.png"}
          alt="billboard"
          className="absolute bottom-0 -right-10 lg:right-10"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "18rem" }}
        />
        <h3 className="absolute left-3 lg:left-20 w-auto top-1/2 max-w-3xl -translate-y-1/2 text-[2.5rem] leading-none font-semibold tracking-tight text-white">
          Connect, Share and Trade Your Favourite Reads...
        </h3>
      </div>
    </div>
  );
};

export default Hero;
