# Git分布式版本控制工具

## 1、目标

- 了解Git基本概念
- 能够概述git工作流程
- 能够使用Git常用命令
- 熟悉Git代码托管服务
- 能够使用idea操作git  

## 2、概述

### 2.1、开发中的实际场景 

场景一：备份
	小明负责的模块就要完成了，就在即将Release之前的一瞬间，电脑突然蓝屏，硬盘光荣牺牲！几个月来的努力付之东流
	
场景二：代码还原
	这个项目中需要一个很复杂的功能，老王摸索了一个星期终于有眉目了，可是这被改得面目全非的代码已经回不到从前了。什么地方能买到哆啦A梦的时光机啊？
	
场景三：协同开发
	小刚和小强先后从文件服务器上下载了同一个文件：Analysis.java。小刚在Analysis.java文件中的第30行声明了一个方法，叫count()，先保存到了文件服务器上；小强在Analysis.java文件中的第50行声明了一个方法，叫sum()，也随后保存到了文件服务器上，于是，count()方法就只存在于小刚的记忆中了
	
场景四：追溯问题代码的编写人和编写时间！
	老王是另一位项目经理，每次因为项目进度挨骂之后，他都不知道该扣哪个程序员的工资！就拿这次来说吧，有个Bug调试了30多个小时才知道是因为相关属性没有在应用初始化时赋值！可是二胖、王东、刘流和正经牛都不承认是自己干的！  

### 2.2、版本控制器的方式  

**a、集中式版本控制工具**
集中式版本控制工具，版本库是集中存放在中央服务器的team里每个人work时从中央服务器下载代码，必须联网才能工作，局域网或互联网。个人修改后然后提交到中央版本库。

举例：SVN和CVS

**b、分布式版本控制工具**
分布式版本控制系统没有“中央服务器”，每个人的电脑上都是一个完整的版本库，这样工作的时候，无需要联网了，因为版本库就在你自己的电脑上。多人协作只需要各自的修改推送给对方，就能互相看到对方的修改了。

举例：Git  

### 2.3、SVN  

![image-20240827153208360](.\images\image-20240827153208360.png)

### 2.4、Git  

​        Git是分布式的,Git不需要有中心服务器，我们每台电脑拥有的东西都是一样的。我们使用Git并且有个中心服务器，仅仅是为了方便交换大家的修改，但是这个服务器的地位和我们每个人的PC是一样的。我们可以把它当做一个开发者的pc就可以就是为了大家代码容易交流不关机用的。没有它大家一样可以工作，只不过“交换”修改不方便而已。

​	   git是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。Git是Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。同生活中的许多伟大事物一样，Git 诞生于一个极富纷争大举创新的年代。Linux 内核开源项目有着为数众多的参与者。 绝大多数的 Linux 内核维护工作都花在了提交补丁和保存归档的繁琐事务上（1991－2002年间）。 到 2002 年，整个项目组开始启用一个专有的分布式版本控制系统 BitKeeper 来管理和维护代码。

​	    到了 2005 年，开发 BitKeeper 的商业公司同 Linux 内核开源社区的合作关系结束，他们收回了Linux 内核社区免费使用 BitKeeper 的权力。 这就迫使 Linux 开源社区（特别是 Linux 的缔造者Linus Torvalds）基于使用 BitKeeper 时的经验教训，开发出自己的版本系统。 他们对新的系统制订了若干目标：

- 速度
- 简单的设计
- 对非线性开发模式的强力支持（允许成千上万个并行开发的分支）
- 完全分布式
- 有能力高效管理类似 Linux 内核一样的超大规模项目（速度和数据量）  

![image-20240827153505347](.\images\image-20240827153505347.png)

### 2.5、Git工作流程图  

![image-20240827153522499](.\images\image-20240827153522499.png)

命令如下：

1. clone（克隆）: 从远程仓库中克隆代码到本地仓库
2. checkout （检出）:从本地仓库中检出一个仓库分支然后进行修订
3. add（添加）: 在提交前先将代码提交到暂存区
4. commit（提交）: 提交到本地仓库。本地仓库中保存修改的各个历史版本
5. fetch (抓取) ： 从远程库，抓取到本地仓库，不进行任何的合并动作，一般操作比较少。
6. pull (拉取) ： 从远程库拉到本地库，自动进行合并(merge)，然后放到到工作区，相当于fetch+merge

7. push（推送） : 修改完成后，需要和团队成员共享代码时，将代码推送到远程仓库  

## 3、Git安装与命令

本教程里的git命令例子都是在Git Bash中演示的，会用到一些基本的linux命令，在此为大家提前列举：

- ls/ll 查看当前目录
- cat 查看文件内容
- touch 创建文件
- vi vim编辑器（使用vi编辑器是为了方便展示效果，学员可以记事本、editPlus、notPad++等其它编辑器）  

### 3.1、 Git环境配置

#### 3.1.1 下载与安装 

下载地址： https://git-scm.com/download  

![image-20240827153726783](.\images\image-20240827153726783.png)

下载完成后可以得到如下安装文件：  

![image-20240827153748737](.\images\image-20240827153748737.png)

