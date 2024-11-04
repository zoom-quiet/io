      + [10.29 私人S3](Pythonic/24/20241029-intra-s3-garage.md)

# Garage 作私人 S3 服务
> 以便自制图床...

## background

[10.28 自持图床](/Pythonic/24/20241028-loc-host-s3.html)

之前各种网站发布图片, 无非几种:

- 图片直接放在仓库中:
    - 发布时要注意手工拼好 URL, 
    - 发布后使用流量随时可能爆; 
- 图片走 7niu/UOYUN 之类:
    - 通过 iPic 在 macOS 中使用快捷键一键完成上传以及 Markdown 格式图片链接生成, 
    - 而且可以根据网页情况, 在链接上追加参数动态调整图片展示大小
    - 问题是不免费...
- 图片使用 weibo 之类免费图床
    - 没有工具辅助, 先发布图片, 再复制链接拼 .md 格式图片链接
    - 而且免费服务, 随时可能无效...

## goal
> 值得开始统一本地服务了

- 几乎免费的长期存储空间, 只是要自行备份
    - 参考:[再谈永不消逝的存储 – 博の朝日堂](https://gao.bo/asahi/it/11627)
    - 通过 `QNAP TS-212P` 已经可以基本完美的解决
- 几乎免费的网络费用
    - 家庭宽带+Cloudflare/Zero Trust/network/tunnels
    - 配套免费 DNS 中的自动缓存, 也基本可以完美解决
    - 当然, 前提是有内部固定IP地址
        - 参考: **[9.18 UBNT+Cloudflared](Pythonic/24/20240918-ubnt-cloudflared.md)**
- 简洁稳定的 S3 兼容服务
    - S3 虽然贵到口碑都坏了, 但是, 作为世界上最通用的对象储存服务,有海量文档以及兼容工具可以使用, 如果兼容, 则可以立即获得类似 iPic
- 结合 macOS 的内置 applescript 自制一个本地 `iPic` 小工具


## logging

### 为毛 Garage?

### 安装 Garage

### 发布 Garage

### 日常 Garage


## refer.

- [MinIO Object Storage for Linux](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html)
        + [How to Install MinIO Object Storage Server on Debian 11](https://www.howtoforge.com/how-to-install-minio-storage-server-on-debian-11/)
        + [How to Deploy MinIO - An Opensource Object Storage Solution | Vultr Docs](https://www.vultr.com/match/)
- [avelino/awesome-go: A curated list of awesome Go frameworks, libraries and software](https://github.com/avelino/awesome-go)
    - [seaweedfs/seaweedfs: SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding.](https://github.com/seaweedfs/seaweedfs)
    - [Home · seaweedfs/seaweedfs Wiki](https://github.com/seaweedfs/seaweedfs/wiki)
    - [How To Install SeaweedFS Cluster On Debian 10 - Eldernode Blog](https://blog.eldernode.com/install-seaweedfs-cluster-on-debian-10/)
    - [SeaweedFS 搭建指南及使用方法 | Bambrow's Blog](https://bambrow.com/20220107-seaweedfs-installation-guide/)
    - ...
- [rust-unofficial/awesome-rust: A curated list of Rust code and resources.](https://github.com/rust-unofficial/awesome-rust?tab=readme-ov-file#database)
    - [Deuxfleurs/garage: S3-compatible object store for small self-hosted geo-distributed deployments - Gitea: git with a cup of coffee](https://git.deuxfleurs.fr/Deuxfleurs/garage/activity)
        - [Deuxfleurs : fabriquons un internet convivial](https://deuxfleurs.fr/)
        - [Contributors to deuxfleurs-org/garage](https://github.com/deuxfleurs-org/garage/forks)
            - [Alexis211 (Alex Auvolat)](https://github.com/Alexis211)
            - [Alex Auvolat | adnab.me](https://adnab.me/) ~ 官网看起来就是用撸的...
    - [Quick Start | Garage HQ](https://garagehq.deuxfleurs.fr/documentation/quick-start/)
- ...
- [iPic - Markdown 图床、文件上传工具 | Toolinbox](https://toolinbox.net/iPic/)
    - [在 iPic 中添加 Amazon S3 图床 | Toolinbox](https://toolinbox.net/iPic/AddS3.html)

## tracing

- 241029 DAMA init.

