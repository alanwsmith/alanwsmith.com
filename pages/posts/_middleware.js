import { NextResponse, NextFetchEvent, NextRequest } from 'next/server'

export function middleware(req) {
  return new Response('Hello, world!')

  console.log(req.nextUrl.pathname)

  const currentSlugs = {
    '20eOHoY289ou': '/posts/20eOHoY289ou--just-some-notes-on-education',
    '20eOL8CYeWJE': '/posts/20eOL8CYeWJE--weathergov-api-notes',
    '20eOXPjkVis1': '/posts/20eOXPjkVis1--loop-through-safari-tabs',
    '20eOY1z9DRDA': '/posts/20eOY1z9DRDA--get-face-details-from-rejognition',
    '20eOXMMPGyu2': '/posts/20eOXMMPGyu2--lambda-deployer-bash-script',
    '20eOfjtCl7rl':
      '/posts/20eOfjtCl7rl--loading-aws-javascript-sdk-v3-credentials-from-a-json-file',
    '20eOI7SCkBiX':
      '/posts/20eOI7SCkBiX--store-aws-cli-and-mfa-credentials-in-the-mac-os-keychain-app',
    '20eOIrksWtxc':
      '/posts/20eOIrksWtxc--store-aws-cli-nonmfa-credentials-in-mac-keychain',
    '20eOZrrUtmhA': '/posts/20eOZrrUtmhA--change-user',
    '20eOXz7Cc6Ua':
      '/posts/20eOXz7Cc6Ua--convert-an-image-to-base64-on-the-command-line',
    '20l1rFsYS1XR':
      '/posts/20l1rFsYS1XR--copy-your-ssh-keys-to-a-remote-host-automatically',
    '20eOCrI1lNvf': '/posts/20eOCrI1lNvf--create-a-named-tmux-session',
    '20eOCiFPLwbg': '/posts/20eOCiFPLwbg--create-a-new-tmux-window',
    '20eOa3LJM1Jy': '/posts/20eOa3LJM1Jy--delete-old-files',
    '20eOFXemVMBV':
      '/posts/20eOFXemVMBV--find-and-replace-text-in-strings-with-sed',
    '20eOFUbPOjN4': '/posts/20eOFUbPOjN4--get-a-users-uid-on-a-mac',
    '20eOFJf7gcUu': '/posts/20eOFJf7gcUu--get-current-username',
    '20eOCa58pqiT':
      '/posts/20eOCa58pqiT--get-the-timezone-offset-for-a-mac-from-the-command-line',
    '20eOaZVyeO0L':
      '/posts/20eOaZVyeO0L--how-to-lookup-the-domain-name-server-for-a-domain-from-the-command-line',
    '20eOS94ZWUF1':
      '/posts/20eOS94ZWUF1--ignore-directories-when-running-the-tree-command',
    '20eODSdxx05F': '/posts/20eODSdxx05F--killing-tmux-sessions',
    '20eOETEs6n4O':
      '/posts/20eOETEs6n4O--make-a-line-across-the-terminal-on-your-command-prompt',
    '20eOEISJdUam': '/posts/20eOEISJdUam--make-a-newline-on-a-command-prompt',
    '20eOUr3CIzyH':
      '/posts/20eOUr3CIzyH--making-tmp-files-and-directories-on-the-command-line',
    '20eOhXM2y55j': '/posts/20eOhXM2y55j--move-files-that-match-a-find-pattern',
    '20eOCwdhv9HJ': '/posts/20eOCwdhv9HJ--reattach-to-a-tmux-session',
    '20eObSDAKKEY':
      '/posts/20eObSDAKKEY--rename-multiple-files-on-the-command-line-with-zmv-in-zsh',
    '20eODF5SlZmb': '/posts/20eODF5SlZmb--resize-tmux-window-panes-on-a-mac',
    '20eOAy5hkIqg':
      '/posts/20eOAy5hkIqg--run-a-command-with-the-arguments-of-the-previous-command',
    '20eOQjNEXz87':
      '/posts/20eOQjNEXz87--run-an-applescript-from-the-command-line',
    '20eOeUSq3aHI': '/posts/20eOeUSq3aHI--show-file-creation-time-with-ls',
    '20eO6m2Ypheo': '/posts/20eO6m2Ypheo--show-whats-going-on-with-prompts',
    '20eOEYdirvrL': '/posts/20eOEYdirvrL--utf8-border-characters',
    '20eOPtnZaZ11': '/posts/20eOPtnZaZ11--curl-s-is-for-silent',
    '20eODKnVj7DZ': '/posts/20eODKnVj7DZ--tmux-cheat-sheet',
    '20eOaV3hofgj':
      '/posts/20eOaV3hofgj--add-a-slash-character-to-cloudinary-text',
    '20eOJRsINiB2':
      '/posts/20eOJRsINiB2--course-notes-from-kent-dodds-beginners-guide-to-react-egghead-course',
    '20eOKiyod7sB':
      '/posts/20eOKiyod7sB--basic-process-for-setting-up-a-django-home-page',
    '20eORKvoNZha': '/posts/20eORKvoNZha--for-copy-and-paste',
    '20eOBMU1VMst':
      '/posts/20eOBMU1VMst--create-video-with-a-transparent-alpha-channel-mask',
    '20eOYNV0sJSx':
      '/posts/20eOYNV0sJSx--loop-videos-for-seamless-audio-for-tik-tok-with-ffmpeg',
    '20eOBWfTv6RY': '/posts/20eOBWfTv6RY--remove-audio',
    '20eOHYGY5pMX':
      '/posts/20eOHYGY5pMX--receive-json-in-a-python-flask-server',
    '20eOHm9SBoU5':
      '/posts/20eOHm9SBoU5--send-traffic-from-two-urls-to-one-function',
    '20eOVdROoMzO': '/posts/20eOVdROoMzO--fundamentals--looking-for-errors',
    '20eNzRPhU2VT':
      '/posts/20eNzRPhU2VT--call-a-single-mdx-file-without-making-it-a-page-in-gatsby',
    '20eNwrNPt2xe':
      '/posts/20eNwrNPt2xe--change-mdx-page-url-to-slugs-in-gatsby',
    '20eNyR0mri8B':
      '/posts/20eNyR0mri8B--expect-a-flash-of-unstyled-content-fouc-in-dev-with-tailwind-2-and-gatsby',
    '20eNyqnQaSmS':
      '/posts/20eNyqnQaSmS--external-images-arent-responsive-in-gatsby-with-gatsby-remark-images',
    '20eNtxxB2l50': '/posts/20eNtxxB2l50--gatsby-minimum-site-template',
    '20eNuodyPgTl':
      '/posts/20eNuodyPgTl--gatsby-site-build-with-markdown-and-responsive-images',
    '20eNxcV7pT2Z':
      '/posts/20eNxcV7pT2Z--get-the-latest-mdx-file-with-a-given-tag-in-gatsby',
    '20eObfI5Yfph': '/posts/20eObfI5Yfph--old-notes-on-gatsby-to-examine',
    '20eO0wMcPqOw':
      '/posts/20eO0wMcPqOw--pass-one-or-multiple-queries-to-child-components-in-gatsby',
    '20eODWrSFiCy': '/posts/20eODWrSFiCy--video',
    '20eOcj0U7Eb5':
      '/posts/20eOcj0U7Eb5--output-logs-from-command-line-for-google-chrome',
    '20eOSyaJPuoh': '/posts/20eOSyaJPuoh--pretty-oneline-output-for-git-log',
    '20eNzgJKpS4z': '/posts/20eNzgJKpS4z--graphql-sort-return-values-in-gatsby',
    '20eOBvDDC3V1': '/posts/20eOBvDDC3V1--ideas',
    '20eOJfsQDu5e': '/posts/20eOJfsQDu5e--this-is-a-test-case-thing-dog',
    '20eNlfxqHFfh': '/posts/20eNlfxqHFfh--add-bullet-disks-to-li-elements',
    '20eOBhRuIS5T': '/posts/20eOBhRuIS5T--loop-a-webm-video',
    '20eOd5yH5y1h':
      '/posts/20eOd5yH5y1h--meta-tags-to-use-based-on-the-big-sites',
    '20eNlZi8dq9s': '/posts/20eNlZi8dq9s--get-sub-directories-working',
    '20eNk2yziBP9':
      '/posts/20eNk2yziBP9--set-a-specific-url-for-a-page-in-hugo',
    '20eMyKn5us3b': '/posts/20eMyKn5us3b--idea-ruby-plugin-to-resize-images',
    '20eOdqGrh3X4': '/posts/20eOdqGrh3X4--back-to-work--2021',
    '20eOh1BOaKKs': '/posts/20eOh1BOaKKs--getting-ready-to-record-in-the-house',
    '20eOX38K76cG':
      '/posts/20eOX38K76cG--create-a-multiline-string-in-javascript',
    '20qCrj3NIwHc': '/posts/20qCrj3NIwHc--exit-a-node-script',
    '20eOfuOophLN':
      '/posts/20eOfuOophLN--find-the-problem-package-that-has-hacked',
    '20eOfT5QC3jr':
      '/posts/20eOfT5QC3jr--fixing-a-javascript-syntaxerror--cannot-use-import-statement-outside-a-module-error',
    '20eNkcsTgz8b': '/posts/20eNkcsTgz8b--for-loop-using-let',
    '20eOKqsGiufV':
      '/posts/20eOKqsGiufV--get-data-from-an-api-with-windowfetch',
    '20eNkWo870I5': '/posts/20eNkWo870I5--javascript-while-loop',
    '20eOJMhgFetn':
      '/posts/20eOJMhgFetn--make-a-stand-alone-web-page-that-uses-react-babel-and-jsx',
    '20n1yW8TPJrv':
      '/posts/20n1yW8TPJrv--read-a-json-file-into-an-object-in-javascript',
    '20eOgMvp9V05':
      '/posts/20eOgMvp9V05--read-frontmatter-from-a-markdown-or-mdx-file-in-node-with-graymatter',
    '20eOK6P2EXEy':
      '/posts/20eOK6P2EXEy--serve-a-local-directory-as-a-web-site-with-npx-browsersync',
    '20eNjdoLxtuq': '/posts/20eNjdoLxtuq--sleep-in-javascript',
    '20eOfNDMqtJW':
      '/posts/20eOfNDMqtJW--typeerror-xxx-is-not-a-function-might-be-a-missing-semicolon',
    '20eNkT05XzPn':
      '/posts/20eNkT05XzPn--use-domcontentloaded-to-make-sure-the-dom-is-ready-and-loaded',
    '20eOV4TjLMRx':
      '/posts/20eOV4TjLMRx--use-npm-init-to-create-new-node-projects',
    '20n91sBWCxDA': '/posts/20n91sBWCxDA--write-a-json-file-in-javascript',
    '20eOWaAnulag': '/posts/20eOWaAnulag--uuid',
    '20eO5ZyOyfZm':
      '/posts/20eO5ZyOyfZm--count-lines-in-array-or-possibly-table',
    '20eOGYjTOmWb':
      '/posts/20eOGYjTOmWb--create-a-lua-table-of-anonymous-functions',
    '20eO8S81OUVA': '/posts/20eO8S81OUVA--date-time-stamps-in-lua',
    '20eOFEl52tyT': '/posts/20eOFEl52tyT--find-coditional-match',
    '20eO9MjjUFU2': '/posts/20eO9MjjUFU2--for-loop-in-lua',
    '20eOCGsLb6si': '/posts/20eOCGsLb6si--join-a-table-into-a-string-in-lua',
    '20eOCNmRKOiX': '/posts/20eOCNmRKOiX--push-items-onto-lua-table-via-insert',
    '20eOCFGeFSJt': '/posts/20eOCFGeFSJt--split-a-sting-in-lua',
    '20eOZicg26uT':
      '/posts/20eOZicg26uT--make-a-new-mac-spaces-desktop-in-mission-control',
    '20eO51yRENIL': '/posts/20eO51yRENIL--notification-alert-',
    '20eOdc0cCiIi':
      '/posts/20eOdc0cCiIi--quick-access-to-the-emoji-keyboard-on-a-mac',
    '20eOYiQHeHJs': '/posts/20eOYiQHeHJs--putting-jsx-in-mdx',
    '20eO9GcucPem':
      '/posts/20eO9GcucPem--start-with-amplititue-tracking-telemetry-disabled',
    '20eOUhDGQcdP':
      '/posts/20eOUhDGQcdP--the-meilisearch-database-name-is-datams',
    '20eOUmI3423F':
      '/posts/20eOUmI3423F--using-meilisearch-with-the-python-client',
    '20eOWN9GsjFf': '/posts/20eOWN9GsjFf--nextjs--customized-display',
    '20eOW9oTZ1Pw': '/posts/20eOW9oTZ1Pw--nextjs',
    '20eOEu0XYSid': '/posts/20eOEu0XYSid--business-words-and-phrases',
    '20eNtqdRfJ0w': '/posts/20eNtqdRfJ0w--moonlander-notes',
    '20eOF4ISypjS': '/posts/20eOF4ISypjS--some-terminal-fonts-i-like',
    '20eORDGKNGZ8': '/posts/20eORDGKNGZ8--typing-and-copying-symbols',
    '20eOVU7lOGAa':
      '/posts/20eOVU7lOGAa--movies-i-could-watch-over-and-over-again',
    '20eOesLnhgAh': '/posts/20eOesLnhgAh--setting-up-nextjs-auth',
    '20eOM2nxYFPU': '/posts/20eOM2nxYFPU--drop-a-table',
    '20eOQ52LRyRa': '/posts/20eOQ52LRyRa--is-not-null',
    '20eOLq0hfWLT': '/posts/20eOLq0hfWLT--list-columns-in-a-table',
    '20eOQgJTJ9A9': '/posts/20eOQgJTJ9A9--mysql-data-types',
    '20eOLgreTFms': '/posts/20eOLgreTFms--show-tables',
    '20eOVkjhes5u': '/posts/20eOVkjhes5u--truncate-a-table-in-mysql',
    '20eOR44nIt3g': '/posts/20eOR44nIt3g--logs',
    '20eOLVV2Ymd8':
      '/posts/20eOLVV2Ymd8--set-update-and-remove-netlify-environmental-variables-from-the-command-line',
    '20eOMFIABHqG': '/posts/20eOMFIABHqG--link',
    '20eOb4nI9vrU':
      '/posts/20eOb4nI9vrU--adding-custom-components-to-mdx-in-mdxbundler',
    '20eOWqLOeijO': '/posts/20eOWqLOeijO--basic-form-handling',
    '20eOTTL8GKwz': '/posts/20eOTTL8GKwz--button-example',
    '20eORYds9rBg':
      '/posts/20eORYds9rBg--client-side-api-pull-with-swr-in-nextjs',
    '20eOUB4xH6oL': '/posts/20eOUB4xH6oL--conditional-swr',
    '20eOYZFMfQxz': '/posts/20eOYZFMfQxz--create-a-new-appsite',
    '20eOUMiNCqWk': '/posts/20eOUMiNCqWk--credentails-file-instead-of-env-file',
    '20eOONduqmmj': '/posts/20eOONduqmmj--default-api-example',
    '20eOarv6YQba': '/posts/20eOarv6YQba--dynamic-mdx-pages--v1',
    '20eOO58KWsee': '/posts/20eOO58KWsee--form-for-nextjs',
    '20eONTrG9XV8':
      '/posts/20eONTrG9XV8--get-url-query-parameters-from-a-request-in-nextjs',
    '20eOW53gentZ': '/posts/20eOW53gentZ--keychain-access-and-env-vars',
    '20eOSiBZ5yV6':
      '/posts/20eOSiBZ5yV6--nextauth--delete-cache-and-node-modules',
    '20eOOFnni5zH': '/posts/20eOOFnni5zH--nextauth--signin-samples',
    '20eOTBWkvCTu': '/posts/20eOTBWkvCTu--nextauth-example-pages',
    '20eOWgvLftNf': '/posts/20eOWgvLftNf--protect-api-route',
    '20eOMPXIf9N8': '/posts/20eOMPXIf9N8--open-a-link-in-a-new-tab-in-nextjs',
    '20eOSX8g1YbO': '/posts/20eOSX8g1YbO--setup-nextauth-v4',
    '20eOaywjSF2z': '/posts/20eOaywjSF2z--add-background-color-to-body',
    '20eNwXNJ8gTv': '/posts/20eNwXNJ8gTv--create-a-new-nginx-server-on-a-mac',
    '20eOfC0DjBov':
      '/posts/20eOfC0DjBov--download-a-file-from-s3-with-node-and-v3-of-the-aws-javascript-sdk',
    '20eOfbkFwJ0h':
      '/posts/20eOfbkFwJ0h--nodejs-sharp-error--input-file-contains-unsupported-image-format-might-be-a-race-condition',
    '20eOWLgkJumX': '/posts/20eOWLgkJumX--reinstall-node_modules',
    '20eOYCX1fwrM': '/posts/20eOYCX1fwrM--use-sharp-to-process-an-image',
    '20eOAA7kslNl': '/posts/20eOAA7kslNl--append-data-to-table',
    '20eOFfgXNHxy': '/posts/20eOFfgXNHxy--basic-neovim-gui-test-framework',
    '20eOJEIChtlL': '/posts/20eOJEIChtlL--call-a-command-on-a-specific-buffer',
    '20eO9m2g6H5T':
      '/posts/20eO9m2g6H5T--call-a-vim-function-from-a-lua-script-in-neovim',
    '20eO4Vvl1Rdj': '/posts/20eO4Vvl1Rdj--call-external-command',
    '20eO4SW2A5xK':
      '/posts/20eO4SW2A5xK--call-function-from-autocommand-in-lua',
    '20eO58dOHSFZ': '/posts/20eO58dOHSFZ--call-function-from-insert-mode',
    '20eOAJrAY94N': '/posts/20eOAJrAY94N--call-function-options',
    '20eO7rOFpKoV': '/posts/20eO7rOFpKoV--change-buffer-array-to-string',
    '20eOG1obTlBo': '/posts/20eOG1obTlBo--clear-line-with-api',
    '20eOAZ32oT7o': '/posts/20eOAZ32oT7o--close-a-window-with-the-api',
    '20eO7RENGzB1': '/posts/20eO7RENGzB1--collapse-lines-with-ctrlj',
    '20eO7KsvB1U1': '/posts/20eO7KsvB1U1--console-log-type-terminal-window',
    '20eOYqraV7TK':
      '/posts/20eOYqraV7TK--copy-text-to-the-mac-clippasteboard-in-neovim',
    '20eO6LEUBSsr':
      '/posts/20eO6LEUBSsr--create-a-hello-world-neovim-plugin-in-lua',
    '20eO3vly04VB': '/posts/20eO3vly04VB--create-a-neovim-plugin',
    '20eO8ieouVsQ': '/posts/20eO8ieouVsQ--customize-your-vimneovim-status-bar',
    '20eO9xnC2r4o': '/posts/20eO9xnC2r4o--debugging-log',
    '20eOBAQnc5oL':
      '/posts/20eOBAQnc5oL--delete-buffer-to-close-it-via-the-api',
    '20eOU2EbN2OX': '/posts/20eOU2EbN2OX--disable-prettier-quickfix',
    '20eO4DuH6HyN':
      '/posts/20eO4DuH6HyN--example-plugin-with-window-communication',
    '20eO7DXfUadK': '/posts/20eO7DXfUadK--exit-a-neovim-terminal-window',
    '20eOTbAJhpzj':
      '/posts/20eOTbAJhpzj--fixing-leader-key-that-doesnt-always-work',
    '20eO8sb9hht8':
      '/posts/20eO8sb9hht8--get-a-list-of-buffers-from-the-neovim-api',
    '20eO9Vqj0PZI':
      '/posts/20eO9Vqj0PZI--get-the-current-buffer-id-for-a-window-in-neovim',
    '20eOdST4MN62':
      '/posts/20eOdST4MN62--get-the-current-value-of-environmental-variable-settings-in-neovim',
    '20eO7YjvV2Wh':
      '/posts/20eO7YjvV2Wh--hotkeys-for-neovim-and-how-to-find-them',
    '20eO80VWnjG8':
      '/posts/20eO80VWnjG8--how-to-install-nvim_rocks-on-big-sur-macos-11x',
    '20eO42jkmliE':
      '/posts/20eO42jkmliE--how-to-make-a-hello-world-neovim-plugin-with-lua',
    '20eO3oMS2yaV': '/posts/20eO3oMS2yaV--install-neovim-nightly-on-a-mac',
    '20eODlOTv8F2': '/posts/20eODlOTv8F2--install-busted-test',
    '20eO8YJI56G8': '/posts/20eO8YJI56G8--installing-neorocks',
    '20eO8mJe38nq':
      '/posts/20eO8mJe38nq--list-of-vim-and-probably-neovim-movement-commands',
    '20eO4CEoZxPB':
      '/posts/20eO4CEoZxPB--lua-plugin-hello-world--something-to-review',
    '20eO7ghKQ973':
      '/posts/20eO7ghKQ973--markdown-syntax-highlighting-for-neovim-with-vimmarkdown',
    '20eONxHmQk92':
      '/posts/20eONxHmQk92--my-adventures-in-speeding-up-prettier-for-neovim',
    '20eO96vgOmjQ': '/posts/20eO96vgOmjQ--neovim-command-keys',
    '20eOASPhmrvM': '/posts/20eOASPhmrvM--neovim-scratchpad-plugins',
    '20eOE7yi3Sr1': '/posts/20eOE7yi3Sr1--neovim-tohtml',
    '20eO62WDmYpA': '/posts/20eO62WDmYpA--neovim-variable-tyles',
    '20eO5uXTVO1D': '/posts/20eO5uXTVO1D--open-a-file-programatically',
    '20eOGWCuaVe6':
      '/posts/20eOGWCuaVe6--open-a-new-file-buffer-in-a-floating-neovim-window-with-the-lua-api',
    '20eOGFPzYpGM':
      '/posts/20eOGFPzYpGM--opening-windows-and-file-buffers-with-the-neovim-api-and-commands',
    '20eO4oWB83KA': '/posts/20eO4oWB83KA--packer-luarocks',
    '20eO4cHtpMMm': '/posts/20eO4cHtpMMm--read-and-write-to-buffer',
    '20eO68h2SLfy': '/posts/20eO68h2SLfy--read-file-directly-into-a-buffer',
    '20eOdNHtLws9':
      '/posts/20eOdNHtLws9--remove-the-delay-from-the-escape-key-before-hitting-the-leader-key-in-neovim',
    '20eOTmb3qG4Y':
      '/posts/20eOTmb3qG4Y--remove-tmux-escape-delay-to-avoid-leader-key-delays',
    '20eOGhZtzpyR':
      '/posts/20eOGhZtzpyR--send-a-modifier-via-vimapinvim_feedkeys-in-neovim',
    '20eO5MBdDgtt': '/posts/20eO5MBdDgtt--set-insert-mode-from-function',
    '20eOTtvUnjLp':
      '/posts/20eOTtvUnjLp--set-number-column-width-to-remove-shifting',
    '20eOArAXnmlM': '/posts/20eOArAXnmlM--setup-autocommands-via-the-api',
    '20eOB6fv3iJl':
      '/posts/20eOB6fv3iJl--setup-winclosed-autocommand-for-a-plugin',
    '20eOJ9SQKawR': '/posts/20eOJ9SQKawR--switch-windows',
    '20eODu3I4aSr': '/posts/20eODu3I4aSr--test-neovim-plugins',
    '20eO8EeBFWIm': '/posts/20eO8EeBFWIm--turn-on-word-wrap-in-the-api',
    '20eO8BZnzvS1': '/posts/20eO8BZnzvS1--wrap-text-in-neovim',
    '20eOC6QzLynn':
      '/posts/20eOC6QzLynn--write-to-a-buffer-in-neovim-via-the-api',
    '20eO7jxpUFIL':
      '/posts/20eO7jxpUFIL--write-to-a-log-file-from-a-neovim-lua-plugin',
    '20eO4sP50Jxe': '/posts/20eO4sP50Jxe--json_decode-error',
    '20eOGOvfaVTc': '/posts/20eOGOvfaVTc--nvim_win_call-note',
    '20eON2bGn6ci':
      '/posts/20eON2bGn6ci--get-the-urls-and-names-for-open-safari-tabs-with-applescript',
    '20eOMbOkWHgZ':
      '/posts/20eOMbOkWHgZ--connect-to-multiple-branches-from-the-planetscale-cli',
    '20eOPgR1yP06': '/posts/20eOPgR1yP06--make-password-for-a-different-branch',
    '20eOLdGz0dok':
      '/posts/20eOLdGz0dok--use-serverlessmysql-with-ssltls-to-connect-to-planetscale-from-nextjs',
    '20eOQHSC35Kg': '/posts/20eOQHSC35Kg--play',
    '20eOhEzFbRJ0': '/posts/20eOhEzFbRJ0--podcast-production-checklist',
    '20eOhNeaSYNR': '/posts/20eOhNeaSYNR--thepodofalan-episode-list',
    '20eMYVPXVMEE': '/posts/20eMYVPXVMEE--and-were-back-again',
    '20eLxAWSWPeH': '/posts/20eLxAWSWPeH--like-a-dog',
    '20eM10zMiR4D': '/posts/20eM10zMiR4D--10-off-at-lowes',
    '20eMvhd80bNk':
      '/posts/20eMvhd80bNk--145-types-of-levis-or58-buying-jeans-shouldnt-be-this-complicated',
    '20eMttjGWTot':
      '/posts/20eMttjGWTot--156-pounds--photo-for-october-28-2012',
    '20eLlI2doYem': '/posts/20eLlI2doYem--170000',
    '20eLfQrLF2iT': '/posts/20eLfQrLF2iT--2-quarts',
    '20eLLoIHeWQz': '/posts/20eLLoIHeWQz--2015',
    '20eMJEMIINBl': '/posts/20eMJEMIINBl--200000',
    '20eM9UGJJWuk': '/posts/20eM9UGJJWuk--2009',
    '20eO9Df8OTKb': '/posts/20eO9Df8OTKb--20210613',
    '20eMNSDbyXSf': '/posts/20eMNSDbyXSf--202942-and-done',
    '20eN0XiedIdD': '/posts/20eN0XiedIdD--32-terabytes-of-photo-storage',
    '20eLiKrNVVqM': '/posts/20eLiKrNVVqM--4582',
    '20eM9jzoTK5a': '/posts/20eM9jzoTK5a--6400',
    '20eN6DCvmYu6': '/posts/20eN6DCvmYu6--a-better-channel-listing-design',
    '20eN2iB2ozqh': '/posts/20eN2iB2ozqh--a-bright-new-light-bulb-idea',
    '20eMzdyHxuVt':
      '/posts/20eMzdyHxuVt--a-chapter-a-day-keeps-stagnation-away',
    '20eMx87WbFmp':
      '/posts/20eMx87WbFmp--a-contingency-speech-for-the-first-moon-landing',
    '20eN8RDqh5DO':
      '/posts/20eN8RDqh5DO--a-flexible-responsive-image-solution-for-hugo',
    '20eN2bcaFVNH': '/posts/20eN2bcaFVNH--a-kind-of-redesign',
    '20eMgh896HCN': '/posts/20eMgh896HCN--a-plastic-mushroom',
    '20eM5k7qTJGM': '/posts/20eM5k7qTJGM--a-few-more-dave-ramsey-thoughts',
    '20eLHzZwRODn': '/posts/20eLHzZwRODn--a-few-photos',
    '20eLrLZgPPr5': '/posts/20eLrLZgPPr5--a-few-proof-sets',
    '20eLV4aljMD5': '/posts/20eLV4aljMD5--a-newold-word-bromide',
    '20eLxIzLLWcN': '/posts/20eLxIzLLWcN--a-nice-compliment',
    '20eMY3REWqqT':
      '/posts/20eMY3REWqqT--a-refined-thought-on-great-artists-steal',
    '20eLtJn5lJRN': '/posts/20eLtJn5lJRN--atl',
    '20eMBToJYV4p': '/posts/20eMBToJYV4p--awesome-example-of-80s-trailer',
    '20eOX8fR8NGY': '/posts/20eOX8fR8NGY--aws-mfa-token-updator',
    '20eNR5OgyuxF':
      '/posts/20eNR5OgyuxF--aws-pricing-calculator-save-data-feature-request',
    '20eLbP5aON1B': '/posts/20eLbP5aON1B--aws',
    '20eLGmKNPIFw': '/posts/20eLGmKNPIFw--about-this-web-log',
    '20eMB8ctftP4': '/posts/20eMB8ctftP4--absolute-sandman',
    '20eMlOVEEyCR':
      '/posts/20eMlOVEEyCR--abstract-shadows-and-dew--photo-for-august-25-2012',
    '20eMGgUB784D': '/posts/20eMGgUB784D--acronyms',
    '20eLPcKdTt8R': '/posts/20eLPcKdTt8R--ad-that-keeps-your-attention',
    '20eLQxYUYvRR': '/posts/20eLQxYUYvRR--added-wordpress-spell-check',
    '20eMglvotkey': '/posts/20eMglvotkey--adding-facebook-tags-to-jekyll',
    '20eNVTCoqeNL':
      '/posts/20eNVTCoqeNL--adding-iso-8601-utc-time-zones-to-dates-with-python',
    '20eNd8iSOKwB':
      '/posts/20eNd8iSOKwB--adding-search-to-a-hugo-site-with-match-sorter',
    '20eNHwvkwf9a':
      '/posts/20eNHwvkwf9a--adding-social-media-cards-to-my-hugo-site',
    '20eNJH6rorSB':
      '/posts/20eNJH6rorSB--adding-styles-to-hugos-youtube-shortcode-getting-frustrated-with-djangos-tutorial-and-building-a-screenshot-renamer',
    '20eNHHSlBMHQ':
      '/posts/20eNHHSlBMHQ--adding-tag-links-to-my-hugo-site-posts',
    '20eNVZr0PPQN':
      '/posts/20eNVZr0PPQN--adding-time-zones-to-make-iso-8601-datetimes--stream-notes-for-november-12-2020-livecoding',
    '20eMskxr779a':
      '/posts/20eMskxr779a--aerial-uturn--photo-for-october-19-2012',
    '20eLn9vcrYb0': '/posts/20eLn9vcrYb0--air-filters',
    '20eMqIy4SvWo':
      '/posts/20eMqIy4SvWo--airplane-pressure--photo-for-september-30-2012',
    '20eM6Zze5VRt': '/posts/20eM6Zze5VRt--airplane-sign-hack',
    '20eLuv4UGAJf': '/posts/20eLuv4UGAJf--akismet-spam-killer',
    '20eNLxs8tCaS':
      '/posts/20eNLxs8tCaS--alan-is-currently-listening-to-david-guetta--shot-me-down-ft-skylar-grey',
    '20eMrn9n2nNP':
      '/posts/20eMrn9n2nNP--alien-spider--photo-for-october-11-2012',
    '20eM6h01hfob': '/posts/20eM6h01hfob--alien-watching-the-pres',
    '20eLbggQyQNQ': '/posts/20eLbggQyQNQ--all-work-and-no-play',
    '20eMs34dsqlq':
      '/posts/20eMs34dsqlq--always-cut-the-blue-wire--photo-for-october-13-2012',
    '20eLUKK9SlY3': '/posts/20eLUKK9SlY3--amazing-flashbacks-with-smell',
    '20eMWDN03p54':
      '/posts/20eMWDN03p54--amazons-kindle-iphone-app-is-pretty-good-but-needs-a-dictionary',
    '20eMxIAcUKsO':
      '/posts/20eMxIAcUKsO--an-event-apart-2013-san-francisco-links',
    '20eN7ZDRcI0K':
      '/posts/20eN7ZDRcI0K--an-ode-to-modern-medicine-or-a-search-for-words',
    '20eN6TKIsDIA':
      '/posts/20eN6TKIsDIA--an-xml-schema-xsd-definition-to-prevent-leading-zeros-in-integers',
    '20eMC8VgaCK9': '/posts/20eMC8VgaCK9--an-almost-hit-with-an-online-catalog',
    '20eMtRrrywPP':
      '/posts/20eMtRrrywPP--and-were-in-business--photo-for-october-24-2012',
    '20eLbKItms0R': '/posts/20eLbKItms0R--andriod-dreams',
    '20eZBKkqBgkA': '/posts/20eZBKkqBgkA--animated-gifs-to-make',
    '20eNrTv91y4C':
      '/posts/20eNrTv91y4C--animated-gifs-from-adobe-premiere-and-ffmpeg',
    '20eMDmn2tz45': '/posts/20eMDmn2tz45--another-atl-trip',
    '20eLV86M64xM': '/posts/20eLV86M64xM--another-fountainhead-quote',
    '20eMjwlbWYZP':
      '/posts/20eMjwlbWYZP--another-spider--photo-for-august-16-2012',
    '20eMXnOmVJGS': '/posts/20eMXnOmVJGS--another-crowd-egress-video',
    '20eLzo7zr6Hf':
      '/posts/20eLzo7zr6Hf--another-reason-not-to-shop-at-best-buy',
    '20eMcrlR2VRU':
      '/posts/20eMcrlR2VRU--another-strikeblackstrike-brown-widow',
    '20eLHumyvt20': '/posts/20eLHumyvt20--another-test-photo',
    '20eLNJqmOvmZ':
      '/posts/20eLNJqmOvmZ--ansel-adams-and-the-connection-of-things',
    '20eLh0fg0hae': '/posts/20eLh0fg0hae--answer-fun',
    '20eLS0XAg4T0': '/posts/20eLS0XAg4T0--answering-prompts-in-a-cron-tab',
    '20eMJaIm301z': '/posts/20eMJaIm301z--apparently-im-a-spammer',
    '20eMtjxuYQWS':
      '/posts/20eMtjxuYQWS--apparently-they-still-teach-cursive--photo-for-october-27-2012',
    '20eMTpSEgTpv':
      '/posts/20eMTpSEgTpv--april-fools-day-lasts-for-years-on-the-web',
    '20eMxgEVIKJv':
      '/posts/20eMxgEVIKJv--as-a-matter-of-fact-i-do-own-a-laser-gun',
    '20eN0nhduMt0':
      '/posts/20eN0nhduMt0--assigning-ruby-variables-with-a-case-statement',
    '20eMdrQ3qWiZ': '/posts/20eMdrQ3qWiZ--at-least-i-had-the-aisle-seat',
    '20eNEmy3Nqf0': '/posts/20eNEmy3Nqf0--audiio-licenses',
    '20eMOSt194eu': '/posts/20eMOSt194eu--audio-books-on-ipods',
    '20eNIFRQHMoo': '/posts/20eNIFRQHMoo--audio-stream-volume-tests',
    '20eNxOoTLiW4':
      '/posts/20eNxOoTLiW4--audio-test-sm58--zoom-h5--adobe-audition-radio-announcer-preset',
    '20eNGalzIePN': '/posts/20eNGalzIePN--audio-video-setup-test',
    '20eLRdORrxtz': '/posts/20eLRdORrxtz--aural-assault',
    '20eNTOPbNVqr':
      '/posts/20eNTOPbNVqr--automatic-video-assembler-work--still-working-on-testing-approach--stream-notes-for-november-5-2020-livecoding',
    '20eNsE20lvgV':
      '/posts/20eNsE20lvgV--automating-gif-production-with-adobe-premiere-and-ffmpeg--part-5--february-03-2021',
    '20eLq7lDv0ze':
      '/posts/20eLq7lDv0ze--awesome-the-ir-camera-works-better-than-expected',
    '20eMUvU8Yq6Z': '/posts/20eMUvU8Yq6Z--awesome-video-of-a-moment-in-time',
    '20eM677DXgOW': '/posts/20eM677DXgOW--bcc-vs-fwd',
    '20eMxMjkaiNx': '/posts/20eMxMjkaiNx--bcs-picks-at-work',
    '20eMwicvamj4': '/posts/20eMwicvamj4--bsod',
    '20eMv92eNuG7': '/posts/20eMv92eNuG7--back-up-to-speed',
    '20eLqF8xaeMc':
      '/posts/20eLqF8xaeMc--back-in-my-day-we-didnt-have-the-internet',
    '20eLSoVXmu18': '/posts/20eLSoVXmu18--back-in-town',
    '20eN76Kr5iMu':
      '/posts/20eN76Kr5iMu--back-to-contacts-or-correcting-the-lasik-fade',
    '20eMQnnz0jtl': '/posts/20eMQnnz0jtl--back-to-mac',
    '20eMqcoMvvOw':
      '/posts/20eMqcoMvvOw--backlit-palm--photo-for-october-2-2012',
    '20eMMMFksIh9': '/posts/20eMMMFksIh9--backup-software-powerfolder',
    '20eLQ3qETdzz': '/posts/20eLQ3qETdzz--backup-your-stuff',
    '20eNY6nb9Wu3':
      '/posts/20eNY6nb9Wu3--backups-command-line-tools-and-thank-yous--oh-the-pages-i-goed--nov-19-2020',
    '20eMyvQwkM99': '/posts/20eMyvQwkM99--backyard-double-rainbow',
    '20eMtFPQjGLI':
      '/posts/20eMtFPQjGLI--backyard-water-sports--photo-for-october-23-2012',
    '20eMyoeyHsZB': '/posts/20eMyoeyHsZB--backyard-wildlife--dragonfly',
    '20eMy4vag6jO': '/posts/20eMy4vag6jO--backyard-wildlife--sandhill-cranes',
    '20eMLRzJiN1H': '/posts/20eMLRzJiN1H--bad-ass-graffiti',
    '20eLLgpBcQDS': '/posts/20eLLgpBcQDS--badback-focus',
    '20eMwQi8C9QQ': '/posts/20eMwQi8C9QQ--bama-vs-the-braves-a-logo-comparison',
    '20eLW9GmpOJ5': '/posts/20eLW9GmpOJ5--band-name',
    '20eN5eOx00Wy':
      '/posts/20eN5eOx00Wy--basic-twitter-api-example-scripts-in-ruby-python-and-perl',
    '20eLTtPtE7wS': '/posts/20eLTtPtE7wS--battery-question-for-strobes',
    '20eLdD7Na947': '/posts/20eLdD7Na947--battlestar',
    '20eMW0Ehc79W':
      '/posts/20eMW0Ehc79W--beaten-to-the-punch-on-one-iphone-app-idea',
    '20eMZ3vPfWQz':
      '/posts/20eMZ3vPfWQz--beautiful-slow-motion-footage-of-a-shuttle-launch',
    '20eLVIs7TSd7': '/posts/20eLVIs7TSd7--being-carded',
    '20eLhJXl7rbF': '/posts/20eLhJXl7rbF--belt',
    '20eMDImnywHG': '/posts/20eMDImnywHG--bent-objects',
    '20eMHYp5UrK1': '/posts/20eMHYp5UrK1--beta',
    '20eLPsUJpHZO': '/posts/20eLPsUJpHZO--better-battery-meter',
    '20eMLiDF6Vf7': '/posts/20eMLiDF6Vf7--better-computer-sleep',
    '20eLZFUZvhQN': '/posts/20eLZFUZvhQN--bipolar-posting',
    '20eM8AOgqn2K': '/posts/20eM8AOgqn2K--big-ass-grasshopper',
    '20eLvilwNJyK': '/posts/20eLvilwNJyK--bionics',
    '20eN7TockeOm': '/posts/20eN7TockeOm--bipolar-2017',
    '20eLeknvHSXz': '/posts/20eLeknvHSXz--birthday',
    '20eMcJU5iLCx': '/posts/20eMcJU5iLCx--black-and-white-talk-shows',
    '20eNnaZh1F5E':
      '/posts/20eNnaZh1F5E--black-curtains-installed--journal-for-jan-2-2021',
    '20eLHPLXpIA4': '/posts/20eLHPLXpIA4--black-velvet',
    '20eLzx1rOUvj': '/posts/20eLzx1rOUvj--black-and-white-conversion',
    '20eLqjeSVfq0': '/posts/20eLqjeSVfq0--blog-has-moved',
    '20eLptaSYsRa': '/posts/20eLptaSYsRa--blog-may-go-bye-bye-for-a-bit',
    '20eN6nlG58CB': '/posts/20eN6nlG58CB--blue-angels-in-black-and-white',
    '20eMq4Am7qCb':
      '/posts/20eMq4Am7qCb--blue-sky-ceiling--photo-for-september-29-2012',
    '20eLaivunvcT': '/posts/20eLaivunvcT--book-to-read-',
    '20eMhVdnEiEz': '/posts/20eMhVdnEiEz--books-i-recommend',
    '20eMvn53jGX8': '/posts/20eMvn53jGX8--books-ive-read',
    '20eMHkcsb5JD': '/posts/20eMHkcsb5JD--boston-retinal-implant-project',
    '20eMePNLCi9g': '/posts/20eMePNLCi9g--brendan-eich-ward-cunningham-and-me',
    '20eLyHiXmQVf': '/posts/20eLyHiXmQVf--budget-wino',
    '20eLsc7GssMB': '/posts/20eLsc7GssMB--bug-on-my-windshield',
    '20eLsPQckG9A': '/posts/20eLsPQckG9A--bugs-in-my-chair',
    '20eLrvxyXmFy': '/posts/20eLrvxyXmFy--bugs-in-my-head',
    '20eNCDULLPgz':
      '/posts/20eNCDULLPgz--building-a-process-to-store-script-credentials-in-encrypted-files-livecoding',
    '20eNBmdzao5H':
      '/posts/20eNBmdzao5H--building-an-python-module-for-alteryx-that-enables-the-s3redshift-copy-command-thru-mfa--part-5livecoding',
    '20eMyUyWnbLt':
      '/posts/20eMyUyWnbLt--building-ruby-gli-apps-in-sublime-text-2',
    '20eNEERiWyo4':
      '/posts/20eNEERiWyo4--building-a-local-version-of-giphy--part-1-livecoding',
    '20eNEblgrSEb':
      '/posts/20eNEblgrSEb--building-a-local-version-of-giphy--part-2-livecoding',
    '20eNIviTFilN':
      '/posts/20eNIviTFilN--building-and-finishing-a-safari-url-and-title-puller--part-3',
    '20eNTjmb0s7j':
      '/posts/20eNTjmb0s7j--buliding-a-fast-turnaround-election-tracker--stream-notes-for-november-6-2020-livecoding',
    '20eN7BZkwQXD':
      '/posts/20eN7BZkwQXD--bullet-points-on-bracelets-or-a-wonder-woman-review',
    '20eMWho4DNnq':
      '/posts/20eMWho4DNnq--business-idea--web-based-replacement-for-power-point',
    '20eLkIeXjZcQ': '/posts/20eLkIeXjZcQ--butterfly-effect',
    '20eLIDcYhQXI': '/posts/20eLIDcYhQXI--buy-a-glass',
    '20eLyrTTVw2w': '/posts/20eLyrTTVw2w--buying-cars',
    '20eLc114d2TX': '/posts/20eLc114d2TX--buzzers',
    '20eLO9Dam79k': '/posts/20eLO9Dam79k--cnets-urls',
    '20eLoWsSvEML': '/posts/20eLoWsSvEML--ccleaner-and-hijackthis',
    '20eM0Z2TWEip': '/posts/20eM0Z2TWEip--cf-bulbs',
    '20eMFPPpGcNc': '/posts/20eMFPPpGcNc--camera-stabilizer',
    '20eLTBgQi648': '/posts/20eLTBgQi648--can-see-shit',
    '20eMAq4Pu8fQ': '/posts/20eMAq4Pu8fQ--canon',
    '20eLQdOdCcSS': '/posts/20eLQdOdCcSS--cant-fix-cell-without-a-landline',
    '20eMubEuBAyO':
      '/posts/20eMubEuBAyO--capturing-python-log-output-in-a-variable',
    '20eMCaGuUXaY': '/posts/20eMCaGuUXaY--cats-cradle',
    '20eMkAjVzWmd':
      '/posts/20eMkAjVzWmd--chamblin-bookmine--photo-for-august-18-2012',
    '20eLfinngWiS': '/posts/20eLfinngWiS--changing-gas-prices',
    '20eMOLhzaptd':
      '/posts/20eMOLhzaptd--changing-permalinks-but-it-wont-really-matter',
    '20eMUkgDxLiO':
      '/posts/20eMUkgDxLiO--changing-the-screenshot-directory-on-a-mac',
    '20eMF8duTT3g': '/posts/20eMF8duTT3g--cheating',
    '20eLllMbpK8K': '/posts/20eLllMbpK8K--check-your-tires',
    '20eMJwoF0mwP': '/posts/20eMJwoF0mwP--checking-web-page-efficiency',
    '20eMonTdrldi':
      '/posts/20eMonTdrldi--circuitry--photo-for-september-18-2012',
    '20eLRkXqr3lV': '/posts/20eLRkXqr3lV--civ-is-back',
    '20eMI1kF3pS0':
      '/posts/20eMI1kF3pS0--clear-cache-button--firefox-extension',
    '20eMxnDxjEyJ':
      '/posts/20eMxnDxjEyJ--clearing-the-adobe-extendscript-toolkit-console-window',
    '20eMSsa8sgBT': '/posts/20eMSsa8sgBT--clips-of-content',
    '20eOA6D0pOim':
      '/posts/20eOA6D0pOim--close-multiple-windows-in-a-neovim-plugin-via-the-api',
    '20eMjFahPwem': '/posts/20eMjFahPwem--clouds-august-7-2012',
    '20eMekAGrk3q': '/posts/20eMekAGrk3q--clouds-and-lampposts',
    '20eLtfoMZ4p7': '/posts/20eLtfoMZ4p7--cocaine',
    '20eMKEqVG8A4': '/posts/20eMKEqVG8A4--cognitive-surplus',
    '20eLmHPMAIms': '/posts/20eLmHPMAIms--cold-calling',
    '20eLvByebMhv': '/posts/20eLvByebMhv--cold-medicine',
    '20eMQk2p9W5J':
      '/posts/20eMQk2p9W5J--collection-of-photos-from-the-inauguration-of-president-barack-obama',
    '20eMw1IrJMQv':
      '/posts/20eMw1IrJMQv--command-line-oneliner-to-compare-files-with-md5',
    '20eMVIDYTeBK':
      '/posts/20eMVIDYTeBK--command-line-xml-validation-against-schema-xsd',
    '20eLshk75iov': '/posts/20eLshk75iov--comment-math',
    '20eLi77nMWXc': '/posts/20eLi77nMWXc--comment-spam',
    '20eMEJaB4XSu':
      '/posts/20eMEJaB4XSu--commentary-on-the-idea-of-reading-everything-online',
    '20eLuBWYm5kH': '/posts/20eLuBWYm5kH--commercial-volume',
    '20eLVefhHutp': '/posts/20eLVefhHutp--completing-the-fountainhead',
    '20eLwDOPYXAc': '/posts/20eLwDOPYXAc--complex-alarm-clock',
    '20eLgQYWjgpK': '/posts/20eLgQYWjgpK--compound-interest',
    '20eLRRx6dh9D': '/posts/20eLRRx6dh9D--computer-upgrades-that-hurt',
    '20eM2fhQ0Pyk': '/posts/20eM2fhQ0Pyk--condensed-mythbusters',
    '20eN5WP9X3yg':
      '/posts/20eN5WP9X3yg--configuration-files-and-multiple-ruby-object-constructors',
    '20eMRlB8Zhbv':
      '/posts/20eMRlB8Zhbv--congress-please-stop-worrying-about-the-transition-to-digital-tv',
    '20eMM9Bg94a7': '/posts/20eMM9Bg94a7--consumer-action-handbook',
    '20eLx80rED8f': '/posts/20eLx80rED8f--consumer-search',
    '20eLttfR0hRJ':
      '/posts/20eLttfR0hRJ--contact-info--in-case-of-an-emergency',
    '20eLiaN8gxbS': '/posts/20eLiaN8gxbS--content',
    '20eNE0qJTLLq':
      '/posts/20eNE0qJTLLq--continuing-to-get-used-to-creative-pursuits-on-lithium-et-al',
    '20eMUWLL9nZW': '/posts/20eMUWLL9nZW--controlling-subversion-svn-with-perl',
    '20eN5tdXvWff':
      '/posts/20eN5tdXvWff--convert-a-ruby-array-into-the-keys-of-a-new-hash',
    '20eLQPQ8cLTb': '/posts/20eLQPQ8cLTb--converting-from-blogger-to-wordpress',
    '20eLgv2GD9RD': '/posts/20eLgv2GD9RD--cool-looking-tree',
    '20eLY0Kxrejh': '/posts/20eLY0Kxrejh--cool-tool',
    '20eLhal5c8wt': '/posts/20eLhal5c8wt--cool-url',
    '20eOJqbBmSua':
      '/posts/20eOJqbBmSua--copy-and-paste-between-neovimvim-and-other-apps-on-mac-os',
    '20eMg7kxn9Tl':
      '/posts/20eMg7kxn9Tl--copying-photo-cds-and-dvds-back-to-the-hard-drive',
    '20eNMh1p7UGS': '/posts/20eNMh1p7UGS--copyright-free-audio-test-music',
    '20eLI76riks0': '/posts/20eLI76riks0--copyright-in-photoshop',
    '20eLw37Tei5H': '/posts/20eLw37Tei5H--costume',
    '20eOIydpKSnV':
      '/posts/20eOIydpKSnV--course-notes-from-kent-dodds-beginners-guide-to-react-egghead-course',
    '20eMkpCuPfba': '/posts/20eMkpCuPfba--crane-fly--photo-for-august-22-2012',
    '20eMJVQ5GAqS': '/posts/20eMJVQ5GAqS--crayon-sculptures',
    '20eNvmZo1zeS': '/posts/20eNvmZo1zeS--create-high-quality-gifs-with-ffmpeg',
    '20eNC2nSk9iF':
      '/posts/20eNC2nSk9iF--creating-an-amazon-aws-workspace-and-not-quite-getting-it-to-connect-to-redshift-on-a-different-vpc',
    '20eND5N7CVRK':
      '/posts/20eND5N7CVRK--creating-a-javascript-alphabetize-form-livecoding',
    '20eMgccEV1RR': '/posts/20eMgccEV1RR--creative-types-use-a-contract',
    '20eMzoXN7oM1':
      '/posts/20eMzoXN7oM1--creative-writing-is-rewardingly-hard-work',
    '20eM9gKGIu2d': '/posts/20eM9gKGIu2d--credit-card-alerts',
    '20eMvr59T2uD':
      '/posts/20eMvr59T2uD--currently-reading--olsen-howey-and-mcnally',
    '20eLbAJcWQ0e': '/posts/20eLbAJcWQ0e--customer-service',
    '20eNfNuznT48': '/posts/20eNfNuznT48--draft-advice-for-new-streamers',
    '20eNhwyViewa':
      '/posts/20eNhwyViewa--draft-do-this-first--finance-001-for-techies',
    '20eMFFgUy3qp': '/posts/20eMFFgUy3qp--dvd-flick',
    '20eLVR061k03': '/posts/20eLVR061k03--dads-bio',
    '20eNaVWrUdUB': '/posts/20eNaVWrUdUB--daily-chapters',
    '20eN1dHhOAy6':
      '/posts/20eN1dHhOAy6--date-based-versioning--an-alternative-to-semantic-versioning',
    '20eM9MYWUkLo': '/posts/20eM9MYWUkLo--day-tripping',
    '20eMEzeOGLOm': '/posts/20eMEzeOGLOm--daytripper',
    '20eNmDKcFQ2W': '/posts/20eNmDKcFQ2W--de_magicking-words',
    '20eMzbZRFgzK': '/posts/20eMzbZRFgzK--deceased-dragonfly',
    '20eMqQajqE33': '/posts/20eMqQajqE33--defrosting--photo-for-october-1-2012',
    '20eMgMtkFto0':
      '/posts/20eMgMtkFto0--degrading-the-shopping-experience-as-best-they-can',
    '20eMdf0JY700': '/posts/20eMdf0JY700--deleting-makes-me-nervous',
    '20eNwNV5Qv2b': '/posts/20eNwNV5Qv2b--different-types-of-documentation',
    '20eMkzoY5DN9':
      '/posts/20eMkzoY5DN9--digital-breakup--photo-for-august-23-2012',
    '20eLixXou1P7': '/posts/20eLixXou1P7--digital-cameras--a-technical-marvel-',
    '20eO2MHEoIEo': '/posts/20eO2MHEoIEo--digital-garden-thoughts',
    '20eNdLkr8YZ0': '/posts/20eNdLkr8YZ0--digital-gardening',
    '20eLnspciCcV': '/posts/20eLnspciCcV--digital-ice',
    '20eMQFaRrRUf':
      '/posts/20eMQFaRrRUf--digital-photography-in-the-white-house',
    '20eLO2xSKWfI': '/posts/20eLO2xSKWfI--digital-pinhole-test-one',
    '20eLuNEyklRF': '/posts/20eLuNEyklRF--digital-work',
    '20eLGWd2WnWF': '/posts/20eLGWd2WnWF--digital-and-film',
    '20eMGDfRfzy7': '/posts/20eMGDfRfzy7--dilbert',
    '20eMLXqsfWmX': '/posts/20eMLXqsfWmX--dimmable-cfl',
    '20eN0KXnfaWM':
      '/posts/20eN0KXnfaWM--discarding-websites--an-effort-to-focus-on-fewer-things',
    '20eMiyOFrYBK': '/posts/20eMiyOFrYBK--distressed-ghost',
    '20eLnayazm3O': '/posts/20eLnayazm3O--divesting-of-nikon',
    '20eNKB2xKLQn': '/posts/20eNKB2xKLQn--django-3-tutorail--part-1',
    '20eNKzUruQmE': '/posts/20eNKzUruQmE--django-tutorial-progress-and-focus',
    '20eOIkrII6UM':
      '/posts/20eOIkrII6UM--doctor-who--episodes-to-watch-and-skip-without-spoilers',
    '20eM1GdFrPBz': '/posts/20eM1GdFrPBz--domain-bot',
    '20eM2nniEnaB': '/posts/20eM2nniEnaB--donating-computer-gear',
    '20eMeVI3F4Ms': '/posts/20eMeVI3F4Ms--dont-feed-the-trolls',
    '20eN17j2zHz8':
      '/posts/20eN17j2zHz8--dont-trust-photoshops-javascript-colorsampler',
    '20eLjZcQkIjJ': '/posts/20eLjZcQkIjJ--dont-update-my-options',
    '20eLUbf0mYKV':
      '/posts/20eLUbf0mYKV--dont-drive-while-looking-at-your-laptop',
    '20eLZttwTIRX': '/posts/20eLZttwTIRX--dont-put-your-beer-in-the-freezer',
    '20eN4PlKjnGN':
      '/posts/20eN4PlKjnGN--dont-use-pvc-for-fireworks-launch-tubes',
    '20eMUCrZHgtp': '/posts/20eMUCrZHgtp--donte-your-computers',
    '20eLh7zIjBcL': '/posts/20eLh7zIjBcL--door-handles',
    '20eLwUMuHecG': '/posts/20eLwUMuHecG--dot-matrix-sky-writing',
    '20eLxhuZDqao': '/posts/20eLxhuZDqao--down-time',
    '20eMQ2pd9Oin': '/posts/20eMQ2pd9Oin--download-the-skill-set-you-desire',
    '20eMniiqUSPq':
      '/posts/20eMniiqUSPq--dragonfly--photo-for-september-11-2012',
    '20eNj24napoU':
      '/posts/20eNj24napoU--drawing-from-the-right-side-of-my-brain',
    '20eNibjJDFVj':
      '/posts/20eNibjJDFVj--drawing-from-the-right-side-of-my-brain--part-2',
    '20eMr6zEolgx':
      '/posts/20eMr6zEolgx--driveway-reflection--photo-for-october-6-2012',
    '20eLkVvRa4pL': '/posts/20eLkVvRa4pL--driving-range-bugs-vs-off',
    '20eLbeSxovFd': '/posts/20eLbeSxovFd--drug-scenarios',
    '20eLziPDHawM': '/posts/20eLziPDHawM--etrade-savings-and-online-banking',
    '20eN26kG99Kj':
      '/posts/20eN26kG99Kj--echo-bar-studios--live-session-teaser',
    '20eMT8z7bktT': '/posts/20eMT8z7bktT--ecto--desktop-blogging-software',
    '20eO2Ju423SU': '/posts/20eO2Ju423SU--electron-v12-example-app-template',
    '20eNGAa6B6L8':
      '/posts/20eNGAa6B6L8--elgato-stream-deck-fast-forward-hotkey-for-microsoft-groove',
    '20eN1qXjoBbW':
      '/posts/20eN1qXjoBbW--email-feature-request--auto-file-and-auto-forward',
    '20eN6YvaFV9z':
      '/posts/20eN6YvaFV9z--embedding-a-test-suite-in-a-singlefile-ruby-app-part-1',
    '20eLHaAWpTlH': '/posts/20eLHaAWpTlH--emmy-who-would-have-thought',
    '20eMOgFRpdvi': '/posts/20eMOgFRpdvi--enders-opening',
    '20eMKwHOb8yt': '/posts/20eMKwHOb8yt--eneloop-batteries',
    '20eNQ2uWKfU6':
      '/posts/20eNQ2uWKfU6--enhacing-my-keyboard-maestro-stream-setup-automation--livecoding-stream-notes-for-october-25-2020',
    '20eNH4iIOFlg': '/posts/20eNH4iIOFlg--enjoying-the-noncreative',
    '20eMAA6nUmtt': '/posts/20eMAA6nUmtt--etymology-of-the-drinking-world',
    '20eM7cNE5LcK': '/posts/20eM7cNE5LcK--even-better-batteries',
    '20nkDc2M3sDS':
      '/posts/20nkDc2M3sDS--everybody-should-stream-even-if-you-dont-actually-stream',
    '20eMwGaNV28i':
      '/posts/20eMwGaNV28i--exactly-how-accurate-are-the-expiration-dates-on-pills',
    '20eMFtBorTRh':
      '/posts/20eMFtBorTRh--excellence-in-almost-anything-tends-to-amaze',
    '20eNLhmVtwT7':
      '/posts/20eNLhmVtwT7--explicit-over-implicit-more-code-is-better',
    '20eM6SW2YNZI': '/posts/20eM6SW2YNZI--exploding-porcelain-photos',
    '20eLuOBuc5EQ': '/posts/20eLuOBuc5EQ--explore-linux-drive-on-windows',
    '20eLHnM4GXse': '/posts/20eLHnM4GXse--f3-nostalgia',
    '20eMb3q1hRAw':
      '/posts/20eMb3q1hRAw--facial-flex--filed-under-bizarre--video-for-april-30-2011',
    '20eNYtTDPBDQ':
      '/posts/20eNYtTDPBDQ--fake-file-systems--oh-the-pages-i-goed--nov-22-2020',
    '20eMkYLby4Iv': '/posts/20eMkYLby4Iv--fallsign--photo-for-august-20-2012',
    '20eMeKZZdifJ': '/posts/20eMeKZZdifJ--fancy-soap',
    '20eMU9C16VFH': '/posts/20eMU9C16VFH--farewell-galactica',
    '20eMH4yVMHhq':
      '/posts/20eMH4yVMHhq--farewell-mcnulty-bubbles-lester-omar-kima-bunk',
    '20eMXaEALRGm':
      '/posts/20eMXaEALRGm--fast-moving-robots-are-awesome-and-a-little-scary',
    '20eOcSq6HD7t':
      '/posts/20eOcSq6HD7t--favicon-sizes-and-code-cheat-sheet--2022-edition',
    '20eMNaoR2Aap': '/posts/20eMNaoR2Aap--favorite-icons--new-tool',
    '20eMIAmOOF95': '/posts/20eMIAmOOF95--favorite-icons-aka-favicons',
    '20eNEssArxFZ': '/posts/20eNEssArxFZ--feeling-a-new-kind-of-good',
    '20eOKxYKNVUG':
      '/posts/20eOKxYKNVUG--fetching-data-from-an-api-with-a-button-onclick-event-handler-in-react',
    '20eLYRQElyQu': '/posts/20eLYRQElyQu--fever-dreams',
    '20eMhbtNqolH': '/posts/20eMhbtNqolH--fifteen-years-later',
    '20eN4fyzyTIS':
      '/posts/20eN4fyzyTIS--fifteen-plus-years-building-this-website',
    '20eO2ckdADwW':
      '/posts/20eO2ckdADwW--figuring-out-what-good-feels-like-on-antipsychotics',
    '20eLQmHVOGid': '/posts/20eLQmHVOGid--filezilla--windows-ftp-software',
    '20eMD97KVQOc': '/posts/20eMD97KVQOc--filtered-opinion',
    '20eNUtosf82o':
      '/posts/20eNUtosf82o--finally-got-ffmpegconcat-to-install-on-an-ec2-machine--stream-notes-for-november-10-2020-livecoding',
    '20eLnYeXIdPK': '/posts/20eLnYeXIdPK--financial-data',
    '20eNu8vZ9YZY':
      '/posts/20eNu8vZ9YZY--find-a-deadlock-blocking-query-in-redshift',
    '20eNkDKnX6wi':
      '/posts/20eNkDKnX6wi--finding-and-restoring-a-deleted-file-in-git',
    '20eMxW8l6GbF': '/posts/20eMxW8l6GbF--finding-first-gear-in-a-new-language',
    '20eN0PIVpEqY':
      '/posts/20eN0PIVpEqY--finding-sata-cables-for-seasonic-power-supplies',
    '20eN2pNMCwmT': '/posts/20eN2pNMCwmT--finding-things-in-rubys-objectspace',
    '20eLzMWim4yE': '/posts/20eLzMWim4yE--finepix-f30',
    '20eNMH9xFPGW':
      '/posts/20eNMH9xFPGW--finishing-url-grabber-v1--working-on-a-fix-for-hugos-youtube-autoplay',
    '20eNRbP6LoxR':
      '/posts/20eNRbP6LoxR--finishing-v1-of-the-random-video-assembler--stream-notes-for-october-29-2020-livecoding',
    '20eNN63VKyaS': '/posts/20eNN63VKyaS--finishing-and-practicing',
    '20eLeLd38yrc': '/posts/20eLeLd38yrc--firefox-tracking',
    '20eMIJGhAHFr':
      '/posts/20eMIJGhAHFr--fireshot--firefox-screen-grab-extension',
    '20eLyuByy4EK': '/posts/20eLyuByy4EK--firefox-2-spell-check',
    '20eMyNQf2Mp6': '/posts/20eMyNQf2Mp6--firing-a-hand-cannon',
    '20eLG89zSnmm': '/posts/20eLG89zSnmm--first-post--yeah-yeah',
    '20eNV7cWMhzN':
      '/posts/20eNV7cWMhzN--first-test-of-the-nasa-automatic-music-video-maker',
    '20eMgwokpU6a': '/posts/20eMgwokpU6a--fitbit-arias-design-miss',
    '20eNP7ScHXcv':
      '/posts/20eNP7ScHXcv--fixing-a-wrong-old-version-of-djangoadmin',
    '20eMSOEJkGxY':
      '/posts/20eMSOEJkGxY--fixing-perls-cpan-on-mac-os-x-leopard',
    '20eNMuMGBQdF':
      '/posts/20eNMuMGBQdF--fixing-youtubes-autoplay-to-play-consistently-with-mute-if-necessary--livecoding',
    '20eLjA9CZQCi':
      '/posts/20eLjA9CZQCi--flash-manual-designed-for-digital-cameras',
    '20eMrQ6hYygP':
      '/posts/20eMrQ6hYygP--flying-scorpion--photo-for-october-8-2012',
    '20eLOYpbzL2W': '/posts/20eLOYpbzL2W--flying-with-new-eyes',
    '20eNFzMiMP3C':
      '/posts/20eNFzMiMP3C--focusing-on-the-work-not-the-raw-material',
    '20eMIOsyEsaP': '/posts/20eMIOsyEsaP--fold-ins-of-al-jaffee',
    '20eMy6XAB4u0':
      '/posts/20eMy6XAB4u0--folder-creation-bug-in-adobe-extendscript-toolkit',
    '20eLlgE9Q2KI': '/posts/20eLlgE9Q2KI--follow-up',
    '20eMS8spokJA':
      '/posts/20eMS8spokJA--found-music-and-how-imeem-beats-lastfm',
    '20eLTzPLiUYb': '/posts/20eLTzPLiUYb--found-new-music-the-earlies',
    '20eLpE5W84Bh': '/posts/20eLpE5W84Bh--found-a-lab',
    '20eMZvt2p4Va': '/posts/20eMZvt2p4Va--four-links-for-april-25-2011',
    '20eMZYD7PMf2': '/posts/20eMZYD7PMf2--four-links-for-april-24-2011',
    '20eMa7kf9Xtn': '/posts/20eMa7kf9Xtn--four-links-for-april-26-2011',
    '20eMbA2T2Pq8': '/posts/20eMbA2T2Pq8--four-links-for-april-30-2011',
    '20eMbUXRN1rj': '/posts/20eMbUXRN1rj--four-links-for-may-1-2011',
    '20eMaQd5GAbg': '/posts/20eMaQd5GAbg--four-links-for-april-27-2011',
    '20eMaYe0eyLb': '/posts/20eMaYe0eyLb--four-links-for-april-28-2011',
    '20eMak88YdKi': '/posts/20eMak88YdKi--four-links-for-april-29-2011',
    '20eMCxyFWPd0': '/posts/20eMCxyFWPd0--framing-size',
    '20eLdfuZSUrQ': '/posts/20eLdfuZSUrQ--free-cd-burning-software-for-windows',
    '20eLRyGuPOPZ': '/posts/20eLRyGuPOPZ--free-music-from-downloadcom',
    '20eMJ3P35Pno': '/posts/20eMJ3P35Pno--frog-portrait',
    '20eLnmSpcLKJ': '/posts/20eLnmSpcLKJ--from-a-comment-on-the-media',
    '20eMD1CMONAV': '/posts/20eMD1CMONAV--from-beyond',
    '20eN1QiCCNAk': '/posts/20eN1QiCCNAk--full-length-software-licenses',
    '20eLb5GdCmKS': '/posts/20eLb5GdCmKS--full-moon-prints',
    '20eMLrg5AOzd': '/posts/20eMLrg5AOzd--full-spectrum-cfls',
    '20eLvRwxDHay':
      '/posts/20eLvRwxDHay--fun-video-stop-motion-piano-and-drums',
    '20eMbeRznINm': '/posts/20eMbeRznINm--fun-while-it-lasted',
    '20eLT2Dr7eZk': '/posts/20eLT2Dr7eZk--fun-with-spellcheck',
    '20eMBihtniWT': '/posts/20eMBihtniWT--funny-quote',
    '20eLLzoVl6VQ': '/posts/20eLLzoVl6VQ--further-reading',
    '20eMmUYUzZsT': '/posts/20eMmUYUzZsT--g2--photo-for-september-2-2012',
    '20eLbq6kqQeK': '/posts/20eLbq6kqQeK--games-you-cant-loose',
    '20eO0ggFuBh0':
      '/posts/20eO0ggFuBh0--gatsby-componenet-communication-question',
    '20eMwvhLNYC7': '/posts/20eMwvhLNYC7--geek-desk-color-change',
    '20eO37MUrZqH':
      '/posts/20eO37MUrZqH--generate-free-automatic-live-stream-captions-with-the-web-speech-api',
    '20eMPGuPT7Vz': '/posts/20eMPGuPT7Vz--george-orwells-blog',
    '20eLfoEyNLwg': '/posts/20eLfoEyNLwg--get-a-shredder',
    '20eLOLOoPcn5': '/posts/20eLOLOoPcn5--get-your-passport-now',
    '20eMTGCSQVqe':
      '/posts/20eMTGCSQVqe--get-your-skulls-in-the-home-and-garden-section',
    '20eMfNhLiHUh':
      '/posts/20eMfNhLiHUh--getting-a-spoken-notification-when-a-command-line-process-is-complete',
    '20eNLzSU8zU9':
      '/posts/20eNLzSU8zU9--getting-youtube-autoplay-to-work-in-hugo-shortcodes',
    '20eMBhwcrR9R': '/posts/20eMBhwcrR9R--getting-over-the-hump',
    '20eLYgx4EG7p': '/posts/20eLYgx4EG7p--getting-the-ass-kicked',
    '20eMAajg8Ue4': '/posts/20eMAajg8Ue4--glad-i-missed-it',
    '20eLslhxDLlf': '/posts/20eLslhxDLlf--glocks',
    '20eMVvEJGGTQ':
      '/posts/20eMVvEJGGTQ--go-subscribe-to-kexps-song-of-the-day',
    '20eNkv3epNb4': '/posts/20eNkv3epNb4--going-vod--journal-for-dec-23-2020',
    '20eLgZxaw5Rj': '/posts/20eLgZxaw5Rj--golf-hazard',
    '20eM4kHoZT73': '/posts/20eM4kHoZT73--good-job-mika-brzezinski',
    '20eMWaQbvnns':
      '/posts/20eMWaQbvnns--good-little-open-source-clip-art-site',
    '20eM3KfpBDBB': '/posts/20eM3KfpBDBB--goodbye-mr-wizard',
    '20eMMs75R706': '/posts/20eMMs75R706--google-site-search-bookmarklet',
    '20eM033JQvcI':
      '/posts/20eM033JQvcI--google-spreadsheet-and-the-top-100-checklist',
    '20eLSLK93g3u': '/posts/20eLSLK93g3u--greate-credit-card-guide',
    '20eMuIwhWrXL': '/posts/20eMuIwhWrXL--gridlock--photo-for-october-31-2012',
    '20eNjy70jr6Y': '/posts/20eNjy70jr6Y--grimoire-publisher-spec',
    '20eLs1z7h7AY': '/posts/20eLs1z7h7AY--httrack--website-copier',
    '20eMRdDhB8r2': '/posts/20eMRdDhB8r2--huge-photo-from-the-inauguration',
    '20eMAtsLh75d': '/posts/20eMAtsLh75d--hacking-audio-books',
    '20eMAFVhS0G0': '/posts/20eMAFVhS0G0--hacking-ringlight',
    '20eMC2pVcwmN': '/posts/20eMC2pVcwmN--halloween-2008',
    '20eLOseL6U9O': '/posts/20eLOseL6U9O--halloween-looks',
    '20eM3qu7J6mj': '/posts/20eM3qu7J6mj--handshake',
    '20eMZBcklWLr': '/posts/20eMZBcklWLr--happy-pi-day',
    '20eMEyNRL0yK':
      '/posts/20eMEyNRL0yK--hearing-a-word-without-knowing-what-it-means',
    '20eLhU6JQpoX': '/posts/20eLhU6JQpoX--hearts-and-minds',
    '20eMYwygNwfI':
      '/posts/20eMYwygNwfI--hello-geminoid-and-welcome-back-to-the-uncanny-valley',
    '20eM8ahYMOwK': '/posts/20eM8ahYMOwK--hey-look-some-photos',
    '20eLKQm2hw0k': '/posts/20eLKQm2hw0k--hi-ted-plus-battlestar',
    '20eMPo0C5Y6q': '/posts/20eMPo0C5Y6q--high-speed-for-slow-motion-punches',
    '20eMHvaGzjYH':
      '/posts/20eMHvaGzjYH--high-speed-video-and-full-resolution-in-an-slr',
    '20eLnNjGc1ps': '/posts/20eLnNjGc1ps--hippie-food',
    '20eMVjosYtZj': '/posts/20eMVjosYtZj--hold-music-should-be-mutable',
    '20eMVRpAcrnY': '/posts/20eMVRpAcrnY--holy-cow-juliette-lewis-rocks',
    '20eLNlfCrJJE': '/posts/20eLNlfCrJJE--hot-chocolate',
    '20eM8qJFLNi3': '/posts/20eM8qJFLNi3--hot',
    '20eN7lP79To5':
      '/posts/20eN7lP79To5--how-i-discovered-i-have-bipolar-disorder',
    '20eN8BcnE7W1':
      '/posts/20eN8BcnE7W1--how-to-create-an-amazon-web-services-aws-identity-and-access-management-iam-policy-that-lets-users-manage-their-own-credentials-and-multifactor-authentication-mfa',
    '20eO2oAbUvPI':
      '/posts/20eO2oAbUvPI--how-to-setup-twitch-eventsub-api-subscriptions',
    '20eN65hwB0qB':
      '/posts/20eN65hwB0qB--how-to-convert-a-ruby-array-into-hash-keys',
    '20eNXcrV4p1f':
      '/posts/20eNXcrV4p1f--how-to-fix-aws-cli-tools-when-homebrew-breaks-python',
    '20eMKN2wkU7E': '/posts/20eMKN2wkU7E--how-to-say-it',
    '20eLR7Aqpl0p': '/posts/20eLR7Aqpl0p--how-to-stop-credit-card-offers',
    '20eN8stAvnAx': '/posts/20eN8stAvnAx--hub-initiative-part-1-livecoding',
    '20eNAx7Vj25J': '/posts/20eNAx7Vj25J--hugo-to-aws-s3-deploy-command',
    '20eLhyAzz68T': '/posts/20eLhyAzz68T--hybrid-prices',
    '20eMzwxPZKLe': '/posts/20eMzwxPZKLe--i-future-cyborg',
    '20eNDvV9Nfly': '/posts/20eNDvV9Nfly--i-guess-im-doing-performance-art',
    '20eMhngtSIxM':
      '/posts/20eMhngtSIxM--i-need-to-eat-better-and-get-more-exercise',
    '20eLqhxOd38m':
      '/posts/20eLqhxOd38m--i-dont-know-about-you-but-im-tired-of-the-terror',
    '20eMQz8I4XWY': '/posts/20eMQz8I4XWY--i-have-no-faith-in-lost',
    '20eLS78vVcoa': '/posts/20eLS78vVcoa--i-like-matte-prints-better',
    '20eLeCcaBiJZ': '/posts/20eLeCcaBiJZ--i-made-cool-tools',
    '20eMBEkuavM1':
      '/posts/20eMBEkuavM1--i-see-your-pit-bull-and-raise-you-a-hyena',
    '20eLfICL9AGd': '/posts/20eLfICL9AGd--imax',
    '20eLfzN1Dqz6': '/posts/20eLfzN1Dqz6--img_0001--first-shot',
    '20eLpPYG8rVf': '/posts/20eLpPYG8rVf--ir-camera-shipping',
    '20eLrWMx3JvE': '/posts/20eLrWMx3JvE--ir-proofs',
    '20eLpq4A2yht': '/posts/20eLpq4A2yht--ir-test-shot',
    '20eLomBB8z0S': '/posts/20eLomBB8z0S--ir-conversion-in-progress',
    '20eLfJHa8Pwm': '/posts/20eLfJHa8Pwm--idea--wireless-leash',
    '20eLjqGEwH7r': '/posts/20eLjqGEwH7r--idea-personal-progress-meter',
    '20eNds7blSfJ': '/posts/20eNds7blSfJ--ideas',
    '20eLRWOnkVUL':
      '/posts/20eLRWOnkVUL--identity-theft-protection-by-opting-out',
    '20eNHaqeM2bZ':
      '/posts/20eNHaqeM2bZ--im-not-competing-against-other-streamers',
    '20eLWKpjpK1n': '/posts/20eLWKpjpK1n--impressive-vocals',
    '20eMWQ0JuYgz':
      '/posts/20eMWQ0JuYgz--improvement-idea-for-wordpress-iphone-app',
    '20eMHB8lxSCa': '/posts/20eMHB8lxSCa--improvement-that-isnt-really-one',
    '20eLksW65w7r': '/posts/20eLksW65w7r--in-my-eye',
    '20eMfwafMTg8':
      '/posts/20eMfwafMTg8--in-search-of-the-perfect-photo-naming-convention',
    '20eNHVEZc82j':
      '/posts/20eNHVEZc82j--in-which-i-discover-twitter-autolinks-to-the-wrong-version-of-my-site',
    '20eNSuimwtRo':
      '/posts/20eNSuimwtRo--in-which-i-have-an-mri-and-a-ct-scan-both-of-which-turn-out-fine',
    '20eMhvCiUFrB': '/posts/20eMhvCiUFrB--in-which-i-pretend-to-be-a-time-lord',
    '20eMFWGTJ2Xu': '/posts/20eMFWGTJ2Xu--infrarecorder',
    '20eLp58UdvKx': '/posts/20eLp58UdvKx--infrared-filters',
    '20eMi2AHza3Y': '/posts/20eMi2AHza3Y--infringement-in-sound-clouds-terms',
    '20eLlRAYS1xf': '/posts/20eLlRAYS1xf--initials',
    '20eNIp8zhId0':
      '/posts/20eNIp8zhId0--install-django-and-pulling-urls-and-titles-from-safari-tabs--parts-1-and-2',
    '20eOe9bo4LNU':
      '/posts/20eOe9bo4LNU--install-the-ksuid-command-line-tool-on-a-mac',
    '20eMd3DXwjCe': '/posts/20eMd3DXwjCe--installing-gd-on-mac-os-x-107',
    '20eLhiai4gVf': '/posts/20eLhiai4gVf--interior-door',
    '20eMN4kAdQM2':
      '/posts/20eMN4kAdQM2--internet-find-electronics-training-from-the-navy',
    '20eMg8dnYZzQ': '/posts/20eMg8dnYZzQ--introducing-my-van',
    '20eMiCpkmKyz': '/posts/20eMiCpkmKyz--introducing-the-vanity-tag-project',
    '20eN3df68z4P': '/posts/20eN3df68z4P--introducing-today-i-learned',
    '20eMIopjlCJH':
      '/posts/20eMIopjlCJH--introverted-intuitive-thinking-judging',
    '20eOUVdIIAhN':
      '/posts/20eOUVdIIAhN--inverting-the-order-of-environmental-variables-in-configs',
    '20eLIapK1Z1D': '/posts/20eLIapK1Z1D--invictus',
    '20eMpphCRGmr':
      '/posts/20eMpphCRGmr--invisible-id--photo-for-september-27-2012',
    '20eMKieWTmsS':
      '/posts/20eMKieWTmsS--ironman-worth-the-price-of-admission-',
    '20eNdm0O3wa5':
      '/posts/20eNdm0O3wa5--issue-with-vs-code-auto-complete-on-undo',
    '20eMd96MWAl3': '/posts/20eMd96MWAl3--its-been-dry',
    '20eMeqVnCymr': '/posts/20eMeqVnCymr--its-been-raining',
    '20eMoKLKTaZL':
      '/posts/20eMoKLKTaZL--its-getting-hot-in-here--photo-for-september-16-2012',
    '20eLWRabWR1Z': '/posts/20eLWRabWR1Z--its-about-creating',
    '20eMfHsOstd1': '/posts/20eMfHsOstd1--js-fiddle--a-great-web-dev-tool',
    '20eLGDcxpBhK': '/posts/20eLGDcxpBhK--jack-as-jake',
    '20eMUKtlSAPD': '/posts/20eMUKtlSAPD--java-classpath-for-mac-os-x-leopard',
    '20eMn2KHwYlK':
      '/posts/20eMn2KHwYlK--jay-maisel--photo-for-september-6-2012',
    '20eMx2csq8DO':
      '/posts/20eMx2csq8DO--jekyll-and-github-pages-liquid-date-formatting-examples',
    '20eLacXhkbGe': '/posts/20eLacXhkbGe--jelly-and-jam',
    '20eMLDteYSiZ': '/posts/20eMLDteYSiZ--jim-marshall-proof',
    '20eLfciypIT7': '/posts/20eLfciypIT7--john-butler',
    '20eNA4VCl3vb': '/posts/20eNA4VCl3vb--journal-sept-10-2020',
    '20eNAO0tdtT3': '/posts/20eNAO0tdtT3--journal-sept-11-2020',
    '20eNAf1rU2gP': '/posts/20eNAf1rU2gP--journal-sept-12-2020',
    '20eNBSZD7QZL': '/posts/20eNBSZD7QZL--journal-sept-13-2020',
    '20eNBpoUGmN2': '/posts/20eNBpoUGmN2--journal-sept-14-2020',
    '20eNCLf3bOyS': '/posts/20eNCLf3bOyS--journal-sept-15-2020',
    '20eNCoSFBBe6': '/posts/20eNCoSFBBe6--journal-sept-16-2020',
    '20eNDWBsE0xN': '/posts/20eNDWBsE0xN--journal-sept-20-2020',
    '20eN98rWrULK': '/posts/20eN98rWrULK--journal-sept-6-2020',
    '20eN9KwI5fgS': '/posts/20eN9KwI5fgS--journal-sept-7-2020',
    '20eN9TDhSuMX': '/posts/20eN9TDhSuMX--journal-sept-8-2020',
    '20eN9ZOsqqH6': '/posts/20eN9ZOsqqH6--journal-sept-9-2020',
    '20eNhEQw0R4k': '/posts/20eNhEQw0R4k--journal-for-december-15-2020',
    '20eNLR3RK4EA': '/posts/20eNLR3RK4EA--journaling-to-slow-down-time',
    '20eLv5Wp4eof': '/posts/20eLv5Wp4eof--juggling',
    '20eNDgrMPCSs': '/posts/20eNDgrMPCSs--just-hacking-around',
    '20eNZID9dCN8':
      '/posts/20eNZID9dCN8--just-some-travels--oh-the-pages-i-goed--nov-23-2020',
    '20eNBDNlRzfR':
      '/posts/20eNBDNlRzfR--just-messing-around-with-obs-livecoding',
    '20eO2C2D122R':
      '/posts/20eO2C2D122R--kailh-speed-silvers-are-too-fast-for-me',
    '20eLoc2EC9hV': '/posts/20eLoc2EC9hV--keep-on-learning',
    '20eNlsTTD8Sp':
      '/posts/20eNlsTTD8Sp--keeping-the-name-and-starting-the-blog--journal-for-dec-25-2020',
    '20eNVrcF6NOg': '/posts/20eNVrcF6NOg--ken-is-cool',
    '20eLPD85jwj1': '/posts/20eLPD85jwj1--key-patent-idea',
    '20eNQgTZ9BQp':
      '/posts/20eNQgTZ9BQp--keyboard-maestro-continues-to-impress--journal-for-october-27-2020',
    '20eNWSmn4O3h':
      '/posts/20eNWSmn4O3h--keyboard-maestro-second-brains-and-python-command-line-searching--oh-the-pages-i-goed--nov-14-2020',
    '20eMmNCJVd77':
      '/posts/20eMmNCJVd77--kickoff-saturday-elephant--photo-for-september-1-2012',
    '20eME74K1HdK': '/posts/20eME74K1HdK--kids-tv-nostalgia-',
    '20eLrSttQKqA': '/posts/20eLrSttQKqA--killing-the-ie-clicking-sound',
    '20eMXqjChma8': '/posts/20eMXqjChma8--kuler--adobe-site-for-color-themes',
    '20eLTdJed6vA': '/posts/20eLTdJed6vA--led-light-isnt-quite-ready',
    '20eLcI9Tkdc5': '/posts/20eLcI9Tkdc5--laaaaaazer-printer',
    '20eMZFNhWMgv':
      '/posts/20eMZFNhWMgv--langhorne-slim-plays-jax-tomorrow-night',
    '20eMYS7OSKmT':
      '/posts/20eMYS7OSKmT--launch-of-space-shuttle-discovery--sts128-',
    '20eM0AJOyEx8':
      '/posts/20eM0AJOyEx8--launchy--quick-launch-app-for-windows',
    '20eMnpILL2vf':
      '/posts/20eMnpILL2vf--laying-granny-to-rest--photo-for-september-12-2012',
    '20eLqUs0AO7b': '/posts/20eLqUs0AO7b--lazy',
    '20eNGOLu1GLG': '/posts/20eNGOLu1GLG--lean-step-rinse-repeat',
    '20eNJNeLpHfM':
      '/posts/20eNJNeLpHfM--learning-django-by-making-a-tutorial--part-1',
    '20eNNkKdxLI2':
      '/posts/20eNNkKdxLI2--learning-django-by-making-a-tutorial--part-10--livecoding',
    '20eNJuRuBltJ':
      '/posts/20eNJuRuBltJ--learning-django-by-making-a-tutorial--part-2',
    '20eNKXIhPiBB':
      '/posts/20eNKXIhPiBB--learning-django-by-making-a-tutorial--part-3--and-a-redgreen-output-for-unittest',
    '20eNKdkmhT1G':
      '/posts/20eNKdkmhT1G--learning-django-by-making-a-tutorial--part-4',
    '20eNL91wuaSr':
      '/posts/20eNL91wuaSr--learning-django-by-making-a-tutorial--part-6',
    '20eNLKsF7RGK':
      '/posts/20eNLKsF7RGK--learning-django-by-making-a-tutorial--part-7',
    '20eNNU77I2Wq':
      '/posts/20eNNU77I2Wq--learning-django-by-making-a-tutorial--part-8--livecoding',
    '20eNNwgpUDZj':
      '/posts/20eNNwgpUDZj--learning-django-by-making-a-tutorial--part-9--livecoding',
    '20eNKlsLf2x3':
      '/posts/20eNKlsLf2x3--learning-django-by-making-a-tutorial--part-5',
    '20eLoyI52wYy': '/posts/20eLoyI52wYy--learning-by-doing',
    '20eMacLgHLMa':
      '/posts/20eMacLgHLMa--learning-to-fly-in-time-lapse--video-for-april-28-2011',
    '20eM2ezFHQKJ': '/posts/20eM2ezFHQKJ--lens-review-site',
    '20eMpVuD2DBZ':
      '/posts/20eMpVuD2DBZ--light-and-clouds--photo-for-september-24-2012',
    '20eMsuTnSwK5':
      '/posts/20eMsuTnSwK5--lighting-grid--photo-for-october-20-2012',
    '20eMimPeVsba':
      '/posts/20eMimPeVsba--lightning-off-the-back-porch-august-2nd-2012',
    '20eM7CZ1iRwU': '/posts/20eM7CZ1iRwU--lightroom-resize-not-so-good',
    '20eM2VBW1MAv': '/posts/20eM2VBW1MAv--lightroom-initial-review',
    '20eMPQIWxrcX':
      '/posts/20eMPQIWxrcX--limiting-communication-and-availability',
    '20eM90oYWR2Q': '/posts/20eM90oYWR2Q--links-youve-probably-already-seen',
    '20eM4eHKW86I':
      '/posts/20eM4eHKW86I--list-of-open-source-projects-for-windows',
    '20eNsUi9mssQ':
      '/posts/20eNsUi9mssQ--litmus-test-movies--or-how-to-know-if-were-gonna-be-friends',
    '20eNGEdsLgTl': '/posts/20eNGEdsLgTl--live-coding-playing-with-styles',
    '20eNFv9ue2Af':
      '/posts/20eNFv9ue2Af--live-coding-working-on-my-hugo-website',
    '20eNCTVdnrD3': '/posts/20eNCTVdnrD3--live-editing-of-my-journal-video',
    '20eLYw7ulYD7': '/posts/20eLYw7ulYD7--live-plasma',
    '20eN9lMpDaSq':
      '/posts/20eN9lMpDaSq--livecoding-working-on-my-hugo-web-site',
    '20eN9xdBRGL9':
      '/posts/20eN9xdBRGL9--livecoding-writing-a-python-module-to-provide-aws-mfa-s3redshift-copy-to-alteryx-part-1',
    '20eNFe05yKw7': '/posts/20eNFe05yKw7--livecoding',
    '20eNAHwoxWPx':
      '/posts/20eNAHwoxWPx--livewriting-journal-entry-for-sept-10-2020',
    '20eNAXHYEQq5': '/posts/20eNAXHYEQq5--livewriting-journal-for-sept-11-2020',
    '20eNAnLRzxc9': '/posts/20eNAnLRzxc9--livewriting-journal-for-sept-12-2002',
    '20eNB54ZyCuL': '/posts/20eNB54ZyCuL--livewriting-journal-for-sept-13-2020',
    '20eMTUYGoNuR': '/posts/20eMTUYGoNuR--loads-of-free-music-from-sxsw',
    '20eLaHGWI9bW': '/posts/20eLaHGWI9bW--local-radio-show',
    '20eM8MR0LIO7': '/posts/20eM8MR0LIO7--logo',
    '20eLLQa0sUpU': '/posts/20eLLQa0sUpU--look-my-house',
    '20eNMnQLCcpQ': '/posts/20eNMnQLCcpQ--loopback-unexpected-behavior',
    '20eM8jIuElm0': '/posts/20eM8jIuElm0--lorem-ipsum',
    '20eNFlpz9lxN': '/posts/20eNFlpz9lxN--losing-confidence-but-saying-fuck-it',
    '20eNJ7x2Pr7n':
      '/posts/20eNJ7x2Pr7n--losing-hours-coding-something-you-discover-you-dont-like',
    '20eMsgVHop3s':
      '/posts/20eMsgVHop3s--lost-wings--photo-for-october-18-2012',
    '20eLiUzzb5TF': '/posts/20eLiUzzb5TF--lost',
    '20eM1KPmV07h': '/posts/20eM1KPmV07h--lots-of-visual-charts',
    '20eLU961aLg9': '/posts/20eLU961aLg9--loving-the-drive',
    '20eMzOpnCf5s': '/posts/20eMzOpnCf5s--mac-pareidolia-and-the-moon-rabbit',
    '20eMTNPwHx1B':
      '/posts/20eMTNPwHx1B--mac-software-max--cd-ripper-and-encoder',
    '20eMbM79yv4X':
      '/posts/20eMbM79yv4X--machete-slingshot-crossbow--video-for-may-1-2011',
    '20eMMeFBpIcp': '/posts/20eMMeFBpIcp--mahna-mana',
    '20eNRLEB4kQd':
      '/posts/20eNRLEB4kQd--making-an-ffmpeg-command-to-automatically-assemble-video-clips--stream-notes-for-october-28-2020-livecoding',
    '20eNGWFfzsWR':
      '/posts/20eNGWFfzsWR--making-buttons-on-a-local-hugo-site-to-edit-the-files',
    '20eNTtZBFOOg':
      '/posts/20eNTtZBFOOg--making-progress-on-video-assembler-v4--stream-notes-for-november-7-2020-livecoding',
    '20eNCj219eAi':
      '/posts/20eNCj219eAi--making-some-enhancements-to-my-local-tools-website-livecoding',
    '20eNBPJoaqzo':
      '/posts/20eNBPJoaqzo--making-a-hugo-deploy-tool-and-creating-spotify-hotkeys-livecoding',
    '20eNEShu65SN':
      '/posts/20eNEShu65SN--making-a-python-module-for-alteryx-that-provides-the-aws-s3redshift-copy-statement-with-mfa-livecoding',
    '20eLls5iwEYv': '/posts/20eLls5iwEYv--mall-noise',
    '20eMmk3svOWX':
      '/posts/20eMmk3svOWX--mandalay-bay-corridor--photo-for-september-4-2012',
    '20eLYKdigA9P': '/posts/20eLYKdigA9P--manual-lock',
    '20eMJg8Ck7XW': '/posts/20eMJg8Ck7XW--manufactured-accent',
    '20eLVxwhaZMS': '/posts/20eLVxwhaZMS--marketplace-music',
    '20eLyDUcOyqb': '/posts/20eLyDUcOyqb--marketplace-money-and-credit-cards',
    '20eMcaihwv55': '/posts/20eMcaihwv55--may-the-5th-be-with-you',
    '20eLkQdH2iiT': '/posts/20eLkQdH2iiT--mcdonalds-marketing',
    '20eLcSixSFCB': '/posts/20eLcSixSFCB--medication-station',
    '20eMduQdCbI6': '/posts/20eMduQdCbI6--memorial-day-in-san-francisco',
    '20eLUdU18Kdx': '/posts/20eLUdU18Kdx--merriamwebster-using-distaseful-ads',
    '20eLMb3WBLzR': '/posts/20eLMb3WBLzR--meteor',
    '20eM9EQYo5MQ': '/posts/20eM9EQYo5MQ--might-need-business-cards',
    '20eLXVvG0H2I': '/posts/20eLXVvG0H2I--minor-changes',
    '20eNixF4bZwx': '/posts/20eNixF4bZwx--mission-statement',
    '20eM5w9q6jif': '/posts/20eM5w9q6jif--mixonic',
    '20eLLpUiG8PQ': '/posts/20eLLpUiG8PQ--model-rocket',
    '20eLNNCb1QYx': '/posts/20eLNNCb1QYx--money-making-photography-idea',
    '20eNYPdItzQe':
      '/posts/20eNYPdItzQe--monitor-shopping-and-spinning--oh-the-pages-i-goed--nov-20-2020',
    '20eM0hskL87k': '/posts/20eM0hskL87k--monitor-help',
    '20eLtodbpXhA': '/posts/20eLtodbpXhA--monopoly-again',
    '20eLt9sJmw4D': '/posts/20eLt9sJmw4D--monopoly',
    '20eO5q4Gzpxb':
      '/posts/20eO5q4Gzpxb--moonlander-keyboards-use-oem-row-3-keycaps-made-out-of-pbt',
    '20eNpELB944y': '/posts/20eNpELB944y--moonlanding-on-windows',
    '20eMGUGE2Qcu': '/posts/20eMGUGE2Qcu--more-hands--daft-this-time',
    '20eLyaFxG7w9': '/posts/20eLyaFxG7w9--more-about-money',
    '20eMLxlkbf9y': '/posts/20eMLxlkbf9y--more-comicbook-nostalgia',
    '20eLewYToN0F': '/posts/20eLewYToN0F--more-exploding-things',
    '20eMDOMvjLTW': '/posts/20eMDOMvjLTW--more-falling-barriers-to-entry',
    '20eNUzessAMj':
      '/posts/20eNUzessAMj--more-ffmpeg-on-ec2-now-with-ubuntu--oh-the-pages-i-goed--nov-10-2020',
    '20eM3jXikD05': '/posts/20eM3jXikD05--more-fire-in-the-eyes',
    '20eNYYPFdM2H':
      '/posts/20eNYYPFdM2H--more-of-my-journey--oh-the-pages-i-goed--nov-21-2020',
    '20eMIawe7YOA':
      '/posts/20eMIawe7YOA--more-thouhgts-on-stillmotion-combo-cameras',
    '20eOJxzlyAEb':
      '/posts/20eOJxzlyAEb--morning-kickoff--journal-for-august-9-2021',
    '20eNKrr1cU0F':
      '/posts/20eNKrr1cU0F--morning-music-gaining-confidence-through-streaming-and-making-a-redgreen-unittest-enhancement',
    '20eMsY1KuH93':
      '/posts/20eMsY1KuH93--morning-windshield--photo-for-october-17-2012',
    '20eMk3Yy42OU':
      '/posts/20eMk3Yy42OU--mostly-empty-whiteboard--photo-for-august-17-2012',
    '20eLaCv8jQ2Y': '/posts/20eLaCv8jQ2Y--movie-list',
    '20eNOtPiKfR8':
      '/posts/20eNOtPiKfR8--moving-regex-patterns-into-unittests--livecoding',
    '20eLHSoCU9bo': '/posts/20eLHSoCU9bo--moving-the-code',
    '20eM0Tmc01id': '/posts/20eM0Tmc01id--mozy-backup',
    '20eMoYrPCXKZ':
      '/posts/20eMoYrPCXKZ--much-cooler--photo-for-september-17-2012',
    '20eNXVJzJ8IB': '/posts/20eNXVJzJ8IB--mundane-practice',
    '20eMpeE3PrOG':
      '/posts/20eMpeE3PrOG--mushrooms--photo-for-september-25-2012',
    '20eMBtdocYZG': '/posts/20eMBtdocYZG--music-and-photography',
    '20eLYaavJJt7': '/posts/20eLYaavJJt7--music-to-get',
    '20eLcFQfkXGf': '/posts/20eLcFQfkXGf--musician-josh-rouse',
    '20eN7n2eZbLy': '/posts/20eN7n2eZbLy--my-first-bout-of-suicidal-ideation',
    '20eMTzFJirN5': '/posts/20eMTzFJirN5--my-first-internet-video-post',
    '20eO245mV7fr': '/posts/20eO245mV7fr--my-google-foobar-challenge-streams',
    '20eNpH86fBc7':
      '/posts/20eNpH86fBc7--my-moonlander-layout--day-1--version-25',
    '20eMjYtbiwjm':
      '/posts/20eMjYtbiwjm--my-oreilly-bookshelf--photo-for-august-13-2012',
    '20eN0dsf4mt3': '/posts/20eN0dsf4mt3--my-personal-hard-drive-history',
    '20eMuZv8xrCI':
      '/posts/20eMuZv8xrCI--my-photo-archive-and-file-naming-convention',
    '20eMe7abrTrd': '/posts/20eMe7abrTrd--my-photo-workflow',
    '20eN03mLARWl': '/posts/20eN03mLARWl--my-site-audience',
    '20eO1wr9YMMa':
      '/posts/20eO1wr9YMMa--my-solution-for-the-first-google-foobar-challenge',
    '20eMbxhz16Vd': '/posts/20eMbxhz16Vd--my-fathers-flag',
    '20eLul4uH0P7': '/posts/20eLul4uH0P7--myspace-lacking-rss',
    '20eMsAWG0VN4':
      '/posts/20eMsAWG0VN4--mythbusters--photo-for-october-14-2012',
    '20eMNykIrLmM': '/posts/20eMNykIrLmM--nasa-images',
    '20eMK1rpV5Eg': '/posts/20eMK1rpV5Eg--nato-phonetic-alphabet',
    '20eN4dO81lqz':
      '/posts/20eN4dO81lqz--name-dot-whatever-websites-are-available',
    '20eLd3yhYpGM': '/posts/20eLd3yhYpGM--native-windows-raw-image-viewer',
    '20eLSYfuRQVL': '/posts/20eLSYfuRQVL--net-library--almost-cool',
    '20eNl8EjbrIr':
      '/posts/20eNl8EjbrIr--neutrally-buoyant-shirts--journal-2020-12-24',
    '20eMiU4y3KDb': '/posts/20eMiU4y3KDb--never-be-an-asshole',
    '20eNtipw9Wdj': '/posts/20eNtipw9Wdj--new-background-image-feb-2021',
    '20eM5MaB6TiS': '/posts/20eM5MaB6TiS--new-camera-lust',
    '20eLeuzTp0sY': '/posts/20eLeuzTp0sY--new-camera',
    '20eM9ptOEx2u': '/posts/20eM9ptOEx2u--new-car-lust',
    '20eM7U8CWUHF': '/posts/20eM7U8CWUHF--new-credit-card',
    '20eM1hjGE3sh': '/posts/20eM1hjGE3sh--new-hard-drive-and-the-cable',
    '20eM13Cz4bDQ': '/posts/20eM13Cz4bDQ--new-laptop',
    '20eM1wrnCvg5': '/posts/20eM1wrnCvg5--new-lens--24105--awesome',
    '20eLKWhrosNm': '/posts/20eLKWhrosNm--new-music--again',
    '20eM3fGQZy7m': '/posts/20eM3fGQZy7m--new-music-feist',
    '20eMT3fqwqmK': '/posts/20eMT3fqwqmK--new-music-happy-up-here-by-royksopp-',
    '20eMRucz1owQ':
      '/posts/20eMRucz1owQ--new-music-i-saved-an-airplane-by-cat-scientist',
    '20eLeZXlCSEF': '/posts/20eLeZXlCSEF--new-music-mike-doughty',
    '20eLJEXS6lDZ': '/posts/20eLJEXS6lDZ--new-music',
    '20eLsBGnwVMx': '/posts/20eLsBGnwVMx--new-photo-storage-philosiphy',
    '20eLIr4GOB5W': '/posts/20eLIr4GOB5W--new-program-and-priority-modes',
    '20eLjiphbWEc': '/posts/20eLjiphbWEc--new-rice',
    '20eMuOdwe4KB': '/posts/20eMuOdwe4KB--new-years-sunrise',
    '20eMpzO8NwoV':
      '/posts/20eMpzO8NwoV--new-york-street--photo-for-september-28-2012',
    '20eM7uAPeFKc': '/posts/20eM7uAPeFKc--new-look-and-cloud-photo-test',
    '20eLxmKXWjOj': '/posts/20eLxmKXWjOj--new-quiet-case',
    '20eMALX3ukUJ': '/posts/20eMALX3ukUJ--new-to-me-music-world-leader-pretend',
    '20eNF99wZJ4L':
      '/posts/20eNF99wZJ4L--new-toilets-and-cleaning-the-house-for-the-plumbers',
    '20eMCFk3bQpa': '/posts/20eMCFk3bQpa--new-year',
    '20eLJqY4voJ7': '/posts/20eLJqY4voJ7--news-reader',
    '20eLInedRqvh': '/posts/20eLInedRqvh--next-digital-step',
    '20eLmPm8D9TI': '/posts/20eLmPm8D9TI--next-generations-moment-in-history',
    '20eLkiiyxitD': '/posts/20eLkiiyxitD--next-up-for-mcdonalds',
    '20eMuwM9Dd9J':
      '/posts/20eMuwM9Dd9J--nice-code-formatting-conversion-on-python-site',
    '20eMyeozzueP':
      '/posts/20eMyeozzueP--nice-design-touch-in-rvm-for-autoupdate',
    '20eLPQAfbP8N': '/posts/20eLPQAfbP8N--nice-multimedia',
    '20eMp5vNvuRg':
      '/posts/20eMp5vNvuRg--night-landing--photo-for-september-21-2012',
    '20eLKGYnzFv6': '/posts/20eLKGYnzFv6--night-of-the-matts',
    '20eMzCs8CnJP':
      '/posts/20eMzCs8CnJP--no-books-here--chamblin-bookmine-spacer',
    '20eMJnZfv3dK': '/posts/20eMJnZfv3dK--no-ninjas-in-email',
    '20eNPdyOFmi3':
      '/posts/20eNPdyOFmi3--no-one-is-going-to-steam-my-code--journal-for-october-24-2020',
    '20eMNskbqMmY': '/posts/20eMNskbqMmY--no-idea',
    '20eMFjAaYx9j': '/posts/20eMFjAaYx9j--no-more-polaroids',
    '20eM4qNhRn13': '/posts/20eM4qNhRn13--no-more-spell-checking-emails',
    '20eLdNk5gn4H': '/posts/20eLdNk5gn4H--no-more-technotes',
    '20eLsw0dknP9': '/posts/20eLsw0dknP9--noia-theme',
    '20eLr4LMKRtD': '/posts/20eLr4LMKRtD--nonverbal-communication',
    '20eLZfgzRBby': '/posts/20eLZfgzRBby--nostradamus-cell-phone-gremlin',
    '20eMGpaKfSdZ': '/posts/20eMGpaKfSdZ--not-broken',
    '20eLSgPRPDGJ': '/posts/20eLSgPRPDGJ--not-a-good-day-for-the-tide',
    '20eLvGxBQjHn': '/posts/20eLvGxBQjHn--not-a-good-year-for-the-tide',
    '20eLKm2vQGD0': '/posts/20eLKm2vQGD0--not-ready-for-the-price-of-gas',
    '20eLIYA9pA4Q': '/posts/20eLIYA9pA4Q--not-so-much-with-the-infrared',
    '20eLze5F6gWV': '/posts/20eLze5F6gWV--notepad-',
    '20eMcg4AOfpX': '/posts/20eMcg4AOfpX--now-you-too-can-write-on-my-site',
    '20eMc9wEhexw':
      '/posts/20eMc9wEhexw--now-with-feed-adding-an-rssatom-feed-to-jekyll',
    '20eM8YXg3n0i': '/posts/20eM8YXg3n0i--nuge-in-atl-and-the-31fd',
    '20eLKshEzCiF': '/posts/20eLKshEzCiF--october-sky',
    '20eLJKC0p9J8': '/posts/20eLJKC0p9J8--odd-recommendations',
    '20eMODMUbO99': '/posts/20eMODMUbO99--offline-post-creation',
    '20eNc9mvgxWK': '/posts/20eNc9mvgxWK--oh-the-pages-i-goed--dec-1-2020',
    '20eNfTLuMOBv': '/posts/20eNfTLuMOBv--oh-the-pages-i-goed--dec-10-2020',
    '20eNfntPZt8O': '/posts/20eNfntPZt8O--oh-the-pages-i-goed--dec-11-2020',
    '20eNg9McorUu': '/posts/20eNg9McorUu--oh-the-pages-i-goed--dec-12-2020',
    '20eNgVtirbQJ': '/posts/20eNgVtirbQJ--oh-the-pages-i-goed--dec-13-2020',
    '20eNh1LyYe7C': '/posts/20eNh1LyYe7C--oh-the-pages-i-goed--dec-14-2020',
    '20eNhRIRoNsu': '/posts/20eNhRIRoNsu--oh-the-pages-i-goed--dec-15-2020',
    '20eNhcXsz9CO': '/posts/20eNhcXsz9CO--oh-the-pages-i-goed--dec-16-2020',
    '20eNholh4KdM': '/posts/20eNholh4KdM--oh-the-pages-i-goed--dec-17-2020',
    '20eNiBfazzxu': '/posts/20eNiBfazzxu--oh-the-pages-i-goed--dec-18-2020',
    '20eNiknNeIre': '/posts/20eNiknNeIre--oh-the-pages-i-goed--dec-19-2020',
    '20eNcOOKrjAO': '/posts/20eNcOOKrjAO--oh-the-pages-i-goed--dec-2-2020',
    '20eNjGSXUkao': '/posts/20eNjGSXUkao--oh-the-pages-i-goed--dec-20-2020',
    '20eNjjEtmUm0': '/posts/20eNjjEtmUm0--oh-the-pages-i-goed--dec-21-2020',
    '20eNkKWvTVnP': '/posts/20eNkKWvTVnP--oh-the-pages-i-goed--dec-22-2020',
    '20eNkl9TYF5t': '/posts/20eNkl9TYF5t--oh-the-pages-i-goed--dec-23-2020',
    '20eNl2hjjJWM': '/posts/20eNl2hjjJWM--oh-the-pages-i-goed--dec-24-2020',
    '20eNlnMnblyL': '/posts/20eNlnMnblyL--oh-the-pages-i-goed--dec-25-2020',
    '20eNm4XYN0mq': '/posts/20eNm4XYN0mq--oh-the-pages-i-goed--dec-26-2020',
    '20eNmMFviwBU': '/posts/20eNmMFviwBU--oh-the-pages-i-goed--dec-27-2020',
    '20eNmY16aMKA': '/posts/20eNmY16aMKA--oh-the-pages-i-goed--dec-28-2020',
    '20eNmihfjQxX': '/posts/20eNmihfjQxX--oh-the-pages-i-goed--dec-29-2020',
    '20eNcZy9Y6gw': '/posts/20eNcZy9Y6gw--oh-the-pages-i-goed--dec-3-2020',
    '20eNmr6T6dpB': '/posts/20eNmr6T6dpB--oh-the-pages-i-goed--dec-30-2020',
    '20eNn0QTpxHx': '/posts/20eNn0QTpxHx--oh-the-pages-i-goed--dec-31-2020',
    '20eNcxqGQq7a': '/posts/20eNcxqGQq7a--oh-the-pages-i-goed--dec-4-2020',
    '20eNdVZop6bO': '/posts/20eNdVZop6bO--oh-the-pages-i-goed--dec-5-2020',
    '20eNe9OT58Kb': '/posts/20eNe9OT58Kb--oh-the-pages-i-goed--dec-6-2020',
    '20eNeOH1RPR8': '/posts/20eNeOH1RPR8--oh-the-pages-i-goed--dec-7-2020',
    '20eNeTPzKU9f': '/posts/20eNeTPzKU9f--oh-the-pages-i-goed--dec-8-2020',
    '20eNeuj4csaT': '/posts/20eNeuj4csaT--oh-the-pages-i-goed--dec-9-2020',
    '20eNrh5phMML': '/posts/20eNrh5phMML--oh-the-pages-i-goed--feb-1-2021',
    '20eNulagRS9w': '/posts/20eNulagRS9w--oh-the-pages-i-goed--feb-10-2021',
    '20eNv6P8jxdI': '/posts/20eNv6P8jxdI--oh-the-pages-i-goed--feb-11-2021',
    '20eNvSPfFWZa': '/posts/20eNvSPfFWZa--oh-the-pages-i-goed--feb-12-2021',
    '20eNvpsvTDBC': '/posts/20eNvpsvTDBC--oh-the-pages-i-goed--feb-13-2021',
    '20eNw5fxVORG': '/posts/20eNw5fxVORG--oh-the-pages-i-goed--feb-14-2021',
    '20eNweQcdpbJ': '/posts/20eNweQcdpbJ--oh-the-pages-i-goed--feb-15-2021',
    '20eNww4i452f': '/posts/20eNww4i452f--oh-the-pages-i-goed--feb-16-2021',
    '20eNxGsTepa3': '/posts/20eNxGsTepa3--oh-the-pages-i-goed--feb-17-2021',
    '20eNxu3PeI5p': '/posts/20eNxu3PeI5p--oh-the-pages-i-goed--feb-18-2021',
    '20eNy8emyYti': '/posts/20eNy8emyYti--oh-the-pages-i-goed--feb-19-2021',
    '20eNrpk1kLBe': '/posts/20eNrpk1kLBe--oh-the-pages-i-goed--feb-2-2021',
    '20eNz6EvyblB': '/posts/20eNz6EvyblB--oh-the-pages-i-goed--feb-20-2021',
    '20eO0MKzumsP': '/posts/20eO0MKzumsP--oh-the-pages-i-goed--feb-21-2021',
    '20eO0hu0Blc4': '/posts/20eO0hu0Blc4--oh-the-pages-i-goed--feb-22-2021',
    '20eO12nksHe1': '/posts/20eO12nksHe1--oh-the-pages-i-goed--feb-23-2021',
    '20eO1BqUQkZq': '/posts/20eO1BqUQkZq--oh-the-pages-i-goed--feb-24-2021',
    '20eO1MgQ2PDx': '/posts/20eO1MgQ2PDx--oh-the-pages-i-goed--feb-25-2021',
    '20eO1iv662G3': '/posts/20eO1iv662G3--oh-the-pages-i-goed--feb-26-2021',
    '20eNs8xG9FIK': '/posts/20eNs8xG9FIK--oh-the-pages-i-goed--feb-3-2021',
    '20eNsHfGBk46': '/posts/20eNsHfGBk46--oh-the-pages-i-goed--feb-4-2021',
    '20eNsiYyAxT6': '/posts/20eNsiYyAxT6--oh-the-pages-i-goed--feb-5-2021',
    '20eNswQC89To': '/posts/20eNswQC89To--oh-the-pages-i-goed--feb-6-2021',
    '20eNtBka2d7H': '/posts/20eNtBka2d7H--oh-the-pages-i-goed--feb-7-2021',
    '20eNtbHB0FdF': '/posts/20eNtbHB0FdF--oh-the-pages-i-goed--feb-8-2021',
    '20eNuHEZdftI': '/posts/20eNuHEZdftI--oh-the-pages-i-goed--feb-9-2021',
    '20eNnDUjYj6R': '/posts/20eNnDUjYj6R--oh-the-pages-i-goed--jan-1-2021',
    '20eNoZZwsVGM': '/posts/20eNoZZwsVGM--oh-the-pages-i-goed--jan-10-2021',
    '20eNojDDfB8E': '/posts/20eNojDDfB8E--oh-the-pages-i-goed--jan-11-2021',
    '20eNomXuueqZ': '/posts/20eNomXuueqZ--oh-the-pages-i-goed--jan-12-2021',
    '20eNosgDKAGX': '/posts/20eNosgDKAGX--oh-the-pages-i-goed--jan-13-2021',
    '20eNp4pLLP7a': '/posts/20eNp4pLLP7a--oh-the-pages-i-goed--jan-14-2021',
    '20eNpSrzNPOm': '/posts/20eNpSrzNPOm--oh-the-pages-i-goed--jan-15-2021',
    '20eNpVmnzMRH': '/posts/20eNpVmnzMRH--oh-the-pages-i-goed--jan-16-2021',
    '20eNpdaca3jM': '/posts/20eNpdaca3jM--oh-the-pages-i-goed--jan-18-2021',
    '20eNpsU0OH9R': '/posts/20eNpsU0OH9R--oh-the-pages-i-goed--jan-19-2021',
    '20eNnTlb6yts': '/posts/20eNnTlb6yts--oh-the-pages-i-goed--jan-2-2021',
    '20eNpub2Ju7p': '/posts/20eNpub2Ju7p--oh-the-pages-i-goed--jan-20-2021',
    '20eNq7PiBDrC': '/posts/20eNq7PiBDrC--oh-the-pages-i-goed--jan-21-2021',
    '20eNqD3zeMZv': '/posts/20eNqD3zeMZv--oh-the-pages-i-goed--jan-22-2021',
    '20eNqHxxNrxU': '/posts/20eNqHxxNrxU--oh-the-pages-i-goed--jan-23-2021',
    '20eNqbejDtbf': '/posts/20eNqbejDtbf--oh-the-pages-i-goed--jan-24-2021',
    '20eNqlR7syza': '/posts/20eNqlR7syza--oh-the-pages-i-goed--jan-25-2021',
    '20eNqnjVojX2': '/posts/20eNqnjVojX2--oh-the-pages-i-goed--jan-26-2021',
    '20eNqyX8wnIy': '/posts/20eNqyX8wnIy--oh-the-pages-i-goed--jan-27-2021',
    '20eNr335a2DJ': '/posts/20eNr335a2DJ--oh-the-pages-i-goed--jan-28-2021',
    '20eNrCMMOqf3': '/posts/20eNrCMMOqf3--oh-the-pages-i-goed--jan-29-2021',
    '20eNngxG6yeu': '/posts/20eNngxG6yeu--oh-the-pages-i-goed--jan-3-2021',
    '20eNrKbfJ27X': '/posts/20eNrKbfJ27X--oh-the-pages-i-goed--jan-30-2021',
    '20eNrYVJBSRH': '/posts/20eNrYVJBSRH--oh-the-pages-i-goed--jan-31-2021',
    '20eNnqxYrNaf': '/posts/20eNnqxYrNaf--oh-the-pages-i-goed--jan-4-2021',
    '20eNnz6APHlY': '/posts/20eNnz6APHlY--oh-the-pages-i-goed--jan-5-2021',
    '20eNo32alGSn': '/posts/20eNo32alGSn--oh-the-pages-i-goed--jan-6-2021',
    '20eNoAq6cEiZ': '/posts/20eNoAq6cEiZ--oh-the-pages-i-goed--jan-7-2021',
    '20eNoL4pPNEz': '/posts/20eNoL4pPNEz--oh-the-pages-i-goed--jan-8-2021',
    '20eNoQsMNzsr': '/posts/20eNoQsMNzsr--oh-the-pages-i-goed--jan-9-2021',
    '20eNSMVhW6Q7': '/posts/20eNSMVhW6Q7--oh-the-pages-i-goed--nov-1-2020',
    '20eNX1xihHq4': '/posts/20eNX1xihHq4--oh-the-pages-i-goed--nov-15-2020',
    '20eNXAg1jrj8': '/posts/20eNXAg1jrj8--oh-the-pages-i-goed--nov-16-2020',
    '20eNXmNTuzOY': '/posts/20eNXmNTuzOY--oh-the-pages-i-goed--nov-17-2020',
    '20eNXqikigQq': '/posts/20eNXqikigQq--oh-the-pages-i-goed--nov-18-2020',
    '20eNSqvb24Wz': '/posts/20eNSqvb24Wz--oh-the-pages-i-goed--nov-2-2020',
    '20eNZpdcLuij': '/posts/20eNZpdcLuij--oh-the-pages-i-goed--nov-25-2020',
    '20eNaGUEa4Dj': '/posts/20eNaGUEa4Dj--oh-the-pages-i-goed--nov-26-2020',
    '20eNaZBYc6lO': '/posts/20eNaZBYc6lO--oh-the-pages-i-goed--nov-27-2020',
    '20eNbHGTfKkn': '/posts/20eNbHGTfKkn--oh-the-pages-i-goed--nov-28-2020',
    '20eNbKCc6eyc': '/posts/20eNbKCc6eyc--oh-the-pages-i-goed--nov-29-2020',
    '20eNT6Bg9fUu': '/posts/20eNT6Bg9fUu--oh-the-pages-i-goed--nov-3-2020',
    '20eNbRsXU1PL': '/posts/20eNbRsXU1PL--oh-the-pages-i-goed--nov-30-2020',
    '20eNTGjZCfkk': '/posts/20eNTGjZCfkk--oh-the-pages-i-goed--nov-4-2020',
    '20eNTZlh0PGb': '/posts/20eNTZlh0PGb--oh-the-pages-i-goed--nov-5-2020',
    '20eNTov7LKcs': '/posts/20eNTov7LKcs--oh-the-pages-i-goed--nov-6-2020',
    '20eNU30B1XvM': '/posts/20eNU30B1XvM--oh-the-pages-i-goed--nov-7-2020',
    '20eNUMiKQ77a': '/posts/20eNUMiKQ77a--oh-the-pages-i-goed--nov-8-2020',
    '20eNOVNBzVv0': '/posts/20eNOVNBzVv0--oh-the-pages-i-goed--oct-21-2020',
    '20eNOzezCzdG': '/posts/20eNOzezCzdG--oh-the-pages-i-goed--oct-22-2020',
    '20eNPMgwJMeD': '/posts/20eNPMgwJMeD--oh-the-pages-i-goed--oct-23-2020',
    '20eNPaYLzHAf': '/posts/20eNPaYLzHAf--oh-the-pages-i-goed--oct-24-2020',
    '20eNPuUE9XcJ': '/posts/20eNPuUE9XcJ--oh-the-pages-i-goed--oct-25-2020',
    '20eNQ80C9abo': '/posts/20eNQ80C9abo--oh-the-pages-i-goed--oct-26-2020',
    '20eNQW4qWP7Z': '/posts/20eNQW4qWP7Z--oh-the-pages-i-goed--oct-27-2020',
    '20eNRT7yGIl0': '/posts/20eNRT7yGIl0--oh-the-pages-i-goed--oct-28-2020',
    '20eNRdZ5d2hp': '/posts/20eNRdZ5d2hp--oh-the-pages-i-goed--oct-29-2020',
    '20eNRq1tWPvL': '/posts/20eNRq1tWPvL--oh-the-pages-i-goed--oct-30-2020',
    '20eNNBUxUKtZ': '/posts/20eNNBUxUKtZ--oh-the-places-i-went--oct-16-2020',
    '20eNNXLI64cW': '/posts/20eNNXLI64cW--oh-the-places-i-went--oct-17-2020',
    '20eNNg2nYX4f': '/posts/20eNNg2nYX4f--oh-the-places-i-went--oct-18-2020',
    '20eNO275FeGt': '/posts/20eNO275FeGt--oh-the-places-i-went--oct-19-2020',
    '20eNOK4gHMQP': '/posts/20eNOK4gHMQP--oh-the-places-i-went--oct-20-2020',
    '20eLHI2aOF3m': '/posts/20eLHI2aOF3m--old-eyes--new-eyes',
    '20eLmsHz14r6': '/posts/20eLmsHz14r6--old-magazines',
    '20eLc6CaIpsr': '/posts/20eLc6CaIpsr--old-newspropaganda',
    '20eMKrQTfOrs': '/posts/20eMKrQTfOrs--old-school-marketing-done-right',
    '20eMlRCj9hd1': '/posts/20eMlRCj9hd1--on-label--photo-for-august-26-2012',
    '20eMDcp0rZIx': '/posts/20eMDcp0rZIx--on-the-way-to-aliens',
    '20eMqqrJ1eEV':
      '/posts/20eMqqrJ1eEV--one-million-dollar--photo-for-october-4-2012',
    '20eLkajzKcuY': '/posts/20eLkajzKcuY--one-line-of-code',
    '20eMEa1aBfrk': '/posts/20eMEa1aBfrk--one-more-from-ken-rockwell',
    '20eM48V5gltj': '/posts/20eM48V5gltj--online-graph-paper',
    '20eMX34ajMEa': '/posts/20eMX34ajMEa--online-photo-editor',
    '20eNIVsmbSGc': '/posts/20eNIVsmbSGc--online-toolkit',
    '20eOclxEFhn1':
      '/posts/20eOclxEFhn1--open-graph-images-and-meta-tags-cheat-sheet',
    '20eLy60jdbN2': '/posts/20eLy60jdbN2--open-source-alt',
    '20eM4QcnmcNc': '/posts/20eM4QcnmcNc--open-firewall-for-bittorrent',
    '20eLwn9RAWaZ': '/posts/20eLwn9RAWaZ--opendns',
    '20eMcnCGrSBd': '/posts/20eMcnCGrSBd--operas-address-bar-throws-me-off',
    '20eMGxb1o9Sz': '/posts/20eMGxb1o9Sz--opting-out-of-more-junk-mail',
    '20eLY4F4Ez3d': '/posts/20eLY4F4Ez3d--other-peoples-computers',
    '20eM6sFglWUW': '/posts/20eM6sFglWUW--otis-taylor',
    '20eLL4XMKZUc': '/posts/20eLL4XMKZUc--outsourcing',
    '20eN0BEb0q0e': '/posts/20eN0BEb0q0e--overcast-playlist-feature-request',
    '20eMnLb9K5PG':
      '/posts/20eMnLb9K5PG--overcast-wing--photo-for-september-8-2012',
    '20eM5wlJ5bvj': '/posts/20eM5wlJ5bvj--packrat-good-will',
    '20eLlzC7xwsr': '/posts/20eLlzC7xwsr--page-graphic-maker--pagesaver',
    '20eLwdU10W7t': '/posts/20eLwdU10W7t--pandora-radio',
    '20eMJHyv9Tzf': '/posts/20eMJHyv9Tzf--pano-stuff',
    '20eLJleFvZ7B': '/posts/20eLJleFvZ7B--part-2',
    '20eMupaUJpbH':
      '/posts/20eMupaUJpbH--partially-picking-up-python-with-head-first-python',
    '20eLJg3xwRrm': '/posts/20eLJg3xwRrm--passwords',
    '20eMmn8bEdRA':
      '/posts/20eMmn8bEdRA--penn-amp-bass--photo-for-september-5-2012',
    '20eMqmsJ3l2Q':
      '/posts/20eMqmsJ3l2Q--perfect-mail-day--photo-for-october-3-2012',
    '20eLuZmns3gv': '/posts/20eLuZmns3gv--perl--the-duct-tape-of-the-internet',
    '20eM5Fr4hdyZ': '/posts/20eM5Fr4hdyZ--personal-finance-encouragement',
    '20eMNLFF3Abr': '/posts/20eMNLFF3Abr--pet-sign',
    '20eLvqUuevJ8': '/posts/20eLvqUuevJ8--photo-books',
    '20eMbpAK0MpV':
      '/posts/20eMbpAK0MpV--photo-mechanic-bonus-points--president-of-the-company-responding-on-a-support-forum',
    '20eM29vPhYbs': '/posts/20eM29vPhYbs--photo-workshop',
    '20eMLKmCej6r': '/posts/20eMLKmCej6r--photo-of-stephanie',
    '20eLN7WV0p3t': '/posts/20eLN7WV0p3t--photography-assignment--252',
    '20eLMoGEghQF':
      '/posts/20eLMoGEghQF--photography-is-what-im-supposed-to-do',
    '20eLR3RcZPGI': '/posts/20eLR3RcZPGI--photos-from-the-air-show',
    '20eLM754496B': '/posts/20eLM754496B--photos-of-matt-and-matt',
    '20eM0HyiDG4k':
      '/posts/20eM0HyiDG4k--photoshop-light-room--first-impression',
    '20eM2KW2ugOW': '/posts/20eM2KW2ugOW--photoshop-softfocus',
    '20eMFow7r231':
      '/posts/20eMFow7r231--photoshop-theme-literal-translations-of-popular-idioms',
    '20eMnz65FwKp':
      '/posts/20eMnz65FwKp--picasso-pillar--photo-for-september-13-2012',
    '20eNiSAOYvme': '/posts/20eNiSAOYvme--pinboard-tag-bookmarklet',
    '20eLvZkyYWQx': '/posts/20eLvZkyYWQx--pistol-purchase',
    '20eLvxksaQPH': '/posts/20eLvxksaQPH--pistol-report',
    '20eNIN3heBVx':
      '/posts/20eNIN3heBVx--playing-with-selenium-for-scraping-and-screenshots',
    '20eLp8xACyoG': '/posts/20eLp8xACyoG--pocketmod',
    '20eLoKDLzHn3': '/posts/20eLoKDLzHn3--poor-drive-support-web-site',
    '20eLYpjmODZd': '/posts/20eLYpjmODZd--poor-spam-blocker',
    '20eLXS7iuaEA': '/posts/20eLXS7iuaEA--post-yahoo-list',
    '20eM5VNxPa46': '/posts/20eM5VNxPa46--post-launch-but-still-going',
    '20eNKN18DX45': '/posts/20eNKN18DX45--practice-without-inspiration',
    '20eNM7vGnkN9': '/posts/20eNM7vGnkN9--practicing-on-the-small-stuff',
    '20eMoswwFJUs':
      '/posts/20eMoswwFJUs--predawn-parking--photo-for-september-19-2012',
    '20eLOboqZwEn': '/posts/20eLOboqZwEn--prep-your-portable-player',
    '20eMmZjhqklm':
      '/posts/20eMmZjhqklm--prepping-for-flight--photo-for-september-3-2012',
    '20eLeUhK09gB': '/posts/20eLeUhK09gB--pressure',
    '20eMwXA5xt4X':
      '/posts/20eMwXA5xt4X--pretty-printing-json-via-javascript-or-extension',
    '20eNRvqrNVkR':
      '/posts/20eNRvqrNVkR--primarily-python-url-processing--oh-the-pages-i-goed--oct-31-2020',
    '20eMhkaZ9l27': '/posts/20eMhkaZ9l27--printer-error',
    '20eNlEm9vZrj': '/posts/20eNlEm9vZrj--process--a-video-of-writing',
    '20eM41nnVDyA': '/posts/20eM41nnVDyA--project-cartoon',
    '20eMZgkQCvFA': '/posts/20eMZgkQCvFA--projects-for-the-blog',
    '20eLu4hc1tKR': '/posts/20eLu4hc1tKR--promo-site-thats-note-quite-there',
    '20eM81q9KOpg':
      '/posts/20eM81q9KOpg--proprietary-cables-and-lots-of-storage-space',
    '20eLxbq9vWb1': '/posts/20eLxbq9vWb1--prospercom',
    '20eN6GlgRgY3':
      '/posts/20eN6GlgRgY3--protection-from-adobe-creative-clouds-folder-erasing-bug',
    '20eLyOp8dwZO': '/posts/20eLyOp8dwZO--public-domain-and-the-internet',
    '20eLOl06EcuP': '/posts/20eLOl06EcuP--public-library-access',
    '20eLxv6hrWZz': '/posts/20eLxv6hrWZz--public-wireless',
    '20eMf6Sz8oBZ':
      '/posts/20eMf6Sz8oBZ--publishing-jekyll-posts-in-the-future',
    '20eNS5N0OfXV':
      '/posts/20eNS5N0OfXV--pulling-search-results-from-nasas-images-api-with-testing--stream-notes-for-october-31-2020-livecoding',
    '20eNSWLBiuoo': '/posts/20eNSWLBiuoo--putting-writing-first',
    '20eNVji5xFYu':
      '/posts/20eNVji5xFYu--python-dates-and-times-and-looking-at-load-balancing--oh-the-pages-i-goed--nov-12-2020',
    '20eO2XoYoRnP': '/posts/20eO2XoYoRnP--python-sqlite3-cheat-sheet-examples',
    '20eLqOmO3FSt': '/posts/20eLqOmO3FSt--qqqdirect',
    '20eLTJnwd21B': '/posts/20eLTJnwd21B--quality-music-the-meters',
    '20eMfVg7dXTT':
      '/posts/20eMfVg7dXTT--quick-copy-for-the-current-directory-path',
    '20eM1tiNdcML': '/posts/20eM1tiNdcML--quick-email-backup-hack',
    '20eLn0W750PI': '/posts/20eLn0W750PI--quicksilver',
    '20eLmBRAVd5y': '/posts/20eLmBRAVd5y--quixotic',
    '20eLUwm6zYJB': '/posts/20eLUwm6zYJB--quote-from-ayn-rand',
    '20eLVWMLKyNS': '/posts/20eLVWMLKyNS--quote-on-email-length',
    '20eLWk2ENlbj': '/posts/20eLWk2ENlbj--quote-on-photography',
    '20eLzV2xE3WZ': '/posts/20eLzV2xE3WZ--r60',
    '20eLhHZCxzlJ': '/posts/20eLhHZCxzlJ--raw-images',
    '20eLtPmeHbR5': '/posts/20eLtPmeHbR5--rss-bandit',
    '20eM6ykQa32C': '/posts/20eM6ykQa32C--radiopopper',
    '20eMr0WenY8v':
      '/posts/20eMr0WenY8v--raindrops-on-glass--photo-for-october-5-2012',
    '20eMiZDi7RF7': '/posts/20eMiZDi7RF7--raving-with-lasers',
    '20eN4oFRBmyR':
      '/posts/20eN4oFRBmyR--reading-and-writing-files-with-sqlite',
    '20eLsLQAuwOe': '/posts/20eLsLQAuwOe--real-life-rube-goldbergs',
    '20eOdfB9FviR':
      '/posts/20eOdfB9FviR--reasons-why-i-moved-to-less-pretty-urls',
    '20eMt2a6X5ot':
      '/posts/20eMt2a6X5ot--recharging--photo-for-october-21-2012',
    '20eMV0wdKYuY': '/posts/20eMV0wdKYuY--recovering-deleted-photos',
    '20eMhNrHmlzx': '/posts/20eMhNrHmlzx--recycling-near-you',
    '20eNT9jsGUSw':
      '/posts/20eNT9jsGUSw--refactoring-video-assembler-to-help-with-testing--stream-notes-for-november-4-2020-livecoding',
    '20eLlXwjRUFY': '/posts/20eLlXwjRUFY--refined-communication',
    '20eNI7bmFnLY': '/posts/20eNI7bmFnLY--refining-the-stream-setup',
    '20eMMlfL9HDg': '/posts/20eMMlfL9HDg--relaxed-but-not-really-rested',
    '20eN8dToqGx6': '/posts/20eN8dToqGx6--relief-from-suicidal-ideation',
    '20eNJ1cNgOMh': '/posts/20eNJ1cNgOMh--remember-the-ritual',
    '20eMOtimQd1P': '/posts/20eMOtimQd1P--remote-assassination',
    '20eN2Lgk9RwR': '/posts/20eN2Lgk9RwR--remote-control-storage-solution-mod',
    '20eNtLYOD8tc': '/posts/20eNtLYOD8tc--remove-css-from-your-tutorials',
    '20eLtXKnXTyB': '/posts/20eLtXKnXTyB--repartition-hard-drive',
    '20eLOHYnqe20': '/posts/20eLOHYnqe20--repeating-myself',
    '20eO2xld7LUK':
      '/posts/20eO2xld7LUK--requiring-one-and-only-one-argument-in-a-bash-function',
    '20eN30JbcGup': '/posts/20eN30JbcGup--responsive-reusable-d3-svgs',
    '20eLZLBlevdG': '/posts/20eLZLBlevdG--restoring-calm',
    '20eMc3WepfgR': '/posts/20eMc3WepfgR--return-of-the-site--hello-jekyll',
    '20eML4uk6Wvl': '/posts/20eML4uk6Wvl--reusable-bags-',
    '20eLpfvXFJWM': '/posts/20eLpfvXFJWM--richer-blacks',
    '20eMoWjBc4yi': '/posts/20eMoWjBc4yi--road-trip-sunset',
    '20eMnYYNgeQm':
      '/posts/20eMnYYNgeQm--road-tripping-at-night--photo-for-september-10-2012',
    '20eMtCLjOqrT':
      '/posts/20eMtCLjOqrT--rorschach-test--photo-for-october-22-2012',
    '20eMSfUgkme2': '/posts/20eMSfUgkme2--roxanne-thru-songsmith',
    '20eN2EFUMsI0': '/posts/20eN2EFUMsI0--rsync-exclude-list-for-mac-os-x',
    '20eLaxFm02Z1': '/posts/20eLaxFm02Z1--running-with-lola',
    '20eMtyt9AO1U': '/posts/20eMtyt9AO1U--rusted-ac--photo-for-october-29-2012',
    '20eMX9JwpDgH': '/posts/20eMX9JwpDgH--sec-schedule-app-for-iphone',
    '20eLTmkGXv5f': '/posts/20eLTmkGXv5f--sxsw-showcase',
    '20eLH95qHZRC': '/posts/20eLH95qHZRC--safer-internet-purchases',
    '20eNJiBwfVz7':
      '/posts/20eNJiBwfVz7--sandi-metz--one-undo-away-from-shameless-green',
    '20eMDW4z3HCW': '/posts/20eMDW4z3HCW--sarah-connor',
    '20eMoI0t1guH':
      '/posts/20eMoI0t1guH--saturn-v-at-the-us-space-and-rocket-center--photo-for-september-15-2012',
    '20eLgEs4gXCS': '/posts/20eLgEs4gXCS--save-10',
    '20eM39xYCtq9': '/posts/20eM39xYCtq9--scanning-film',
    '20eLmas4520C': '/posts/20eLmas4520C--scott-love',
    '20eNrvEjVY8b': '/posts/20eNrvEjVY8b--scratchpad',
    '20eMvGPmjvwR': '/posts/20eMvGPmjvwR--secrets-of-your-cable-modem',
    '20eMPaBFmU0Q': '/posts/20eMPaBFmU0Q--secure-gmail',
    '20eN8MchZTcL': '/posts/20eN8MchZTcL--secure-hugo-a-tech-talk',
    '20eMOdMesWTb': '/posts/20eMOdMesWTb--securing-wordpress-for-ssl-admin',
    '20eN1LMksA9P': '/posts/20eN1LMksA9P--self-portrait--november-2014',
    '20eN1xABwo7H': '/posts/20eN1xABwo7H--self-portrait-at-40',
    '20eMsJo6iNjW':
      '/posts/20eMsJo6iNjW--selfportrait-with-vertical-blinds--photo-for-october-15-2012',
    '20eM6DxO9UWy': '/posts/20eM6DxO9UWy--sept-11-flight',
    '20eLIxT9rdHh': '/posts/20eLIxT9rdHh--serenity-now',
    '20eNO9ch8HKl':
      '/posts/20eNO9ch8HKl--setting-up-a-twitch-chatbot--livecoding',
    '20eNEyqqxTH5':
      '/posts/20eNEyqqxTH5--setting-up-a-redshift-cluster-livecoding',
    '20eMdF48GksW':
      '/posts/20eMdF48GksW--setting-the-default-language-in-textmate',
    '20eO3P4T928F':
      '/posts/20eO3P4T928F--setup-a-python-flask-web-server-with-websockets',
    '20eM1SYogNEE': '/posts/20eM1SYogNEE--shiny-screens-seem-to-be-okay',
    '20eMrSmP6fNU':
      '/posts/20eMrSmP6fNU--short-straw--photo-for-october-9-2012',
    '20eNjXWPV2eR': '/posts/20eNjXWPV2eR--show-notes-2020-12-21',
    '20eNKG6TohUk':
      '/posts/20eNKG6TohUk--showing-red-for-failure-and-green-for-success-with-pythons-unittest',
    '20eMYBOFT3Ti': '/posts/20eMYBOFT3Ti--shuttle-launch-lens-determination',
    '20eMrDkaFPax':
      '/posts/20eMrDkaFPax--silhouette-of-frog-in-repose--photo-for-october-7-2012',
    '20eLTZIFZmK2':
      '/posts/20eLTZIFZmK2--sites-that-dont-let-you-copy-urls-are-stupid',
    '20eMHRlE5U6O': '/posts/20eMHRlE5U6O--six-stages',
    '20eM0ruttOId': '/posts/20eM0ruttOId--size',
    '20eMMwJvGvbk': '/posts/20eMMwJvGvbk--skunk-works-and-bootlegging',
    '20eMDwX1OPoi': '/posts/20eMDwX1OPoi--smash-lab--not-good',
    '20eMtYXaKF3Z': '/posts/20eMtYXaKF3Z--snail--photo-for-october-25-2012',
    '20eMjRo7RSUk': '/posts/20eMjRo7RSUk--snakes-and-gators--august-11-2012',
    '20eNJlzlzHMh': '/posts/20eNJlzlzHMh--snippet-get-web-page-in-python',
    '20eMkhNhUQ0A':
      '/posts/20eMkhNhUQ0A--snowy-egret--photo-for-august-21-2012',
    '20eNFVBdmQVA': '/posts/20eNFVBdmQVA--so-they-finally-nailed-protons',
    '20eMEecyi6Pz': '/posts/20eMEecyi6Pz--so-you-wanna-be-a-photographer',
    '20eN2sZcCPaI': '/posts/20eN2sZcCPaI--social-media-app-store-icon',
    '20eLirE318UQ': '/posts/20eLirE318UQ--solar-panels-with-holograms',
    '20eLREoqNm2n': '/posts/20eLREoqNm2n--some-miles-davis',
    '20eMOuvLU1b2': '/posts/20eMOuvLU1b2--some-more-web-tools',
    '20eM7jH4tfAg': '/posts/20eM7jH4tfAg--someday-ill-get-to-inbox-zero',
    '20eLmpu9tT0r': '/posts/20eLmpu9tT0r--something-happy',
    '20eMSiP0U3X3':
      '/posts/20eMSiP0U3X3--sonys-latest-electronic-gaget-from-the-onion',
    '20eMYkDgyNwz': '/posts/20eMYkDgyNwz--sound-of-a-shuttle-launch',
    '20eMXbMMvHy9': '/posts/20eMXbMMvHy9--space-shuttle-launch-web-resources',
    '20eMnW0pYfRg': '/posts/20eMnW0pYfRg--speaker--photo-for-september-9-2012',
    '20eLGZiLfSNK': '/posts/20eLGZiLfSNK--speaking-of-movies',
    '20eLdTPnv7jh': '/posts/20eLdTPnv7jh--speed-up-firefox-a-little',
    '20eMG4RTWKlW': '/posts/20eMG4RTWKlW--speed-and-angels',
    '20eLxObOiGcs': '/posts/20eLxObOiGcs--speedcasts',
    '20eLaTZkUG2c': '/posts/20eLaTZkUG2c--spelling-inbox',
    '20eNFKdtlWFK':
      '/posts/20eNFKdtlWFK--spotify-feature-request-applescript-favslikes-api',
    '20eMNhMhMyV8': '/posts/20eMNhMhMyV8--st-johns-county-library-uses-codebar',
    '20eNgky2z0sE': '/posts/20eNgky2z0sE--starting-my-project-tracker',
    '20eOJcL5xXkc':
      '/posts/20eOJcL5xXkc--starting-on-react--journal-for-august-8-2021',
    '20eLPjx7nxxG': '/posts/20eLPjx7nxxG--starting-wordpress-notes',
    '20eNDNrT4KrB':
      '/posts/20eNDNrT4KrB--starting-a-post-about-doing-performance-art-livewriting',
    '20eMYhMYLUB6':
      '/posts/20eMYhMYLUB6--starting-off-with-a-bang-black-joe-lewis--gunpowder',
    '20eLJ7WCvbbt': '/posts/20eLJ7WCvbbt--states',
    '20eN0zmTX7EV': '/posts/20eN0zmTX7EV--stay-one-undo-away-from-green',
    '20eN3DMZFYUV': '/posts/20eN3DMZFYUV--steps-for-writing-a-blog-post',
    '20eMnGZeiiTB':
      '/posts/20eMnGZeiiTB--steve-inglima-teaching-at-photoshop-world',
    '20eONiL1BCsz':
      '/posts/20eONiL1BCsz--storing-local-environmental-variables-securely-in-password-managers-instead-of-plaintext-env-files',
    '20eNOj6lvhSj':
      '/posts/20eNOj6lvhSj--storing-script-passwords-in-macs-keychain',
    '20eNcXry8EGL': '/posts/20eNcXry8EGL--stream-notes-2020-12-03',
    '20eNcpl3KedY': '/posts/20eNcpl3KedY--stream-notes-2020-12-04',
    '20eNdC8FLWBu': '/posts/20eNdC8FLWBu--stream-notes-2020-12-05',
    '20eNdatuKnzu': '/posts/20eNdatuKnzu--stream-notes-2020-12-06-2',
    '20eNe3iDh0MZ': '/posts/20eNe3iDh0MZ--stream-notes-2020-12-06',
    '20eNeJ04M3vJ': '/posts/20eNeJ04M3vJ--stream-notes-2020-12-07',
    '20eNeoR4xaLL': '/posts/20eNeoR4xaLL--stream-notes-2020-12-08',
    '20eNf5NEV5IR': '/posts/20eNf5NEV5IR--stream-notes-2020-12-09',
    '20eNfInDbjuH': '/posts/20eNfInDbjuH--stream-notes-2020-12-10',
    '20eNfbt4Jhiz': '/posts/20eNfbt4Jhiz--stream-notes-2020-12-11',
    '20eNg42YqvjY': '/posts/20eNg42YqvjY--stream-notes-2020-12-12',
    '20eNgFgBoD4N': '/posts/20eNgFgBoD4N--stream-notes-december-12-2020',
    '20eNgLqYgtkD':
      '/posts/20eNgLqYgtkD--stream-notes-december-13-2020--part-1',
    '20eNgg3DiTLG':
      '/posts/20eNgg3DiTLG--stream-notes-december-13-2020--part-2',
    '20eNgss9bP47': '/posts/20eNgss9bP47--stream-notes-december-14-2020',
    '20eNh7ji1tw1': '/posts/20eNh7ji1tw1--stream-notes-december-15-2020',
    '20eNhWc2wwsh': '/posts/20eNhWc2wwsh--stream-notes-december-16-2020',
    '20eNsXaUq37G': '/posts/20eNsXaUq37G--stream-notes-february-04-2021',
    '20eNsmkBWSoE': '/posts/20eNsmkBWSoE--stream-notes-february-05-2021',
    '20eNt6QXSANi': '/posts/20eNt6QXSANi--stream-notes-february-06-2021',
    '20eNtTucp1VP': '/posts/20eNtTucp1VP--stream-notes-february-08-2021',
    '20eNvEiBIHnn': '/posts/20eNvEiBIHnn--stream-notes-february-11-2021',
    '20eNvbNXEp7g': '/posts/20eNvbNXEp7g--stream-notes-february-12-2021',
    '20eNvyI5Pey4': '/posts/20eNvyI5Pey4--stream-notes-february-13-2021',
    '20eNwH3nwW3v': '/posts/20eNwH3nwW3v--stream-notes-february-14-2021',
    '20eNwi321b8N': '/posts/20eNwi321b8N--stream-notes-february-15-2021',
    '20eNx7TLIeuH': '/posts/20eNx7TLIeuH--stream-notes-february-16-2021',
    '20eNxXW1FVYj': '/posts/20eNxXW1FVYj--stream-notes-february-17-2021',
    '20eNxlyDhnX0': '/posts/20eNxlyDhnX0--stream-notes-february-18-2021',
    '20eNy3Fjw5bj': '/posts/20eNy3Fjw5bj--stream-notes-february-19-2021',
    '20eNyyFmPXvw':
      '/posts/20eNyyFmPXvw--stream-notes-february-20-2021--part-1',
    '20eNzDj6D82W':
      '/posts/20eNzDj6D82W--stream-notes-february-20-2021--part-2',
    '20eNzQK7oEKx':
      '/posts/20eNzQK7oEKx--stream-notes-february-20-2021--part-3',
    '20eO06J7GKtM': '/posts/20eO06J7GKtM--stream-notes-february-21-2021',
    '20eO0Yz8bCSk': '/posts/20eO0Yz8bCSk--stream-notes-february-22-2021',
    '20eO1FRnATCv': '/posts/20eO1FRnATCv--stream-notes-february-25-2021',
    '20eO1g9ZyGej': '/posts/20eO1g9ZyGej--stream-notes-february-26-2021',
    '20eNc29wYBKe':
      '/posts/20eNc29wYBKe--stream-notes-for-december-1-2020-livecoding',
    '20eNiJ82KkcT':
      '/posts/20eNiJ82KkcT--stream-notes-for-december-18-2020-livecoding',
    '20eNj9BLtnj9':
      '/posts/20eNj9BLtnj9--stream-notes-for-december-19-2020-livecoding',
    '20eNcJNVTg1i':
      '/posts/20eNcJNVTg1i--stream-notes-for-december-2-2020-livecoding',
    '20eNjS3jotgM':
      '/posts/20eNjS3jotgM--stream-notes-for-december-20-2020-livecoding',
    '20eNSEqRTo7L':
      '/posts/20eNSEqRTo7L--stream-notes-for-november-1-2020-livecoding',
    '20eNWHrKrMXL':
      '/posts/20eNWHrKrMXL--stream-notes-for-november-14-2020-livecoding--part-1',
    '20eNWAermCTJ':
      '/posts/20eNWAermCTJ--stream-notes-for-november-14-2020-livecoding--part-2',
    '20eNWlCQVTGV':
      '/posts/20eNWlCQVTGV--stream-notes-for-november-15-2020-livecoding--part-1',
    '20eNWeSi3fi8':
      '/posts/20eNWeSi3fi8--stream-notes-for-november-15-2020-livecoding--part-2',
    '20eNX89qjJR3':
      '/posts/20eNX89qjJR3--stream-notes-for-november-16-2020-livecoding',
    '20eNXMuGQGTh':
      '/posts/20eNXMuGQGTh--stream-notes-for-november-17-2020-livecoding',
    '20eNY2NdHAy7':
      '/posts/20eNY2NdHAy7--stream-notes-for-november-18-2020-livecoding',
    '20eNYBa1ddPh':
      '/posts/20eNYBa1ddPh--stream-notes-for-november-19-2020-livecoding',
    '20eNYWOIXSTj':
      '/posts/20eNYWOIXSTj--stream-notes-for-november-20-2020-livecoding',
    '20eNYffxF0gv':
      '/posts/20eNYffxF0gv--stream-notes-for-november-21-2020-livecoding',
    '20eNZ0TBGC3a':
      '/posts/20eNZ0TBGC3a--stream-notes-for-november-22-2020-livecoding--part-1',
    '20eNZ9cepJu4':
      '/posts/20eNZ9cepJu4--stream-notes-for-november-22-2020-livecoding--part-2',
    '20eNZLHkKYLA':
      '/posts/20eNZLHkKYLA--stream-notes-for-november-23-2020-livecoding',
    '20eNZd7L0Ixn':
      '/posts/20eNZd7L0Ixn--stream-notes-for-november-24-2020-livecoding--part-1',
    '20eNZjI6Wryu':
      '/posts/20eNZjI6Wryu--stream-notes-for-november-24-2020-livecoding--part-2',
    '20eNZx0LfUrp':
      '/posts/20eNZx0LfUrp--stream-notes-for-november-25-2020-livecoding--part-1',
    '20eNa5JuUmq8':
      '/posts/20eNa5JuUmq8--stream-notes-for-november-25-2020-livecoding--part-2',
    '20eNaNv5pNS2':
      '/posts/20eNaNv5pNS2--stream-notes-for-november-26-2020-livecoding',
    '20eNahj7Ncnl':
      '/posts/20eNahj7Ncnl--stream-notes-for-november-27-2020-livecoding--part-1',
    '20eNaoGuguBA':
      '/posts/20eNaoGuguBA--stream-notes-for-november-27-2020-livecoding--part-2',
    '20eNb78Ci5SY':
      '/posts/20eNb78Ci5SY--stream-notes-for-november-28-2020-livecoding--part-1',
    '20eNaz7xNbvU':
      '/posts/20eNaz7xNbvU--stream-notes-for-november-28-2020-livecoding--part-2',
    '20eNbn8XnxfS':
      '/posts/20eNbn8XnxfS--stream-notes-for-november-30-2020-livecoding',
    '20eNLVCnPUe2':
      '/posts/20eNLVCnPUe2--stream-notes-for-october-12-2020-livecoding',
    '20eNPTFVJaLR':
      '/posts/20eNPTFVJaLR--stream-notes-for-october-23-2020-livecoding',
    '20eNPsACdJlD':
      '/posts/20eNPsACdJlD--stream-notes-for-october-24-2020-livecoding',
    '20eNQqmUKOOX':
      '/posts/20eNQqmUKOOX--stream-notes-for-october-27-2020-livecoding--part-1',
    '20eNQy17ogAP':
      '/posts/20eNQy17ogAP--stream-notes-for-october-27-2020-livecoding--part-2',
    '20eNMbB700oo': '/posts/20eNMbB700oo--streaming-for-the-second-wind',
    '20eNEPZsE1hp': '/posts/20eNEPZsE1hp--streaming-and-stream-notes',
    '20eNbgVIc2N3': '/posts/20eNbgVIc2N3--subjects-to-use-as-examples',
    '20eMVXkeFc7G': '/posts/20eMVXkeFc7G--subversion-gui-for-mac',
    '20eLMXbLNnO4':
      '/posts/20eLMXbLNnO4--sudoku--for-when-you-want-to-drive-yourself-mad',
    '20eLMLRrZPSv': '/posts/20eLMLRrZPSv--sudoku-using-the-mini-squares',
    '20eMO72z6RHz': '/posts/20eMO72z6RHz--sugar-water-',
    '20eMYDPQcHza': '/posts/20eMYDPQcHza--sunpak-flexpod-pro-plus-is-a-pos',
    '20eMtbNfDrYx': '/posts/20eMtbNfDrYx--sunset--photo-for-october-26-2012',
    '20eMQc5i6MyT': '/posts/20eMQc5i6MyT--superfads-reel',
    '20eLXgbWmAn1': '/posts/20eLXgbWmAn1--surprise-visitor',
    '20eMo6f6qajP':
      '/posts/20eMo6f6qajP--sushi-start--photo-for-september-14-2012',
    '20eMIgvZhgdC':
      '/posts/20eMIgvZhgdC--sweet-home-alabama-with-the-red-army-choir',
    '20eMNHGORxkf': '/posts/20eMNHGORxkf--sweet-home-nostalgia',
    '20eNOSukIOBx':
      '/posts/20eNOSukIOBx--switching-to-macs-keychain-app-for-storing-credentials--livecoding',
    '20eMXEvq7ici':
      '/posts/20eMXEvq7ici--switching-to-git-and-im-now-officially-an-open-source-developer',
    '20eMaGeBxLrR':
      '/posts/20eMaGeBxLrR--symmetry-from-radiolab--video-for-april-27-2011',
    '20eMKZO0B1GL': '/posts/20eMKZO0B1GL--sync',
    '20eNI1UojAlO':
      '/posts/20eNI1UojAlO--syntax-highlighting-and-responsive-images',
    '20eMlYQwBFeo':
      '/posts/20eMlYQwBFeo--tminus-five-days-and-counting-with-elephants--photo-for-august-27-2012',
    '20eMloH0006I':
      '/posts/20eMloH0006I--tminus-four-days-and-counting-with-elephants--photo-for-august-28-2012',
    '20eMmEGZHUqS':
      '/posts/20eMmEGZHUqS--tminus-one-day-and-counting-with-elephants--photo-for-august-31-2012',
    '20eMlw98cJK8':
      '/posts/20eMlw98cJK8--tminus-three-days-and-counting-with-elephants--photo-for-august-29-2012',
    '20eMm6lVz5mz':
      '/posts/20eMm6lVz5mz--tminus-two-days-and-counting-with-elephants--photo-for-august-30-2012',
    '20eM5c8olxJp': '/posts/20eM5c8olxJp--ted-cool-stuff',
    '20eMMA6J73bI': '/posts/20eMMA6J73bI--tv-rule-of-thumb',
    '20eO3EGvxUJO': '/posts/20eO3EGvxUJO--tailwind-breakpoint-size-ruler',
    '20eLwHVbzV4N': '/posts/20eLwHVbzV4N--take-it-to-the-bridge-fire-escape',
    '20eLk3O4me8K': '/posts/20eLk3O4me8K--team-gulp',
    '20eLP23dbhwd': '/posts/20eLP23dbhwd--tech-cool-hunter',
    '20eLNgZwY2d9': '/posts/20eLNgZwY2d9--technolust--powerbook-with-aperture',
    '20eLLCi5HK9G': '/posts/20eLLCi5HK9G--temporary-email',
    '20eMzKZmlcAC': '/posts/20eMzKZmlcAC--temptation-thy-name-is-bubble-wrap',
    '20eMrtqwyX81': '/posts/20eMrtqwyX81--test-load--photo-for-october-12-2012',
    '20eNSVbWEnJJ': '/posts/20eNSVbWEnJJ--test-the-small-stuff',
    '20eNHKRtOaS6': '/posts/20eNHKRtOaS6--testing-an-sm58-mic-setup',
    '20eMdbob82Iw':
      '/posts/20eMdbob82Iw--that-guy-in-saving-private-ryan-looks-really-familiar',
    '20eM3GFOlDkU': '/posts/20eM3GFOlDkU--thats-not-photoshop',
    '20eMXPP8JyzZ': '/posts/20eMXPP8JyzZ--the-atfs-phone-number',
    '20eLt3oAPNf3': '/posts/20eLt3oAPNf3--the-booth-will-soon-be-no-more',
    '20eMdNXAmRYf': '/posts/20eMdNXAmRYf--the-camera-cable-i-wanted-to-build',
    '20eN9sXu4ipm': '/posts/20eN9sXu4ipm--the-clicky-sound',
    '20eLg7ANxvI3': '/posts/20eLg7ANxvI3--the-compact',
    '20eMMUzmZsIx': '/posts/20eMMUzmZsIx--the-creative-process',
    '20eN5N0OftXh': '/posts/20eN5N0OftXh--the-density-of-kanji',
    '20eMpHDgDjid':
      '/posts/20eMpHDgDjid--the-devils-beating-his-wife--photo-for-september-22-2012',
    '20eLNwZ3jDxg': '/posts/20eLNwZ3jDxg--the-digital-pin-hole',
    '20eLPZgP5uIv': '/posts/20eLPZgP5uIv--the-everlasting-light-bulb',
    '20eMe1QFQUMn': '/posts/20eMe1QFQUMn--the-golden-gate-bridge-turns-75',
    '20eMjg0RRL2g':
      '/posts/20eMjg0RRL2g--the-hitchhiking-frog--photo-for-august-14-2012',
    '20eLrddQ0NPD': '/posts/20eLrddQ0NPD--the-illusionist',
    '20eMRzU11Ms8':
      '/posts/20eMRzU11Ms8--the-lhc-still-wont-destroy-the-world-probably',
    '20eNQNxDI4or':
      '/posts/20eNQNxDI4or--the-lithium-is-working--journal-for-october-26-2020',
    '20eLl6y3bvNf':
      '/posts/20eLl6y3bvNf--the-manchurian-candidate--then-and-now',
    '20eNIe29oVTw':
      '/posts/20eNIe29oVTw--the-morning-ritual-and-maybe-getting-an-aws-person-to-stream-with-me',
    '20eOZMJtUGQN': '/posts/20eOZMJtUGQN--the-name-of-my-new-band',
    '20eN8mVxMhlV': '/posts/20eN8mVxMhlV--the-ones-and-zeros-of-computing',
    '20eLnG8oyclX':
      '/posts/20eLnG8oyclX--the-power-of-a-commercial-and-some-other-stuff',
    '20eMkM6BBEwi': '/posts/20eMkM6BBEwi--the-puppy-on-the-publix',
    '20eNf2tgOCtU':
      '/posts/20eNf2tgOCtU--the-reason-i-stream-it-makes-me-a-better-developer',
    '20eLQ7ElRu6V': '/posts/20eLQ7ElRu6V--the-right-stuff',
    '20eLGrlpjAy7': '/posts/20eLGrlpjAy7--the-spelling-of-blog',
    '20eMj205JPRz': '/posts/20eMj205JPRz--the-spider-outside-my-office-window',
    '20eN2TNuDZS6': '/posts/20eN2TNuDZS6--the-top-100-jack-nicholson-quotes',
    '20eNRF1crRp0':
      '/posts/20eNRF1crRp0--the-zen-of-yak-shaving--journal-for-october-28-2020',
    '20eLVqkAIgCY':
      '/posts/20eLVqkAIgCY--the-beginning-of-the-end-for-nikons-with-film',
    '20eLPHo6oRmI': '/posts/20eLPHo6oRmI--the-blog-is-dead-long-live-the-blog',
    '20eLdt2xW7G6': '/posts/20eLdt2xW7G6--the-cost-of-power',
    '20eMAZUCgIbG': '/posts/20eMAZUCgIbG--the-future-return-of-film',
    '20eLwjuLfxXb': '/posts/20eLwjuLfxXb--the-last-sunday-at-reimers',
    '20eLLSN04ZQh': '/posts/20eLLSN04ZQh--the-new-blade',
    '20eMV6h7pdFg':
      '/posts/20eMV6h7pdFg--the-song-powerhouse-is-one-of-those-things-i-just-never-looked-up',
    '20eMSHR0XIbq': '/posts/20eMSHR0XIbq--the-tease-is-enough-of-a-trailer',
    '20eMHLY86v8m': '/posts/20eMHLY86v8m--the-tornado-missed-me',
    '20eLjPLQZojF': '/posts/20eLjPLQZojF--thermostat',
    '20eLMvdIeG2y': '/posts/20eLMvdIeG2y--things-i-love-about-work',
    '20eNVCAMvTO3':
      '/posts/20eNVCAMvTO3--thinking-about-an-ultrawide-monitor--oh-the-pages-i-goed--nov-11-2020',
    '20eNfryUdBd6': '/posts/20eNfryUdBd6--this-is-a-test',
    '20eMuxZlgT61': '/posts/20eMuxZlgT61--this-is-not-15mbps',
    '20eN5SVgOOHK': '/posts/20eN5SVgOOHK--thoughts-on-googles-amp',
    '20eN6tuoDCA3': '/posts/20eN6tuoDCA3--thoughts-on-rogue-one',
    '20eMjM65X7bv':
      '/posts/20eMjM65X7bv--three-inch-china--photo-for-august-12-2012',
    '20eNlQX10zUY': '/posts/20eNlQX10zUY--three-years-to-stability',
    '20eLa1kLssbQ': '/posts/20eLa1kLssbQ--three-degrees-of-im-seperation',
    '20eM7AUVkLEk': '/posts/20eM7AUVkLEk--tides-in-town',
    '20eLYCzs4ZQ5': '/posts/20eLYCzs4ZQ5--tiger-sign',
    '20eLnzN5YgjX': '/posts/20eLnzN5YgjX--time-off',
    '20eN4NLW2dMJ': '/posts/20eN4NLW2dMJ--time-stamp-snippet-for-textexpander',
    '20eMew9mvENq': '/posts/20eMew9mvENq--tintype-headshot',
    '20eN3MPFQ5vL':
      '/posts/20eN3MPFQ5vL--today-i-learned-editing-and-running-multiple-ruby-files-in-vim',
    '20eN3qMw5rpW':
      '/posts/20eN3qMw5rpW--today-i-learned-how-to-replace-minitestreporters-with-minitestrg-in-the-ruby-on-rails-tutorial-3rd-ed',
    '20eN3wSitbBX':
      '/posts/20eN3wSitbBX--today-i-learned-mapping-te-to-tabedit-in-vim',
    '20eN4CBMV23b':
      '/posts/20eN4CBMV23b--today-i-learned-quickly-copy-a-directory-path',
    '20eN3WDu8XeE':
      '/posts/20eN3WDu8XeE--today-i-learned-simultaneously-opening-ruby-gem-source-files-in-vim-tabs',
    '20eLXDjQ9jST': '/posts/20eLXDjQ9jST--todays-bad-tune-from-random',
    '20eLWalga6fA': '/posts/20eLWalga6fA--todays-favorite-tune-from-random',
    '20eMf9hiM6kt': '/posts/20eMf9hiM6kt--tom-green-in-jacksonville',
    '20eMay8YaGgd':
      '/posts/20eMay8YaGgd--tornado-in-tuscaloosa--video-for-april-29-2011',
    '20eME1742Q7R': '/posts/20eME1742Q7R--touch',
    '20eMrbI1ycdw':
      '/posts/20eMrbI1ycdw--town-center-foliage--photo-for-october-10-2012',
    '20eMRY4cCD4K':
      '/posts/20eMRY4cCD4K--tracking-where-our-tax-dollars-go-with-recoverygov',
    '20eM6LvmjXtI': '/posts/20eM6LvmjXtI--traveling-van',
    '20eMl5PC4ssm': '/posts/20eMl5PC4ssm--tree-frog--photo-for-august-24-2012',
    '20eN1VEdr7b5':
      '/posts/20eN1VEdr7b5--trick-question58-how-many-seconds-in-a-year',
    '20eMBRgBOozU': '/posts/20eMBRgBOozU--tricks-get-you-the-kill-file',
    '20eNUeajQtOM':
      '/posts/20eNUeajQtOM--trying-to-deploy-my-automatic-nasa-music-video-maker-to-ec2--stream-notes-for-november-9-2020-livecoding',
    '20eNUScAmOFY':
      '/posts/20eNUScAmOFY--trying-to-make-the-video-assembler-go-faster--stream-notes-for-november-8-2020-livecoding',
    '20eLwzEFzSUb':
      '/posts/20eLwzEFzSUb--trying-new-open-source-software--rssowl-and-musikcube',
    '20eLJR3PERkb': '/posts/20eLJR3PERkb--tune-in-vs-available',
    '20eLZ6zTP5S5': '/posts/20eLZ6zTP5S5--tune-up',
    '20eMie1PwM2D': '/posts/20eMie1PwM2D--turn-spare-change-into-music',
    '20eNmQRRrcDy':
      '/posts/20eNmQRRrcDy--turning-off-time--journal-for-december-27-2020',
    '20eLUTu1HHyJ':
      '/posts/20eLUTu1HHyJ--turning-up-the-volume-with-sub-titles',
    '20eO2uBqcfmN': '/posts/20eO2uBqcfmN--twitchio-examples',
    '20eN5AzwnWgA':
      '/posts/20eN5AzwnWgA--twitter-feature-request-show-video-titles-and-times',
    '20eN4x0ujqS1':
      '/posts/20eN4x0ujqS1--twitter-feature-request-show-video-titles',
    '20eMhDqJ1nDZ': '/posts/20eMhDqJ1nDZ--twitter-is-making-me-a-better-writer',
    '20eLKzMx9VDM': '/posts/20eLKzMx9VDM--two-of-may-favorite-things',
    '20eNLpnvXJIF': '/posts/20eNLpnvXJIF--url-grabber-is-mostly-working',
    '20eLf7SSDAfH': '/posts/20eLf7SSDAfH--uv',
    '20eMw8qksGJY': '/posts/20eMw8qksGJY--understanding-0-and-__file__-in-ruby',
    '20eMvOl8SGK8': '/posts/20eMvOl8SGK8--unit-testing-sublime-text-plugins',
    '20eMUdAbUbtj': '/posts/20eMUdAbUbtj--unix-command-line-tools-for-windows',
    '20eM5232jP1M': '/posts/20eM5232jP1M--unmasked-superhero',
    '20eLXrR3KVnH': '/posts/20eLXrR3KVnH--unprocessed-film',
    '20eLjHdk0Izh': '/posts/20eLjHdk0Izh--up-to-date-photos',
    '20eNMMzNbp0a':
      '/posts/20eNMMzNbp0a--updating-my-daily-link-grabber--livecoding',
    '20eNQH9eYftG':
      '/posts/20eNQH9eYftG--updating-my-keyboard-maestro-stream-setup-macro-and-finding-a-bug--livecoding-stream-notes-for-october-26-2020',
    '20eNNIzwbyVG':
      '/posts/20eNNIzwbyVG--updating-youtubes-autoplay-to-play-consistently-with-mute-if-necessary-hugo-shortcode-and-plain-javascript',
    '20eN8zLl1DMh':
      '/posts/20eN8zLl1DMh--upgrading-my-photo-import-script-livecoding',
    '20eLWuYYR8Lo': '/posts/20eLWuYYR8Lo--uptime',
    '20eMffEAZQ1h': '/posts/20eMffEAZQ1h--use-1-password',
    '20eMQMAS77Sw': '/posts/20eMQMAS77Sw--use-trim-to-shorten-urls',
    '20eMlCMCtA81':
      '/posts/20eMlCMCtA81--using-apaches-mod_rewrite-to-access-files-in-a-different-directory',
    '20eLUn8UDxeK':
      '/posts/20eLUn8UDxeK--using-google-to-find-thing-you-cant-remember',
    '20eMWXMv2IZn': '/posts/20eMWXMv2IZn--using-mysqldump-on-mac-os-x-leopard',
    '20eN5oBERXom':
      '/posts/20eN5oBERXom--using-the-twitter-api-without-3rd-party-libraries',
    '20eLMxoZugL8':
      '/posts/20eLMxoZugL8--using-your-phone-with-a-small-business',
    '20eLq2eaWTt2': '/posts/20eLq2eaWTt2--v',
    '20eLe1rQc5Ch': '/posts/20eLe1rQc5Ch--vmware-player',
    '20eN44xdRbK0':
      '/posts/20eN44xdRbK0--vagrant-setup-for-the-ruby-on-rails-tutorial-part-2',
    '20eN3UVH47x1':
      '/posts/20eN3UVH47x1--vagrant-setup-for-the-ruby-on-rails-tutorial',
    '20eMQ7YFELsd': '/posts/20eMQ7YFELsd--value-of-things-i-learned-in-school',
    '20eLJvxNiauI': '/posts/20eLJvxNiauI--vanity-marketing',
    '20eLoO1u1TgG': '/posts/20eLoO1u1TgG--variable-vivitar-283285--follow-up',
    '20eLo6S4V9UF': '/posts/20eLo6S4V9UF--variable-vivitar-283',
    '20eLZsAxj4C8': '/posts/20eLZsAxj4C8--varied-taste-in-movies',
    '20eMREEQy9RO': '/posts/20eMREEQy9RO--vatican-channel-on-youtube',
    '20eMn9d3BDqr':
      '/posts/20eMn9d3BDqr--vegas-looks-like-tron--photo-for-september-7-2012',
    '20eM9AIP9Yxr': '/posts/20eM9AIP9Yxr--vegas-and-bama',
    '20eMAzxO1X8C': '/posts/20eMAzxO1X8C--vegas-shots',
    '20eNUEs6NvZu':
      '/posts/20eNUEs6NvZu--video-assembler-v4-working-minus-a-change-in-format-from-exiftool--stream-notes-for-november-7-2020-livecoding',
    '20eMRLeyazOP': '/posts/20eMRLeyazOP--video-how-to-and-diy',
    '20eOZ85vcsXo':
      '/posts/20eOZ85vcsXo--video-of-contributing-to-an-open-source-project',
    '20eN86lL7FCN':
      '/posts/20eN86lL7FCN--video-review-introduction-to-aws-glue-ian-robinson--live-from-the-london-loft',
    '20eNHnceiFvk': '/posts/20eNHnceiFvk--video-testing-my-obs-setup',
    '20eM4UWIl0jw': '/posts/20eM4UWIl0jw--video-capture-tool-camstudio',
    '20eMQSJGefrO':
      '/posts/20eMQSJGefrO--video-draws-traffic-and-the-3-rules-of-the-net',
    '20eMZPDgILN9':
      '/posts/20eMZPDgILN9--video-for-april-24-2011--beastie-boys--fight-for-your-right--revisited',
    '20eMZkUceDFS':
      '/posts/20eMZkUceDFS--video-for-april-25-2011--iron-by-woodkid',
    '20eMTjtn0ide': '/posts/20eMTjtn0ide--video-sampling',
    '20eLIKe4e23T': '/posts/20eLIKe4e23T--view',
    '20eLdZ7daEyl': '/posts/20eLdZ7daEyl--viewfinderless',
    '20eMA53SmP63':
      '/posts/20eMA53SmP63--virtual-credit-cards-and-the-time-it-takes-to-purchase',
    '20eMP5PKZl0r': '/posts/20eMP5PKZl0r--virtual-photo-tourism-software',
    '20eLkz9vFBoB': '/posts/20eLkz9vFBoB--virus',
    '20eLqyD02ahE': '/posts/20eLqyD02ahE--visual-basicnet-and-ftp',
    '20eLhqbuTbtq': '/posts/20eLhqbuTbtq--walmart',
    '20eMjmNAM7oA':
      '/posts/20eMjmNAM7oA--walgreens-1-2-3-4-5-6--photo-for-august-15-2012',
    '20eMsLHVoIQX':
      '/posts/20eMsLHVoIQX--watch-your-head--photo-for-october-16-2012',
    '20eMR88RSJQo':
      '/posts/20eMR88RSJQo--watch-for-more-video-reviews-and-demos',
    '20eN7Mx4IntI':
      '/posts/20eN7Mx4IntI--watching-for-errors-and-rebooting-with-a-bash-script',
    '20eMSUcC4e0Z': '/posts/20eMSUcC4e0Z--we-should-all-carry-wedges',
    '20eMCj0pIY6O': '/posts/20eMCj0pIY6O--weapon-of-choice-dune',
    '20eMiJLMQO10': '/posts/20eMiJLMQO10--web-search-forms',
    '20eNhz0IRsMN': '/posts/20eNhz0IRsMN--webmentions-content-engine',
    '20eMEMxvYiq4':
      '/posts/20eMEMxvYiq4--website-to-help-you-contact-your-congresspeople',
    '20eMIt9fnDwZ': '/posts/20eMIt9fnDwZ--wedding-editing-with-lightroom',
    '20eMGJwmhl9Q': '/posts/20eMGJwmhl9Q--wedding-excuse',
    '20eLQZl3qSNB': '/posts/20eLQZl3qSNB--weed-eaters-from-hell',
    '20eMz6LSrUIU': '/posts/20eMz6LSrUIU--welcome-to-new-york',
    '20eMwdvuB6FB': '/posts/20eMwdvuB6FB--welcome-to-the-digopticon',
    '20eLZSdUgRBQ': '/posts/20eLZSdUgRBQ--western-sunset',
    '20eM7RTVFsHC': '/posts/20eM7RTVFsHC--wet-socks',
    '20eLKZNvB7r6': '/posts/20eLKZNvB7r6--what-i-need-to-do',
    '20eMxsX9WEeO':
      '/posts/20eMxsX9WEeO--what-im-running--open-apps--march-1st-2014',
    '20eM32c8NHPm': '/posts/20eM32c8NHPm--what-happened-to-3-liters',
    '20eMEqI9Jkgo': '/posts/20eMEqI9Jkgo--what-happens-after-i-hit-publish',
    '20eLX2UFZJUd': '/posts/20eLX2UFZJUd--when-i-retire',
    '20eOITLmEoH5': '/posts/20eOITLmEoH5--where-to-start',
    '20eLMFLuecei': '/posts/20eLMFLuecei--whew',
    '20eMh1qziDfW': '/posts/20eMh1qziDfW--whos-behind-generic-pages',
    '20eMu5Cp7iy7':
      '/posts/20eMu5Cp7iy7--why-did-the-snowy-egret-cross-the-road--photo-for-october-30-2012',
    '20eMcQaeBziF': '/posts/20eMcQaeBziF--why-dropbox-wants-my-location-data',
    '20eLSyADvlb4': '/posts/20eLSyADvlb4--why-i-wont-shop-at-best-buy-anymore',
    '20eLaqGdgaqr': '/posts/20eLaqGdgaqr--why-we-buy',
    '20eM1ZCsb7Bi':
      '/posts/20eM1ZCsb7Bi--why-dont-washing-machines-have-buzzers',
    '20eLSMf83BHw':
      '/posts/20eLSMf83BHw--wikipedia-list-of-open-source-software',
    '20eLczWOIi7k': '/posts/20eLczWOIi7k--windows-explorer-shotcut',
    '20eLcfeiH6Lb': '/posts/20eLcfeiH6Lb--windows-md5-software',
    '20eMCeldYj4F': '/posts/20eMCeldYj4F--wired',
    '20eLjRmLzQyw': '/posts/20eLjRmLzQyw--wireless-flash-mod',
    '20eM2EPFQkN6': '/posts/20eM2EPFQkN6--wireless-ir-to-rf-repeater',
    '20eLXKvqkjau': '/posts/20eLXKvqkjau--without-paper',
    '20eMpOLZhU5m':
      '/posts/20eMpOLZhU5m--women-and-money--photo-for-september-23-2012',
    '20eLiInjEI6z': '/posts/20eLiInjEI6z--word-to-watch-out-for',
    '20eLceD31suq': '/posts/20eLceD31suq--wordcount',
    '20eLW7SsCIbj': '/posts/20eLW7SsCIbj--wordpress-20',
    '20eMa0QdxbwF':
      '/posts/20eMa0QdxbwF--words-from-radiolab--video-for-april-26-2011',
    '20eMkQXkSR2Y':
      '/posts/20eMkQXkSR2Y--working-in-the-garage--photo-for-august-19-2012',
    '20eNW05iwUIg':
      '/posts/20eNW05iwUIg--working-on-a-snake_case_renamber-in-bash--stream-notes-for-november-13-2020-livecoding',
    '20eNGmKdRFtx': '/posts/20eNGmKdRFtx--working-on-my-local-tools-site',
    '20eNCzE5t4q8':
      '/posts/20eNCzE5t4q8--working-on-my-local-tools-website-livecoding',
    '20eNFGBwrBnZ':
      '/posts/20eNFGBwrBnZ--working-on-my-photo-import-script-livecoding',
    '20eNW2TSgLW8':
      '/posts/20eNW2TSgLW8--working-with-bash-thinking-about-keyboards-and-monitors--oh-the-pages-i-goed--nov-13-2020',
    '20eNHBhC8kyo': '/posts/20eNHBhC8kyo--working-on-my-hugo-site',
    '20eNAjCI68Ha':
      '/posts/20eNAjCI68Ha--working-on-my-local-website-and-my-alteryx-python-aws-mfa-module-livecoding',
    '20eLroxM2Igx': '/posts/20eLroxM2Igx--working-working-working',
    '20eNDee4Db56': '/posts/20eNDee4Db56--writing-about-writing-on-lithium',
    '20eNCaNp2u4v':
      '/posts/20eNCaNp2u4v--writing-my-daily-journal--sept-16-2020',
    '20eNBaZzkgI3':
      '/posts/20eNBaZzkgI3--writing-my-journal-entry-for-sept-25-2020',
    '20eNC9Wc9lcc':
      '/posts/20eNC9Wc9lcc--writing-my-morning-journal-livewriting',
    '20eN6gDRoEcT': '/posts/20eN6gDRoEcT--xml-schema-snippet-tester',
    '20eLGJXNcy8K':
      '/posts/20eLGJXNcy8K--yahoo-music-unlimited--still-very-beta',
    '20eMoziwZipX':
      '/posts/20eMoziwZipX--yankee-stadium--photo-for-september-20-2012',
    '20eLpUya8fTm': '/posts/20eLpUya8fTm--yep-found-a-lab',
    '20eMfpWsfDd9': '/posts/20eMfpWsfDd9--you-can-do-anything',
    '20eM55iq2qQx': '/posts/20eM55iq2qQx--youtube-find-polaroid-stop-motion',
    '20eLgVWSuEF2': '/posts/20eLgVWSuEF2--your-tax-dollars-at-work',
    '20eLkC8NMO2t': '/posts/20eLkC8NMO2t--zip-codes',
    '20eMPkfSJBa1': '/posts/20eMPkfSJBa1--and-were-back',
    '20eNUbLC2rl9':
      '/posts/20eNUbLC2rl9--ffmpeg-and-ec2-oh-my--oh-the-pages-i-goed--nov-9-2020',
    '20eNZS2dM9V0':
      '/posts/20eNZS2dM9V0--ffmpeg-and-video--oh-the-pages-i-goed--nov-24-2020',
    '20eLzG2eVMTt': '/posts/20eLzG2eVMTt--gmail',
    '20eMpjlbQvsH':
      '/posts/20eMpjlbQvsH--ihearttransplant--photo-for-september-26-2012',
    '20eMWCaORwLv': '/posts/20eMWCaORwLv--iphone-3gs-camera-is-impressive',
    '20eMVc1bXXKr': '/posts/20eMVc1bXXKr--iphone-wish-list',
    '20eM4FdatsoC': '/posts/20eM4FdatsoC--iphone-seems-quite-nice',
    '20eMHiyOdfD6':
      '/posts/20eMHiyOdfD6--iphoneipod-touch-has-an-odd-screen-size',
    '20eNDGUlOAaR': '/posts/20eNDGUlOAaR--nameswhatever-2020',
    '20eLz6EkBKua': '/posts/20eLz6EkBKua--sub-email-addresses',
    '20eNcmEgrNBK': '/posts/20eNcmEgrNBK--zallybags-final-project',
    '20eOhdxLdBXK':
      '/posts/20eOhdxLdBXK--convert-a-video-to-black-and-white-in-adobe-premiere',
    '20eOh5uunOJi':
      '/posts/20eOh5uunOJi--fade-in-and-fade-out-to-black-in-premiere',
    '20eOVSFJ1WAj':
      '/posts/20eOVSFJ1WAj--get-the-type-of-element-thats-currently-selected',
    '20eOV9GHPNSY':
      '/posts/20eOV9GHPNSY--send-keypress-for-tab-escape-enter-or-whatever',
    '20eOVG74eK2p':
      '/posts/20eOVG74eK2p--sleep-for-a-period-of-time-in-puppeteer',
    '20eOHERfZJIt': '/posts/20eOHERfZJIt--a-light-python-unittest-setup',
    '20eO740eOEiT': '/posts/20eO740eOEiT--activate-a-pyenv-virtual-environment',
    '20eOH7iJpsor':
      '/posts/20eOH7iJpsor--basic-flask-web-server-setup-in-python',
    '20eOOirNrNX4': '/posts/20eOOirNrNX4--beware-of-cursorrowcount',
    '20eObm7i1Qiu': '/posts/20eObm7i1Qiu--break-out-of-a-for-loop-in-python',
    '20eOgoGQ21H7': '/posts/20eOgoGQ21H7--check-if-a-file-exists-in-python',
    '20eOeYgSJ5fS': '/posts/20eOeYgSJ5fS--convert-epoch-datetime-to-strftime',
    '20eOcOPD20gg': '/posts/20eOcOPD20gg--copy-a-file-in-python',
    '20eOZSuSGa2T': '/posts/20eOZSuSGa2T--date-parsing-in-python',
    '20eNudwiX94V':
      '/posts/20eNudwiX94V--delete-a-key-from-a-dictionary-in-python',
    '20eOQ4UyH0y3':
      '/posts/20eOQ4UyH0y3--download-json-data-from-an-api-with-query-parameters-in-python',
    '20eOOzMIVEei':
      '/posts/20eOOzMIVEei--f-strings-in-multiline-python-strings',
    '20eOPmHPn8VE': '/posts/20eOPmHPn8VE--generate-a-uuid-with-uuid4',
    '20eN7v9WLDkK':
      '/posts/20eN7v9WLDkK--get-a-list-of-files-from-directories-with-python',
    '20eOFsZAQY6A':
      '/posts/20eOFsZAQY6A--get-a-web-page-and-pull-it-into-a-variable-in-python',
    '20eOGv5nZtYg': '/posts/20eOGv5nZtYg--get-an-epoch-time-stamp-in-python',
    '20l65WaG5Tsj': '/posts/20l65WaG5Tsj--get-command-line-arguments-in-python',
    '20eOgecxjDkZ':
      '/posts/20eOgecxjDkZ--get-the-diff-between-two-files-in-python',
    '20eOOuynr3Wt':
      '/posts/20eOOuynr3Wt--get-the-number-of-rows-returned-in-a-mysql-query-in-python',
    '20eON9d66Mke':
      '/posts/20eON9d66Mke--get-url-query-parameter-value-in-python3',
    '20eOXj75iKyu': '/posts/20eOXj75iKyu--google-services-connector',
    '20eOPLFxNCfz': '/posts/20eOPLFxNCfz--google-sheets-example',
    '20eOeMhqNzBF':
      '/posts/20eOeMhqNzBF--howto-read-and-write-frontmatter-in-markdown-and-mdx-files-in-python',
    '20eNVN9vBS9r':
      '/posts/20eNVN9vBS9r--iso-datetimes-with-timezones-in-python',
    '20eOSobByNUZ': '/posts/20eOSobByNUZ--install-modules-for-lambda-functions',
    '20eOf0eb9G0c':
      '/posts/20eOf0eb9G0c--installing-qr-code-processes-in-python',
    '20eOP7kx5wTq': '/posts/20eOP7kx5wTq--kabobcase-a-string-in-python',
    '20eOf4eAiP6V':
      '/posts/20eOf4eAiP6V--keep-the-creation-aka-birth-timestamp-when-copying-a-file-on-a-mac-in-python',
    '20eOVuQ8lnOy': '/posts/20eOVuQ8lnOy--loop-through-mysql-results',
    '20eOc8ntARRq': '/posts/20eOc8ntARRq--make-a-symbolic-link-in-python',
    '20eOYIUbCMpB': '/posts/20eOYIUbCMpB--make-an-empty-set-in-python',
    '20eOEreqCGae':
      '/posts/20eOEreqCGae--make-superscript-and-subscript-numbers',
    '20eOOZJ8zDa8': '/posts/20eOOZJ8zDa8--mysql-connector',
    '20eOHUIC6HNq':
      '/posts/20eOHUIC6HNq--print-flask-debug-messages-to-the-terminal-in-python',
    '20eOg1FbEomA': '/posts/20eOg1FbEomA--python-data-types',
    '20eObXfu97zT': '/posts/20eObXfu97zT--read-a-file-line-by-line-in-python',
    '20eOMqHMAybL':
      '/posts/20eOMqHMAybL--read-the-lines-of-a-file-into-a-list-in-python',
    '20eOaBZimC7F': '/posts/20eOaBZimC7F--regex--check-if-a-string-matches',
    '20eOgn4tSDDm':
      '/posts/20eOgn4tSDDm--remove-a-key-from-frontmatter-in-python',
    '20eOQQ1OfPIH': '/posts/20eOQQ1OfPIH--remove-items-from-a-set-in-python',
    '20eOQTOOmSRI':
      '/posts/20eOQTOOmSRI--remove-substring-from-string-in-python',
    '20eOMiUjxYRL':
      '/posts/20eOMiUjxYRL--remove-whitespace-from-the-end-of-python-strings-with-strip',
    '20eOHHg3cRf2': '/posts/20eOHHg3cRf2--reverse-range',
    '20eOEgSkV9hs': '/posts/20eOEgSkV9hs--send-alert-to-macs-message-center',
    '20eOBOb2mJN9': '/posts/20eOBOb2mJN9--send-keyboard-keypress',
    '20eOD6rNI9Yr':
      '/posts/20eOD6rNI9Yr--set-and-retrieve-passwords-from-your-systems-password-manager-with-the-keyring-python-module',
    '20eNK2WyG45m': '/posts/20eNK2WyG45m--snippet-get-web-page-in-python',
    '20eOg8CgtiQB': '/posts/20eOg8CgtiQB--split-a-string',
    '20eOXkdRlNW7':
      '/posts/20eOXkdRlNW7--split-list-based-off-a-number-of-items-in-python',
    '20eNGvd2vWgs':
      '/posts/20eNGvd2vWgs--store-your-credentials-in-macs-keychain-access-with-python',
    '20eOPS3Yw16k':
      '/posts/20eOPS3Yw16k--suppress-python-mysql-connector-deprecationwarning-and-resourcewarnings-in-unittests',
    '20eOR7Yo2mpG': '/posts/20eOR7Yo2mpG--url-encode-a-string-in-python',
    '20eOI0VustcS':
      '/posts/20eOI0VustcS--use-a-specific-aws-credentials-profile-with-boto3-client',
    '20eOeiJMXOyl': '/posts/20eOeiJMXOyl--use-pyenv-for-virtual-environments',
    '20eOZbAz6rPM': '/posts/20eOZbAz6rPM--using-yaml-data-in-python',
    '20eO5Isq0fhT':
      '/posts/20eO5Isq0fhT--wrap-text-to-a-specific-character-length-in-python',
    '20eOgAPR6gw7': '/posts/20eOgAPR6gw7--write-frontmatter-to-file-in-python',
    '20eOPIKlSLIU':
      '/posts/20eOPIKlSLIU--you-have-to-use-chrome-to-authorize-a-python-desktop-app-api-connection-to-google-sheets',
    '20eOEEZUlY8p': '/posts/20eOEEZUlY8p--min-max-in-python',
    '20eOGqHmwpzM': '/posts/20eOGqHmwpzM--prepopulate-a-list',
    '20eOTFS7C4KA': '/posts/20eOTFS7C4KA--psycopg2-problems',
    '20eOSqhv5GCt': '/posts/20eOSqhv5GCt--pycopg2-binary',
    '20eOKI1meOFb': '/posts/20eOKI1meOFb--add-a-css-class-to-a-react-element',
    '20eOKVyjFFQh': '/posts/20eOKVyjFFQh--add-inline-css-to-a-react-element',
    '20eOLHQgdMxu':
      '/posts/20eOLHQgdMxu--call-a-function-from-onclick-in-react',
    '20eORbnvVgIp': '/posts/20eORbnvVgIp--dump-an-object-in-react',
    '20eOLJOy5Ndo':
      '/posts/20eOLJOy5Ndo--fetching-data-from-an-api-with-an-onclick-button-event-in-react',
    '20eORx9PDIji':
      '/posts/20eORx9PDIji--make-multiple-swr-data-fetch-calls-in-the-same-react-component',
    '20eOKfH75wJL':
      '/posts/20eOKfH75wJL--pass-and-amend-element-props-with-a-react-function',
    '20eOMAMffnk3':
      '/posts/20eOMAMffnk3--print-out-an-object-in-react-with-jsonstringify',
    '20eOZ1ZD83nD': '/posts/20eOZ1ZD83nD--render-a-list-with-map',
    '20eNyguwDJxz': '/posts/20eNyguwDJxz--return-multiple-elements-in-react',
    '20eOS0ShwbJm': '/posts/20eOS0ShwbJm--update-an-object-in-usestate',
    '20eORlD8gUpq':
      '/posts/20eORlD8gUpq--onclick-button-event-handler-for-react',
    '20eONtQkdVb2': '/posts/20eONtQkdVb2--textfit',
    '20eNuJ0Hgd3y':
      '/posts/20eNuJ0Hgd3y--find-a-deadlock-blocking-query-in-redshift',
    '20eOdvcmnrbW':
      '/posts/20eOdvcmnrbW--2021-ksuid-site-url-structure-setup-and-frontmatter-normalization',
    '20eObC6LsBh1': '/posts/20eObC6LsBh1--2021-site-update-checklist',
    '20eObNUqSfK1': '/posts/20eObNUqSfK1--embed-responsively',
    '20eOaI4QrgTO': '/posts/20eOaI4QrgTO--fonts-to-look-at',
    '20eOc03zVpTI':
      '/posts/20eOc03zVpTI--making-a-new-post-for-my-site-in-gatsby',
    '20eOe5EI4A5T':
      '/posts/20eOe5EI4A5T--the-various-statuses-i-use-for-posts-on-my-site--digital-garden-style',
    '20eNuTUHh8hy': '/posts/20eNuTUHh8hy--transitioning-from-hugo-to-gatsby',
    '20eONKCoZK3c': '/posts/20eONKCoZK3c--add-a-column-to-a-table',
    '20eONefz0Qa9':
      '/posts/20eONefz0Qa9--add-a-primary-key-to-an-existing-database-table-with-sql',
    '20eOMWhhjvtN': '/posts/20eOMWhhjvtN--create-a-unique-key-in-sql',
    '20eOTNpdQNnO': '/posts/20eOTNpdQNnO--delete-query-statement',
    '20eOQsnmqbnl': '/posts/20eOQsnmqbnl--get-counts-for-things',
    '20eONHRuGIA8':
      '/posts/20eONHRuGIA8--remove-a-column-from-a-database-table-with-sql-alter-and-drop',
    '20eOWuMCq4y2': '/posts/20eOWuMCq4y2--sum-column',
    '20eOIexKnI6f': '/posts/20eOIexKnI6f--audio-configuration',
    '20eODegkPoZB': '/posts/20eODegkPoZB--eos-chnage-to-fhd-aka-full-hd',
    '20eOIInjBSCA': '/posts/20eOIInjBSCA--green-screen-paint-for-the-stream',
    '20eOcE4maJYG': '/posts/20eOcE4maJYG--my-setup--the-stuff-i-use--fall-2021',
    '20eNnI3UQniK':
      '/posts/20eNnI3UQniK--my-streaming-startup-checklist-aka-runbook',
    '20eOBmvTtr8X': '/posts/20eOBmvTtr8X--notes-audio',
    '20eNvPLjCl2P':
      '/posts/20eNvPLjCl2P--obs-audio-sync-offset-settings-direction',
    '20eO9hm2fEfM': '/posts/20eO9hm2fEfM--stream-font-sizes',
    '20eO1SlRMatz': '/posts/20eO1SlRMatz--stream-ideas',
    '20eO6sZvGwPt': '/posts/20eO6sZvGwPt--formatting-list',
    '20eOID7DKrvw': '/posts/20eOID7DKrvw--super-collider-notes',
    '20eOakwAOo9Z': '/posts/20eOakwAOo9Z--add-custom-styles-to-nextjs',
    '20eNyL5drpjJ': '/posts/20eNyL5drpjJ--add-styles-to-tailwind-2',
    '20eNyHWx9emn': '/posts/20eNyHWx9emn--tailwind-2-colors-cheat-sheet',
    '20eNyebJj221': '/posts/20eNyebJj221--tailwind-2-font-cheatsheet',
    '20eNznaqQfCJ': '/posts/20eNznaqQfCJ--tailwind-borders-cheatsheet',
    '20eNzsAir0W9': '/posts/20eNzsAir0W9--tailwind-css-padding-cheatsheet',
    '20eNzwZTAX8s': '/posts/20eNzwZTAX8s--tailwind-grid-cheat-sheet',
    '20eOZx98majF': '/posts/20eOZx98majF--setup-event-sub-auth-for-twitch',
    '20eO3VEM8vE7':
      '/posts/20eO3VEM8vE7--make-twitchio-v1-commands-caseinsensitve',
    '20eO3aM1crSN':
      '/posts/20eO3aM1crSN--response-to-nonexistent-commands-with-twtichio-v1',
    '20eOdA8aVwdw': '/posts/20eOdA8aVwdw--search-and-replace-in-neovim-and-vim',
    '20eOSEKUhk8B': '/posts/20eOSEKUhk8B--config-options',
    '20eOcyiXqO5w':
      '/posts/20eOcyiXqO5w--stop-start-and-restart-the-yabai-tiling-window-manager',
    '20eO6RVQbAsl': '/posts/20eO6RVQbAsl--auto-cd-into-directory-',
    '20eO6f3YcMXC':
      '/posts/20eO6f3YcMXC--how-to-show-the-current-git-branch-in-a-zsh-prompt',
    '20eOYszmkGQ0': '/posts/20eOYszmkGQ0--load-custom-function-files',
    '20eOUJps4vjR': '/posts/20eOUJps4vjR--reload-zsh',
    '20eO6aDUPJWT': '/posts/20eO6aDUPJWT--run-function-for-prompt',
  }

  const pathParts = req.nextUrl.pathname.split('/')
  if (pathParts.length === 3) {
    const slugParts = pathParts[2].split('--')
    console.log(slugParts[0])
    if (currentSlugs[slugParts[0]]) {
      if (currentSlugs[slugParts[0]] !== req.nextUrl.pathname) {
        return NextResponse.redirect(currentSlugs[slugParts[0]])
      }
    }
  }

  return NextResponse.rewrite(req.nextUrl.pathname)
}
