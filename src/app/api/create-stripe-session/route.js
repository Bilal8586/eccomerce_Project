
import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export async function POST(request){
    const reqBody = await request.json()
    const {email,items} = reqBody
  //   const tranformedItem = items.map((item)=>({
  //   description:item.description,
  //   quantity:item.quantity,
  //   price_data:{
  //     currency:"usd",
  //     unit_amount:item.price*100,
  //     product_data:{
  //       name:item.title,
  //       images:[item.images[0]]
  //     }
  //   }
  // }))



  const session= await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    billing_address_collection:'auto',
    mode:'payment',
    shipping_address_collection:{
        allowed_countries:["GB","US","CA","IN"]
      },
    shipping_options:[{shipping_rate:'shr_1NmJBQSBxjeiyPbSjEALKUmu'}],
      line_items:items.map((item)=>{
        return{
          price_data: {
                  currency: 'usd',
                  unit_amount: item.price*100,
                  product_data: {
                    name: item.title,
                    description:item.description,
                    images:[item.images[0]]
                  },
                },
                quantity: item.Quntity,
        }
      }),
    // line_items: [{
    //     // name: 'T-shirt',
    //     // description: 'Comfortable cotton t-shirt',
    //     // images: ['https://example.com/t-shirt.png'],
    //     // amount: 2000,
    //     // currency: 'usd',
    //     price_data: {
    //       currency: 'usd',
    //       unit_amount: 2000,
    //       product_data: {
    //         name: 'T-shirt',
    //         description: 'Comfortable cotton t-shirt',
    //         images: ['https://example.com/t-shirt.png'],
    //       },
    //     },
    //     quantity: 1,
    //   }],

    // payment_method_types:["card"],
    // shipping_rates:['shr_1NmJBQSBxjeiyPbSjEALKUmu'],
    // shipping_address_collection:{
    //   allowed_countries:["GB","US","CA","IN"]
    // },
    // line_items:tranformedItem,
    
    success_url:`${process.env.DOMAIN}/success`,
    cancel_url:`${process.env.DOMAIN}/chekcout`,
    // metadata:{
    //   email,
    //   images:JSON.stringify(items.map(item => item.images))
    // }
  })
 return NextResponse.json({
    message:'create check out success',
    session
  })
}