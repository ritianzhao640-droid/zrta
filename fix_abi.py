import json
import re

# 读取index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 读取用户ABI
with open('D:/Xian_Workspace/资料/接口1.0.txt', 'r', encoding='utf-8') as f:
    new_abi = json.load(f)

# 查找注释位置
start_marker = '// WBNB 持币分红 (1%) 合约 ABI — 通过 vault.holderDividendContract() 获取地址'
start_idx = content.find(start_marker)
if start_idx == -1:
    print("错误: 未找到注释标记")
    exit(1)

# 查找WBNB_DIVIDEND_ABI开始位置
abi_start = content.find('WBNB_DIVIDEND_ABI: [', start_idx)
if abi_start == -1:
    print("错误: 未找到WBNB_DIVIDEND_ABI定义")
    exit(1)

print(f"找到ABI起始位置: {abi_start}")

# 查找匹配的结束括号
brace_count = 0
in_string = False
escape_next = False
search_start = abi_start + len('WBNB_DIVIDEND_ABI: [')

for i in range(search_start, len(content)):
    c = content[i]
    
    if escape_next:
        escape_next = False
        continue
    
    if c == '\\':
        escape_next = True
        continue
    
    if c == '"' and not escape_next:
        in_string = not in_string
        continue
    
    if not in_string:
        if c == '[':
            brace_count += 1
        elif c == ']':
            if brace_count == 0:
                bracket_end = i + 1
                break
            brace_count -= 1
else:
    print("错误: 未找到匹配的结束括号")
    exit(1)

print(f"找到括号结束位置: {bracket_end}")

# 查找结束的'],
comma_idx = content.find('],', bracket_end)
if comma_idx == -1:
    print("错误: 未找到ABI结束标记'],'")
    exit(1)

end_idx = comma_idx + 2
print(f"找到ABI结束位置: {end_idx}")

# 提取并显示旧ABI片段（前200字符）
old_abi_snippet = content[abi_start:end_idx]
print(f"旧ABI片段 (前200字符): {old_abi_snippet[:200]}")

# 构建新ABI字符串
indent = ' ' * 12  # 根据原格式，12个空格缩进
new_abi_json = json.dumps(new_abi, separators=(',', ':'))
new_abi_line = f'{indent}WBNB_DIVIDEND_ABI: [{new_abi_json}],'

# 替换
new_content = content[:abi_start] + new_abi_line + content[end_idx:]

# 写入文件
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ ABI修复完成")
print(f"新ABI长度: {len(new_abi_json)} 字符")