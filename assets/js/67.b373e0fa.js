(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{556:function(s,a,e){"use strict";e.r(a);var t=e(22),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"git-工具-重写历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-工具-重写历史"}},[s._v("#")]),s._v(" Git 工具 - 重写历史")]),s._v(" "),e("p",[s._v("许多时候，在使用 Git 时，你可能想要修订提交历史。 Git 很棒的一点是它允许你在最后时刻做决定。 你可以在将暂存区内容提交前决定哪些文件进入提交，可以通过 "),e("code",[s._v("git stash")]),s._v(" 来决定不与某些内容工作， 也可以重写已经发生的提交就像它们以另一种方式发生的一样。 这可能涉及改变提交的顺序，改变提交中的信息或修改文件，将提交压缩或是拆分， 或完全地移除提交——在将你的工作成果与他人共享之前。")]),s._v(" "),e("p",[s._v("在本节中，你可以学到如何完成这些工作，这样在与他人分享你的工作成果时你的提交历史将如你所愿地展示出来。")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("Note")]),s._v(" "),e("th",[s._v("在满意之前不要推送你的工作Git 的基本原则之一是，由于克隆中有很多工作是本地的，因此你可以 "),e("strong",[s._v("在本地")]),s._v(" 随便重写历史记录。 然而一旦推送了你的工作，那就完全是另一回事了，除非你有充分的理由进行更改，否则应该将推送的工作视为最终结果。 简而言之，在对它感到满意并准备与他人分享之前，应当避免推送你的工作。")])])]),s._v(" "),e("tbody",[e("tr",[e("td"),s._v(" "),e("td")])])]),s._v(" "),e("h2",{attrs:{id:"修改最后一次提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改最后一次提交"}},[s._v("#")]),s._v(" 修改最后一次提交")]),s._v(" "),e("p",[s._v("修改你最近一次提交可能是所有修改历史提交的操作中最常见的一个。 对于你的最近一次提交，你往往想做两件事情：简单地修改提交信息， 或者通过添加、移除或修改文件来更改提交实际的内容。")]),s._v(" "),e("h3",{attrs:{id:"修改提交信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改提交信息"}},[s._v("#")]),s._v(" 修改提交信息")]),s._v(" "),e("p",[s._v("如果，你只是想修改最近一次提交的提交信息，那么很简单：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面这条命令会将最后一次的提交信息载入到编辑器中供你修改。 当保存并关闭编辑器后，编辑器会将更新后的提交信息写入新提交中，它会成为新的最后一次提交。")]),s._v(" "),e("h3",{attrs:{id:"修改实际内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改实际内容"}},[s._v("#")]),s._v(" 修改实际内容")]),s._v(" "),e("p",[s._v("另一方面，如果你想要修改最后一次提交的实际内容，那么流程很相似：首先作出你想要补上的修改， 暂存它们，然后用 "),e("code",[s._v("git commit --amend")]),s._v(" 以新的改进后的提交来 "),e("strong",[s._v("替换")]),s._v(" 掉旧有的最后一次提交，")]),s._v(" "),e("p",[s._v("使用这个技巧的时候需要小心，因为修正会改变提交的 SHA-1 校验和。 它类似于一个小的变基——"),e("strong",[s._v("如果已经推送了最后一次提交就不要修正它")]),s._v("。")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("Tip")]),s._v(" "),e("th",[s._v("修补后的提交可能需要修补提交信息当你在修补一次提交时，可以同时修改提交信息和提交内容。 如果你修补了提交的内容，那么几乎肯定要更新提交消息以反映修改后的内容。另一方面，如果你的修补是琐碎的（如修改了一个笔误或添加了一个忘记暂存的文件）， 那么之前的提交信息不必修改，你只需作出更改，暂存它们，然后通过以下命令避免不必要的编辑器环节即可："),e("code",[s._v("$ git commit --amend --no-edit")])])])]),s._v(" "),e("tbody",[e("tr",[e("td"),s._v(" "),e("td")])])]),s._v(" "),e("h2",{attrs:{id:"修改多个提交信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改多个提交信息"}},[s._v("#")]),s._v(" 修改多个提交信息")]),s._v(" "),e("p",[s._v("为了修改在提交历史中较远的提交，必须使用更复杂的工具。 Git 没有一个改变历史工具，但是可以使用变基工具来变基一系列提交，基于它们原来的 HEAD 而不是将其移动到另一个新的上面。 通过交互式变基工具，可以在任何想要修改的提交后停止，然后修改信息、添加文件或做任何想做的事情。 可以通过给 "),e("code",[s._v("git rebase")]),s._v(" 增加 "),e("code",[s._v("-i")]),s._v(" 选项来交互式地运行变基。 必须指定想要重写多久远的历史，这可以通过告诉命令将要变基到的提交来做到。")]),s._v(" "),e("p",[s._v("例如，如果想要修改最近三次提交信息，或者那组提交中的任意一个提交信息， 将想要修改的最近一次提交的父提交作为参数传递给 "),e("code",[s._v("git rebase -i")]),s._v(" 命令，即 "),e("code",[s._v("HEAD~2^")]),s._v(" 或 "),e("code",[s._v("HEAD~3")]),s._v("。 记住 "),e("code",[s._v("~3")]),s._v(" 可能比较容易，因为你正尝试修改最后三次提交；但是注意实际上指定了以前的四次提交，即想要修改提交的父提交：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("再次记住这是一个变基命令——在 "),e("code",[s._v("HEAD~3..HEAD")]),s._v(" 范围内的每一个修改了提交信息的提交及其 "),e("strong",[s._v("所有后裔")]),s._v(" 都会被重写。 不要涉及任何已经推送到中央服务器的提交——这样做会产生一次变更的两个版本，因而使他人困惑。")]),s._v(" "),e("p",[s._v("运行这个命令会在文本编辑器上给你一个提交的列表，看起来像下面这样：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("pick f7f3f6d changed my name a bit\npick 310154e updated README formatting and added blame\npick a5f4a0d added cat-file\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Rebase 710f0f8..a5f4a0d onto 710f0f8")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Commands:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# p, pick <commit> = use commit")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# r, reword <commit> = use commit, but edit the commit message")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# e, edit <commit> = use commit, but stop for amending")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# s, squash <commit> = use commit, but meld into previous commit")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# f, fixup <commit> = like "squash", but discard this commit\'s log message')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# x, exec <command> = run command (the rest of the line) using shell")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# b, break = stop here (continue rebase later with 'git rebase --continue')")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# d, drop <commit> = remove commit")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# l, label <label> = label current HEAD with a name")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# t, reset <label> = reset HEAD to a label")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .       create a merge commit using the original merge commit's")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .       message (or the oneline, if no original merge commit was")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .       specified). Use -c <commit> to reword the commit message.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# These lines can be re-ordered; they are executed from top to bottom.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you remove a line here THAT COMMIT WILL BE LOST.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# However, if you remove everything, the rebase will be aborted.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Note that empty commits are commented out")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])]),e("p",[s._v("需要重点注意的是相对于正常使用的 "),e("code",[s._v("log")]),s._v(" 命令，这些提交显示的顺序是相反的。 运行一次 "),e("em",[s._v("log")]),s._v(" 命令，会看到类似这样的东西：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("format:"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%h %s"')]),s._v(" HEAD~3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("HEAD\na5f4a0d added cat-file\n310154e updated README formatting and added blame\nf7f3f6d changed my name a bit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("注意其中的反序显示。 交互式变基给你一个它将会运行的脚本。 它将会从你在命令行中指定的提交（"),e("code",[s._v("HEAD~3")]),s._v("）开始，从上到下的依次重演每一个提交引入的修改。 它将最旧的而不是最新的列在上面，因为那会是第一个将要重演的。")]),s._v(" "),e("p",[s._v("你需要修改脚本来让它停留在你想修改的变更上。 要达到这个目的，你只要将你想修改的每一次提交前面的 ‘pick’ 改为 ‘edit’。 例如，只想修改第三次提交信息，可以像下面这样修改文件：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("edit f7f3f6d changed my name a bit\npick 310154e updated README formatting and added blame\npick a5f4a0d added cat-file\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("当保存并退出编辑器时，Git 将你带回到列表中的最后一次提交，把你送回命令行并提示以下信息：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~3\nStopped at f7f3f6d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". changed my name a bit\nYou can amend the commit now, with\n\n       "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend\n\nOnce you're satisfied with your changes, run\n\n       "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("这些指令准确地告诉你该做什么。 输入")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("修改提交信息，然后退出编辑器。 然后，运行")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这个命令将会自动地应用另外两个提交，然后就完成了。 如果需要将不止一处的 pick 改为 edit，需要在每一个修改为 edit 的提交上重复这些步骤。 每一次，Git 将会停止，让你修正提交，然后继续直到完成。")]),s._v(" "),e("h2",{attrs:{id:"重新排序提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重新排序提交"}},[s._v("#")]),s._v(" 重新排序提交")]),s._v(" "),e("p",[s._v("也可以使用交互式变基来重新排序或完全移除提交。 如果想要移除 “added cat-file” 提交然后修改另外两个提交引入的顺序，可以将变基脚本从这样：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("pick f7f3f6d changed my name a bit\npick 310154e updated README formatting and added blame\npick a5f4a0d added cat-file\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("改为这样：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("pick 310154e updated README formatting and added blame\npick f7f3f6d changed my name a bit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("当保存并退出编辑器时，Git 将你的分支带回这些提交的父提交，应用 "),e("code",[s._v("310154e")]),s._v(" 然后应用 "),e("code",[s._v("f7f3f6d")]),s._v("，最后停止。 事实修改了那些提交的顺序并完全地移除了 “added cat-file” 提交。")]),s._v(" "),e("h2",{attrs:{id:"压缩提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压缩提交"}},[s._v("#")]),s._v(" 压缩提交")]),s._v(" "),e("p",[s._v("通过交互式变基工具，也可以将一连串提交压缩成一个单独的提交。 在变基信息中脚本给出了有用的指令：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Commands:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# p, pick <commit> = use commit")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# r, reword <commit> = use commit, but edit the commit message")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# e, edit <commit> = use commit, but stop for amending")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# s, squash <commit> = use commit, but meld into previous commit")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# f, fixup <commit> = like "squash", but discard this commit\'s log message')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# x, exec <command> = run command (the rest of the line) using shell")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# b, break = stop here (continue rebase later with 'git rebase --continue')")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# d, drop <commit> = remove commit")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# l, label <label> = label current HEAD with a name")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# t, reset <label> = reset HEAD to a label")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .       create a merge commit using the original merge commit's")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .       message (or the oneline, if no original merge commit was")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .       specified). Use -c <commit> to reword the commit message.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# These lines can be re-ordered; they are executed from top to bottom.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you remove a line here THAT COMMIT WILL BE LOST.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# However, if you remove everything, the rebase will be aborted.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Note that empty commits are commented out")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("如果，指定 “squash” 而不是 “pick” 或 “edit”，Git 将应用两者的修改并合并提交信息在一起。 所以，如果想要这三次提交变为一个提交，可以这样修改脚本：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("pick f7f3f6d changed my name a bit\nsquash 310154e updated README formatting and added blame\nsquash a5f4a0d added cat-file\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("当保存并退出编辑器时，Git 应用所有的三次修改然后将你放到编辑器中来合并三次提交信息：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is a combination of 3 commits.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The first commit's message is:")]),s._v("\nchanged my name a bit\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is the 2nd commit message:")]),s._v("\n\nupdated README formatting and added blame\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is the 3rd commit message:")]),s._v("\n\nadded cat-file\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("当你保存之后，你就拥有了一个包含前三次提交的全部变更的提交。")]),s._v(" "),e("h2",{attrs:{id:"拆分提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拆分提交"}},[s._v("#")]),s._v(" 拆分提交")]),s._v(" "),e("p",[s._v("拆分一个提交会撤消这个提交，然后多次地部分地暂存与提交直到完成你所需次数的提交。 例如，假设想要拆分三次提交的中间那次提交。 想要将它拆分为两次提交：第一个 “updated README formatting”，第二个 “added blame” 来代替原来的 “updated README formatting and added blame”。 可以通过修改 "),e("code",[s._v("rebase -i")]),s._v(" 的脚本来做到这点，将要拆分的提交的指令修改为 “edit”：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("pick f7f3f6d changed my name a bit\nedit 310154e updated README formatting and added blame\npick a5f4a0d added cat-file\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后，当脚本带你进入到命令行时，重置那个提交，拿到被重置的修改，从中创建几次提交。 当保存并退出编辑器时，Git 带你到列表中第一个提交的父提交，应用第一个提交（"),e("code",[s._v("f7f3f6d")]),s._v("）， 应用第二个提交（"),e("code",[s._v("310154e")]),s._v("），然后让你进入命令行。 那里，可以通过 "),e("code",[s._v("git reset HEAD^")]),s._v(" 做一次针对那个提交的混合重置，实际上将会撤消那次提交并将修改的文件取消暂存。 现在可以暂存并提交文件直到有几个提交，然后当完成时运行 "),e("code",[s._v("git rebase --continue")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset HEAD^\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" README\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'updated README formatting'")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" lib/simplegit.rb\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'added blame'")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("Git 在脚本中应用最后一次提交（"),e("code",[s._v("a5f4a0d")]),s._v("），历史记录看起来像这样：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log -4 --pretty"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("format:"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%h %s"')]),s._v("\n1c002dd added cat-file\n9b29157 added blame\n35cfb2b updated README formatting\nf3cc40e changed my name a bit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("再次强调，这些改动了所有在列表中的提交的 SHA-1 校验和，所以要确保列表中的提交还没有推送到共享仓库中。")]),s._v(" "),e("h2",{attrs:{id:"核武器级选项-filter-branch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核武器级选项-filter-branch"}},[s._v("#")]),s._v(" 核武器级选项：filter-branch")]),s._v(" "),e("p",[s._v("有另一个历史改写的选项，如果想要通过脚本的方式改写大量提交的话可以使用它——例如，全局修改你的邮箱地址或从每一个提交中移除一个文件。 这个命令是 "),e("code",[s._v("filter-branch")]),s._v("，它可以改写历史中大量的提交，除非你的项目还没有公开并且其他人没有基于要改写的工作的提交做的工作，否则你不应当使用它。 然而，它可以很有用。 你将会学习到几个常用的用途，这样就得到了它适合使用地方的想法。")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("Caution")]),s._v(" "),e("th",[e("code",[s._v("git filter-branch")]),s._v(" 有很多陷阱，不再推荐使用它来重写历史。 请考虑使用 "),e("code",[s._v("git-filter-repo")]),s._v("，它是一个 Python 脚本，相比大多数使用 "),e("code",[s._v("filter-branch")]),s._v(" 的应用来说，它做得要更好。它的文档和源码可访问 https://github.com/newren/git-filter-repo 获取。")])])]),s._v(" "),e("tbody",[e("tr",[e("td"),s._v(" "),e("td")])])]),s._v(" "),e("h3",{attrs:{id:"从每一个提交中移除一个文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从每一个提交中移除一个文件"}},[s._v("#")]),s._v(" 从每一个提交中移除一个文件")]),s._v(" "),e("p",[s._v("这经常发生。 有人粗心地通过 "),e("code",[s._v("git add .")]),s._v(" 提交了一个巨大的二进制文件，你想要从所有地方删除。 可能偶然地提交了一个包括一个密码的文件，然而你想要开源项目。 "),e("code",[s._v("filter-branch")]),s._v(" 是一个可能会用来擦洗整个提交历史的工具。 为了从整个提交历史中移除一个叫做 "),e("code",[s._v("passwords.txt")]),s._v(" 的文件，可以使用 "),e("code",[s._v("--tree-filter")]),s._v(" 选项给 "),e("code",[s._v("filter-branch")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch --tree-filter "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rm -f passwords.txt'")]),s._v(" HEAD\nRewrite 6b9b3cf04e7c5686a9cb838c3f36a8cb6a0fc2bd "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("/21"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRef "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'refs/heads/master'")]),s._v(" was rewritten\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("code",[s._v("--tree-filter")]),s._v(" 选项在检出项目的每一个提交后运行指定的命令然后重新提交结果。 在本例中，你从每一个快照中移除了一个叫作 "),e("code",[s._v("passwords.txt")]),s._v(" 的文件，无论它是否存在。 如果想要移除所有偶然提交的编辑器备份文件，可以运行类似 "),e("code",[s._v("git filter-branch --tree-filter 'rm -f *~' HEAD")]),s._v(" 的命令。")]),s._v(" "),e("p",[s._v("最后将可以看到 Git 重写树与提交然后移动分支指针。 通常一个好的想法是在一个测试分支中做这件事，然后当你决定最终结果是真正想要的，可以硬重置 "),e("code",[s._v("master")]),s._v(" 分支。 为了让 "),e("code",[s._v("filter-branch")]),s._v(" 在所有分支上运行，可以给命令传递 "),e("code",[s._v("--all")]),s._v(" 选项。")]),s._v(" "),e("h3",{attrs:{id:"使一个子目录做为新的根目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使一个子目录做为新的根目录"}},[s._v("#")]),s._v(" 使一个子目录做为新的根目录")]),s._v(" "),e("p",[s._v("假设已经从另一个源代码控制系统中导入，并且有几个没意义的子目录（"),e("code",[s._v("trunk")]),s._v("、"),e("code",[s._v("tags")]),s._v(" 等等）。 如果想要让 "),e("code",[s._v("trunk")]),s._v(" 子目录作为每一个提交的新的项目根目录，"),e("code",[s._v("filter-branch")]),s._v(" 也可以帮助你那么做：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch --subdirectory-filter trunk HEAD\nRewrite 856f0bf61e41a27326cdae8f09fe708d679f596f "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("/12"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRef "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'refs/heads/master'")]),s._v(" was rewritten\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("现在新项目根目录是 "),e("code",[s._v("trunk")]),s._v(" 子目录了。 Git 会自动移除所有不影响子目录的提交。")]),s._v(" "),e("h3",{attrs:{id:"全局修改邮箱地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局修改邮箱地址"}},[s._v("#")]),s._v(" 全局修改邮箱地址")]),s._v(" "),e("p",[s._v("另一个常见的情形是在你开始工作时忘记运行 "),e("code",[s._v("git config")]),s._v(" 来设置你的名字与邮箱地址， 或者你想要开源一个项目并且修改所有你的工作邮箱地址为你的个人邮箱地址。 任何情形下，你也可以通过 "),e("code",[s._v("filter-branch")]),s._v(" 来一次性修改多个提交中的邮箱地址。 需要小心的是只修改你自己的邮箱地址，所以你使用 "),e("code",[s._v("--commit-filter")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch --commit-filter "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'\n        if [ "$GIT_AUTHOR_EMAIL" = "schacon@localhost" ];\n        then\n                GIT_AUTHOR_NAME="Scott Chacon";\n                GIT_AUTHOR_EMAIL="schacon@example.com";\n                git commit-tree "$@";\n        else\n                git commit-tree "$@";\n        fi\'')]),s._v(" HEAD\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("这会遍历并重写每一个提交来包含你的新邮箱地址。 因为提交包含了它们父提交的 SHA-1 校验和，这个命令会修改你的历史中的每一个提交的 SHA-1 校验和， 而不仅仅只是那些匹配邮箱地址的提交。")])])}),[],!1,null,null,null);a.default=n.exports}}]);