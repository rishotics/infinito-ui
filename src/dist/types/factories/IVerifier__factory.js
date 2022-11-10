"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.IVerifier__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256[2]",
                name: "a",
                type: "uint256[2]"
            },
            {
                internalType: "uint256[2][2]",
                name: "b",
                type: "uint256[2][2]"
            },
            {
                internalType: "uint256[2]",
                name: "c",
                type: "uint256[2]"
            },
            {
                internalType: "uint256[2]",
                name: "input",
                type: "uint256[2]"
            },
        ],
        name: "verifyProof",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
];
var IVerifier__factory = /** @class */ (function () {
    function IVerifier__factory() {
    }
    IVerifier__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IVerifier__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IVerifier__factory.abi = _abi;
    return IVerifier__factory;
}());
exports.IVerifier__factory = IVerifier__factory;
