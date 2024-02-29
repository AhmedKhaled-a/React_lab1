import React, { useState } from 'react';
import Child from './child';


export default function Parent() {
    
    let [data] = useState([
        {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        },
        {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        },
        {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
        },
        {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
        },
        {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
        }
    ]);
    return (
        <div className='row gy-4 my-5'>
            {
                data.map((product)=>{
                    return(
                        <div key={product.id} className="col-3">
                            <Child {...product} />
                        </div>
                    )
                })
            }
        </div>

    )
}
