import assert from 'assert'
import build_redirects from '../lib/build_redirects.mjs'

// This tests the array of arrays that's
// used to generate the redirect file

it('make a basic redirect with one file', () => {
  // Given
  const json_data = {
    redirect_data: {
      '29ajjouaaaaa': {
        redirect_from: [
          '/posts/29ajjouaaaaa',
          '/posts/this-is-new--29ajjouaaaaa',
        ],
        redirect_to: '/posts/this-is-new--29ajjouaaaaa',
      },
    },
  }

  // When
  const results = build_redirects({ json_data: json_data })

  // Then
  assert.equal(results.length, 1)
  assert.equal(results[0].from, '/posts/29ajjouaaaaa')
})
