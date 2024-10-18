# 古老的 dvd_subtitle
> 如何将 dvd_subtitle 转换为 .srt

## background
忽然被 `1994 爱情全垒打 ヒーローインタビュー` 中
**铃木保奈美** 触发了总回忆,
好容易找到一个 VCD 画质的资源:

    1997.谎言谎言来来来Lie lie Lie

可是, 打开看是英文字幕, 必须想办法自行转换一下;

    $ ffmpeg -i Lie.lie.Lie.1997.mkv -map 0:s:0 sub.srt

结果:
```
...

    Stream #0:1(jpn): Audio: aac (LC), 48000 Hz, stereo, fltp (default)
    Stream #0:2(eng): Subtitle: dvd_subtitle, 720x480 (default)
Stream mapping:
  Stream #0:2 -> #0:0 (dvd_subtitle (dvdsub) -> subrip (srt))
Subtitle encoding currently only possible from text to text or bitmap to bitmap
```

也就是 dvdsub 和 srt 不是同一国, 无法直接提取;

## goal

和 GPT 奶奶了半天, 才明白:

- dvd_subtitle 是古老的 VDV 字幕
- 不包含文本
- 其实就是一张张透明底色的文字图片
- 在播放时, 一帧帧叠加到视频流中的


所以, 必须想办法转换为 .srt 也就是包含时间戳以及英文文本的字幕,
这样才能使用 `沉浸式翻译` 提供的字幕翻译服务,变成中文;

## logging

配合搜索引擎和各种大模型聊了半天,基本明确几个姿势:

- 用 FFmpeg 先从视频中提取 dvdsub 字幕
- 然后:
    - 使用专用软件完成转换
    - 还是用 FFmpeg 将每个字幕帧转换为图片, 再用 OCR 工具逐一识别, 最后想办法拼为 .srt
    - 找免费的在线服务进行转换

可一开始就是坑:

### dvdsub
> 虽然知道这是种什么数据流了, 但是, 怎么提取?

尝试出可用的指令:

    $ ffmpeg -i Lie.lie.Lie.1997.mkv -map 0:2 -c copy sub2.vob

可以观察到真的是一帧帧提取:

```
...
[svcd @ 0x7faa1400b400] buffer underflow st=0 bufi=0 size=1598
[svcd @ 0x7faa1400b400] buffer underflow st=0 bufi=0 size=1440
[svcd @ 0x7faa1400b400] buffer underflow st=0 bufi=0 size=1566
size=    5550kB time=02:00:40.29 bitrate=   6.3kbits/s speed=1.18e+03x
video:0kB audio:0kB subtitle:3935kB other streams:0kB global headers:0kB muxing overhead: 41.0
```

获得 `sub.vob` 有6Mb 左右,
可问题是各种搜索结果中, 都是对 `.sub+.idx` 这么一对字幕进行转换的;

没办法安装了 `mkvtoolnix`

```
==> mkvtoolnix: stable 87.0 (bottled), HEAD
Matroska media files manipulation tools
https://mkvtoolnix.download/
Installed
/opt/homebrew/Cellar/mkvtoolnix/87.0 (42 files, 24MB) *
  Poured from bottle using the formulae.brew.sh API on 2024-10-18 at 16:46:54
From: https://mirrors.ustc.edu.cn/homebrew-core.git/Formula/m/mkvtoolnix.rb
License: GPL-2.0-or-later
```

使用以下指令:

     $ mkvextract tracks Lie.lie.Lie.1997.mkv 2:sub.srt
    Extracting track 2 with the CodecID 'S_VOBSUB' to the file 'sub.sub'. Container format: VobSubs
    Writing the VobSub index file 'sub.idx'.
    Progress: 100%

获得 `sub.sub` 以及 `sub.idx`

### Subtitle Edit CLI 
> Windows only

这是个世界知名的开源字幕工具,
可惜只支持 windows ,
在 macOS 中, 原先可以通过 wine 进行调用 `.exe`;
可惜, 进入 M1 的 arm 体系后, wine 没跟上,
反复尝试, 都无法在当前环境中运行成功:

