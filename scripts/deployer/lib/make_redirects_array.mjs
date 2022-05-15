function make_redirects_array({ json_data }) {
  let results = []

  for (const post_id in json_data.redirect_data) {
    json_data.redirect_data[post_id].redirect_from.forEach((from_location) => {
      // // Redirct to home page if the page has been removed
      // // and no longer has a URL (NOTE: I don't think this actually
      // // gets called since if the page isn't there, it won't have
      // // a reference to start with. Remove this at some point
      // // after confirming)
      // if (json_data.redirect_data[post_id].redirect_to === '') {
      //   results.push({
      //     from: from_location,
      //     to: '/',
      //   })
      // }

      // otherwise, add the redirect as long as it's not
      // pointing to itself
      //
      // else

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

export default make_redirects_array
