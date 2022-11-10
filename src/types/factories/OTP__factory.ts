/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OTP, OTPInterface } from "../OTP";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_verifier",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "merkleRoot",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2]",
        name: "input",
        type: "uint256[2]",
      },
    ],
    name: "blockApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dummy",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUsedTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2]",
        name: "input",
        type: "uint256[2]",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "naiveApproval",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifierAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040526000805560006001553480156200001a57600080fd5b50604051620012f1380380620012f1833981810160405281019062000040919062000129565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508060a08181525050505062000170565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b68262000089565b9050919050565b620000c881620000a9565b8114620000d457600080fd5b50565b600081519050620000e881620000bd565b92915050565b6000819050919050565b6200010381620000ee565b81146200010f57600080fd5b50565b6000815190506200012381620000f8565b92915050565b6000806040838503121562000143576200014262000084565b5b60006200015385828601620000d7565b9250506020620001668582860162000112565b9150509250929050565b60805160a05161113f620001b260003960008181610230015281816104b201526105d2015260008181610151015281816103a501526103d3015261113f6000f3fe6080604052600436106100555760003560e01c806315eacf131461005a57806332e43a1114610083578063663ea2e2146100ae578063bf98a6e4146100d9578063cdf62e2114610104578063ebf0c71714610120575b600080fd5b34801561006657600080fd5b50610081600480360381019061007c9190610974565b61014b565b005b34801561008f57600080fd5b5061009861039d565b6040516100a591906109ec565b60405180910390f35b3480156100ba57600080fd5b506100c36103a3565b6040516100d09190610a48565b60405180910390f35b3480156100e557600080fd5b506100ee6103c7565b6040516100fb91906109ec565b60405180910390f35b61011e60048036038101906101199190610a8f565b6103cd565b005b34801561012c57600080fd5b506101356105d0565b60405161014291906109ec565b60405180910390f35b838383837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f5c9d69e858585856040518563ffffffff1660e01b81526004016101ae9493929190610cb6565b602060405180830381865afa1580156101cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ef9190610d35565b61022e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022590610dbf565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000008160006002811061026357610262610ddf565b5b6020020151146102a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029f90610e5a565b60405180910390fd5b600054816001600281106102bf576102be610ddf565b5b602002015111610304576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fb90610ec6565b60405180910390fd5b428560016002811061031957610318610ddf565b5b60200201511161035e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035590610ec6565b60405180910390fd5b60016000815461036d90610f15565b919050819055508060016002811061038857610387610ddf565b5b60200201516000819055505050505050505050565b60015481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60005481565b848484847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f5c9d69e858585856040518563ffffffff1660e01b81526004016104309493929190610cb6565b602060405180830381865afa15801561044d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104719190610d35565b6104b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a790610dbf565b60405180910390fd5b7f0000000000000000000000000000000000000000000000000000000000000000816000600281106104e5576104e4610ddf565b5b60200201511461052a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052190610e5a565b60405180910390fd5b6000548160016002811061054157610540610ddf565b5b602002015111610586576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057d90610ec6565b60405180910390fd5b60016000815461059590610f15565b919050819055506105a685346105f4565b806001600281106105ba576105b9610ddf565b5b6020020151600081905550505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b80471015610637576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062e90610fcf565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff1682600067ffffffffffffffff81111561066c5761066b61075c565b5b6040519080825280601f01601f19166020018201604052801561069e5781602001600182028036833780820191505090505b506040516106ac9190611060565b60006040518083038185875af1925050503d80600081146106e9576040519150601f19603f3d011682016040523d82523d6000602084013e6106ee565b606091505b5050905080610732576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610729906110e9565b60405180910390fd5b505050565b6000604051905090565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107948261074b565b810181811067ffffffffffffffff821117156107b3576107b261075c565b5b80604052505050565b60006107c6610737565b90506107d2828261078b565b919050565b600067ffffffffffffffff8211156107f2576107f161075c565b5b602082029050919050565b600080fd5b6000819050919050565b61081581610802565b811461082057600080fd5b50565b6000813590506108328161080c565b92915050565b600061084b610846846107d7565b6107bc565b90508060208402830185811115610865576108646107fd565b5b835b8181101561088e578061087a8882610823565b845260208401935050602081019050610867565b5050509392505050565b600082601f8301126108ad576108ac610746565b5b60026108ba848285610838565b91505092915050565b600067ffffffffffffffff8211156108de576108dd61075c565b5b602082029050919050565b60006108fc6108f7846108c3565b6107bc565b90508060408402830185811115610916576109156107fd565b5b835b8181101561093f578061092b8882610898565b845260208401935050604081019050610918565b5050509392505050565b600082601f83011261095e5761095d610746565b5b600261096b8482856108e9565b91505092915050565b600080600080610140858703121561098f5761098e610741565b5b600061099d87828801610898565b94505060406109ae87828801610949565b93505060c06109bf87828801610898565b9250506101006109d187828801610898565b91505092959194509250565b6109e681610802565b82525050565b6000602082019050610a0160008301846109dd565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a3282610a07565b9050919050565b610a4281610a27565b82525050565b6000602082019050610a5d6000830184610a39565b92915050565b610a6c81610a27565b8114610a7757600080fd5b50565b600081359050610a8981610a63565b92915050565b60008060008060006101608688031215610aac57610aab610741565b5b6000610aba88828901610898565b9550506040610acb88828901610949565b94505060c0610adc88828901610898565b935050610100610aee88828901610898565b925050610140610b0088828901610a7a565b9150509295509295909350565b600060029050919050565b600081905092915050565b6000819050919050565b610b3681610802565b82525050565b6000610b488383610b2d565b60208301905092915050565b6000602082019050919050565b610b6a81610b0d565b610b748184610b18565b9250610b7f82610b23565b8060005b83811015610bb0578151610b978782610b3c565b9650610ba283610b54565b925050600181019050610b83565b505050505050565b600060029050919050565b600081905092915050565b6000819050919050565b600081905092915050565b610bec81610b0d565b610bf68184610bd8565b9250610c0182610b23565b8060005b83811015610c32578151610c198782610b3c565b9650610c2483610b54565b925050600181019050610c05565b505050505050565b6000610c468383610be3565b60408301905092915050565b6000602082019050919050565b610c6881610bb8565b610c728184610bc3565b9250610c7d82610bce565b8060005b83811015610cae578151610c958782610c3a565b9650610ca083610c52565b925050600181019050610c81565b505050505050565b600061014082019050610ccc6000830187610b61565b610cd96040830186610c5f565b610ce660c0830185610b61565b610cf4610100830184610b61565b95945050505050565b60008115159050919050565b610d1281610cfd565b8114610d1d57600080fd5b50565b600081519050610d2f81610d09565b92915050565b600060208284031215610d4b57610d4a610741565b5b6000610d5984828501610d20565b91505092915050565b600082825260208201905092915050565b7f696e76616c69642070726f6f6600000000000000000000000000000000000000600082015250565b6000610da9600d83610d62565b9150610db482610d73565b602082019050919050565b60006020820190508181036000830152610dd881610d9c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f696e76616c696420726f6f740000000000000000000000000000000000000000600082015250565b6000610e44600c83610d62565b9150610e4f82610e0e565b602082019050919050565b60006020820190508181036000830152610e7381610e37565b9050919050565b7f6f6c64204f545000000000000000000000000000000000000000000000000000600082015250565b6000610eb0600783610d62565b9150610ebb82610e7a565b602082019050919050565b60006020820190508181036000830152610edf81610ea3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f2082610802565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610f5257610f51610ee6565b5b600182019050919050565b7f53747265616d696e673a3a736166655472616e736665724554483a20496e737560008201527f6666696369656e7420616d6f756e740000000000000000000000000000000000602082015250565b6000610fb9602f83610d62565b9150610fc482610f5d565b604082019050919050565b60006020820190508181036000830152610fe881610fac565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611023578082015181840152602081019050611008565b60008484015250505050565b600061103a82610fef565b6110448185610ffa565b9350611054818560208601611005565b80840191505092915050565b600061106c828461102f565b915081905092915050565b7f53747265616d696e673a3a736166655472616e736665724554483a204554482060008201527f7472616e73666572206661696c65640000000000000000000000000000000000602082015250565b60006110d3602f83610d62565b91506110de82611077565b604082019050919050565b60006020820190508181036000830152611102816110c6565b905091905056fea26469706673582212209fd946e59fb2771a45dba78b216d505cac174a0bf80585ea98ffbf8787eb24c164736f6c63430008110033";

type OTPConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OTPConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OTP__factory extends ContractFactory {
  constructor(...args: OTPConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _verifier: PromiseOrValue<string>,
    merkleRoot: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OTP> {
    return super.deploy(_verifier, merkleRoot, overrides || {}) as Promise<OTP>;
  }
  override getDeployTransaction(
    _verifier: PromiseOrValue<string>,
    merkleRoot: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_verifier, merkleRoot, overrides || {});
  }
  override attach(address: string): OTP {
    return super.attach(address) as OTP;
  }
  override connect(signer: Signer): OTP__factory {
    return super.connect(signer) as OTP__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OTPInterface {
    return new utils.Interface(_abi) as OTPInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OTP {
    return new Contract(address, _abi, signerOrProvider) as OTP;
  }
}
