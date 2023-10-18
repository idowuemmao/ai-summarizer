import logo from "../assets/favicon.ico";
const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full gap-4 font-inter">
      <nav className="flex justify-between items-center w-full">
        {/* left */}
        <div className="flex items-center justify-center gap-2">
          <a href="/" className="w-8">
            <img src={logo} alt="logo" />
          </a>
          <h1 className="text-3xl font-bold">Sumz</h1>
        </div>
        {/* right */}
        <button className="bg-black text-white py-1 border-black border-2 rounded-full px-4 hover:bg-white hover:text-black">
          Github
        </button>
      </nav>
      <h1 className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mt-8 ">
        Summarize Articles with
      </h1>
      <h2 className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-orange-400 ">
        OpenAI GPT-4
      </h2>
      <p className="text-center">
        Simplify your reading with summarize an open-source article summarizer
        that transform lengthy articles into clear and concise summaries
      </p>
      <input
        type="url"
        className="bg-gray-100 w-full shadow-lg text-sm p-2 outline-none"
        placeholder="Paste the article link"
      />
    </header>
  );
};

export default Hero;
