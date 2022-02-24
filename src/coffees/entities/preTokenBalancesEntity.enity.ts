export class preTokenBalancesEntity {
    accountIndex: number
    mint: mint
    owner:any
    uiTokenAmount:uniTokenAmoung
}

export class uniTokenAmoung {
    amount: string
    decimals: number 
    uiAmount: number 
    uiAmountString:string
    }


export class mint {
    name: string
    ticker: string
    logo: string
    meta: string
    coingeckoId: string
    address: string
  }