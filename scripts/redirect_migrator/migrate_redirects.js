#!/usr/bin/env node

const fs = require('fs')

const output = {
  redirect_data: {},
}

let fileData = JSON.parse(
  fs.readFileSync('input/_ksuid_redirects.json', 'utf8')
)

for (const [key, value] of Object.entries(fileData.ksuid_redirects)) {
  console.log(key)
  console.log(value)
  output[key] = {
    redirect_from: [],
    redirect_to: '',
  }

  output[key].redirect_from.push(value.current_slug)
  output[key].redirect_from.push(`/${key}`)
  output[key].redirect_from.push(`/post/${key}`)

  value.slugs_to_redirect.forEach((slug) => {
    output[key].redirect_from.push(slug)
  })
}

// console.log(output)

fs.writeFileSync(
  'output/redirect_stroage.json',
  JSON.stringify(output, null, 2)
)
