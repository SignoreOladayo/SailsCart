module.exports = {


  friendlyName: 'Add to cart',


  description: 'This helper creates a cart and adds the first product to it',


  inputs: {

    productId: {
      
      type: 'string',
      required: true

    },

    productQty: {
      type: 'string',
      required: true
    }


  },


  fn: async function (inputs, exits) {

    //find the product
    var product = await Product.find({ id: inputs.productId})

    

    //create the cart scaffolding
    var cart = {

      items : {},
      totalQty: inputs.productQty,
      totalPrice: product[0].price

    }

    //push the first product in the cart

    cart.items[product[0].id] = {
      qty: inputs.productQty,
      product: product[0]
    }

    // All done.
    return exits.success(cart);

  }


};

