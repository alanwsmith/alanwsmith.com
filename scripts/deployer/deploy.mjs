#!/usr/bin/env node

import { main } from './lib/main.mjs'

function deploy_site() {
  const config = {
    input_posts_dir:
      '/Users/alan/Library/Mobile Documents/com~apple~CloudDocs/Grimoire',
    output_posts_dir:
      '/Users/alan/workshop/alanwsmith.com/scripts/deployer/test/_output/_prod_test/posts',
    redirect_storage_input:
      '/Users/alan/workshop/alanwsmith.com/scripts/deployer/test/_input/_prod_test/data/redirect_storage.json',
    redirect_storage_output:
      '/Users/alan/workshop/alanwsmith.com/scripts/deployer/test/_output/_prod_test/data/redirect_storage.json',
    redirect_file_path:
      '/Users/alan/workshop/alanwsmith.com/scripts/deployer/test/_output/_prod_test/data/_redirects',
  }

  main(config)
}

deploy_site()
