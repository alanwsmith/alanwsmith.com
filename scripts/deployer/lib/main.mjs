import fs from 'fs'
import { parse, stringify } from 'yaml'
import add_slug_to_frontmatter_object from './add_slug_to_frontmatter_object.mjs'
import list_dir from './list_dir.mjs'

const main = ({ input_posts_dir, output_posts_dir }) => {
  // TODO: Only process files that have an
  // ID in the yaml front matter
  //
  // TODO: Only process .txt files.

  const file_list = list_dir(input_posts_dir)

  file_list.forEach((file) => {
    const file_data = fs.readFileSync(
      `${input_posts_dir}/py- Some Thing - Here.txt`,
      'utf-8'
    )

    const file_parts = file_data.split('---')
    let frontmatter = parse(file_parts[1])
    frontmatter = add_slug_to_frontmatter_object(frontmatter)

    file_parts[1] = `
${stringify(frontmatter)}`

    const output_file_path = `test/_output/a/posts/${frontmatter.slug}.mdx`

    fs.writeFileSync(output_file_path, file_parts.join('---'))
  })
}

export default main
