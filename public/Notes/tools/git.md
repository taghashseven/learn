# Git Cheat Sheet


## Basic Commands

```bash
`git init`: Initialize a new Git repository.
`git clone <repository>`: Clone a remote repository to your local machine.
```

## Local Changes
```bash
- `git status`: Show the status of your working directory.
- `git add <file>`: Add a file or changes to the staging area.
- `git commit -m "<message>"`: Commit staged changes with a descriptive message.
- `git diff`: Show the differences between working directory and staging area.

```
## Branches
```bash
- `git branch`: List all branches in the repository.
- `git checkout <branch>`: Switch to an existing branch.
- `git checkout -b <new-branch>`: Create and switch to a new branch.
- `git merge <branch>`: Merge changes from a branch into the current branch.
```

## Remote Repositories
```bash
- `git remote add <name> <url>`: Add a remote repository.
- `git push <remote> <branch>`: Push changes to a remote repository.
- `git pull <remote> <branch>`: Pull changes from a remote repository.
```

## History
```bash
- `git log`: Show commit history.
- `git log --oneline`: Show condensed commit history.
- `git show <commit>`: Show details of a specific commit.
```

## Undoing Changes
```bash
- `git reset <file>`: Unstage changes from the staging area.
- `git checkout -- <file>`: Discard changes in the working directory.
- `git revert <commit>`: Create a new commit that undoes changes from a commit.
```

## Miscellaneous
```bash
- `git config --global user.name "Your Name"`: Set your username.
- `git config --global user.email "you@example.com"`: Set your email.
- `git stash`: Temporarily save changes without committing.
- `git tag <name>`: Create a new tag for the current commit.
```

---

This cheat sheet covers some of the most commonly used Git commands. Remember that Git is a powerful tool with many features, so be sure to explore the documentation for more advanced usage.
