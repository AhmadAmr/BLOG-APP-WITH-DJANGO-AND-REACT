import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [feature, setfeature] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/featured`
        );
        console.log(res.data);
        setfeature(res.data[0]);
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, []);

 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/`
        );
        console.log(res.data);
        setBlogs(res.data);
      } catch (err) {
        alert(err);
      }
    };

    fetchBlogs();
  }, []);

  const getBlogs = () => {
    let list = [];
    let result = [];

    blogs.map((blogs) => {
      return list.push(
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">
              {blogs.category.name}
            </strong>
            <h3 className="mb-0">{blogs.title}</h3>
            <div className="mb-1 text-muted">
              {blogs.month} {blogs.day}
            </div>
            <p className="card-text mb-auto">{blogs.excerpt}</p>
            <Link to={`/blog/${blogs.slug}`} className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              width="200"
              height="250"
              src={blogs.thumbnail}
              alt="thumbnail"
            />
          </div>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }

    return result;
  };

  return (
    <div className=" mt-3">
      
      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">{feature.title}</h1>
          <p className="lead my-3">{feature.excerpt}</p>
          <p className="lead mb-0">
            <Link
              to={`/blog/${feature.slug}`}
              className="text-white font-weight-bold"
            >
              Continue reading...
            </Link>
          </p>
        </div>
      </div>

      {getBlogs()}
    </div>
  );
};
export default Blog;
