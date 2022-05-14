function add_slug_to_redirect_storage({ json_data, slug }) {
  const slug_parts = slug.split('--')
  const slug_id = slug_parts.pop()

  json_data.redirect_data[slug_id].redirect_from.push(slug)

  return json_data
}

export default add_slug_to_redirect_storage
