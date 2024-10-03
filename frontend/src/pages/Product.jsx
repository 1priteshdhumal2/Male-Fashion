import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');


  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      {/* Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' onClick={() => setImage(item)}></img>
              ))
            }
          </div>

          {/* Product Image */}
          <div className='w-full sm:w-[80%] '>
            <img src={image} className='w-full h-auto' alt="image" />
          </div>
        </div>

        {/* Product Details */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex gap-2 items-center mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" /><img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2 text-gray-700'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium text-gray-600'>{currency} {productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`w-10 h-10 border bg-gray-100 ${item === size ? 'border-slate-900 bg-black ' : 'text-black'}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button className='bg-black text-white py-4 px-10 text-sm active:bg-gray-800 '>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Products</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description & Review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm '>Description</b>
          <p className='border px-5 py-3 text-sm '>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An ecommerce platform is the content management system (CMS) and commerce engine websites use to manage catalogued products, register purchases and manage a users relationship with an online retailer.</p>
          <p>The primary purpose of an e-commerce website is to facilitate the buying and selling process in a convenient and efficient manner. </p>
        </div>
      </div>

      {/* Display Related Products */}
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product