# 普通人日常如何免费使用 GenAI 来改善探索?

    Title: 我这样用GenAI
    Date: 2024-07-04 15:42
    Authors: ZoomQuiet
    Category: IMHO
    Tags: dama, AI, Howto
    Summary: IMHO/ 普通人日常如何免费使用 GenAI 来改善探索?

## AIGCx珠海
成为中国AIGC产业联盟（AIGCxChina）珠海站的发起人之前,
已经有20年以上程序员生涯,
以及10多个社区的参与/发起/运营经历;
还有37年以上科学幻想作品的阅读积累,
自认对未来,对科技是有足够耐受度的;

但是, ChatGPT 一出现,还是有过一些内部阻尼, 
好在, 和热情的各城 AIGC 成员沟通下来,
也及时习惯了 GenAI 的存在,开始主动使用起来;

## 背景
因为和 AIGCxChina 发起人, 倪老师一直有各种社区中的联系,
所以, 在 `中国AIGC产业联盟` 发起后,
第一时间找到俺, 联合推出: 
[AIGCx/Awesome: AIGCxAwesome 中国AIGC产业联盟资源大全](https://github.com/AIGCx/Awesome)


项目初衷是为联盟内部提供一个公开透明自主维护的资源发布渠道,
俺对比各种方案后,
仿造各种 `Awesome` 项目, 快速建立了联盟可用的自主链接发布仓库;
大家嘦通过网页界面就可以持续发布自己城市社区内部可公开分享出来的各种资源;

进一步的和各个城市主理人在一次次周例会中产生了模糊的联系,
以及大家无意中展现出来的各种 AI 资源使用技巧;


## 技巧
> 当前日常在用

在经过大家海量技巧演示和引导后,
每天不时在经常使用的场景主要为以下三种,
而且都是免费的; 分享给一时没有对 GenAI 形成具体想象的好奇的大家.


### 编程
> 副驾驶

作为20+年以上程序猿, 首要的当然是辅助编程了,
尝试过过各种服务,国内内外的都有, 最终稳定下来, 在日常使用的, 
还是 VSCode 官方推荐的: 

[GitHub Copilot - Your AI pair programmer](https://marketplace.visualstudio.com/items?itemName=GitHub.copilotvs)

详细使用过程, 有视频记录:

[AIGCxZhuhai[demo show]通用编程AI辅助过程](https://www.youtube.com/live/VbCJhD3TDtA?si=Zo3kedZ3zCamYcV0)  来自 @YouTube 


整体来说, 需要一些配置过程, 然后, 自动生成的提示, 也主要看使用的技术桟;
如果是 Haskell/SmallTalk 之类小众语言,就甭期待能生成什么靠谱的代码了;

但是, 如果基于  Py/Golang/Rust/... 热门技术,
而且在 GigtHub 中有很多开源仓库的,
那么, 你又没有在开发非常奇怪的特殊项目, 
只是日常小工具, 又或是  [CRUD/增删查改](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) 型常规应用, 那么, 感觉生成的代码,  60% 以上是可以使用的, 但是, 并不是每次都能生成不用修改就能使用的代码, 最多是能猜到你接下来最大概率将输入的代码形式, 具体是否能和以往代码关联起来,变量名什么的都对的上, 那得看运气;

多数情况中, 生成的代码,越少, 越能匹配当前项目; 越多,越没溜;

随着 OpenAI 的迭代, Copilot `吸收消化` 的开源仓库代码越来越多;
在 VSCode 界面中自动生成的代码也将越来越可用;

当然, 还有一个前提是, 你的网络足够稳定, 支持 Copilot 能大量的拉上拉下各种数据.

PS:

增删查改（英语：CRUD），全称:

- **C**reate 增加
- **D**elete 删除
- **R**ead 查询
- **U**pdate 改正

在计算机程序语言中是一连串常见的动作行为，而其行为通常是为了针对某个特定资源所作出的举动（例如：建立资料、读取资料等）。这四个行为最常见的用途是在使用SQL数据库与网站的API的时候。这个词语（CRUD）最早被记载于James Martin所撰写的[Managing the Data-base Environment - James Martin - Google 图书](https://books.google.co.jp/books?id=ymy4AAAAIAAJ&pg=PA381&dq=%22CRUD%22&redir_esc=y)书中

进一步的, 这四种行为在不同场景中对应的术语:

![CRUD](https://ipic.zoomquiet.top/2024-07-17-zshot%202024-07-17%2016.24.42.jpg)

### 音乐
> 主引擎

很早知道: 生成艺术/generative art,
也就是使用代码生成视觉/听觉艺术品;

听觉的, 当然就是音乐了;
当时知道的是: [Algorave](https://en.wikipedia.org/wiki/Algorave)
有各种专用 DSL 进行实时编程并生成音乐:

比如:

- [Live code with Tidal Cycles | Tidal Cycles](https://tidalcycles.org/)
- [EarSketch](https://earsketch.gatech.edu/landing/#/)
- [Sonic Pi - The Live Coding Music Synth for Everyone](https://sonic-pi.net/)
- [免费的作谱软件 | MuseScore](https://musescore.org/zh-hans)
- ...

她们要不得编程, 要不得编曲...尝试后, 都没能生成可用的音乐;

直到大家发现: 

[Chaos42DAMA \| Suno](https://suno.com/@chaos42dama)

虽然有很多教程, 但是, 上手后, 发现, 就两条件最有用的:

- [Suno Explore](https://suno.com/explore) 探索当前支持哪些曲风
    - 然后抄下来风格提示词, 比如: `Ambient House 16-bit`
- [Suno](https://suno.com/account) 在首页体验,那些曲子是自己喜欢的
    - 然后抄下来生成提示词, 比如: `Minimalistic Grunge Electro Swing 90s Rock Sound Distorted Guitar Upright Bass Swing Beats Synth Pads Simple Drums `
    - 当然, 如果包含歌词的话, 也得注意其中的关键提示词, 比如:
        - `[Pre-Chorus]`
        - `[Chorus]`
        - ...
        - `(that I lived)`

基于以上, 多尝试, 并使用内置的 `Extend` ~ 拓展功能,
就可以在一段60秒以内的音乐, 不断合并/拓展为一个足够长度的可听歌曲了;

当然, 一切基于每天定量的 Token, 也就是说, 每次尝试, 都要消耗掉一定信用点 `Credits` 每次大约20个点? 因为每次自动生成2个版本音乐供你选择;

好在, 嘦每天坚持使用, 这个信用点, 每天都自动送一些, 足够你每天完成一到两个构思的探索;

如果, 实在创意丰沛, 那还是得充值, 获得更多生成音乐.


### 搜索
> 新世界

真正越用越爽快的, 还是搜索引擎智能替代这一场景了;

过往, 无论是用 google 还是 duckduckgo 等等, 搜索引擎, 其中技巧从来没有变过:

- 如果不知道问题的解决方案, 那就要先探索出可能方案的对应英文术语
- 抽象出对应问题可能的关键词, 进行搜索
    + 这时可以是中文, 最好3个关键词以上
    + 比如: 想知道 Pandas 性能问题有什么, 以及如何解决
    + 一开始, 可能要搜索: `Pandas`+`Python`+性能+问题
- 然后, 通读各种结果网页, 找到正好或是相关的性能问题分析内容, 并找到其中提及的具体性能问题对应的英文术语
- 接着, 使用这个术语, 追加上 Pandas, Python, performance 等相关关键词, 再进行搜索
- 反复以上过程, 直到发现, 并识别出:
    + 具体性能问题的分析和解决方案
    + 以及对应方案提出作者/团队名
    + 再进一步挖掘, 这些人名, 找到对应 blog 或是 github 仓库, 进行逐一探查
- 最终才可能挖掘出正好或是可能解决自己工程中具体问题的模块或是代码
- 但是, 想使用这些代码, 还要另外一大堆探查, 实验以及检验

可现在, 完全可以将各种大模型当成一个可以通过文字进行协作的万能同事了,
也就是说, 可以象在微信聊天框中一般, 给出具体请求, 并能获得对应基本可用的指引了;

只是, 要注意的是:

- 尽可能多的提供期待的角色定义
- 尽可能多的提供领域问题的背景/条件/数据/资料/...
    - 参考:[提问的智慧 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E6%8F%90%E9%97%AE%E7%9A%84%E6%99%BA%E6%85%A7)
- 尽可能详细的提出期待回答的形式/结构/过程, 以及要求
- 记得说: `请`

其实, 本质上是恢复了最初我们使用搜索引擎的直觉期待, 将问题本身直接进行陈述, 而不必事先人工将其抽象为可用来搜索的关键词而已;

但是, 关键词抽象的技巧一样有用, 毕竟, 这也是 GenAI 们依赖的关键词哪;

例如, 俺想开发一个辅助练习打字的 golang 程序,就可以这么提问:

```
[角色要求]
假设你是一位经验丰富的 Golang 工程师, 特别是在 CLI 领域有海量积累,
并乐于帮助同事, 愿意详细分享代码的思路;

[问题背景]
为了练习 Golang 开发技巧, 我需要从0开始构建一个 CLI 工具;

[问题描述]
工具名为 Typer, 主要功能有以下三点:
1: 运行在标准终端中, 分三部分, 顶部是练习文稿,可以根据用户的键入,变化对应字母的粗细以及颜色; 中部是键入区, 跟踪用户的键入,逐一显示键入的文字, 有动画效果, 字体足够大; 底部是键盘示意区, 跟踪用户的键入,逐一提示当前敲击的键, 以及将敲击的键;
2: 分不同难度, 有内置文库, 可以自动随机选择不同难度的经典文本, 来练习输入
3: 可以记录键入过程, 分析其中的习惯, 速率等等关键行为数据, 并记录下来, 每次对比提示出进步或是退步的情况;

[输出期待]
将我视为一名大一的普通学生, 
尽可能详细的阐述整体工程的结构, 以及关键功能实现的思路;
并给出具体示例代码, 来说明功能难点, 以及如何从头构建和调试这一项目;

[礼貌部分]
谢谢
```

- 以上 `[框住的是注释,不是要输入的提示词]`

这样, 就可以获得一篇详细的开发指导书,
如果哪个部分看不明白就可以继续追问, 配合一路上真实进行调试,
很快速就可以形成一个全新领域, 相对靠谱的可用路径概念了;

这种聊天式对话搜索, 比原先需要自己逐一尝试关键词, 并广泛的快速通读网页内容来判定是否吻合期待, 效率要高很多;

也就是说, 对于陌生领域的探索, GenAI 们比原先的搜索引擎要更加友好, 以及有启发性; 唯一要注意的是其中知识幻觉问题, 毕竟 LLM 们只是推测出最有可能的下一个字, 而对所有字形成的文章在说什么并不关心, 也无法理解;

进一步的, 俺习惯将同一个问题同时问一系列 GenAI 以便对比, 第一时间识别幻觉,
当前免费同时使用的引擎:

- [ChatGPT 4o](https://chatgpt.com/) 免费版本,每天使用次数受限, 擅长生成流畅的文本
- [Gemini](https://gemini.google.com/) 免费版本, 擅长生成有结构的长篇文本, 可能只输出英文, 中文直接输出的品质一般
- [devv_ Claude 3 Haiku](https://devv.ai/) 免费版本, 能选择多种引擎,以及技术领域, 组合起来, 可以很好的生成对应技术栈的示例代码, 有一定经常, 但是, 能自动列出使用的网页链接;
- [Kimi](https://kimi.moonshot.cn/chat/) 国产免费, 不会墙, 限额大方, 而且接口简洁, 生成的内容比较少, 但是, 幻觉也相对少
- [秘塔](https://metaso.cn/search/), 国产免费, 不会墙, 新出的`文库` 功能, 能将生成的内容来源文档列出, 很多都是在线的电子图书, 这样, 就可以有效减少幻觉, 并立即找到对应信息源头

综合以上大模型对话, 真的就像是和多位个性不同的同事在随时聊天儿,
获得的信息品质, 又完全取决我们自己对问题描述的品质;

感觉上就是像互联网被具像为活人来反射各种偏见 ;-)


## 小结
> AIGC 的体感变迁
> 未来已来,只是未平均

当然, 以上只是从23年初开始, 零星使用各种方向上的总结;
直觉上, 这18个月, 使用 GenAI 相关服务的次数没通过 22680 次,
整体时长累计也没通过 63 天, 实在是太少了;

因此, 包含的私人偏见不少;

不过, 敢于放话:

- GenAI 已经进入可用阶段
- 只是, 在精确度要求高的场景中, 依然无法完全信任
- 好在, 各种探索利要求高场景中, 已经足够承担普通人的日常使用了
- 而且, 都有免费渠道/版本可以使用
- 至少, 足以部分替代 google 等普通搜索引擎们了, 当前,俺每天的搜索行为, 一半在 GenAI 一半在搜索了;

进一步的, 在写作/播客节目/视频节目/...方面,如何结合 GenAI 们,
是俺在探索的, 也希望大家在 AIGCxChina 各城市分站中, 一起探索和分享使用 GenAI 的经验,以便加速跃进 AIGC 时代;-)

## logging

- 240717 ZQ 发布
- 240715 ZQ 迁移到 zoomquiet.io
- 240715 ZQ 前导
- 240710 ZQ 收集各种链接
- 240704 ZQ 重构大纲
- 240701 ZQ init.
- 240630 ZQ 决定参与
- 240625 ZQ 获知



