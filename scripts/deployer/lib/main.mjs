import fs from 'fs'
import { parse, stringify } from 'yaml'
import add_slug_to_frontmatter_object from './add_slug_to_frontmatter_object.mjs'
import list_dir from './list_dir.mjs'
import add_url_to_redirect_storage from './add_url_to_redirect_storage.mjs'

const main = ({
  input_posts_dir,
  output_posts_dir,
  redirect_storage_input,
  redirect_storage_output,
}) => {
  // TODO: Only process files that have an
  // ID in the yaml front matter
  // TODO: Only process .txt files.

  const file_list = list_dir(input_posts_dir)

  file_list.forEach((file) => {
    const file_data = fs.readFileSync(file.full_path, 'utf-8')

    const file_parts = file_data.split('---')
    let frontmatter = parse(file_parts[1])
    // slug is assigned here
    frontmatter = add_slug_to_frontmatter_object(frontmatter)

    // This is to deal with adding a space
    // before the first '---' set
    file_parts[1] = `
${stringify(frontmatter)}`

    const output_file_path = `test/_output/a/posts/${frontmatter.slug}.mdx`
    const url = `/posts/${frontmatter.slug}`

    fs.writeFileSync(output_file_path, file_parts.join('---'))

    // Do redirect
    // Load the redirect_strorage json
    let redirect_data = JSON.parse(
      fs.readFileSync(redirect_storage_input, 'utf-8')
    )
    redirect_data = add_url_to_redirect_storage({
      json_data: redirect_data,
      url: url,
    })

    fs.writeFileSync(
      redirect_storage_output,
      JSON.stringify(redirect_data, null, 2)
    )
  })
}

export default main
