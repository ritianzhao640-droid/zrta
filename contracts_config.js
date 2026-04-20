const CONTRACTS = {
    "TOKEN": {
        "address": "0x379f9E96BDC94572492e3BAC75A5122fFb7E7777",
        "symbol": "CLAIM",
        "decimals": 18,
        "abi": [
            {
                "inputs": [
                    {
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "dividendContract",
                "outputs": [
                    {
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
    },
    "VAULT": {
        "address": "0xC09f04d1DDD278A8a9406CfB6E9C80f2719DB2b0",
        "abi": [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [],
                "name": "AlreadyInitialized",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "Reentrancy",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "TransferFailed",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "Unauthorized",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "chainId",
                        "type": "uint256"
                    }
                ],
                "name": "UnsupportedChain",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "ZeroAddress",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "ZeroAmount",
                "type": "error"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "oldValue",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "newValue",
                        "type": "uint256"
                    }
                ],
                "name": "AutoStakeThresholdUpdated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "holder",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "HolderRewardClaimed",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "oldValue",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "newValue",
                        "type": "uint256"
                    }
                ],
                "name": "MarketingAutoSendThresholdUpdated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "MarketingAutoSent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "MarketingClaimed",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "oldWallet",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "newWallet",
                        "type": "address"
                    }
                ],
                "name": "MarketingWalletUpdated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "marketingSlis",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "burnPoolSlis",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "holderSlis",
                        "type": "uint256"
                    }
                ],
                "name": "StakeSplit",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amountBNB",
                        "type": "uint256"
                    }
                ],
                "name": "TaxReceived",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amountBNB",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "slisReceived",
                        "type": "uint256"
                    }
                ],
                "name": "TaxStaked",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "inviter",
                        "type": "address"
                    }
                ],
                "name": "UserBurned",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "BPS",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "BURN_POOL_BPS",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "HOLDER_BPS",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "MARKETING_BPS",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "autoStakeThreshold",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "inviter",
                        "type": "address"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "burnDistributor",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "burnInfo",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "rawBurned",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "weight",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "inviter",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "hasInviter",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "claim",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "claimBurnReward",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "holder",
                        "type": "address"
                    }
                ],
                "name": "claimFor",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "claimInviteReward",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "claimMarketing",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "description",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "pure",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "holderEligibilityOracle",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "holderRewardTracker",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "taxToken",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "listaStakeManager",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "slisBNB",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "marketingWallet",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "autoStakeThreshold",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "marketingAutoSendThreshold",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "burnDistributor",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "holderEligibilityOracle",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "holderRewardTracker",
                                "type": "address"
                            }
                        ],
                        "internalType": "struct MEYieldVault.InitParams",
                        "name": "p",
                        "type": "tuple"
                    }
                ],
                "name": "initialize",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "initialized",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "listaStakeManager",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "marketingAutoSendThreshold",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "marketingWallet",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "overview",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "_listaStakeManager",
                        "type": "address"
                    },
                    {
                        "internalType": "uint16",
                        "name": "_marketingSharePercent",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "_holderSharePercent",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "_burnPoolSharePercent",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_vaultBnbBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_totalStakedBnb",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_vaultSlisBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_myPendingHolderDividend",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_myPendingBurnDividend",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_myPendingInviteReward",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_myCumulativeBurned",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "pendingBurnReward",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "pendingClaim",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "pendingInviteReward",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pendingMarketingSlis",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pendingTaxBNB",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "newThreshold",
                        "type": "uint256"
                    }
                ],
                "name": "setAutoStakeThreshold",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "newThreshold",
                        "type": "uint256"
                    }
                ],
                "name": "setMarketingAutoSendThreshold",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newWallet",
                        "type": "address"
                    }
                ],
                "name": "setMarketingWallet",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "slisBNB",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "stakePendingTax",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "ok",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "syncMyHolderAccount",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "taxToken",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalHolderAccumulativeSlis",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalHolderClaimedSlis",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSlisReceived",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalStakedBNB",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "vaultUISchema",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "vaultType",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                            },
                            {
                                "components": [
                                    {
                                        "internalType": "string",
                                        "name": "name",
                                        "type": "string"
                                    },
                                    {
                                        "internalType": "string",
                                        "name": "description",
                                        "type": "string"
                                    },
                                    {
                                        "components": [
                                            {
                                                "internalType": "string",
                                                "name": "name",
                                                "type": "string"
                                            },
                                            {
                                                "internalType": "string",
                                                "name": "fieldType",
                                                "type": "string"
                                            },
                                            {
                                                "internalType": "string",
                                                "name": "description",
                                                "type": "string"
                                            },
                                            {
                                                "internalType": "uint8",
                                                "name": "decimals",
                                                "type": "uint8"
                                            }
                                        ],
                                        "internalType": "struct FieldDescriptor[]",
                                        "name": "inputs",
                                        "type": "tuple[]"
                                    },
                                    {
                                        "components": [
                                            {
                                                "internalType": "string",
                                                "name": "name",
                                                "type": "string"
                                            },
                                            {
                                                "internalType": "string",
                                                "name": "fieldType",
                                                "type": "string"
                                            },
                                            {
                                                "internalType": "string",
                                                "name": "description",
                                                "type": "string"
                                            },
                                            {
                                                "internalType": "uint8",
                                                "name": "decimals",
                                                "type": "uint8"
                                            }
                                        ],
                                        "internalType": "struct FieldDescriptor[]",
                                        "name": "outputs",
                                        "type": "tuple[]"
                                    },
                                    {
                                        "components": [
                                            {
                                                "internalType": "string",
                                                "name": "tokenType",
                                                "type": "string"
                                            },
                                            {
                                                "internalType": "string",
                                                "name": "amountFieldName",
                                                "type": "string"
                                            }
                                        ],
                                        "internalType": "struct ApproveAction[]",
                                        "name": "approvals",
                                        "type": "tuple[]"
                                    },
                                    {
                                        "internalType": "bool",
                                        "name": "isInputArray",
                                        "type": "bool"
                                    },
                                    {
                                        "internalType": "bool",
                                        "name": "isOutputArray",
                                        "type": "bool"
                                    },
                                    {
                                        "internalType": "bool",
                                        "name": "isWriteMethod",
                                        "type": "bool"
                                    }
                                ],
                                "internalType": "struct VaultMethodSchema[]",
                                "name": "methods",
                                "type": "tuple[]"
                            }
                        ],
                        "internalType": "struct VaultUISchema",
                        "name": "schema",
                        "type": "tuple"
                    }
                ],
                "stateMutability": "pure",
                "type": "function"
            },
            {
                "stateMutability": "payable",
                "type": "receive"
            }
        ]
    },
    "BURN_DISTRIBUTOR": {
        "address": null,
        "abi": [
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "token_",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "rewardToken_",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "admin_",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [],
                "name": "AlreadyInitialized",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "InvalidInviter",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "InvalidInviterChain",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "OnlyVault",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "Reentrancy",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "TransferFailed",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "Unauthorized",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "ZeroAddress",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "ZeroAmount",
                "type": "error"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "inputAmount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "actualBurnAmount",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "inviter",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "inviterReward",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "inviter2",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "inviter2Reward",
                        "type": "uint256"
                    }
                ],
                "name": "BurnProcessed",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "BurnRewardAdded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "BurnRewardClaimed",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "InviteRewardClaimed",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "inviter",
                        "type": "address"
                    }
                ],
                "name": "InviterBound",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "vault",
                        "type": "address"
                    }
                ],
                "name": "VaultInitialized",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "BPS",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "DEAD",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "L1_BPS",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "L2_BPS",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "MAX_INVITER_HOPS",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "PRECISION",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "accRewardPerWeight",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "admin",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "burnInfo",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "rawBurned",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "weight",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "inviter",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "hasInviter",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "burnWeight",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "inviterCandidate",
                        "type": "address"
                    }
                ],
                "name": "canBindInviter",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "claimBurnRewardFor",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "claimInviteRewardFor",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "cumulativeRawBurned",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "vault_",
                        "type": "address"
                    }
                ],
                "name": "initializeVault",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "inviterCandidate",
                        "type": "address"
                    }
                ],
                "name": "inviteBindingStatus",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "canBind",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint8",
                        "name": "reasonCode",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "inviterOf",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "startUser",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                    }
                ],
                "name": "isInInviterChain",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "found",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "chainValid",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "notifyReward",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "inviterCandidate",
                        "type": "address"
                    }
                ],
                "name": "onBurn",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "actualBurn",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "l1Reward",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "l2Reward",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "pendingBurn",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "pendingBurnReward",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "pendingInvite",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "pendingInviteReward",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pendingRewardCarry",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "rewardDebt",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "rewardToken",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "token",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalActualBurned",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalBurnRewardDistributed",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalBurnWeight",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalInviteRewardClaimed",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalInviteRewardDistributed",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "vault",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
    },
    "HOLDER_ELIGIBILITY_ORACLE": {
        "address": null,
        "abi": [
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "taxToken_",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "currentTokenBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "eligibleBalanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "holderDividendContract",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "holderThreshold",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "isHolderEligible",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "officialDividendClaimed",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "officialDividendPending",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "taxToken",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalEligibleBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
    },
    "MULTISIG": {
        "address": null,
        "displayName": "营销钱包"
    },
    "LISTA_STAKE_MANAGER": {
        "address": null
    },
    "SLIS_BNB": {
        "address": null
    },
    "HOLDER_REWARD_TRACKER": {
        "address": null
    }
};