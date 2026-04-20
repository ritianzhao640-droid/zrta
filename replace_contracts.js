const fs = require('fs');
const path = require('path');

// 读取原始index.html
const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 读取新的CONTRACTS配置
const contractsPath = path.join(__dirname, 'contracts_config.js');
let contractsContent = fs.readFileSync(contractsPath, 'utf8');

// 在每行前添加8个空格（除了第一行，因为它可能已经有const CONTRACTS =）
const lines = contractsContent.split('\n');
const indented = lines.map(line => '        ' + line).join('\n');

// 找到旧CONTRACTS块的位置
const startMarker = '        const CONTRACTS = {';
const endMarker = '        };';
const startIndex = html.indexOf(startMarker);
if (startIndex === -1) {
    console.error('找不到CONTRACTS开始标记');
    process.exit(1);
}
// 找到结束标记（从startIndex开始搜索）
const endIndex = html.indexOf(endMarker, startIndex);
if (endIndex === -1) {
    console.error('找不到CONTRACTS结束标记');
    process.exit(1);
}
// 包含结束标记
const endIndexWithBrace = endIndex + endMarker.length;

// 替换
const newHtml = html.substring(0, startIndex) + indented + html.substring(endIndexWithBrace);

// 写回文件
fs.writeFileSync(indexPath, newHtml, 'utf8');
console.log('已成功更新CONTRACTS配置');