import { parse } from 'yaml'

function make_slug(frontmatter) {
  // TODO: Error if there is no title

  const data = parse(frontmatter)

  const dash_replace = /-+/g
  let base_title = data['title']
    .replaceAll(' ', '-')
    .replace(dash_replace, '-')
    .toLowerCase()

  let slug = `${base_title}--${data['id']}`

  console.log(slug)

  return slug
}

export default make_slug
