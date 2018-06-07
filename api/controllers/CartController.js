/**
 * CartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  add: async function(req, res) {

  	//check if there is a cart in session

  	if(req.session.cart) {

  		//upate current cart if cart is in session

        return res.json('There is already a cart in session');

  	} else {

  		//create new cart and add if no cart in session
  		var cart = await sails.helpers.addToCart(req.param('id'), 1)

  		//Put it in session
  		req.session.cart = cart

  		return res.json(req.session.cart)
  	}

  	

  	

  }

};

