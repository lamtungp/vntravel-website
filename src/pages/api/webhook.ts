import { NextApiRequest, NextApiResponse } from 'next';

// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpointSecret =
  'whsec_bfb03a0f0c3e7d0d849c6d7b5863639f55d83812907cdabd7738f6aa05c6eacd';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err: any) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'account.updated':
      const account = event.data.object;
      // Then define and call a function to handle the event account.updated
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 res to acknowledge receipt of the event
  res.send('');
}
