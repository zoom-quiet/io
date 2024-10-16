import os
# import io
import re
import sys
from pprint import pprint as pp
from datetime import datetime,timezone

from feedgen.feed import FeedGenerator
import markdown
from invoke import task

SROOT = os.path.dirname(os.path.abspath(__file__))
PROOT = os.path.abspath(os.path.join(SROOT, os.pardir))
print(f"SROOT:{SROOT}\nPROOT:{PROOT}\n")

from collections import namedtuple
from loguru import logger as LOG

# 移除默认的日志处理器
LOG.remove()
# LOG.add(sys.stderr, level="WARNING")
LOG.add(sys.stdout, level="DEBUG")
# LOG.add(sys.stdout, level="INFO")
# LOG.add(sys.stdout, level="WARNING")
# LOG.add(sys.stdout, level="ERROR")

CONF = {
    #   self info,
    "project": "RSS4mdBOOK",
    "desc": "base SUMMARY.md gen RSS feed->RSS.xml",
    "version": "24.10.15.2142",
    "author": "Zoom.Quiet",
    "feedback": "askDAMA@googlegroups.com",
    "license": "MIT@2024..",
    "rpath": "./src",
    "summ": "SUMMARY.md",
    "buri": "https://zoomquiet.io",
    "follow":"feedId:69052357719365632+userId:68573755406424064",
    "last": 14,
}

Config = namedtuple("Config", CONF.keys())
CFG = Config(**CONF)

#   support stuff func.
def cd(c, path2, echo=True):
    os.chdir(path2)
    if echo:
        print("\n\t crt. PATH ===")
        c.run("pwd")
        c.run("echo \n")

@task
def ver(c):
    """echo crt. verions"""
    print(
        f"""{CFG.project}
    ~> {CFG.desc} <~
    ~> version   {CFG.version} <~
    ~> powded by {CFG.author} <~
    ~> feedback to {CFG.feedback} <~
    ~> all right reserved: {CFG.license} <~
    """
    )
    # print(CFG.output)
    return None
    # 使用 sys.modules 获取当前加载的所有模块对象
    loaded_modules = list(sys.modules.keys())
    # 打印所有加载的模块对象
    print(
        f"""
    loaded_modules: {len(loaded_modules)}
        """
    )
    return None
    for i in loaded_modules:
        print(f"{i}")


@task
def gen(c):
    """echo crt. verions"""

    # 1. 定义网站 URL 和 SUMMARY.md 文件位置
    base_url = CFG.buri #'https://mybooksite.com/'
    summary_md_path = f'{CFG.rpath}/{CFG.summ}'

    # 2. 初始化 RSS 生成器
    fg = FeedGenerator()
    fg.id(base_url)
    fg.title('ZoomQuiet.io RSS')
    fg.link(href=base_url, rel='self')
    fg.language('zh-CN')
    fg.description(f'RSS feed contains the latest {CFG.last} updates items from ZoomQuiet.io gen. by mdBook|{CFG.follow}')  # 添加全局描述

    # 3. 定义存储条目的列表
    entries = []

    # 4. 解析 SUMMARY.md 文件，提取章节和对应链接
    with open(summary_md_path, 'r', encoding='utf-8') as f:
        summary_content = f.read()

    # 5. 使用正则表达式解析 markdown 链接
    link_pattern = re.compile(r'\[(.*?)\]\((.*?)\)')

    for match in link_pattern.findall(summary_content):
        title = match[0]  # 链接文本 (页面标题)
        relative_path = match[1].strip()  # 链接地址 (相对路径)
        
        # 处理相对路径，生成完整的页面 URL
        page_url = os.path.join(base_url, relative_path).replace('\\', '/')
        file_path = os.path.join('./src', relative_path).replace('\\', '/')

        # 获取文件的最后修改时间并转换为 UTC 时间
        if os.path.exists(file_path):
            modified_time = os.path.getmtime(file_path)
            published_time = datetime.fromtimestamp(modified_time, timezone.utc)
        else:
            # 如果文件不存在，使用当前时间作为默认时间
            #published_time = datetime.now(timezone.utc)        
            continue

        with open(file_path, 'r', encoding='utf-8') as md_file:
            markdown_content = md_file.read()
        # 使用 markdown 库将 Markdown 转换为 HTML
        html_content = markdown.markdown(markdown_content)
            
        # 将条目信息存入字典
        entry_data = {
            'id': relative_path,
            'title': title,
            'link': page_url,
            'published': published_time,
            'description': f'Page {title} - Last updated at {published_time.isoformat()}',
            'content': html_content,
        }
        
        # 将条目添加到列表中
        entries.append(entry_data)

    # 6. 对条目按发布时间排序，获取最近的 20 个条目
    sorted_entries = sorted(entries, key=lambda e: e['published'], reverse=True)[:14]

    # 7. 将排序后的条目添加到 RSS feed 中
    for entry_data in sorted_entries:
        entry = fg.add_entry()
        entry.id(entry_data['id'])
        entry.title(entry_data['title'])
        entry.link(href=entry_data['link'])
        entry.published(entry_data['published'].isoformat())
        entry.description(entry_data['description'])  # 添加条目的 description
        entry.content(entry_data['content'], type='html')  # 添加 markdown 文件的内容

    # 8. 生成 RSS 文件
    fg.rss_file('rss.xml')

    print('RSS feed 生成ed: rss.xml')


