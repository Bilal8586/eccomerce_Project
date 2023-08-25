import { NextResponse } from 'next/server'
 
export function middleware(request) {
    const path =request.nextUrl.pathname
    const isPublic = path ==='/login'|| path==='/signup'
    const isLogin =path === '/cart'
    const token = request.cookies.get('token')?.value || '' 
    const isgooletoken = request.cookies.get('next-auth.session-token')?.value || ''
 
      if( token || isgooletoken  && isPublic){
        return NextResponse.redirect(new URL('/',request.nextUrl))
      }
    
      if(!isgooletoken && !token && isLogin){
        return NextResponse.redirect(new URL('/login',request.nextUrl))

      }


      
}
 
export const config = {
  matcher:[
    '/',
    '/login',
    '/signup',
    '/cart',
    
  ]
}