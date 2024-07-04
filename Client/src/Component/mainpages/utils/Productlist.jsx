function ProductList({product}) {
      console.log(product);
 
    return (<> 
    
        {
            <img src={product.img.ul} alt="" />
        }
        title{product.title}
        <span>${product.price}</span>
        <p>{product.description }</p>
    
    </>)


}

export default ProductList