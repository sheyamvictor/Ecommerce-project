
import React, { useEffect, useState } from 'react'
import Plists from '../Components/ProductLists/Plists';
import "./product.css"
import { useNavigate, } from 'react-router';
import { useSearchParams } from 'react-router-dom';

function Product() {

  const [products, setProducts] = useState([]);
 

  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const [searchParams] = useSearchParams()

  function searchName() {

    navigate('/search?keyword=' + keyword)

  }



  useEffect(() => {
    fetch('http://localhost:5001/api/v1/products?' + searchParams)
      .then(res => res.json())
      .then(res => setProducts(res.products))

  }, [searchParams])


  return (

    <div className='p-list'>
      <div className='plist-page'>
        {}

        <div className='product-section'>
          <form className="navbar-search">
            <input onChange={(e) => setKeyword(e.target.value)
            } onBlur={searchName} type="search" placeholder="search" />
            <i onClick={searchName} className="fa-solid fa-magnifying-glass"></i>
          </form>

          <div className="products">
            {products.map(product => <Plists product={product} />)}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Product