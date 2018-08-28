export const addToShoppingCar=(products, cartProducts,id)=>{
    const isInCart = cartProducts.findIndex(item => item.id === id)
    const newCart =isInCart === -1
        ? [
            ...cartProducts,
            { ...products.find(item => item.id === id), num: 1 }
          ]
        : cartProducts.map(item => {
            if (item.id === id) {
              item.num = item.num + 1
            }
            return item
          })
          return newCart
}