#!/usr/bin/env python3
import json
import re

# 读取用户提供的ABI
with open('D:/Xian_Workspace/资料/接口1.0.txt', 'r', encoding='utf-8') as f:
    new_abi = json.load(f)

# 读取index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. 替换WBNB_DIVIDEND_ABI
# 查找旧ABI模式
old_abi_pattern = r'(\s*// WBNB 持币分红 \(1%\) 合约 ABI — 通过 vault\.holderDividendContract\(\) 获取地址\n\s*WBNB_DIVIDEND_ABI: )\[.*?\],'
# 注意：由于ABI可能跨多行，我们需要更精确的匹配
# 使用正则表达式匹配从WBNB_DIVIDEND_ABI: [到下一个'],'（不在引号内）的内容
# 简化：查找WBNB_DIVIDEND_ABI: [然后匹配到合适的结束位置

# 由于ABI内容复杂，我们使用不同的方法：找到开始和结束位置
start_marker = '// WBNB 持币分红 (1%) 合约 ABI — 通过 vault.holderDividendContract() 获取地址'
start_idx = content.find(start_marker)
if start_idx == -1:
    print("未找到ABI注释标记")
    exit(1)
    
# 从start_idx找到'WBNB_DIVIDEND_ABI: ['
abi_start = content.find('WBNB_DIVIDEND_ABI: [', start_idx)
if abi_start == -1:
    print("未找到WBNB_DIVIDEND_ABI定义")
    exit(1)
    
# 找到匹配的闭合括号
brace_count = 0
in_string = False
escape_next = False
for i in range(abi_start + len('WBNB_DIVIDEND_ABI: ['), len(content)):
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
                end_idx = i + 1
                break
            brace_count -= 1

# 现在找到结束的'],'
comma_idx = content.find('],', end_idx)
if comma_idx == -1:
    print("未找到ABI结束标记")
    exit(1)
    
end_idx = comma_idx + 2  # 包括'],'

# 构建新ABI字符串（保持缩进）
indent = ' ' * 12  # 根据原文件缩进
new_abi_json = json.dumps(new_abi, separators=(',', ':'))
new_abi_line = f'{indent}WBNB_DIVIDEND_ABI: [{new_abi_json}],'

# 替换内容
old_section = content[abi_start:end_idx]
new_section = new_abi_line

content = content[:abi_start] + new_section + content[end_idx:]

print("ABI更新完成")

# 2. 更新函数调用：pendingOf -> withdrawableDividendOf
content = content.replace('pendingOf(userAddress)', 'withdrawableDividendOf(userAddress)')
content = content.replace('pendingOf(user)', 'withdrawableDividendOf(user)')
content = content.replace('.pendingOf(', '.withdrawableDividendOf(')

# 3. 更新函数调用：claim -> withdrawDividends
content = content.replace('.claim()', '.withdrawDividends()')
# 注意：有些claim调用可能针对vault，我们需要小心
# 只替换divContract.claim()
# 使用正则表达式更精确地替换
# 查找divContract.claim()或await divContract.claim()
content = re.sub(r'(divContract\.)claim\(\)', r'\1withdrawDividends()', content)

print("函数调用更新完成")

# 写入文件
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("index.html已更新")