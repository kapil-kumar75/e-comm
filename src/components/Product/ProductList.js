import React from 'react'
import './ProductList.css'

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      products: [],
    }
  }
  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          products: result,
        })
      })
  }
  render() {
    const { onAdd } = this.props
    const { count, products } = this.state
    return (
      <>
        <div className="productList">
          {products.map((product) => (
            <div className="cart" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt="image" />
              </div>
              <div className="product-info">
                <div className="title">{product.title}</div>
                <div className="price">${product.price}</div>
              </div>
              <button className="btn" onClick={onAdd}>
                AddToCart
              </button>
            </div>
          ))}
        </div>
      </>
    )
  }
}
export default ProductList