```
𝄢 neofetch 
                    'c.          zoomq@ZQ160626rMBP 
                 ,xNMM.          ------------------ 
               .OMMMMo           OS: macOS Big Sur 10.16 24A348 arm64 
               OMMM0,            Host: MacBookPro18,4 
     .;loddo:' loolloddol;.      Kernel: 24.0.0 
   cKMMMMMMMMMMNWMMMMMMMMMM0:    Uptime: 13 days, 10 hours, 32 mins 
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.    Packages: 415 (brew) 
 XMMMMMMMMMMMMMMMMMMMMMMMX.      Shell: bash 5.2.32 
;MMMMMMMMMMMMMMMMMMMMMMMM:       Resolution: 2048x1280, 1440x2560, 3360x1890 
:MMMMMMMMMMMMMMMMMMMMMMMM:       DE: Aqua 
.MMMMMMMMMMMMMMMMMMMMMMMMX.      WM: Spectacle 
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.    Terminal: vscode 
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk   CPU: Apple M1 Max 
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.   GPU: Apple M1 Max 
    kMMMMMMMMMMMMMMMMMMMMMMd     Memory: 11942MiB / 65536MiB 
     ;KMMMMMMMWXXWMMMMMMMk.
       .cooc,.    .,coo:.                                
                                                         
```

只能放弃;

### OCR 识别?

然后, 要一些编程支持的:

- 用 FFmpeg 从 .sub+.idx 中将字幕提取为一张张图片
- 然后, 使用 OCR 工具逐一识别,
- 再用 Pyuthon 拼回来

当然, 同时还得解决时间戳的问题, LLMa 们建议:

    ffmpeg -i sub.vob -vf "select='gt(scene,0.4)',scale=iw*2:ih*2" -vsync vfr frame_%04d.png -f csv timecodes.csv

可以同时提取位图字幕及时间戳;
生成的 .csv 中包含对应关系, 比如:

```csv
0,0,0,00000001,1,frame_0001.png
0,0,24.008000,00000002,1,frame_0002.png
0,0,48.016000,00000003,1,frame_0003.png
...
```

然后, 用 `tesseract` OCR 识别字幕:
```bash
tesseract frame_0001.png frame_0001
tesseract frame_0002.png frame_0002
...
```

想生成最终的 .srt 格式:
```
1
00:00:00,000 --> 00:00:05,000
This is the first subtitle.

2
00:00:05,000 --> 00:00:10,000
This is the second subtitle.
```

简单的 Python 脚本即可:

```python
import csv
from datetime import timedelta

def seconds_to_srt_time(seconds):
    td = timedelta(seconds=float(seconds))
    return str(td)[:-3].replace('.', ',')

with open('timecodes.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    subtitles = []
    
    prev_time = 0
    index = 1
    for row in reader:
        start_time = row[2]  # 获取字幕开始时间
        end_time = prev_time  # 使用上一个时间戳作为当前字幕的结束时间
        prev_time = start_time
        
        # 读取对应的OCR文本
        frame_file = row[5].replace('.png', '.txt')
        with open(frame_file, 'r') as f:
            subtitle_text = f.read().strip()
        
        # 生成SRT格式的时间戳
        start_srt = seconds_to_srt_time(start_time)
        end_srt = seconds_to_srt_time(float(start_time) + 5)  # 默认5秒作为字幕的持续时间
        
        subtitles.append(f"{index}\n{start_srt} --> {end_srt}\n{subtitle_text}\n")
        index += 1

# 写入SRT文件
with open('output.srt', 'w') as srtfile:
    srtfile.writelines(subtitles)

print("SRT字幕文件已生成：output.srt")

```

一切很看起来很可用的哈, 只是:

```
...
    Output file #0 does not contain any stream
```

第一步怎么也无法成功, 无论尝试从 .vob 还是从 `.sub+.idx` 都不行...

### 在线服务
> 最后只好找免费服务

果然有, 毕竟在 DVD 时代这种工具在各种视频网站后台都是成熟的,

subtitletools,subconverter 都有在线界面,
提交 .sub 以及 .idx 等一会儿, 就能下载到对应的 .srt;

然后, 一切不是问题;-)




## refer.
[FFmpeg Documentation](https://ffmpeg.org/documentation.html)

- [SubtitleEdit/subtitleedit at 4.0.8](https://github.com/SubtitleEdit/subtitleedit/tree/4.0.8) .. Windows only
- 在线服务:
    - [subtitletools.com](https://subtitletools.com/convert-sub-idx-to-srt-online)
    - [subconverter.com](https://subconverter.com/convert-sub-idx-to-srt-online)
- [software recommendation - Convert Sub/Idx to Srt - Ask Ubuntu](https://askubuntu.com/questions/1061147/convert-sub-idx-to-srt)
    - [ruediger/VobSub2SRT: Converts VobSub subtitles (.idx/.srt format) into .srt subtitles.](https://github.com/ruediger/VobSub2SRT)
- [沉浸式翻译 - 文档双语翻译 ： 一键翻译 PDF， ePub 电子书，字幕文件，txt文件](https://app.immersivetranslate.com/?utm_source=extension&utm_medium=extension&utm_campaign=popup_btn_document)


## tracing

- 241018 DAMA init.

