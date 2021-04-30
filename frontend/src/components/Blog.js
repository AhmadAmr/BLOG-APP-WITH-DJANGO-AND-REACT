import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
const Blog = () => {

  const [blogs,setblogs]=useState([])
  const [feature,setfeature]=useState([])
  const [category,setCategory]=useState([])

   useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`)
        console.log(res.data)
        setfeature(res.data[0])
      }
      catch(err){
        alert(err)
      }
    }
    fetchData()
   },[])

   useEffect( () => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/categories`)
        console.log(res.data)
        setCategory(res.data)
      }
      catch(err){
        alert(err)
      }
    }
    fetchCategory()
   },[])


   

return (
    
       <div className='container mt-3'>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    {category.map(c => (
                        <Link  key={c.id} className="p-2 text-muted" to='/category/world'>{c.name}</Link>
                    ))}
                </nav>
            </div>

            <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">{feature.title}</h1>
                    <p className="lead my-3">{feature.excerpt}</p>
                    <p className="lead mb-0">
                        <Link to={`/blog/${feature.slug}`} className="text-white font-weight-bold">
                            Continue reading...
                        </Link>
                    </p>
                </div>
            </div>
    </div>
);


}; export default Blog;