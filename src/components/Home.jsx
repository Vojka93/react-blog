import useFetch from "../useFetch";
import BlogList from "./BlogList";

//npx json-server --watch data/db.json --port 8000

const Home = () => {
  const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {/* logical && or conditional templating */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
