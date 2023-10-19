import { useEffect, useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
import { AiOutlineEnter } from "react-icons/ai";
const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  //to store all article
  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  //to store our articles in local storage, the dependency is empty because we want to execute it at the start of our application
  useEffect(() => {
    const articleFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    //to check if we have any articles from local Storage
    if (articleFromLocalStorage) {
      setAllArticles(articleFromLocalStorage);
    }
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      //we are pushing the new article to the array
      const updatedAllArticle = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticle);

      //to update the articles to the local storage, it's stringified because localstorage can contain only string
      localStorage.setItem("article", JSON.stringify(updatedAllArticle));
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
        <div className="flex flex-col gap-2 max-h-52">
          {allArticles.map((item, index) => (
            <div
              key={`link=${index}`}
              onClick={() => setArticle(item)}
              className="border-4"
            >
              <div>
                <img
                  src={copy}
                  alt="copy_tag"
                  className="w-2/5 h-2/5 object-contain"
                />
              </div>
              <p className="flex-1 text-blue-700 truncate"> {item.url}</p>
            </div>
          ))}
        </div>
        {/* Display results */}
        <div className="my-10 flex justify-center max-w-full items-center">
          {isFetching ? (
            <img
              src={loader}
              alt="loader"
              className="w-20 h-20 object-contain"
            />
          ) : error ? (
            <p className="font-bold text-black text-centers">
              Well, that wasn't supposed to happen...
              <br /> <span>{error?.data?.error}</span>
            </p>
          ) : (
            article.summary && (
              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-gray-600 text-xl">
                  Article <span className="text-blue-500">Summary</span>
                </h2>
                <div className="border-2">
                  <p>{article.summary}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Demo;
