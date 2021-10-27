---
category: JavaScript
date: '2021-08-27'
slug: /storing-local-environmental-variables-securely-in-password-managers-instead-of-plaintext-env-files
status: wip
title: Storing Local Environmental Variables Securely In Password Managers Instead
  Of Plaintext .env Files
type: post
---


### The Issue 

Storing unencrypted passwords freaks me out. 

Sure, you can add .env files to .gitignore to keep them out of your repo, but that leaves plenty of room for mistakes. I prefer avoiding even the possibility of exposing credentials. We can get one step closer to that by storing credential in password managers instead of plaintext files. 

For example, here's a next.js serverless function that uses environmental variables in production but switches to using the macOS Keychain Access app (via the `security` command) in development. 

```jsx
cconst { execSync } = require('child_process')

export default function handler(req, res) {

  const DB_USER = process.env.DB_USER
    ? process.env.DB_USER
    : execSync(
        `security find-generic-password \
            -w -a alans -s test-nextjs-db-user`
      )
        .toString()
        .trim()

  // Do something with DB_USER

}
```

You can see the production proof of concept [here on Netlify](https://nextjs-env-keychain-test-alanwsmith.netlify.app).

You can pull down [this repo](https://github.com/alanwsmith/nextjs-env-keychain-test) to run local version of the example.

### The Details 

Here's the nuts and bolts of how it works:

- First off, while this example uses Next.js and the macOS Keychain Access app, similar methods and password managers are available on Windows and Linux for any given framework. Using them is left as an exercise for the reader
- The `alans` and `test-nextjs-db-user` strings in the example above are the username and password key used to store the data for the example locally and need to be adjusted for your setup
- The core idea is to setup environmental variables normally in your production hosting service (e.g. your netlify control panel) but to use the password manager instead of .env files for storing them locally
- While you don't need `.evn`, `.env.local`, etc... files for passwords, you can still use them for other, non-sensitive environmental variables. Specifically, you could put whatever you want in a `.env.local` file but you would not add `DB_PASS` for the example above
- This example shows how to load variables individually. It's also possible to setup a single variable with an object and use it for all your secrets. That example is below
- The `security` command is what talks to the Keychain Access
- You'll get a password prompt for your Keycain Access password the first time you load the page locally. Clicking "Always Allow" when you fill it in will prevent the dialog from popping up every time
- You can add passwords directly in the Keychain Access app. Or, you can add them via the command line via the `security` command. For example: 
    ```
    security add-generic-password -a ACCOUNT_NAME \
    -s KEYCHAIN_ITEM_NAME -w THE_PASSWORD_ITSELF
    ```

- `execSync()` returns a buffer which is turned into a string with `.toString()` and then the trailing newline that comes from the command response is removed with `.trim()`
- `execSync()` is used because it's synchronous which allows values to get set before moving on with the rest of the process
- I don't have explicit error handling on the call to the security command because it only gets used in dev and if something goes wrong I see it in the console
- Using calls to external process can be a security risk if it involves untrusted user input. That's not in play here since I'm hard coding all the values myself (please let me know if I'm missing something here)

Here's how to store and load several variables at one time. The first step is to create the object to be stored and put it in your local password manager and your production ENV Variable. Something like this:

```javascript
{ DB_USER: "me", DB_PASS: "shush" }
```

This gets loaded with: 


```jsx
const { execSync } = require('child_process')

export default function handler(req, res) {
    
  const config = process.env.CONFIG
    ? eval(`new Object(${process.env.CONFIG})`)
    : eval(
        `new Object(${execSync(
          `security find-generic-password \
              -w -a alans -s test-nextjs-config`
        )
          .toString()
          .trim()})`
      )

    // config.DB_USER is now 'me'
    // config.DB_PASS is now 'shush'

}
```

The methodology is similar to the previous example. If a `SECRETS` environmental variable exists, it's used. Otherwise, a call is made to the Keychain Access password manager. The difference is that the value returned in either case is a string that gets loaded as an object via `eval()`. As with `execSync()`, any use of `eval()` with untrusted user input is an extreme security risk. As before, that's not in play because I'm hard coding everything myself. (If there's a security implication here I'm missing, please let me know.)

To use this method, set a value like this in your the `SECRETS` environmental variable in production and in your Keychan Access item locally: 

An important point is that you'll need to keep everything on line there. Otherwise, the process will choke. (In theory, you could load an entire set of environmental variables this way, but it increases the risk profile to load secrets where they aren't needed.)

And that's it. 

With a small amount of code we can keep our password out of unencrypted plaintext files and make it less likely that we leak credentials. 

---


P.S. Other Password Manager (like 1Password) offer CLI tools but they tend to be all or nothing access. Once you provide permission, the entire set of passwords is open. With Keychain access on the Mac, each password has to be unlocked individually. It's a little more of a hassle, but I prefer the approach. Basically the idea of the [
principal of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).

