# L01_Git

[Nice cheatsheet I found](http://www.ndpsoftware.com/git-cheatsheet.html#loc=index)
## L01.1_GitHub_Markdown
- created a GitHub account
- created repository called "Code1"
  - repository = storage location for software packages
- created (this) markdown page
- edited [team repository](https://github.com/MiaGMB/Caffeine-)

## L01.2_Git_VS
- cloned Code1 repository to computer 
  - get link on button <>Code
  - open Git Bash,type git clone (link)
- made some local changes and pushed them to GitHub
  - important: edit message, else it will be stuck loading forever
### Task: Discuss certain concepts:
- Repository: storage location for software packages (remote or local)
- Commit: finalize changes
- Branch: two separate paths of the same file
- Remote: not local/on your computer
### Task: Familiarize yourself with these Git actions:
- stage: add to the index
- commit: captures a snapshot of the projects currently staged changes
- fetch: fetch the commits of a remote repository into local repository
- push: upload local repository content to a remote repository
- pull: fetch and download content from a remote repository and immediately update the local repository to match the content
- merge: join two or more development histories together
[source for most of these](https://medium.com/mindorks/what-is-git-commit-push-pull-log-aliases-fetch-config-clone-56bc52a3601c)

## L01.3_Git_Other
### Task: Solve the following problems:
- How do you exclude a file from being tracked by Git?
File called .gitignore in which you can specify filenames, directory names, ...
- You have changes but you want roll everything back to the last commit, discarding all the changes.
git reset --hard
- You have changes but you want roll everything back to the last commit, discarding all the changes temporarily.

- Remove all untracked files from local folder:
git clean
- Difference between these merge strategies:
  - merge: carry over all commit history from feature branch and will add an extra dummy commit to Master branch
  - rebase: rewinds your commits and replays those commits again from the tip of the master branch
  - squash like Merge except that it doesn’t carry over commit history from feature branch and only dummy commit is created with the title of Pull Request
    [source](https://dev.to/devsatasurion/git-rebase-vs-merge-vs-squash-how-to-choose-the-right-one-3a33)

## L01.4_Git_Knowledge
### Task: Answer these questions:
- What does Visual Studio Code mean by "Sync Changes"?

update your project and add all changes made in the remote repository 
- What does the ".git" folder do in your project? (turn on hidden files and file extensions if you don't see it)

can't find the .git folder...
- How does Git differ from e.g. Dropbox or Google Drive?
  - Why not use those instead of Git?

