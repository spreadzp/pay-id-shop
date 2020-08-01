import { Injectable } from "@angular/core";
import { XrpClient, XrplNetwork, PayIdClient } from "xpring-js";

@Injectable({
  providedIn: "root",
})
export class PayIdService {
  grpcUrl = null;
  ilpClient = null;
  xrpClient = null;
  payIdClient = null;
  constructor() {
    this.grpcUrl = "prod.grpcng.wallet.xpring.io"; // Testnet ILP Wallet URL
    // this.ilpClient = new IlpClient(this.grpcUrl);
    const remoteURL = "test.xrp.xpring.io:50051"; // Testnet URL, use main.xrp.xpring.io:50051 for Mainnet
    //

    try {
      this.payIdClient = new PayIdClient();

      // return await payIdClient.cryptoAddressForPayId(payId, network)
      // console.log(resolvedAddressDetails.address)
      // this.xrpClient = new XrpClient(remoteURL, XrplNetwork.Test, true);
    } catch (e) {
      console.log("e :>>  ", e);
    }
  }

  getBalance() {
    const address = "X7u4MQVhU2YxS4P9fWzQjnNuDRUkP3GM6kiVjTjcQgUU3Jr";
    const payId = "stormtv$xpring.money";
    const network = "btc-mainnet";

    // return this.payIdClient.cryptoAddressForPayId(payId, network);
    //console.log(resolvedAddressDetails.address)
    return Promise.resolve(123);
    //return  this.xrpClient.getBalance(address);
  }
}
