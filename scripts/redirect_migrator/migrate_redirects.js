#!/usr/bin/env node

const fs = require('fs')

const output = {
  ksuid_redirects: {},
}

let fileData = JSON.parse(
  fs.readFileSync('input/_ksuid_redirects.json', 'utf8')
)

for (const [key, value] of Object.entries(fileData.ksuid_redirects)) {
  console.log(key)
  console.log(value)
  output.ksuid_redirects[key] = {
    redirect_from: [],
    redirect_to: '/',
  }

  output.ksuid_redirects[key].redirect_from.push(value.current_slug)
  output.ksuid_redirects[key].redirect_from.push(`/${key}`)
  output.ksuid_redirects[key].redirect_from.push(`/posts/${key}`)

  value.slugs_to_redirect.forEach((slug) => {
    output.ksuid_redirects[key].redirect_from.push(slug)
  })
}

const redirectsToSplit = fs.readFileSync('input/_redirects', 'utf8')

const redirectLines = redirectsToSplit.split('\n')

redirectLines.forEach((line) => {
  const lineParts = line.split(/\s+/)
  console.log(`A: ${lineParts[0]} - ${lineParts[1]}`)

  // get the id
  const urlParts = lineParts[1].split('/')
  if (urlParts.length > 2) {
    const slugParts = urlParts[2].split('--')
    const key = slugParts[0]
    console.log(key)

    // make the key if it doesn't exist
    if (output.ksuid_redirects[key] === undefined) {
      output.ksuid_redirects[key] = {
        redirect_from: [],
        redirect_to: '/',
      }
    }

    if (
      output.ksuid_redirects[key].redirect_from.indexOf(lineParts[0]) === -1
    ) {
      output.ksuid_redirects[key].redirect_from.push(lineParts[0])
    }
    if (
      output.ksuid_redirects[key].redirect_from.indexOf(lineParts[1]) === -1
    ) {
      output.ksuid_redirects[key].redirect_from.push(lineParts[1])
    }
  }
})

fs.writeFileSync(
  'output/redirect_storage.json',
  JSON.stringify(output, null, 2)
)
