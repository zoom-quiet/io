# zoomquiet.io
> 汇总


## background
从 2000 开始, 就尝试用各种建技术发布自己的官网

- zqstudio.org 使用 phpBB 发布, 域名过期
- zoomquiet.org 使用 pyblosxom 发布, 系统官方停止维护
- zoomquiet.io 使用 Graphviz + 自主工具编译为热点图片网页发布
    - 后来发现 Google 等搜索引擎不认这种形式
- blog.zoomquiet.io 使用 SSG 引擎: pelican 本地编译发布
- ...

慢慢的, 几十个社区网络发布出来了, 但是, 大妈自己就没了


## goal
> 聚合为完备的`大妈`

- zoomquiet.io 根域名使用
- mdBook 为引擎, gh-action 为发布
- 汇集所有构建过的网站内容过来

## trac

- 240715 ZQ 迁移 blog.zoomquiet.io
    - 使用 [zjp-CN/mdbook-template](https://github.com/zjp-CN/mdbook-template?tab=readme-ov-file) 创建仓库
    - 开辟 Pages 配置域名
    - 安装 [utterances](https://utteranc.es/) 指向:
        - [Issues · zoom-quiet/comments](https://github.com/zoom-quiet/comments/issues)

## refer.

[什么是静态站点生成器？ | Cloudflare](https://www.cloudflare.com/zh-cn/learning/performance/static-site-generator/)

- [Static Site Generators - Top Open Source SSGs | Jamstack](https://jamstack.org/generators/)
- [GitHub Pages 使用入门 - GitHub 文档](https://docs.github.com/zh/pages/getting-started-with-github-pages/about-github-pages)
    + [riggraz/no-style-please: A (nearly) no-CSS, fast, minimalist Jekyll theme.](https://github.com/riggraz/no-style-please)
- [Quick start | Hugo](https://gohugo.io/getting-started/quick-start/)
    + [g-hanwen/hugo-theme-nostyleplease: a (nearly) no-CSS, fast, minimalist Hugo theme ported from riggraz/no-style-please.](https://github.com/g-hanwen/hugo-theme-nostyleplease?tab=readme-ov-file)
- [Introduction - mdBook Documentation](https://rust-lang.github.io/mdBook/format/configuration/renderers.html)
    + [mdBook 行动 ·操作 ·GitHub 市场 --- mdBook Action · Actions · GitHub Marketplace](https://raw.githubusercontent.com/peaceiris/actions-mdbook/main/images/ogp.jpg)
    + [如何使用 Github Actions 构建 mdBook |作者 katopz |中等 --- How to build mdBook with Github Actions | by katopz | Medium](https://katopz.medium.com/how-to-build-mdbook-with-github-actions-eb9899e55d7e)
        + [zjp-CN/mdbook-template：生成一个带有 mdbook-theme 的 mdbook 演示和一个用于 github 操作自动化和页面发布的 yml 文件。 --- zjp-CN/mdbook-template: Yield a mdbook demo with mdbook-theme and a yml file for github action automation and page publication.](https://github.com/zjp-CN/mdbook-template?tab=readme-ov-file)
- ...