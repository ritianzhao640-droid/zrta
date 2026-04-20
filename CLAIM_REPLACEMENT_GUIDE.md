# 🏷️ 旧代币残留标记清单（CLAIM 代币替换指南）

> **新代币名称**: CLAIM | **扫描日期**: 2026-04-20
> 
> 使用方式：搜索每个 `TODO_CLAIM` 标记，将对应值替换为新的 CLAIM 数据

---

## 一、📌 UI 展示文案（直接面向用户 — 优先级最高）

### 1.1 页面标题 / SEO 元信息
| 行号 | 当前值 | 标记 ID | 建议替换为 |
|------|--------|---------|-----------|
| 9 | `<title>MEYieldVault</title>` | `TODO_CLAIM_TITLE` | CLAIM dApp 或新名称 |
| 10 | `SLIS-BNB/WBNB分红、销毁奖励...` | `TODO_CLAIM_META_DESC` | 新描述文案 |
| 11 | `ZRTA代币` (keywords) | `TODO_CLAIM_KEYWORDS` | CLAIM代币 |
| 12-15 | OG标签全部含 MEYieldVault/zrta.asia | `TODO_CLAIM_OG` | 新品牌名/域名 |

### 1.2 头部 Logo & 标题
| 行号 | 当前值 | 标记 ID | 备注 |
|------|--------|---------|------|
| 403 | `ME` (Logo 默认字母) | `TODO_CLAIM_LOGO_ME` | JS会动态覆盖(1431行)，但HTML默认值 |
| 405 | `ZRTA生态中心` (标题默认值) | `TODO_CLAIM_APP_TITLE` | JS动态覆盖(1432行) |

### 1.3 总览页 (Overview)
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 431 | `≈ -- slisBNB` | `TODO_CLAIM_SLIS_UNIT` |
| 457 | `ZRTA` (燃烧量单位) | `TODO_CLAIM_BURN_SYMBOL` |
| 474 | `买卖税收 → ... → ZRT工厂分配` | `TODO_CLAIM_UI_TEXT` |
| 477 | `自动进入金库质押到 Lista` | `TODO_CLAIM_LISTA` |
| 482 | `WBNB 持币分红` | `TODO_CLAIM_WBNB_LABEL` |
| 485 | `100 万 ZRTA 达成资格` | `TODO_CLAIM_ZRTA_TEXT` |
| 507 | `持币分红（WBNB／SLISBNB）` | `TODO_CLAIM_SLIS_LABEL` |

### 1.4 收益页 - 我的资产卡片
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 544 | `ZRTA` (代币持有单位) | `TODO_CLAIM_ZRTA_UNIT` |
| 551 | `slisBNB` (卡片标签) | `TODO_CLAIM_SLIS_LABEL` |

### 1.5 收益页 - 四类奖励卡片

**A. 项目持币分红**
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 567 | `项目持币分红（slisBNB）` | `TODO_CLAIM_SLIS_LABEL` |
| 568 | `项目自有 slisBNB 分红...来自金库 slisBNB 收益的 20%` | `TODO_CLAIM_SLIS_DESC` |
| 584 | `待领取 slisBNB` | `TODO_CLAIM_SLIS_UNIT` |

**B. 官方持币分红 (WBNB)**
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 598 | `官方持币分红（WBNB / BNB）` | `TODO_CLAIM_WBNB_LABEL` |
| 601 | `⚠️ 此为官方 WBNB/BNB 分红，不是项目自己的 slisBNB 分红` | `TODO_CLAIM_WBNB_DESC` |
| 608 | `待领取 WBNB / BNB` | `TODO_CLAIM_WBNB_UNIT` |

**C. 燃烧奖励**
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 622 | `按销毁权重分配的 slisBNB 奖励` | `TODO_CLAIM_SLIS_DESC` |
| 638 | `待领取燃烧奖励 (slisBNB)` | `TODO_CLAIM_SLIS_UNIT` |

**D. 邀请奖励（重点！最多 ZRTA 引用）**
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 651 | `邀请奖励（本代币 **ZRTA**）` | `TODO_CLAIM_ZRTA_LABEL` |
| 652 | `🎁 邀请奖励固定发放 **ZRTA** 代币，无门槛绑定` | `TODO_CLAIM_ZRTA_DESC` |
| 684 | `待领取邀请奖励 (**ZRTA**)` | `TODO_CLAIM_ZRTA_UNIT` |

