const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const STRIPE_SECRET_API =
  "sk_test_51L2ejdLKTAhzC3T1fDwvYtSydg4XLQFtri3j0zCBlxjyGaLPb29cH9XooI3MHtTxt07TRxVibHHsVx3KGstHqRyM00fJuOyg3Y";
const Stripe = require("stripe")(STRIPE_SECRET_API);

// API

// - API config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (requset, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);

  // paymentIntent = payment confirmation(付款方式)
  const paymentIntent = await Stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// url: `/payments/create?total=${getBasketTotal(basket) * 100}`,

// - Listen command
exports.api = functions.https.onRequest(app);
// Example endpoint
// http://localhost:5001/challenge-5c0c2/us-central1/api
