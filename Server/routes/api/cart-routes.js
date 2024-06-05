const router = require("express").Router();
require("dotenv").config();

// const stripe = require("stripe")
const { Users, Cart, Products, ShoppingCart } = require("../../models");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

router.get("/", async (req, res) => {
  try {
    const getCart = await Cart.findAll({
      include: [{ model: Products }, { model: Users }],
    });

    res.status(200).json(getCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getCartById = await Cart.findByPk(req.params.id, {
      include: [{ model: ShoppingCart }],
    });

    if (!getCartById) {
      res.status(404).json({ message: "Invalid Id" });
    } else {
      res.status(200).json(getCartById);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const getCartById = Cart.findByPk(req.body, {
      include: [{ model: Users }],
    });

    if (!getCartById) {
      res.status(404).json({ message: "Invalid Id" });
    }
    res.status(200).json(getCartById);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.put('/:id',async(req,res)=>{
//     try{
// const getCartById= Cart.update(req.body,{where:{
//     id:req.params.id
// }})
//  res.status(200).json(getCartById)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })s

router.post("/create-checkout-session", async (req, res) => {
  try {
    // Construct the line_items array
    // const line_items = [{
    //   price_data: {
    //     currency: 'usd',
    //     product_data: {
    //       name: productName,
    //       description: productDescription,
    //       images: [image],
    //     },
    //     unit_amount: price * 100, // Stripe expects amount in cents
    //   },
    //   quantity: 1,
    // }];
    const items = req.body;
    const line_items = items.map((item) => {
      const { price, productName, productDescription, image } = item.product;

      // Validate and ensure the price is a valid number
      const priceInCents =
        parseInt(price, 10) * 100 + parseInt(price, 10) * 100 * 0.13;
      if (isNaN(priceInCents)) {
        throw new Error(`Invalid price for item ${productName}: ${price}`);
      }

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: productName,
            description: productDescription,
            images: [image], // Ensure images is an array
          },
          unit_amount: priceInCents, // Stripe expects amount in cents
        },
        quantity: item.quantity,
      };
    });
    console.log(req, "req");
    console.log(req.body, "body");
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "https://example.com/success",
      cancel_url: "https://example.com/cancel",
    });
    console.log(session, "session");

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.log(err, "error");
    return err;
  }
});

router.put("/:id", async (req, res) => {
  try {
    const putCategory = await Cart.update(req.body, {
      where: { id: req.params.id },
    });

    res.status(200).json(putCategory);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a category by its `id` value
});

// router.delete(':/id',async(req,res)=>{
//     try{
// const DelCartProductsById= await
//     }catch(err){
//         res.status(500).json(err)
//     }
// })

// router.post("/create-payment-intent", async (req, res) => {
//   try {
//     const getPay = await stripe.paymentIntents.create({
//       total: req.body.total, // subunits of the currency
//       currency: "usd",
//       paymnetMethod:"card"
//     });

//     if (!getPay) {
//       res.status(404).json({ message: "Invalid " });
//     }

//     res.status(201).json(getPay);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
