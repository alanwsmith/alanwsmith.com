import { NextResponse, NextFetchEvent, NextRequest } from 'next/server'

export function middleware(req) {
  console.log(req.nextUrl.pathname)

  const currentSlugs = {
    '2-quarts': '/posts/20eMgh896HCN--a-plastic-mushroom',
  }

  const pathParts = req.nextUrl.pathname.split('/')

  console.log('------')

  if (pathParts.length === 2) {
    if (currentSlugs[pathParts[1]]) {
      return NextResponse.redirect(currentSlugs[pathParts[1]])
    }
  }
}
