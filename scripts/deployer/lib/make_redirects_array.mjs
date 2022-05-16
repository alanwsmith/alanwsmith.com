function make_redirects_array({ json_data }) {
  let results = []

  for (const post_id in json_data.ksuid_redirects) {
    json_data.ksuid_redirects[post_id].redirect_from.forEach(
      (from_location) => {
        if (from_location !== json_data.ksuid_redirects[post_id].redirect_to) {
          results.push({
            from: from_location,
            to: json_data.ksuid_redirects[post_id].redirect_to,
          })
        }
      }
    )
  }
  return results
}

export default make_redirects_array
