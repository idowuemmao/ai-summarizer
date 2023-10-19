import { useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
import { AiOutlineEnter } from "react-icons/ai";
const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  async function handleSubmit(e) {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      setArticle(newArticle);
      console.log(newArticle);
    }
  }
  return (
    <section>
      <div>
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="relative flex justify-center items-center mt-4"
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 w-5 ml-3 my-2"
          />
          <input
            type="url"
            value={article.url}
            onChange={(e) => {
              setArticle({
                ...article,
                url: e.target.value,
              });
            }}
            required
            className="peer bg-gray-100 w-full shadow-lg text-sm p-2 pl-10 outline-black"
            placeholder="Paste the article link"
          />
          <button
            type="submit"
            className="absolute right-2 p-1 peer-focus:border-gray-700 peer-focus:border-2 peer-focus:text-gray-700"
          >
            <AiOutlineEnter />
          </button>
        </form>
        {/* Browser URL History */}
      </div>
    </section>
  );
};

export default Demo;
