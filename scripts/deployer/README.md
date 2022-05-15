This is the second deployer. The first one did some
work for the transition between gatsby and next.js.

This one is being made with tests and will allow for
easier managment of redirects and setup to flip the
url slugs so the KSUID is at the end instead of the
beginning

### Things to do

- [x] Move files to `_posts` directory
- [x] Rename files appropraitely
- [x] Make sure slugs have only valid characters
- [x] Only publish if status is "archive|scratch|draft|published"
- [x] Add `slug` to the frontmatter of each file
- [x] Build the redirects file
- [x] Add KSUIDs to the redirects for new files
- [x] Clear the output directory before each run
- [x] Manage redirects when titles/slugs change via redirects
- [x] Make `/{KSUID}` redirects for all files
- [ ] Don't add urls multiple times to the 'redirect_from' array 
- [ ] Handle posts that have empty titles
- [ ] Redirect posts that have been removed to the home page
- [ ] Do any image moves necessary and make the Img.js file
- [ ] Publish stream notes
- [ ] Publish browsing history
- [ ] Make podcast feeds?
- [ ] Make site map (might be a nextjs thing?)

### Notes

- Redirects are stored in the redirect_storage.json
  file. Each update to that pushes the new url
  onto the key's array and its \_to spot. When
  generating the \_redirects file the process checks
  to prevent redirecting back to itself.

- Each file starts off with a redirect from the root
  with it's KSUID (e.g. `/26u4qqzwaaaa`)

- The KSUIDs in the source grimoire files are mixed
  case. The are converted to lowercase for the url
  slugs in the deployment process to make the urls
  look nicer
