import logo from "../assets/logo.svg";
const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full gap-4 font-inter">
      <nav className="flex justify-between items-center w-full">
        {/* left */}
        <a href="/" className="w-32 ">
          <img src={logo} alt="sumz_logo" className="object-contain" />
        </a>
        {/* right */}
        <button
          onClick={() => window.open("https://github.com/idowuemmao")}
          className="bg-black text-white py-1 border-black border-2 rounded-full px-4 hover:bg-white hover:text-black"
        >
          Github
        </button>
      </nav>
      <h1 className="text-center text-3xl sm:text-5xl font-extrabold mt-8 ">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="text-orange-400 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500  bg-clip-text text-transparent">
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className=""></h2>
      <p className="text-center">
        Simplify your reading with summarize an open-source article summarizer
        that transform lengthy articles into clear and concise summaries
      </p>
    </header>
  );
};

export default Hero;
