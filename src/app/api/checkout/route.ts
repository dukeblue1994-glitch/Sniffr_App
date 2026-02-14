import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

/**
 * Stripe Checkout Session Creation
 * 
 * This endpoint creates a Stripe checkout session for subscription purchases.
 * 
 * To enable this:
 * 1. Install Stripe: npm install stripe @stripe/stripe-js
 * 2. Set STRIPE_SECRET_KEY in .env.local
 * 3. Uncomment the implementation below
 */

export async function POST(req: NextRequest) {
  try {
    const { priceId, userId } = await req.json();

    if (!priceId) {
      return Response.json(
        { error: 'Price ID is required' },
        { status: 400 }
      );
    }

    // TODO: Uncomment when Stripe is installed and configured
    /*
    const Stripe = require('stripe');
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
      customer_email: req.headers.get('x-user-email') || undefined,
      client_reference_id: userId || undefined,
      metadata: {
        userId: userId || 'anonymous',
      },
    });

    return Response.json({ sessionId: session.id });
    */

    // Placeholder response for now
    return Response.json({
      message: 'Stripe checkout not yet configured. See src/app/api/checkout/route.ts',
      priceId,
    });
  } catch (err: any) {
    console.error('Checkout error:', err);
    return Response.json(
      { error: err.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
