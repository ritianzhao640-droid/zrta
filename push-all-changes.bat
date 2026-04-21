@echo off
REM 推送所有修改到远程仓库
REM 使用方法：push-all-changes.bat "提交信息"

setlocal

set COMMIT_MSG=%~1
if "%COMMIT_MSG%"=="" set COMMIT_MSG=更新文件

echo 设置代理...
set HTTP_PROXY=http://127.0.0.1:7897
set HTTPS_PROXY=http://127.0.0.1:7897

echo 检查是否有未提交的修改...
git status --porcelain >nul 2>&1
if errorlevel 1 (
    echo 没有需要提交的修改。
    pause
    exit /b 0
)

echo 以下文件将被提交：
git status --short

echo 添加所有修改...
git add -A

echo 提交...
git commit -m "%COMMIT_MSG%"

echo 正在推送到远程仓库...
git push origin main

echo 推送完成！
git log --oneline -3

pause