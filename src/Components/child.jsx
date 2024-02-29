import React from 'react'

export default function Child(props) {
    // console.log(props);
    let { title, description, price, thumbnail } = props;

    return (
        <>
            <div>
            <img className='w-100 rounded-top-2' style={{maxHeight:"200px",height:"200px"}} src={thumbnail} alt="" />
            </div>
            <div className='p-1 d-flex  justify-content-between flex-column'>
                <h5 className='my-2'>{title}</h5>
                <p className='' style={{height:"80px"}}>{description}</p>
                <h6>{price}$</h6>
                <a href="$" className='btn btn-dark'>Buy now</a>
            </div>
        </>
    )
}
