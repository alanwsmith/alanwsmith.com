function build_redirects({ json_data, slugs }) {
  // TODO: Deal with KSUID when it's the first time
  // through and the key doesn't already exist in
  // the storage.

  const results = []

  slugs.forEach((slug) => {
    const slug_parts = slug.split('--')
    const slug_id = slug_parts.pop()

    json_data.redirect_data[slug_id].redirects.forEach((from_key) => {
      results.push({
        from: from_key,
        to: slug,
      })
    })
  })

  return results
}

export default build_redirects
