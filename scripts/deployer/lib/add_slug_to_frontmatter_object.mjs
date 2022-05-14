function add_slug_to_frontmatter_object(frontmatter) {
  // TODO: Fail if there's not an id and a title

  const dash_replace = /-+/g
  let slug_title = frontmatter['title']
    .replaceAll(' ', '-')
    .replace(dash_replace, '-')
    .toLowerCase()

  let slug = `${slug_title}--${frontmatter.id}`

  return { ...frontmatter, slug }
}

export default add_slug_to_frontmatter_object
