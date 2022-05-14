function add_slug_to_frontmatter_object(frontmatter) {
  const dash_replace = /-+/g
  let slug_title = frontmatter['title']
    .replaceAll(' ', '-')
    .replace(dash_replace, '-')
    .toLowerCase()

  let slug = `${slug_title}--${frontmatter.id}`
  return { slug: slug }
}

export default add_slug_to_frontmatter_object
