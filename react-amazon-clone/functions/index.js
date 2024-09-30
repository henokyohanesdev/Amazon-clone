const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const stripe = require("stripe")(
    process.env.STRIPE_KEY
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.post("/payment/create", async (req, res) => {
  const totalPrice = req.query.totalPrice;
  
  if (totalPrice > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice,
      currency: "usd",
    });
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(402).send("Payment failed");
  }
});

exports.api = onRequest(app);