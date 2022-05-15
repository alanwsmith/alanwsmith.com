function add_slug_to_frontmatter_object(frontmatter) {
  let slug_title = frontmatter['title']
    .replaceAll(/\W/g, '-')
    .replaceAll(' ', '-')
    .replaceAll(/-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .toLowerCase()

  let slug = `${slug_title}--${frontmatter.id}`

  return { ...frontmatter, slug }
}

export { add_slug_to_frontmatter_object }
