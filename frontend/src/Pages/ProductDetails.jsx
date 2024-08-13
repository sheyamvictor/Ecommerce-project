import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import './ProductDetail.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


function ProductDetails() {

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1)
  const [loading, setLoading] = useState(true);


  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/product/' + id)
      .then(res => res.json())
      .then(res => {
        setProduct(res.product)
        setLoading(false)

      }
      )
  }, [setLoading])




  const navigate = useNavigate()

  useEffect(() => {
    const data = { token: localStorage.getItem('token') };


    let isMounted = true; // Flag to prevent state updates if the component is unmounted

    axios.post('http://localhost:5000/verify', data)
      .then((res) => {
        if (isMounted) {
          if (res.data.status === "success") {
            alert(res.data.status);
          } else {

          }
        }
      })
      .catch((err) => {
        if (isMounted) {
          navigate('/');
          // alert(err.message);
        }
      });

    // Cleanup function to set the flag to false on component unmount
    return () => {
      isMounted = false;
    };
  }, [navigate]);

  async function handleCart() {
    console.log(product);

    await axios.post('http://localhost:5000/api/v1/addCard', product).then((res) => {

      if (res.status === 200) {
        toast.success("Cart item added successfully....")

      }
    })



  }

  function increaseQty() {
    if (product.stock === qty) {
      return;
    }
    setQty((count) => count + 1)
  }

  function decreaseQty() {
    if (qty > 1) {

      return setQty((count) => count - 1)
    }

  }

  if (loading) {
    return <div className='bg-slate-200 flex justify-center text-center p-20'>Loading...</div>;
  }

  return (

    product &&

    <div className='detail'>
      <div className='detail-page'>
        <div className='detail-pic'>
          <img src={product.images[0].image} alt='pic' />
        </div>
        <hr className='stright-line' />


        <div className='detail-right'>
          <div className='detail-tag'>
            <h2>{product.name}</h2>
            <p><span className='desc'>Description:</span>{product.description}</p>
            <h3>Price: ₹ {product.price}</h3>
          </div>
          <div className='detail-fun'>
            <span onClick={decreaseQty}>-</span>
            <input type='number' value={qty} readOnly />
            <span onClick={increaseQty}>+</span>
          </div>
          <div className='detail-cart'>
            <Link to={'/cart'} > <button onClick={handleCart} disabled={product.stock === 0}>Add to cart</button></Link>
          </div>
          <div className='stock'>
            <h4>Status:<span style={{ color: product.stock > 0 ? 'green' : 'red' }} >{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></h4>
          </div>
          <div className='detail-tag1'>
            <h3>Category:{product.category}</h3>
            <p>Seller:<span> {product.seller} </span> </p>
          </div>
        </div>
      </div>
    </div>

  )

}




export default ProductDetails

