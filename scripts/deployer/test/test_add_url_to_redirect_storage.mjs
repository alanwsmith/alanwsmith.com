import assert from 'assert'
import { add_url_to_redirect_storage } from '../lib/add_url_to_redirect_storage.mjs'

// TODO: Deal with new files with new KSUIDs

it('should add the url to the list', () => {
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

// it('should add a new item if it does not already exist', () => {
//   // Given
//   const json_data = {
//     redirect_data: {},
//   }

//   const url = '/post/some-new-thing--29ajjoubbbbb'

//   const result = add_url_to_redirect_storage({
//     json_data: json_data,
//     url: url,
//   })

//   assert.equal(result.redirect_data['29ajjoubbbbb'].redirect_to, url)
// })
