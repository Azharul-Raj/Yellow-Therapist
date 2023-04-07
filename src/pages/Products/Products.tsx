import axios from 'axios'
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Card from '../../components/Card/Card';
import { productProps } from '../../types/types';
import RoundSpinner from '../../components/spinners/RoundSpinner/RoundSpinner';
interface productList{
  products:productProps[]|any
}
export default function Products() {
    const [data,setData]=useState<productProps[]|any>();
    let products:productList;
    const [category,setCategory]=useState("All")
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(res=>setData(res.data))
        .catch(err=>toast.error(err.message))
    },[])
    console.log(category);
    
    if(category=="Men"){
      products=data.filter((product:productProps)=>product.category=="men's clothing");
    }
    else if(category=="Women"){
      products=data.filter((product:productProps)=>product.category=="women's clothing");
    }
    else if(category=="Jewellery"){
      products=data.filter((product:productProps)=>product.category=="jewelery");
    }
    else if(category=="Electronics"){
      products=data.filter((product:productProps)=>product.category=="electronics");
    }
    else{
      products=data;
    }
    if(!data?.length){
      return <RoundSpinner/>
    }
  return (
    <div className='py-10'>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-6 flex items-end justify-end gap-4">
      {/* drop down */}
      
      <div className="mb-3">
  <select className=' border border-spacing-2 w-28 h-12 outline-none' data-te-select-init data-te-select-visible-options="3">    
    <option onClick={()=>setCategory('All')}  value="1">All</option>    
    <option onClick={()=>setCategory('Men')} value="1">Men's</option>    
    <option onClick={()=>setCategory('Women')} value="1">Women's</option>    
    <option onClick={()=>setCategory('Jewellery')} value="1">Jewellery</option>    
    <option onClick={()=>setCategory('Electronics')} value="1">Electronics</option>    
  </select>
</div>

      {/* drop down */}
      {/* <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Selected</h2>

      <a href="#" className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show more</a> */}
    </div>

    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {/* <!-- product - start --> */}
      {
        //@ts-ignore
        products?.map((product:productProps)=>
            <Card key={product.id} product={product} rate={product.rating.rate}/>      
        )
      }
      
      {/* <!-- product - end --> */}

    </div>
  </div>
</div>
    </div>
  )
}