### 1.6 销毁页 (Burn)
| 行号 | 当前值 | 标记 ID | 数量 |
|------|--------|---------|------|
| 700 | `ZRTA` (输入框右侧单位) | `TODO_CLAIM_ZRTA_UNIT` | 1处 |
| 703 | `余额: -- **ZRTA**` | `TODO_CLAIM_ZRTA_UNIT` | 1处 |
| 719 | `0 **ZRTA**` (预览-实际销毁) | `TODO_CLAIM_ZRTA_UNIT` | 1处 |
| 723 | `0 **ZRTA**` (L1返佣) | `TODO_CLAIM_ZRTA_UNIT` | 1处 |
| 727 | `0 **ZRTA**` (L2返佣) | `TODO_CLAIM_ZRTA_UNIT` | 1处 |
| 746 | `**ZRTA**` (累计销毁) | `TODO_CLAIM_ZRTA_UNIT` | 1处 |

### 1.7 邀请页 (Invite)
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 771 | `邀请奖励固定发放 **ZRTA** 本代币。一旦成功燃烧将终身绑定...` | `TODO_CLAIM_ZRTA_DESC` |
| 839 | `**ZRTA** 本代币 · 下级销毁产生` | `TODO_CLAIM_ZRTA_UNIT` |
| 848 | `10% 销毁金额 (**ZRTA**)` | `TODO_CLAIM_ZRTA_UNIT` |
| 853 | `ZRTA` (L1奖励数值单位) | `TODO_CLAIM_ZRTA_UNIT` |
| 861 | `5% 销毁金额 (**ZRTA**)` | `TODO_CLAIM_ZRTA_UNIT` |
| 866 | `ZRTA` (L2奖励数值单位) | `TODO_CLAIM_ZRTA_UNIT` |

### 1.8 统计页 (Stats)
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 881 | `ZRTA` (总销毁量单位) | `TODO_CLAIM_ZRTA_UNIT` |
| 886 | `slisBNB` (总奖励发放单位) | `TODO_CLAIM_SLIS_UNIT` |
| 906 | `待领取 slisBNB` (营销钱包面板) | `TODO_CLAIM_SLIS_UNIT` |
| 923 | `Token (ZRTA)` (合约信息) | `TODO_CLAIM_ZRTA_LABEL` |

### 1.9 统计页 - 金库状态字段标签（全部含 slisBNB）
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 948 | `Vault slisBNB` | `TODO_CLAIM_SLIS_LABEL` |
| 956 | `累计 slisBNB 收入` | `TODO_CLAIM_SLIS_LABEL` |
| 960 | `待营销 slisBNB` | `TODO_CLAIM_SLIS_LABEL` |
| 964 | `待持币 slisBNB` | `TODO_CLAIM_SLIS_LABEL` |

### 1.10 社区页 (Community)
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 988 | `slisBNB 余额` (营销钱包监控) | `TODO_CLAIM_SLIS_LABEL` |

### 1.11 机制说明文案
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 1025 | `税收自动质押...获得 slisBNB 收益` | `TODO_CLAIM_SLIS_DESC` |
| 1029 | `slisBNB 按 40% 营销 / 40% 销毁分红池 / 20% 持币分红` | `TODO_CLAIM_SLIS_DESC` |
| 1033 | `项目 slisBNB 持币分红...邀请奖励(ZRTA)` | `TODO_CLAIM_MIXED_TEXT` |
| 1037 | `燃烧返佣：销毁 ZRTA 时...L1得10%, L2得5%（本代币）` | `TODO_CLAIM_ZRTA_DESC` |

---

## 二、🔧 JS 合约配置区（影响链上交互 — 关键）

### 2.1 TOKEN 合约配置
| 行号 | 当前值 | 标记 ID | 说明 |
|------|--------|---------|------|
| 1178 | `// 代币合约 - ZRTA` | `TODO_CLAIM_COMMENT` | 注释文本 |
| 1180 | `address: "0x512b88caae01ab1427db0d65f098730810667777"` | `TODO_CLAIM_TOKEN_ADDR` | ⚠️ 旧Token合约地址 |
| 1181 | `symbol: "ZRTA"` | `TODO_CLAIM_TOKEN_SYMBOL` | ⚠️ 旧代币符号 |

### 2.2 slisBNB 代币地址（3处不同地址！需确认哪个对）
| 行号 | 地址值 | 标记 ID | 用途 |
|------|--------|---------|------|
| 1674/1686 | `0xb0b84d294e0c75a6abe60171b70edeb2efd14a1b` | `TODO_CLAIM_SLIS_ADDR_1` | GeckoTerminal 价格查询 |
| 2089/2579 | `0x1b0e7652f143c29832189136a3e6a3957c46a9ad` | `TODO_CLAIM_SLIS_ADDR_2` | ERC20 balanceOf 查询 |

> ⚠️ **注意**：有2个不同的 slisBNB 地址，需要确认哪个是正确的（或都废弃）

