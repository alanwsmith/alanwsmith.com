This is the second deployer. The first
one did some work for the transition
between gatsby and next.js.

### TODOs

- Deal with the first time a KSUID is
  published

- Setup main.js to not hard code a
  singl file

This one is being made with tests and
will allow for easier managment of
redirects and setup to flip the
url slugs so the KSUID is at the end
instead of the beginning

Things to do:

- [x] Move files to `_posts` directory
- [x] Rename files appropraitely
- [ ] Only publish if status is "archive|scratch|draft|published"
- [x] Add `slug` to the frontmatter of each file
- [ ] Build the redirects file
- [ ] Manage redirects when titles/slugs change
- [ ] Do any image moves necessary and make the Img.js file
- [ ] Make podcast feeds?
- [ ] Make site map
- [ ] Make `/post/{KSUID}` redirects for all files

### Notes

- Redirects are stored in the redirect_storage.json
  file. Each update to that pushes the new url
  onto the key's array and its \_to spot. When
  generating the \_redirects file the process checks
  to prevent redirecting back to itself.
