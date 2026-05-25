# AGENTS.md

## Commit identity

For this repository, commits should use the organization identity below:

`White-Rose.ai <noreply@white-rose.ai>`

When creating a commit, use:

```bash
git commit --author="White-Rose.ai <noreply@white-rose.ai>"
```

If the last commit was created with the wrong author, fix it with:

```bash
git commit --amend --author="White-Rose.ai <noreply@white-rose.ai>" --no-edit
```

If the commit was already pushed, update the remote with:

```bash
git push --force-with-lease
```
