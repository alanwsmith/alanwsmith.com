import assert from 'assert'
import build_redirects from '../lib/build_redirects.mjs'

it('test integration', () => {
  // Given
  const json_data = {
    redirect_data: {
      '29ajjouaaaaa': {
        redirects: ['/posts/29ajjouaaaaa'],
      },
    },
  }

  const slugs = ['/posts/new-slug-here--29ajjouaaaaa']

  // let results = [
  //   {
  //     from: '/posts/29ajjouaaaaa',
  //     to: '/posts/new-slug-here--29ajjouaaaaa',
  //   },
  // ]

  let results = build_redirects({ json_data: json_data, slugs: slugs })

  assert.equal(results[0].from, '/posts/29ajjouaaaaa')
  assert.equal(results[0].to, '/posts/new-slug-here--29ajjouaaaaa')
})