双击下载的安装文件来安装Git。安装完成后在电脑桌面（也可以是其他目录）点击右键，如果能够看到如下两个菜单则说明Git安装成功。  

![image-20240827153907423](.\images\image-20240827153907423.png)

备注：

Git GUI：Git提供的图形界面工具

Git Bash：Git提供的命令行工具

当安装Git后首先要做的事情是设置用户名称和email地址。这是非常重要的，因为每次Git提交都会使用该用户信息  

#### 3.1.2 基本配置  

1. 打开Git Bash
2. 设置用户信息

```shell
git config --global user.name “test”
git config --global user.email “test@qq.com”
```

查看配置信息

```shell
git config --global user.name
git config --global user.email
```

#### 3.1.3 解决GitBash乱码问题  

1. 打开GitBash执行下面命令  

```shell
git config --global core.quotepath false  
```

2. ${git_home}/etc/bash.bashrc 文件最后加入下面两行  

```shell
export LANG="zh_CN.UTF-8"
export LC_ALL="zh_CN.UTF-8"  
```

### 3.2、获取本地仓库  

要使用Git对我们的代码进行版本控制，首先需要获得本地仓库
1）在电脑的任意位置创建一个空目录（例如test）作为我们的本地Git仓库
2）进入这个目录中，点击右键打开Git bash窗口
3）执行命令git init
4）如果创建成功后可在文件夹下看到隐藏的.git目录。

![image-20240827154731778](.\images\image-20240827154731778.png)

### 3.3、基础操作指令  

Git工作目录下对于文件的修改(增加、删除、更新)会存在几个状态，这些修改的状态会随着我们执行Git的命令而发生变化。  

![image-20240827154805779](.\images\image-20240827154805779.png)

本章节主要讲解如何使用命令来控制这些状态之间的转换：

1. git add (工作区 --> 暂存区)
2. git commit (暂存区 --> 本地仓库)

#### 3.3.1、*查看修改的状态（status）

- 作用：查看的修改的状态（暂存区、工作区）
- 命令形式：git status

#### 3.3.2、*添加工作区到暂存区(add)

- 作用：添加工作区一个或多个文件的修改到暂存区
- 命令形式：git add 单个文件名|通配符
- 将所有修改加入暂存区：git add .

#### 3.3.3、*提交暂存区到本地仓库(commit)

- 作用：提交暂存区内容到本地仓库的当前分支
- 命令形式：git commit -m '注释内容'

#### 3.3.4、*查看提交日志(log)

**在3.1.3中配置的别名 git-log 就包含了这些参数，所以后续可以直接使用指令 git-log**

- 作用:查看提交记录
- 命令形式：git log [option]

options

- --all 显示所有分支
- --pretty=oneline 将提交信息显示为一行
- --abbrev-commit 使得输出的commitId更简短
- --graph 以图的形式显示

#### 3.3.5、版本回退

- 作用：版本切换
- 命令形式：git reset --hard commitID

commitID 可以使用 git-log 或 git log 指令查看

- 如何查看已经删除的记录？

1. git reflog
2. 这个指令可以看到已经删除的提交记录

#### 3.3.6、添加文件至忽略列表

​		一般我们总会有些文件无需纳入Git 的管理，也不希望它们总出现在未跟踪文件列表。 通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。 在这种情况下，我们可以在工作目录中创建一个名为 .gitignore 的文件（文件名称固定），列出要忽略的文件模式。下面是一个示例：

```git
# 不提交后缀为.a的文件
*.a
# 不提交lib.a
!lib.a
# 不提交当前文件夹下的TODO
/TODO
# 不提交build下的所有文件
build/
# 不提交doc下所有.txt为后缀的文件
doc/*.txt
# 不提交所有 .pdf文件在doc的的孙级目录
doc/**/*.pdf
```

### 3.4、分支

几乎所有的版本控制系统都以某种形式支持分支。使用分支意味着你可以把工作从开发主线上分离开来进行重大的Bug修改、开发新功能，以免影响开发主线。

#### 3.4.1、查看本地分支

命令：git branch

#### 3.4.2、创建本地分支

命令：git branch 分支名

#### 3.4.4、*切换分支(checkout)

命令：git checkout 分支名

我们还可以直接切换到一个不存在的分支（创建并切换）

命令：git checkout -b 分支名

#### 3.4.6、*合并分支(merge)

一个分支上的提交可以合并到另一个分支

命令：git merge 分支名称

#### 3.4.7、删除分支

不能删除当前分支，只能删除其他分支

git branch -d b1 删除分支时，需要做各种检查

git branch -D b1 不做任何检查，强制删除

#### 3.4.8、解决冲突

当两个分支上对文件的修改可能会存在冲突，例如同时修改了同一个文件的同一行，这时就需要手动解决冲突，解决冲突步骤如下：

1. 处理文件中冲突的地方
2. 将解决完冲突的文件加入暂存区(add)
3. 提交到仓库(commit)

冲突部分的内容处理如下所示：  

![image-20240827155334479](.\images\image-20240827155334479.png)

#### 3.4.9、开发中分支使用原则与流程

