import React, { useEffect, useState } from 'react';
import './Cart.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useCart } from "../Context/Context";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { setCartItemCount } = useCart();

  useEffect(() => {
    axios.get("http://localhost:5001/api/v1/addCard").then(res => {
      if (res.status === 200) {
        setCartProducts(res.data.data);
        setCartItemCount(Count => Count + 1);

        console.log(res.data.data);
        setLoading(false);
      }
    }).catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  }, [setCartItemCount, setLoading]);

  let totalAmount = 0;
  for (let item of cartProducts) {
    totalAmount += Number(item.price);
  }


  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5001/api/v1/addCard/${id}`);
      if (response.status === 200) {
        toast.error("Deleted successfully.....");
        setCartProducts(cartProducts.filter(item => item._id !== id));
        setCartItemCount(prevCount => prevCount - 1);
      } else {
        console.error('Failed to delete the item.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loading) {
    return <div className='bg-slate-200 flex justify-center text-center p-20'>Loading...</div>;
  }

  return (
    <div className='container p-20 px-10 w-full mx-auto'>
      <h1 className='p-5 text-2xl font-bold'>Cart Items</h1>
      <table className="border-collapse border border-slate-500 w-full">
        <thead>
          <tr>
            <th className="border border-slate-600">S.No</th>
            <th className="border border-slate-600">Pic</th>
            <th className="border border-slate-600">Name</th>
            <th className="border border-slate-600">Price</th>
            <th className="border border-slate-600">Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {cartProducts.map((data, index) => (
            <tr key={data._id}>
              <td className="border border-slate-700">{index + 1}</td>
              <td className="border border-slate-700 flex justify-center"> <img className='h-20 w-20' src={data.images[0].image} alt="" /></td>
              <td className="border border-slate-700">{data.name}</td>
              <td className="border border-slate-700">₹ {data.price}</td>
              <td className="border border-slate-700">
                <div onClick={() => { deleteItem(data._id) }}>
                  <i className="fa-solid fa-trash"></i>
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td className="col-span-4" colSpan={3}>Total Amount</td>
            <td className="border border-slate-700">₹ {totalAmount}</td>
            <td>
              <div
                onClick={() => {
                  if (cartProducts.length > 0) {
                    toast.success("Order Placed Successfully....");
                    navigate('/home');
                  } else {
                    toast.error("Cart is empty. Please add products to place an order.");
                  }
                }}
                className='bg-blue-500 m-5 p-5 rounded-lg text-white font-semibold'>
                Place Order
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
