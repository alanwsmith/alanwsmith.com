import fs from 'fs'
import { parse, stringify } from 'yaml'
import { add_slug_to_frontmatter_object } from './add_slug_to_frontmatter_object.mjs'
import list_dir from './list_dir.mjs'
import { add_url_to_redirect_storage } from './add_url_to_redirect_storage.mjs'
import make_redirects_array from './make_redirects_array.mjs'

function main({
  input_posts_dir,
  output_posts_dir,
  redirect_storage_input,
  redirect_storage_output,
  redirect_file_path,
}) {
  const valid_statuses = ['scratch', 'draft', 'published', 'archived']

  // Clear out existing files (not currently in a test case)
  const files_to_delete_list = list_dir({
    rootDir: output_posts_dir,
    isRecursive: false,
  })
  files_to_delete_list.forEach((file) => {
    console.log(`Deleting: ${file.full_path}`)
    fs.unlinkSync(file.full_path)
  })

  const file_list = list_dir({ rootDir: input_posts_dir, isRecursive: false })

  // Load redirect_storage json
  let redirect_data = JSON.parse(
    fs.readFileSync(redirect_storage_input, 'utf-8')
  )

  file_list.forEach((file) => {
    if (file.extension_lower_case === 'txt') {
      console.log(`Processing: ${file.full_path}`)

      const file_data = fs.readFileSync(file.full_path, 'utf-8')

      const file_parts = file_data.split('---')

      // Make sure there's a section that can contain front matter
      if (file_parts.length > 1) {
        // make sure there's an id and a title (this is not currently in a test)
        if (
          file_parts[1].indexOf('id: ') > -1 &&
          file_parts[1].indexOf('title: ') > -1 &&
          file_parts[1].indexOf('status: ') > -1
        ) {
          let frontmatter = parse(file_parts[1])

          // slug is assigned here
          frontmatter = add_slug_to_frontmatter_object(frontmatter)
          const status = frontmatter.status

          // check for valid status (not currently tested)
          if (valid_statuses.indexOf(status) > -1) {
            // This is to deal with adding a space
            // before the first '---' set
            file_parts[1] = `
${stringify(frontmatter)}`

            // let output_file_path = `test/_output/a/posts/${frontmatter.slug}.mdx`
            const output_file_path = `${output_posts_dir}/${frontmatter.slug}.mdx`
            const url = `/posts/${frontmatter.slug}`

            fs.writeFileSync(output_file_path, file_parts.join('---'))

            // Update redirects_stroage.json
            redirect_data = add_url_to_redirect_storage({
              json_data: redirect_data,
              url: url,
            })
          }
        }
      }
    }
  })

  // output updated redirect_storage json
  fs.writeFileSync(
    redirect_storage_output,
    JSON.stringify(redirect_data, null, 2)
  )

  // create _redirects file
  const redirects_array = make_redirects_array({ json_data: redirect_data })
  const tmp_redirect_data = []
  redirects_array.forEach((item) => {
    tmp_redirect_data.push(`${item.from}    ${item.to}    301`)
  })
  const redirect_string = tmp_redirect_data.join('\n')
  console.log(redirect_string)
  fs.writeFileSync(redirect_file_path, redirect_string)
}

export { main }
