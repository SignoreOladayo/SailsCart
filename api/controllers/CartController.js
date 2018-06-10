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
      //send the request object to the update helper

      var updateCart = await sails.helpers.updateCart(req);

        return res.redirect('back')

  	} else {

  		//create new cart and add if no cart in session
  		var cart = await sails.helpers.addToCart(req.param('id'), 1)

  		//Put it in session
  		req.session.cart = cart

  		return res.redirect('back')
  	}

  },

  update: async function(req, res) {

    var updateCart = await sails.helpers.updateCart(req);

    return res.redirect('back')

  }

};

