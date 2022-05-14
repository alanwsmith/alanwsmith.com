import assert from 'assert'
import add_slug_to_redirect_storage from '../lib/add_slug_to_redirect_storage.mjs'

it('should add the slug to the list', () => {
  // Given
  const json_data = {
    redirect_data: {
      '29ajjouaaaaa': {
        redirect_from: ['/posts/29ajjouaaaaa'],
      },
    },
  }

  const slug = 'this-is-new--29ajjouaaaaa'

  const result = add_slug_to_redirect_storage({
    json_data: json_data,
    slug: slug,
  })

  // Then
  assert.equal(
    result.redirect_data['29ajjouaaaaa'].redirect_from[1],
    'this-is-new--29ajjouaaaaa'
  )
})
