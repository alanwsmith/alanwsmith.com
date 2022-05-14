function add_url_to_redirect_storage({ json_data, url }) {
  const url_parts = url.split('--')
  const url_id = url_parts.pop()

  json_data.redirect_data[url_id].redirect_from.push(url)

  return json_data
}

export default add_url_to_redirect_storage
