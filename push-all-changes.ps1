# 推送所有修改到远程仓库
# 使用方法：在PowerShell中运行 .\push-all-changes.ps1 "提交信息"

param(
    [string]$CommitMessage = "更新文件"
)

# 设置代理
$env:HTTP_PROXY = "http://127.0.0.1:7897"
$env:HTTPS_PROXY = "http://127.0.0.1:7897"

# 检查是否有未提交的修改
$status = git status --porcelain
if (-not $status) {
    Write-Host "没有需要提交的修改。" -ForegroundColor Yellow
    exit 0
}

# 显示将要提交的文件
Write-Host "以下文件将被提交：" -ForegroundColor Cyan
git status --short

# 添加所有修改（包括新文件和删除的文件）
git add -A

# 提交
git commit -m $CommitMessage

# 推送到远程仓库
Write-Host "正在推送到远程仓库..." -ForegroundColor Cyan
git push origin main

# 显示结果
Write-Host "推送完成！" -ForegroundColor Green
git log --oneline -3