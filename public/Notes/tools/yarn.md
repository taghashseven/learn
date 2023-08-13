# Yarn Cheat Sheet

## Installation
```bash
- `npm install -g yarn`: Install Yarn globally using npm.
```

## Creating a New Project
```bash
- `yarn init`: Initialize a new project and create a `package.json` interactively.
- `yarn create <starter-kit>`: Create a new project using a starter kit.
```

## Installing Packages
```bash
- `yarn add <package>`: Install a package and add it to `dependencies`.
- `yarn add <package> --dev`: Install a package and add it to `devDependencies`.
- `yarn add <package> --peer`: Install a package and add it to `peerDependencies`.
```

## Removing Packages
```bash
- `yarn remove <package>`: Remove a package from dependencies.
- `yarn remove <package> --dev`: Remove a package from devDependencies.
```

## Updating Packages
```bash
- `yarn upgrade`: Upgrade all packages to their latest versions.
- `yarn upgrade <package>`: Upgrade a specific package to its latest version.
```

## Installing All Dependencies
```bash
- `yarn install`: Install all packages listed in `dependencies` and `devDependencies`.
```

## Running Scripts
```bash
- `yarn run <script>`: Run a script defined in your `package.json`.
```

## Package Info
```bash
- `yarn info <package>`: Display information about a package.
```

## Lock Files
```bash
- `yarn.lock`: Automatically generated lock file for consistent installs.
```

## Workspaces (Monorepos)
```bash
- `yarn workspaces init`: Initialize Yarn workspaces in a monorepo.
- `yarn workspaces add <package>`: Add a package to all workspaces.
- `yarn workspaces run <script>`: Run a script in all workspaces.
```

## Miscellaneous
```bash
- `yarn cache clean`: Clear the global Yarn cache.
```


This cheat sheet covers some common Yarn commands. Be sure to consult the official documentation for more details on each command and for advanced usage.
