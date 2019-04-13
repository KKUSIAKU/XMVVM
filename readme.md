


add submodule for tracking 

git remote add libcontent_remote https://github.com/KKUSIAKU/LibContent.git
git fetch libcontent_remote
git checkout -blibcontent libcontent_remote/master

https://git.wiki.kernel.org/index.php/SubprojectSupport

// checkout on the branch you want to add the submodule content

git read-tree --prefix=ui/ -u libcontent

then push the branch to superproject remote 


# Update the current project with update on ui repo (the submodule) commands.

* Nice explanation about submodules interest here
https://stackoverflow.com/questions/7124483/difference-between-subprojects-and-submodules-in-git

* libcontent is the branch of the submodules
* dev is a branch of main repo

```bash
$ git checkout libcontent
$ git pull
$ git checkout dev 
$ git merge --squash -s subtree --no-commit --allow-unrelated-histories  libcontent
```

note that when on libcontent, git pull fetch only the master of the corresponding remote and nothing is fetch form the superproject, hence gain on speed on repo pull