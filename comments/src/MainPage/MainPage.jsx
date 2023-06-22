import React, { useEffect, useState } from "react";
import './Mainpage.css';
import Posts from "../Posts/Posts";

const MainPage = () => {
    const [data , setData] = useState();
    useEffect(() => {
    async function fetchData() {
      const responsePosts = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data2 = await responsePosts.json()
      setData(data2)
    }
    fetchData();
    }, []);

    

  return <div className="MainClass">
    {data && data.map((post) => {
        return (
          <div key={post.id}>
            <Posts
            post={post}
            />
            </div>
        )
    })}
  </div>;
};

export default  MainPage;