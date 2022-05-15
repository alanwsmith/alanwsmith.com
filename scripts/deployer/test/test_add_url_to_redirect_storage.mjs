import assert from 'assert'
import { add_url_to_redirect_storage } from '../lib/add_url_to_redirect_storage.mjs'

it('should add the url to the list for an existing ksuid', () => {
  // Given
  const json_data = {
    redirect_data: {
      '29ajjouaaaaa': {
        redirect_from: ['/posts/29ajjouaaaaa'],
        redirect_to: 'xxxxx',
      },
    },
  }

  const url = '/posts/this-is-new--29ajjouaaaaa'

  const result = add_url_to_redirect_storage({
    json_data: json_data,
    url: url,
  })

  // Then
  assert.equal(result.redirect_data['29ajjouaaaaa'].redirect_from[1], url)
  assert.equal(result.redirect_data['29ajjouaaaaa'].redirect_to, url)
})

it('should add a new item if it does not already exist', () => {
  // Given
  const json_data = {
    redirect_data: {},
  }

  const url = '/post/some-new-thing--29ajjoubbbbb'

  // When
  const result = add_url_to_redirect_storage({
    json_data: json_data,
    url: url,
  })

  // Then
  assert.equal(result.redirect_data['29ajjoubbbbb'].redirect_to, url)
  assert.equal(result.redirect_data['29ajjoubbbbb'].redirect_from.length, 0)
})