### 2.3 公告配置中的 ZRTA 文案
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 1324 | `累计销毁突破 1000万 ZRTA` | `TODO_CLAIM_ANNOUNCEMENT` |
| 1325-1329 | 所有里程碑标题均含 `ZRTA` + `ZRTA 通缩加速` 等 | `TODO_CLAIM_ANNOUNCEMENTS` (共6条) |
| 1332 | `今日销毁突破 100万 ZRTA` | `TODO_CLAIM_ANNOUNCEMENT_DAILY` |
| 1335 | `MEYieldVault V2 正式上线` | `TODO_CLAIM_ANNOUNCEMENT_MANUAL` |

---

## 三、🔨 JS 逻辑代码中的硬编码引用

### 3.1 动态写入的 ZRTA 字符串
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 1980 | `.textContent = ... + ' ZRTA'` | `TODO_CLAIM_JS_ZRTA` |
| 2047 | `填写邀请人可获得 ZRTA 代币返佣奖励` | `TODO_CLAIM_JS_ZRTA` |
| 2547 | `formatCN(burnedNum, 1) + ' ZRTA'` | `TODO_CLAIM_JS_ZRTA` |

### 3.2 动态写入的 slisBNB 字符串
| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 1731 | `'≈ -- slisBNB'` | `TODO_CLAIM_JS_SLIS` |
| 1733 | `` `${totalSlis} slisBNB` `` | `TODO_CLAIM_JS_SLIS` |
| 1782-1789 | 多处 console.log 含 `[slisNB持币]` / `[slisBNB]` | `TODO_CLAIM_LOG` (低优先级) |
| 1887 | `// total slisBNB:` 日志 | `TODO_CLAIM_LOG` |
| 2086 | 函数注释 `读取营销钱包 slisBNB 余额` | `TODO_CLAIM_COMMENT` |

### 3.3 slisBNB 相关变量名和函数名
| 行号 | 名称 | 标记 ID | 说明 |
|------|------|---------|------|
| 1662 | `slisBNBPrice` 变量 | `TODO_CLAIM_VAR_NAME` | 变量命名 |
| 1663 | `_slisPriceCacheTime` | `TODO_CLAIM_VAR_NAME` | 缓存变量 |
| 1667 | `getSlisBNBPrice()` 函数名 | `TODO_CLAIM_FUNC_NAME` | 函数命名 |
| 1693 | fallback价格 `652.19 USD` | `TODO_CLAIM_FALLBACK_PRICE` | 硬编码默认价 |

---

## 四、🔗 外部链接与品牌

| 行号 | 当前值 | 标记 ID |
|------|--------|---------|
| 14 | `https://zrta.asia` (canonical URL) | `TODO_CLAIM_URL` |
| 1049 | Twitter: `@MEYieldVault` + 链接 | `TODO_CLAIM_TWITTER` |
| 1055 | `@MEYieldVault` 显示名 | `TODO_CLAIM_TWITTER_HANDLE` |

---

## 五、📊 统计汇总

| 类别 | 数量 | 替换关键词 |
|------|------|-----------|
| **UI文案 ZRTA** | **~28处** | → CLAIM |
| **UI文案 slisBNB** | **~22处** | → 新收益代币符号 |
| **UI文案 WBNB** | **~6处** | 可能保留(链上不变) |
| **JS合约地址 TOKEN** | **1处** | → 新CLAIM合约地址 |
| **JS合约地址 slisBNB** | **2处(不同!)** | → 需确认 |
| **JS symbol 配置** | **1处** (`"ZRTA"`) | → `"CLAIM"` |
| **公告/里程碑** | **8处** | 全部含 ZRTA |
| **外部链接/品牌** | **3处** | MEYieldVault/zrta.asia |
| **代码注释** | **~10处** | 低优先级 |

---

## 六、⚡ 快速替换建议

### Phase 1: 纯文案替换（不改逻辑，只改显示）
```
"ZRTA"          → "CLAIM"        (所有 UI 文案)
"slisBNB"       → "<新收益代币>"   (所有 UI 文案)
"MEYieldVault"  -> "<新品牌名>"     (标题/OG/链接)
"zrta.asia"      -> "<新域名>"       (canonical URL)
```

### Phase 2: 合约地址替换（改链上交互）
```javascript
CONTRACTS.TOKEN.address  // → 新 CLAIM Token 地址
CONTRACTS.TOKEN.symbol   // → "CLAIM"
SLIS_BNB_ADDRESS × 2处    // → 新收益代币地址（或删除）
```

### Phase 3: 公告/里程碑文案
```javascript
ANNOUNCEMENTS.milestones  // 6条里程碑标题
ANNOUNCEMENTS.dailyMilestones // 1条日里程碑
ANNOUNCEMENTS.manual      // 1条手动公告
```
