import assert from 'assert'
import fs from 'fs'
import { main } from '../lib/main.mjs'

it('makes the output file', () => {
  // Given
  const output_files = [
    'test/_output/a/posts/do-something-in-python--29ajjouaaaaa.mdx',
  ]

  output_files.forEach((file_path) => {
    try {
      fs.unlinkSync(file_path)
    } catch (err) {
      // console.log(err)
    }
  })

  // When
  main({
    input_posts_dir: 'test/_input/samples_a/posts',
    output_posts_dir: 'test/_output/a/posts',
    redirect_storage_input: 'test/_input/samples_a/data/redirect_storage.json',
    redirect_storage_output: 'test/_output/a/data/redirect_storage.json',
    redirect_file_path: 'test/_output/a/data/_redirects',
  })

  // Then
  output_files.forEach((file_path) => {
    const does_it_exist = fs.existsSync(file_path)
    assert.equal(does_it_exist, true)
  })
})

it('does not crash if there is no front matter', () => {
  // When
  main({
    input_posts_dir: 'test/_input/samples_b/posts',
    output_posts_dir: 'test/_output/b/posts',
    redirect_storage_input: 'test/_input/samples_b/data/redirect_storage.json',
    redirect_storage_output: 'test/_output/b/data/redirect_storage.json',
    redirect_file_path: 'test/_output/b/data/_redirects',
  })

  // This just makes sure that the process gets here.
  // (A crash is the error condition)
  //
  assert.equal(1, 1)
})
