import { getAllByDisplayValue } from "@testing-library/react"
import React, { useEffect, useState } from "react"


///BATCH
let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYW5WRVRAZ21haWwuY29tIiwiX2lkIjoiNjI5M2VkYTQzNDdkZjM1NTdhOThmY2UwIiwiaWF0IjoxNjUzODYxNzk2LCJleHAiOjE2NTM5NDgxOTZ9.ahJlfuPsTHSI2WlQIctRGCDs7bpMvJGOJN05MNGOEsE"
const headers = {
  'Accept': 'Application/json',
  'Authorization': token
}
const ShopCart = () => {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:80")
    // const response = await fetch("http://swiftproject-env.eba-h6empbyk.us-east-1.elasticbeanstalk.com/")
    const data = await response.json()
    setProducts(data.products)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      {products.length > 0 && (
        products.map((product) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <img src={product.banner} alt='' />
                  <div className='product-like'>
                    {/* <label>{count}</label> <br /> */}
                    {/* <i className='fa-regular fa-heart' onClick={increment}></i> */}
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{product.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${product.price}.00 </h4>
                    {/* step : 3  
                       if hami le button ma click garryo bahne 
                      */}

                    <button
                      onClick=
                      {(event) => {

                        {
                          alert(
                            "Product Added Successfully ", product.name
                          )
                        }

                        fetch(`http://localhost:8000/wishlist`, {
                          //fetch(`http://swiftproject-env.eba-h6empbyk.us-east-1.elasticbeanstalk.com/wishlist`, {
                          method: 'PUT',
                          headers: {
                            ...headers,
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({ _id: product._id })

                        }).then(function (response) {
                          console.log(response)
                          return response.json();

                        }
                        );

                      }}
                    >
                      <i className='fa fa-heart'></i>
                    </button>


                    <button
                      onClick=
                      {(event) => {

                        fetch(`http://localhost:8000/cart`, {
                          //fetch(`http://swiftproject-env.eba-h6empbyk.us-east-1.elasticbeanstalk.com/cart`, {
                          method: 'PUT',
                          headers: {
                            ...headers,
                            'Content-Type': 'application/json'
                          },

                          body: JSON.stringify({ _id: product._id, qty: "1" })
                        }).then(function (response) {
                          console.log(response)
                          return response.json();

                        });

                      }}
                    >
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      )}
    </>
  )
}

export default ShopCart