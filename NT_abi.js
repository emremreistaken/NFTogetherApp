const NT_ABI = [
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "vrfSub",
          "type": "uint64"
        },
        {
          "internalType": "uint256",
          "name": "minRoundDuration",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "lendingPool",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "vrfCoordinator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dai",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "pushPolygonAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "pushChannelCreator",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "AccountAlreadyCreated",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "AccountNotFound",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EmptyRound",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InitializationFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InsufficientPrize",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidAmount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidChain",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidNFTOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTicketOperation",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidWeights",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "have",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "want",
          "type": "address"
        }
      ],
      "name": "OnlyCoordinatorCanFulfill",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RoundNotFinished",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RoundNotFound",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TicketNotFound",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "WinnerNotFound",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "tokenContract",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "salt",
          "type": "uint256"
        }
      ],
      "name": "AccountCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "randomnessReqId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "prizeAmount",
          "type": "uint256"
        }
      ],
      "name": "RoundFinished",
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
          "internalType": "enum PoolTogether6551.TicketOperation",
          "name": "operation",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TicketUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "roundId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "winner",
          "type": "address"
        }
      ],
      "name": "WinnerSelected",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "salt",
          "type": "uint256"
        }
      ],
      "name": "account",
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
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "accountCreated",
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
          "name": "implementation",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "salt",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "initData",
          "type": "bytes"
        }
      ],
      "name": "createAccount",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
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
      "name": "depositDAI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "totalWeight",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "weights",
          "type": "uint256[]"
        },
        {
          "internalType": "bool",
          "name": "useMockPrize",
          "type": "bool"
        }
      ],
      "name": "finishRound",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "finishedRounds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "randomnessReqId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "prizeAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "winner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "totalRoundWeight",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "assertionId",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getActiveRoundId",
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
          "name": "_round",
          "type": "uint256"
        }
      ],
      "name": "getAssertion",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "arbitrateViaEscalationManager",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "discardOracle",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "validateDisputers",
                  "type": "bool"
                },
                {
                  "internalType": "address",
                  "name": "assertingCaller",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "escalationManager",
                  "type": "address"
                }
              ],
              "internalType": "struct OptimisticOracleV3Interface.EscalationManagerSettings",
              "name": "escalationManagerSettings",
              "type": "tuple"
            },
            {
              "internalType": "address",
              "name": "asserter",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "assertionTime",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "settled",
              "type": "bool"
            },
            {
              "internalType": "contract IERC20",
              "name": "currency",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "expirationTime",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "settlementResolution",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "domainId",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "identifier",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "bond",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "callbackRecipient",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "disputer",
              "type": "address"
            }
          ],
          "internalType": "struct OptimisticOracleV3Interface.Assertion",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_round",
          "type": "uint256"
        }
      ],
      "name": "getAssertionResult",
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
          "internalType": "uint256",
          "name": "start",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stop",
          "type": "uint256"
        }
      ],
      "name": "getBulkTickets",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deposit",
              "type": "uint256"
            }
          ],
          "internalType": "struct PoolTogether6551.DepositTicket[]",
          "name": "tickets",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTicketsCount",
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
      "name": "getUserTicket",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deposit",
              "type": "uint256"
            }
          ],
          "internalType": "struct PoolTogether6551.DepositTicket",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "requestId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "randomWords",
          "type": "uint256[]"
        }
      ],
      "name": "mockFulfillRandomWords",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
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
          "internalType": "uint256",
          "name": "requestId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "randomWords",
          "type": "uint256[]"
        }
      ],
      "name": "rawFulfillRandomWords",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_round",
          "type": "uint256"
        }
      ],
      "name": "settleAndGetAssertionResult",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "withdrawDAI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

export default NT_ABI;