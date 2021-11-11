import { NextResponse, NextFetchEvent, NextRequest } from 'next/server'

export function middleware(req) {
  console.log(req.nextUrl.pathname)

  const currentSlugs = {
    '20eMgh896HCN': '/posts/20eMgh896HCN--a-plastic-mushroom',
  }

  const pathParts = req.nextUrl.pathname.split('/')

  console.log('------')

  if (pathParts.length === 3) {
    const slugParts = pathParts[2].split('--')
    console.log(slugParts[0])
    if (currentSlugs[slugParts[0]]) {
      if (currentSlugs[slugParts[0]] !== req.nextUrl.pathname) {
        return NextResponse.redirect(currentSlugs[slugParts[0]])
      }
    }
  }

  if (req.nextUrl.pathname === '/posts/asdfasdf') {
    return NextResponse.redirect('/')
  }
  // next()
  // return new Response('asdfHello, world!')
}
