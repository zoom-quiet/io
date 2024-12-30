# UBNT+Cloudflared
> 为了一个安全且自在的内网环境


      + [9.18 UBNT+Cloudflared](Pythonic/24/20240918-ubnt-cloudflared.md)


## background
...TBD

## goal
...TBD

## logging
...TBD


### windows

0: 明确主机本地 IP
1: 固化主机 IP
2: 确认 cloudflared 服务是否运行, 密钥是否对
3: 配置对应域名
4: 检验代理穿透效果

当然, 一切都需要直接在主机上操作, 或是远程 SSH 登录到主机上进行操作,
如果在 windows 中, 没什么好的终端软件, 而且也没有默认 SSH 服务,
俺推荐使用 cmderdev/cmder: Lovely console emulator package for Windows
https://github.com/cmderdev/cmder
内置 SSHD 服务

安装官方全功能版本, 包含 git 等等一系列常用工具,
而且是绿色安装版本, 不用安装, 解压缩就可以使用


## refer.
...TBD

## tracing

- 241029 DAMA init.

