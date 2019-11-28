![UOGLogo](IMG-All/uoglogo.jpg)

# Adding a .gitignore to your Unity repositories
Unity generates a ton of files in your project directories that you don't necessarily need to push to GitHub. Pushing these files can also lead to your repositories growing in size and eventually hitting GitHub's free limits for repos.

This can be solved by adding a gitignore file to your project.

# What is a gitignore?
A gitignore file is a file that is used to tell Git what files it needs to track the changes of. Using them, you can tell git to ignore entire directories that someone else downloading your project doesn't need in order to run/build it.

This greatly decreases the file size of projects when downloading/cloning them from Git, and makes it so you only push what is important (No more pushing 3359 changes in one commit!).

##### For Example
Here is an assignment repository *without* a gitignore file, when cloned to my computer, it is **141mb**, which is made up of **90mb** of assets and **51mb** of project files.

 ![Originalsize](IMG-AddingGitignore/originalsize.PNG)

After adding a .gitignore file and removing the tracked files, the new size is **95mb**, which is made up **90mb** of assets and **5mb** of actual project files.

![Newsize](IMG-AddingGitignore/newsize.PNG)

Just by adding one file, I was able to remove **46mb** of junk that Unity generates when you open the project.

# How to actually add the .gitignore
You might have to use a different method depending on if you wish to add the .gitignore to a new or existing repository.

## Adding to a new repository
To add an ignore file to a new repository, just simply download the [Unity Gitignore file here](https://connectglosac-my.sharepoint.com/:u:/g/personal/s2116955_glos_ac_uk/EQrkq5LAY0hKlM05ICVC3sQBFBPCtH2oJNYLQ7ipqW8Iqw?e=b41GZ8), which contains all of the directories and files that Git should ignore for Unity projects.

Once downloaded just simply place it in your repository, Commit and push the changes. Then add your Unity project.

## Adding to an existing Unity Project
If you already have a repository with a Unity project and wish to add an ignore file to it, you will have to go through a few extra steps, but this is worth it in the long run.

### Downloading the .gitignore file
Download the following .gitignore file and place it in the root of your repository (The very start/first folder of your repository).

- [.gitignore Download](https://connectglosac-my.sharepoint.com/:u:/g/personal/s2116955_glos_ac_uk/EQrkq5LAY0hKlM05ICVC3sQBFBPCtH2oJNYLQ7ipqW8Iqw?e=b41GZ8)

### Installing Git
In order to apply the changes of the gitignore to all files across your repository you will need a command line version of Git. For this, I will be using Git Bash, which can be downloaded and installed at [https://git-scm.com/downloads](https://git-scm.com/downloads).

Download the Windows version and follow the installer.

![Gitweb](IMG-AddingGitignore/gitweb.PNG)

I've included the steps for the installer if you get stuck in the Dropdown below.

<details>
    <summary>Installation Steps</summary>

![Git1](IMG-AddingGitignore/git1.PNG)

# 1

![Git1](IMG-AddingGitignore/git2.PNG)

# 2

![Git1](IMG-AddingGitignore/git3.PNG)

# 3

![Git1](IMG-AddingGitignore/git4.PNG)

# 4

![Git1](IMG-AddingGitignore/git5.PNG)

# 5

![Git1](IMG-AddingGitignore/git6.PNG)

# 6

![Git1](IMG-AddingGitignore/git7.PNG)

# 7

![Git1](IMG-AddingGitignore/git8.PNG)

# 8

![Git1](IMG-AddingGitignore/git9.PNG)


</details>

## Opening the Git Command line
Head to your repository directory, in my case its in my `Documents/GitHub/Unity-AI-SpyvsGuard` directory. (In GitHub Desktop you can hit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> to open the folder!).

Right click and hit `Git Bash Here`, if you cannot see this option you may have to restart your computer after installing Git.

![Gitbashhere](IMG-AddingGitignore/gitbashhere.PNG)


## Removing the Tracked files
The first step is to remove *all* files from the tracked staging area of your repository, we can do this by typing the following command into the Git Bash window and then hit <kbd>Enter</kbd>:

```bash 
git rm -r --cached *
```

## Committing this change
You can then head back to GitHub Desktop to commit and push your changes! 

*There will be a lot of changes since you are technically Recomitting your entire project, without the junk files.*


![Gitignorefinal](IMG-AddingGitignore/gitignorefinal.PNG)