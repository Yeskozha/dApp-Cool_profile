import React from 'react'

function WalletInputs({chain, wallet, setChain , setWallet}) {


    return (
        <>
            <h1>Please input a Wallet and chain</h1>
            <p>
                <span> Set Wallet </span>
                <input 
                onChange={(e) => setWallet(e.target.value)}
                value ={wallet}
                ></input>
            </p>
            <span> Set Chain </span>
                <select onChange={(e) => setChain(e.target.value)} value ={chain}>
                    <option value="0x1">ETH</option>
                    <option value="0x89">Polygon</option>
                    <option value="0x5">Goerli(Для теста)</option>

                </select>
        </>
    )
}

export default WalletInputs