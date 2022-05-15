import assert from 'assert'
import { add_slug_to_frontmatter_object } from '../lib/add_slug_to_frontmatter_object.mjs'

it('should get a slug', () => {
  // Given
  const expected = 'open-source-test-thing--20ely6aaaaaa'

  const frontmatter = {
    id: '20ELy6aaaaaa',
    title: 'Open Source - Test Thing',
  }

  // When
  const result = add_slug_to_frontmatter_object(frontmatter)

  // Then
  assert.equal(result.slug, expected)
})

it('should only have allowed characters', () => {
  // Given
  const expected = 'this-dot-slash-and-1-that--20ely6aaaaaa'

  const frontmatter = {
    id: '20ELy6aaaaaa',
    title: "   This dot . slash / and & 1 that'  ",
  }

  // When
  const result = add_slug_to_frontmatter_object(frontmatter)

  // Then
  assert.equal(result.slug, expected)
})
