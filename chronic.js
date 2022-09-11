window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else 
    await window.keplr.experimentalSuggestChain({
    chainId: "morocco-1",
    chainName: "Chronic",
    rpc: "http://77.37.176.99:56657", // replace with your rpc url
    rest: "http://77.37.176.99:3317", // replace with your rest api url
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "chronic",
        bech32PrefixAccPub: "chronic" + "pub",
        bech32PrefixValAddr: "chronic" + "valoper",
        bech32PrefixValPub: "chronic" + "valoperpub",
        bech32PrefixConsAddr: "chronic" + "valcons",
        bech32PrefixConsPub: "chronic" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "CHT", 
            coinMinimalDenom: "ucht", 
            coinDecimals: 6, 
            coinGeckoId: "ucht", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "CGAS",
            coinMinimalDenom: "ucgas",
            coinDecimals: 6,
            coinGeckoId: "ucgas",
        },
    ],
    stakeCurrency: {
        coinDenom: "CHT",
        coinMinimalDenom: "ucht",
        coinDecimals: 6,
        coinGeckoId: "ucht",
      },
    coinType: 118,
    gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03,
    },
    
    features: [
        "cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"
        ],
});
}
