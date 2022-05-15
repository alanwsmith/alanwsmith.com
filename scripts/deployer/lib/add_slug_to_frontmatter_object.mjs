function add_slug_to_frontmatter_object_old(frontmatter) {
  return add_slug_to_frontmatter_object_dev(frontmatter)
  // TODO: Fail if there's not an id and a title

  const dash_replace = /-+/g
  let slug_title = frontmatter['title']
    .replaceAll(' ', '-')
    .replace(dash_replace, '-')
    .toLowerCase()

  let slug = `${slug_title}--${frontmatter.id}`

  return { ...frontmatter, slug }
}


function add_slug_to_frontmatter_object(frontmatter) {
  // TODO: Fail if there's not an id and a title

  let slug_title = frontmatter['title']
    .replaceAll(/\W/g, '-')
    .replaceAll(' ', '-')
    .replaceAll(/-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .toLowerCase()

  console.log(slug_title)

  let slug = `${slug_title}--${frontmatter.id}`

  return { ...frontmatter, slug }
}

export { add_slug_to_frontmatter_object }
// export { add_slug_to_frontmatter_object_dev }
