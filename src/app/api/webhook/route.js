import { headers } from 'next/headers'
import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request){
    const reqBody = await request.text()
   
    const signature =  headers().get("stripe-signature")
    // const sin = request.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_SIGNING_SECRET
    // console.log('webhook Details',reqBody)
    // console.log('webhook sig',sig)
    // console.log("signature",sin)

    let event;

  try {
    event = stripe.webhooks.constructEvent(reqBody, signature, endpointSecret);
  }
  catch (err) {
    console.log('sothing wrong with webhook event')
    return NextResponse.json({message:'webhook error '},{status:400});
  }


    if(event.type == "checkout.session.completed"){
        const session = event.data.object
        // const line_items= await stripe.customers.retrieve(session.customer)
        // const line_items = await stripe.checkout.session.listLineItems(event.data.object.id)
        // console.log('line_items',line_items)
        console.log('session',session)
        
    }
}