​		几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把工作从开发主线上分离开来进行重大的Bug修改、开发新的功能，以免影响开发主线。在开发中，一般有如下分支使用原则与流程：

- master （生产） 分支

线上分支，主分支，中小规模项目作为线上运行的应用对应的分支；

- develop（开发）分支

是从master创建的分支，一般作为开发部门的主要开发分支，如果没有其他并行开发不同期上线要求，都可以在此版本进行开发，阶段开发完成后，需要是合并到master分支,准备上线。

- feature/xxxx分支

从develop创建的分支，一般是同期并行开发，但不同期上线时创建的分支，分支上的研发任务完成后合并到develop分支。

- hotfix/xxxx分支

从master派生的分支，一般作为线上bug修复使用，修复完成后需要合并到master、test、develop分支。还有一些其他分支，在此不再详述，例如test分支（用于代码测试）、pre分支（预上线分支）等等  

![image-20240827155841882](.\images\image-20240827155841882.png)

## 4、Git远程仓库（在Idea中使用Git）

### 4.1、在Idea中配置Git    

安装好IntelliJ IDEA后，如果Git安装在默认路径下，那么idea会自动找到git的位置，如果更改了Git的安装位置则需要手动配置下Git的路径。选择File→Settings打开设置窗口，找到Version Control下的git选项：  

点击Test按钮,现在执行成功，配置完成  

![image-20240827160557741](.\images\image-20240827160557741.png)

### 4.2、在Idea中操作Git

场景：本地已经有一个项目，但是并不是git项目，我们需要将这个放到码云的仓库里，和其他开发人员继续一起协作开发。  

#### 4.2.1、创建项目远程仓库

访问部门git私有仓库：http://git.cnkh.com/

点击创建仓库

![image-20240827161231725](.\images\image-20240827161231725.png)

设置私有就是仅自己可见

![image-20240827161518140](.\images\image-20240827161518140.png)

#### 4.2.2、初始化本地仓库 

![image-20240827162047940](.\images\image-20240827162047940.png)

选择当前项目文件夹

![image-20240827162128537](.\images\image-20240827162128537.png)

#### 4.2.3、设置远程仓库  

![image-20240827163443090](.\images\image-20240827163443090.png)

配置远程地址：URl填写刚刚新建仓库页面的地址

![image-20240827163511543](.\images\image-20240827163511543.png)

![image-20240827163632959](.\images\image-20240827163632959.png)

#### 4.2.4、推送到远程仓库 

推荐使用（Commit and Push） ,提交的注释一定要完整！！！！！！（包含本次提交的更改，添加的内容）

![image-20240827164146571](.\images\image-20240827164146571.png)

#### 4.2.5、创建分支  

![image-20240827164545772](.\images\image-20240827164545772.png)

#### 4.2.6、切换分支及其他分支相关操作  

![image-20240827165009023](.\images\image-20240827165009023.png)

### 4.3、IDEA常用GIT操作入口  

![image-20240827170109270](.\images\image-20240827170109270.png)

## 5、Git常用命令

### 仓库

```shell
# 在当前目录新建一个Git代码库
$ git init

# 新建一个目录，将其初始化为Git代码库
$ git init [project-name]

# 下载一个项目和它的整个代码历史
$ git clone [url]Copy to clipboardErrorCopied
```

### 配置

```shell
# 显示当前的Git配置
$ git config --list

# 编辑Git配置文件
$ git config -e [--global]

# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"Copy to clipboardErrorCopied
```

### 增加/删除文件

```shell
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir]

# 添加当前目录的所有文件到暂存区
$ git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]Copy to clipboardErrorCopied
```

### 代码提交

```shell
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...Copy to clipboardErrorCopied
```

### 分支

```shell
# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]

# 新建一个分支，并切换到该分支
$ git checkout -b [branch]

# 新建一个分支，指向指定commit
$ git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 切换到上一个分支
$ git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
$ git merge [branch]

# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 删除分支
$ git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]Copy to clipboardErrorCopied
```

### 标签

```shell
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]

# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]

# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]

# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]Copy to clipboardErrorCopied
```

### 查看信息

```shell
# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflogCopy to clipboardErrorCopied
```

### 远程同步

```shell
# 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --allCopy to clipboardErrorCopied
```

### 撤销

```shell
# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]

暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash popCopy to clipboardErrorCopied
```

### 其他

```shell
# 生成一个可供发布的压缩包
$ git archive
```

## **附:几条铁令**

1. 切换分支前先提交本地的修改
2. 代码及时提交，提交过了就不会丢失

**多人开发正确的提交步骤**

- 注意push 前一定要先pull，不然可能会覆盖远程更改。虽然很多情况会提示push 失败，先解决冲突再提交。但是工具提醒哪有自己pull 靠谱，万一覆盖了呢，更麻烦不是。

- 提交合并代码尽量频繁一点，不然一下子解决几十上百个文件的冲突就难受啦
- 多人合作一个分支就习惯性写代码（分支有改动或者每天上班前）之前pull。写完(任务量大也尽量一天执行一次)push一次。不用等着最后开发完成再去想着解决冲突。
- 分支和主线之前先git merge 主线 ，解决完冲突再合并。











