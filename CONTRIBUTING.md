# Contributing to ts-lombok

Thank you for your interest in contributing to ts-lombok! This document provides guidelines for contributions.

## Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This leads to more readable messages that are easy to follow when looking through the project history and enables automatic version management.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries

### Examples

```
feat(decorator): add @NoArgsConstructor decorator

Added new decorator that generates a constructor with no parameters.

BREAKING CHANGE: @Constructor decorator renamed to @AllArgsConstructor
```

```
fix(getter): resolve undefined property access

The getter decorator now properly handles undefined properties by returning
a default value instead of throwing an error.
```

```
docs(readme): update installation instructions

Updated the README with new installation steps and better examples.
```

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, if applicable.
3. The PR will be merged once you have the sign-off of at least one maintainer.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Run tests: `npm test`
4. Make your changes
5. Submit a pull request
