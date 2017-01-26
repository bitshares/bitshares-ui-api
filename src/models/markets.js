/*
* Markets listed in the Dashboard page. False indicates the price needs to be
* flipped to be displayed properly
*/
 const marketsByChain = {
    "4018d7844c": { // BTS chain id first 10
        markets: [
            ["BTS", "CNY"],
            ["OPEN.BTC", "BTS", false],
            ["OPEN.BTC", "OPEN.STEEM"],
            ["BTS", "ICOO"],
            ["BTS", "BLOCKPAY"],
            ["BTS", "OBITS"],
            ["BTS", "USD"],
            ["BTS", "GOLD"],
            ["BTS", "SILVER"],
            ["BTS", "BKT"],
            ["OPEN.BTC", "OPEN.DGD", false],
            ["BTS", "BTWTY"],
            ["BTS", "BTSR"],
            ["OPEN.BTC", "OPEN.INCNT", false],
            [ "BTS", "OPEN.ETH"],
            ["CNY", "USD"]
        ],
        newAssets: [
            "CENTZ"
        ]
    },
    "39f5e2ede1": { // TESTNET chain id first 10
        markets: [
            ["TEST", "PEG.FAKEUSD"],
            ["TEST", "BTWTY"],
            ["TEST", "PEG.PARITY"]
        ],
        newAssets: [
        ]
    }
}

export { marketsByChain };
