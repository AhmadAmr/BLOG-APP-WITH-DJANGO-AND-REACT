import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/categories`
        );
        console.log(res.data);
        setCategory(res.data);
      } catch (err) {
        alert(err);
      }
    };
    fetchCategory();
  }, []);

  const getCategory = () => {
    let list = [];
    let result = [];
    category.map((c) => {
      return list.push(
        <div>
          <ul className="list-unstyled mb-0">
            <li>
              <Link key={c.id} className="p-2 text-muted" to="/category/world">
                {c.name}
              </Link>
            </li>
          </ul>
        </div>
      );
    });
    for (let i =0 ;i<list.length ;i+=2)
    {
       result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      )
    }
    return result;
  };

  return (
    <div className="card my-4">
      <h5 className="card-header">Categories</h5>
      <div className="card-body">
        
         {getCategory()}
        </div>
      </div>
    
  );
};
export default Category;
