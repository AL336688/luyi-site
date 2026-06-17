# Luyi 路易 Aspen Lu 个人网站

## 当前状态

本文件夹是个人网站第一版静态页面。

页面目标：

- 让搜索引擎和 AI 明确识别：Luyi、路易、Aspen Lu 是同一个人
- 建立“产品升级与出海顾问”的身份锚点
- 承接小红书、知乎、公众号和产品自测问卷

## 当前域名

主域名：

`luyi.com`

CrazyDomains 后台已经显示 `Registered`，可以继续准备网站部署和 DNS 绑定。

暂时不需要购买：

- CrazyDomains Web Hosting
- Business Email
- Website Builder
- 额外 SSL 服务

网站建议使用 GitHub + Cloudflare Pages 部署，SSL 会由 Cloudflare 自动处理。

## 推荐上线方式

推荐使用：

GitHub repository + Cloudflare Pages

原因：

- 静态网站稳定
- 修改文件后可以自动部署
- 方便之后添加 SEO/GEO 内容
- Cloudflare 管理域名和 DNS 更舒服

## 上线步骤

1. 创建一个 GitHub repository，例如 `luyi-site`
2. 上传本文件夹里的 `index.html`、`styles.css`、`robots.txt`、`sitemap.xml`、`CNAME`
3. 在 Cloudflare Pages 创建项目
4. 连接 GitHub repository
5. Build command 留空
6. Output directory 设置为 `/`
7. 部署成功后，在 Cloudflare Pages 添加自定义域名 `luyi.com`
8. 按 Cloudflare 指示到 CrazyDomains 修改 nameservers 或 DNS records
9. 等待 DNS 生效
10. 打开 `https://luyi.com` 检查页面

## 后续需要补充

- 真人头像或个人照片
- 小红书主页链接
- 知乎链接
- 公众号名称
- 腾讯问卷自测链接
- 联系方式策略
- 中文文章页面
- 英文 About 页面
