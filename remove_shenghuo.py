import sys
import re

file_path = 'index.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 统计替换前出现次数
count_before = content.count('生活')
print(f'替换前"生活"出现次数: {count_before}')

# 替换所有"生活"为空字符串
content_new = content.replace('生活', '')

# 统计替换后出现次数
count_after = content_new.count('生活')
print(f'替换后"生活"出现次数: {count_after}')

# 写入文件
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content_new)

print('替换完成。')