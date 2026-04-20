const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync('E:\\Cache\\Temp\\all_abis.json');
// 移除可能的BOM
const text = raw.toString('utf8').replace(/^\uFEFF/, '');
const data = JSON.parse(text);

// 解析每个ABI字符串
const vaultAbi = JSON.parse(data.VAULT_ABI);
const burnDistributorAbi = JSON.parse(data.BURN_DISTRIBUTOR_ABI);
const holderOracleAbi = JSON.parse(data.HOLDER_ELIGIBILITY_ORACLE_ABI);

// 生成JavaScript对象代码
const contracts = {
    // === 代币合约 ===
    TOKEN: {
        address: "0x379f9E96BDC94572492e3BAC75A5122fFb7E7777",
        symbol: "CLAIM",
        decimals: 18,
        abi: [
            { inputs: [{ name: "account", type: "address" }], name: "balanceOf", outputs: [{ type: "uint256" }], stateMutability: "view", type: "function" },
            { inputs: [], name: "dividendContract", outputs: [{ type: "address" }], stateMutability: "view", type: "function" }
        ]
    },
    // === 金库合约 (MEYieldVault Proxy) ===
    VAULT: {
        address: "0xC09f04d1DDD278A8a9406CfB6E9C80f2719DB2b0",
        abi: vaultAbi
    },
    // === 燃烧分发器 ===
    BURN_DISTRIBUTOR: {
        address: null, // 将通过VAULT动态读取
        abi: burnDistributorAbi
    },
    // === 持币资格预言机 ===
    HOLDER_ELIGIBILITY_ORACLE: {
        address: null, // 将通过VAULT动态读取
        abi: holderOracleAbi
    },
    // === 营销钱包（多签）=== 
    MULTISIG: {
        address: null, // 将通过VAULT动态读取
        displayName: "营销钱包"
    },
    // === Lista 质押管理器 ===
    LISTA_STAKE_MANAGER: {
        address: null // 将通过VAULT动态读取
    },
    // === slisBNB 代币地址 ===
    SLIS_BNB: {
        address: null // 将通过VAULT动态读取
    },
    // === 持币奖励追踪器（已弃用，保留占位符）===
    HOLDER_REWARD_TRACKER: {
        address: null
    }
};

// 写入文件
fs.writeFileSync('D:\\workspace\\zrta\\contracts_config.js', 'const CONTRACTS = ' + JSON.stringify(contracts, null, 4) + ';');
console.log('Generated contracts_config.js');