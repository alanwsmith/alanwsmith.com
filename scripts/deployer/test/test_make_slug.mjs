import assert from 'assert'
import make_slug from '../lib/make_slug.mjs'

it('it works', function () {
  const yaml_data = `blurb: ''
categories:
- Miscellaneous
date: '2007-03-04T00:00:00'
id: 20eLy6aaaaaa
status: published
title: Open Source - Test Thing
type: post`

  const return_value = make_slug(yaml_data)
  assert.equal(return_value, '20eLy6aaaaaa--open-source-test-thing')
})
