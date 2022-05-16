function add_url_to_redirect_storage({ json_data, url }) {
  const url_parts = url.split('--')
  const url_id = url_parts.pop()

  if (json_data.ksuid_redirects[url_id] === undefined) {
    json_data.ksuid_redirects[url_id] = {
      redirect_to: url,
      redirect_from: [`/${url_id}`],
    }
  } else if (
    json_data.ksuid_redirects[url_id].redirect_from.indexOf(url) === -1
  ) {
    json_data.ksuid_redirects[url_id].redirect_from.push(url)
    json_data.ksuid_redirects[url_id].redirect_to = url
  }

  return json_data
}

export { add_url_to_redirect_storage }
