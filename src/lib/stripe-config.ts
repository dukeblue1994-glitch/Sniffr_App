// Web app Stripe payment configuration
// This file handles Stripe integration for web-based payments

/**
 * Stripe configuration
 * Set your Stripe keys in .env.local:
 * - STRIPE_PUBLIC_KEY: Your publishable key (starts with pk_)
 * - STRIPE_SECRET_KEY: Your secret key (starts with sk_)
 * - STRIPE_WEBHOOK_SECRET: Your webhook signing secret (starts with whsec_)
 */

export const STRIPE_CONFIG = {
  publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '',
  prices: {
    goldMonthly: 'price_xxx', // Replace with your Stripe Price ID
    goldYearly: 'price_yyy',  // Replace with your Stripe Price ID
  }
};

/**
 * Product configuration
 */
export const PRODUCTS = {
  gold: {
    monthly: {
      name: 'Sniffr Gold - Monthly',
      price: 999, // in cents
      interval: 'month',
      features: [
        'Unlimited likes',
        'See who liked you',
        'Advanced filters',
        'Priority support',
        'Ad-free experience'
      ]
    },
    yearly: {
      name: 'Sniffr Gold - Yearly',
      price: 9999, // in cents
      interval: 'year',
      features: [
        'All monthly features',
        'Save 17%',
        'Exclusive yearly member badge'
      ]
    }
  }
};

/**
 * Initialize Stripe on the client side
 * Usage in a React component:
 * 
 * ```tsx
 * import { loadStripe } from '@stripe/stripe-js';
 * import { STRIPE_CONFIG } from '@/lib/stripe-config';
 * 
 * const stripePromise = loadStripe(STRIPE_CONFIG.publicKey);
 * ```
 */
