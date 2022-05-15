import assert from 'assert'
import make_redirects_array from '../lib/make_redirects_array.mjs'

// This tests the array of arrays that's
// used to generate the redirect file

describe('Test 1', () => {
  it('make a basic redirect with one file and do not redirect to self', () => {
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
    const results = make_redirects_array({ json_data: json_data })

    // Then
    assert.equal(results.length, 1)
    assert.equal(results[0].from, '/posts/29ajjouaaaaa')
  })
})
