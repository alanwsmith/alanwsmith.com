function build_redirects({ json_data }) {
  let results = []

  for (const post_id in json_data.redirect_data) {
    json_data.redirect_data[post_id].redirect_from.forEach((from_location) => {
      if (from_location !== json_data.redirect_data[post_id].redirect_to) {
        results.push({
          from: from_location,
          to: json_data.redirect_data[post_id].redirect_to,
        })
      }
    })
  }
  return results
}

export default build_redirects
