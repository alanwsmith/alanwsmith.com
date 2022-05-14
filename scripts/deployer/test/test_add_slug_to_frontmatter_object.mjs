import assert from 'assert'
import add_slug_to_frontmatter_object from '../lib/add_slug_to_frontmatter_object.mjs'

it('should get a slug', () => {
  // Given
  const expected = 'open-source-test-thing--20eLy6aaaaaa'

  const frontmatter = {
    id: '20eLy6aaaaaa',
    title: 'Open Source - Test Thing',
  }

  // When
  const result = add_slug_to_frontmatter_object(frontmatter)

  // Then
  assert.equal(result.slug, expected)

  // Also
  assert.equal(result.id, '20eLy6aaaaaa')
})
