import assert from 'assert'
import fs from 'fs'
import main from '../lib/main.mjs'

it('makes the output file', () => {
  // Given
  const output_files = [
    'test/_output/a/posts/do-something-in-python--29ajjouaaaaa.mdx',
  ]

  output_files.forEach((file_path) => {
    try {
      fs.unlinkSync(file_path)
    } catch (err) {
      console.log(err)
    }
  })

  // When
  main({
    input_posts_dir: 'test/_input/samples_a/posts',
    output_posts_dir: 'test/_output/a/posts',
  })

  // Then
  output_files.forEach((file_path) => {
    const does_it_exist = fs.existsSync(file_path)
    assert.equal(does_it_exist, true)
  })
})
