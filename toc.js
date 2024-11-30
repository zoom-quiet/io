// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">首页</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="zoomquiet.html">大妈</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="linking.html">链接</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">随想🌚🌘🌗🌖🌝</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="IMHO/index.html">恕直</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="IMHO/DevOps/index.html">DevOps</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="IMHO/DevOps/20241129-devrel.html">开源&amp;开发者关系</a></li><li class="chapter-item expanded "><a href="IMHO/DevOps/20241107-watchdogfood.html">食堂监察?</a></li><li class="chapter-item expanded "><a href="IMHO/DevOps/20241009-deLark.html">别了Lark</a></li></ol></li><li class="chapter-item expanded "><a href="IMHO/FLOSS/index.html">FLOSS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="IMHO/FLOSS/20241114-ekm-problem.html">EKM小解</a></li><li class="chapter-item expanded "><a href="IMHO/FLOSS/20140317-ac1024-tech-community4chinese.html">中国技术社区研究/</a></li><li class="chapter-item expanded "><a href="IMHO/FLOSS/20140220-ac1-zq.html">什么是社区?</a></li><li class="chapter-item expanded "><a href="IMHO/FLOSS/20140227-ac2-tech-community.html">什么是技术社区?</a></li><li class="chapter-item expanded "><a href="IMHO/FLOSS/20141215-ac20-need-what.html">社区需要什么?</a></li></ol></li><li class="chapter-item expanded "><a href="IMHO/IAS/index.html">睡后收入</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="IMHO/IAS/20241129-future-need.html">未来必需</a></li><li class="chapter-item expanded "><a href="IMHO/IAS/20241125-memecoin-dao.html">DAO memeCOIN?</a></li><li class="chapter-item expanded "><a href="IMHO/IAS/20241028-iff-write.html">咩是写作?</a></li><li class="chapter-item expanded "><a href="IMHO/IAS/20241026-jy-framwork.html">开源保险社区?</a></li><li class="chapter-item expanded "><a href="IMHO/IAS/20200220-DM30-IMHO-how2work-dark.html">科学&#39;摸鱼&#39;指北</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="IMHO/IAS/20200221-DM31-IMHO-how2work-deep.html">科学&#39;摸鱼&#39;+1</a></li><li class="chapter-item expanded "><a href="IMHO/IAS/20200221-DM32-IMHO-how2work-debug.html">科学&#39;摸鱼&#39;+2</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="IMHO/20240704-aigcxzh-genai101.html">AIGCx征文:俺这样用GenAI</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="IMHO/20240717-aigcxzh-genai102.html">《我这样用GenAI》重构</a></li></ol></li><li class="chapter-item expanded "><a href="IMHO/19980101-chinese4internet.html">1998:探讨 信息化社会中 中国传统思想的作用</a></li></ol></li><li class="chapter-item expanded "><a href="MurMur/index.html">呢喃</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="MurMur/24/index.html">2024</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="MurMur/24/20241112.html">11.12 36笺</a></li><li class="chapter-item expanded "><a href="MurMur/24/20241112-1.html">11.12 DK 2405 抛砖</a></li><li class="chapter-item expanded "><a href="MurMur/24/20241109.html">11.9 DK 2405</a></li><li class="chapter-item expanded "><a href="MurMur/24/20241107.html">11.7 家庭绘本</a></li><li class="chapter-item expanded "><a href="MurMur/24/20241028.html">10.28 为咩阅后即焚</a></li><li class="chapter-item expanded "><a href="MurMur/24/20241024.html">10.24 深挖开源...</a></li><li class="chapter-item expanded "><a href="MurMur/24/20241023.html">10.23 BTC电热炉</a></li><li class="chapter-item expanded "><a href="MurMur/24/20241020.html">10.20 memecoin?</a></li><li class="chapter-item expanded "><a href="MurMur/24/20241014.html">10.14 为毛Python?</a></li><li class="chapter-item expanded "><a href="MurMur/24/20240929.html">9.29 自我纠错?</a></li><li class="chapter-item expanded "><a href="MurMur/24/20240924.html">9.24 随心所欲?</a></li><li class="chapter-item expanded "><a href="MurMur/24/20240914.html">9.14 AI时代的学习</a></li><li class="chapter-item expanded "><a href="MurMur/24/20240912.html">9.12 「开发者关系」</a></li><li class="chapter-item expanded "><a href="MurMur/24/20240911.html">9.11 「社畜指标」</a></li><li class="chapter-item expanded "><a href="MurMur/24/20240904.html">9.4 「人体电池」</a></li><li class="chapter-item expanded "><a href="MurMur/24/20240903.html">9.3 枪包带</a></li><li class="chapter-item expanded "><a href="MurMur/24/20240730.html">7.30 人类发展?</a></li><li class="chapter-item expanded "><a href="MurMur/24/20240727.html">7.27 高维撕裂</a></li><li class="chapter-item expanded "><a href="MurMur/24/20240725.html">7.25 AI和教育产业</a></li><li class="chapter-item expanded "><a href="MurMur/24/20240723.html">7.23 和高手差距..</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="MurMur/24/20240723+1.html">+1 开源安全AI?</a></li></ol></li><li class="chapter-item expanded "><a href="MurMur/24/20240722.html">7.22 自由?</a></li><li class="chapter-item expanded "><a href="MurMur/24/20240718.html">7.18 利他</a></li><li class="chapter-item expanded "><a href="MurMur/24/20240717.html">7.17「抓娃娃」算了吧</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="MurMur/24/20240717-1.html">+1苹果和BSD</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="MurMur/23/index.html">2023</a></li><li class="chapter-item expanded "><a href="MurMur/22/index.html">2022</a></li><li class="chapter-item expanded "><a href="MurMur/21/index.html">2021</a></li><li class="chapter-item expanded "><a href="MurMur/20/index.html">2020</a></li><li class="chapter-item expanded "><a href="MurMur/20141223-zoomquiet4KO.html">KnewOne-talk之大妈篇</a></li><li class="chapter-item expanded "><a href="MurMur/19961111-CIPHER.html">CIPHER</a></li></ol></li><li class="chapter-item expanded "><a href="OldTouch/index.html">钩陈</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="OldTouch/2024/index.html">2024</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="OldTouch/24/20241110-echo9dayu.html">11.10 Dayu9问</a></li><li class="chapter-item expanded "><a href="OldTouch/24/20241011-funny-court.html">10.11 友好的法院?</a></li></ol></li><li class="chapter-item expanded "><a href="OldTouch/20131219-jekyll2pelican.html">Jekyll 转进 Pelican</a></li></ol></li><li class="chapter-item expanded "><a href="ANN/index.html">公告</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ANN/20200223-ZoomQuiet42-ANN-0-aaaagin.html">叕..重新开始</a></li><li class="chapter-item expanded "><a href="ANN/20200302-ZQ42-ANN-NINAN.html">呢喃</a></li><li class="chapter-item expanded "><a href="ANN/20200222-ZQ42-ANN-historic.html">钩陈</a></li><li class="chapter-item expanded "><a href="ANN/20200222-ZQ42-ANN-IMHO.html">拙见</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ANN/pressone.html">PRESSone</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="part-title">折腾🌚🌘🌗🌖🌝</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="Pythonic/index.html">蟒样</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Pythonic/24/index.html">2024</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Pythonic/24/20241111-pj-miaolai-d2.html">11.11 迷你胆耳放</a></li><li class="chapter-item expanded "><a href="Pythonic/24/20241107-mac-snap-lunar.html">11.7 截屏冲突解决</a></li><li class="chapter-item expanded "><a href="Pythonic/24/20241028-loc-host-s3.html">10.28 自持图床</a></li><li class="chapter-item expanded "><a href="Pythonic/24/20241016-dvd_subtitle.html">10.18 dvd_subtitle</a></li><li class="chapter-item expanded "><a href="Pythonic/24/20241016-rss4mdbook.html">10.16 RSS4mdBook</a></li><li class="chapter-item expanded "><a href="Pythonic/24/20241015-rss-app-x.html">10.15 RSS4X</a></li><li class="chapter-item expanded "><a href="Pythonic/24/20241014-cf-pages.html">10.14 迁移 gh-pages 到 Cloudflare</a></li><li class="chapter-item expanded "><a href="Pythonic/24/20241011-mov-sub.html">10.11 电影字幕</a></li></ol></li><li class="chapter-item expanded "><a href="Pythonic/weekly/index.html">周刊</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Pythonic/weekly/24/index.html">2024</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20241125-47.html">蟒周刊:24-47</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20241118-46.html">蟒周刊:24-46</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20241111-45.html">蟒周刊:24-45</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20241028-44.html">蟒周刊:24-44</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20241028-43.html">蟒周刊:24-43</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20241020-42.html">蟒周刊:24-42</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20241014-41.html">蟒周刊:24-41</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20241006-40.html">蟒周刊:24-40</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240929-39.html">蟒周刊:24-39</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240922-38.html">蟒周刊:24-38</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240915-37.html">蟒周刊:24-37</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240908-36.html">蟒周刊:24-36</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240901-35.html">蟒周刊:24-35</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240825-34.html">蟒周刊:24-34</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240818-33.html">蟒周刊:24-33</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240811-32.html">蟒周刊:24-32</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240804-31.html">蟒周刊:24-31</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240728-30.html">蟒周刊:24-30</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240721-29.html">蟒周刊:24-29</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240714-28.html">蟒周刊:24-28</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240707-27.html">蟒周刊:24-27</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240630-26.html">蟒周刊:24-26</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240623-25.html">蟒周刊:24-25</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240616-24.html">蟒周刊:24-24</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240609-23.html">蟒周刊:24-23</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240602-22.html">蟒周刊:24-22</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240526-21.html">蟒周刊:24-21</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240519-20.html">蟒周刊:24-20</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240512-19.html">蟒周刊:24-19</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240505-18.html">蟒周刊:24-18</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240428-17.html">蟒周刊:24-17</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240421-16.html">蟒周刊:24-16</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240414-15.html">蟒周刊:24-15</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240407-14.html">蟒周刊:24-14</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240331-13.html">蟒周刊:24-13</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240324-12.html">蟒周刊:24-12</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240317-11.html">蟒周刊:24-11</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240310-10.html">蟒周刊:24-10</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240303-09.html">蟒周刊:24-09</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240225-08.html">蟒周刊:24-08</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240218-07.html">蟒周刊:24-07</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240211-06.html">蟒周刊:24-06</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240204-05.html">蟒周刊:24-05</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240128-04.html">蟒周刊:24-04</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240121-03.html">蟒周刊:24-03</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240114-02.html">蟒周刊:24-02</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/24/20240107-01.html">蟒周刊:24-01</a></li></ol></li><li class="chapter-item expanded "><a href="Pythonic/weekly/23/index.html">2023</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Pythonic/weekly/23/20231231-52.html">蟒周刊:23-52</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/23/20231224-51.html">蟒周刊:23-51</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/23/20231217-50.html">蟒周刊:23-50</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/23/20231210-49.html">蟒周刊:23-49</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/23/20231203-48.html">蟒周刊:23-48</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/23/20231126-47.html">蟒周刊:23-47</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/23/20231119-46.html">蟒周刊:23-46</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/23/20231111-45.html">蟒周刊:23-45</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/23/20231105-44.html">蟒周刊:23-44</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/23/20231029-43.html">蟒周刊:23-43</a></li><li class="chapter-item expanded "><a href="Pythonic/weekly/23/20231022-42.html">蟒周刊:23-42</a></li></ol></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
