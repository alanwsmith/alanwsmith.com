import assert from 'assert'
import fs from 'fs'
import main from '../lib/main.mjs'

it('makes the output file', () => {
  main({})
  const does_it_exist = fs.existsSync(
    'test/_output/a/posts/do-something-in-python--29ajjouaaaaa.mdx'
  )
  assert.equal(does_it_exist, true)
})
