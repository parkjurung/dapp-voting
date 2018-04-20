// 'use strict'

// var Web3 = require('web3');

var ContractABI = web3.eth.contract(
    [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "voteNo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "voteYes",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "voter",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "voteYes",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "voteNo",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "votedYes",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "votedNo",
                    "type": "uint256"
                }
            ],
            "name": "Voting",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "votingClear",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getVotingState",
            "outputs": [
                {
                    "name": "_votedYes",
                    "type": "uint256"
                },
                {
                    "name": "_votedNo",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "rate",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "votedNo",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "votedResult",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "votedYes",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
);

var Contract;

window.addEventListener('load', function() {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        console.log(web3.version);
        web3 = new Web3(web3.currentProvider);
        console.log(web3.version);
        console.log('metamask');
        Contract = ContractABI.at('0x806326f4cb299f2eb92a8f11d569c8d0c1d16767');
        console.log(Contract);
    } else {
        console.log('No web3? You should consider trying MetaMask!');
        document.getElementById('meta-mask-required').innerHTML = 'You need <a href="https://metamask.io/">MetaMask</a> browser plugin to run this example';

        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        console.log('local');
        console.log(web3);
    }

    var event = Contract.Voting()
    // watch for event of Voting
    event.watch(function(error, result){
      if (!error)
        console.log(result);
        getBalance();
        getVotingState();
    });

    getBalance();
    getVotingState();

});



function buyToken () {
    var price = Number(document.getElementById('buyTokenAmount').value);
    var tx = {
        from: web3.eth.coinbase,
        to: Contract.address,
        value: web3.toWei(price, 'ether'),
    };

    web3.eth.sendTransaction(tx, function(err, res){
        console.log(res);
        console.log(err);
        document.getElementById('loader').hidden = false;
    });

    // 새 블록 mining 될 때 마다 callback 호출
    web3.eth.filter('latest', function(error1, result1){ // waiting mining for pending tx
        getBalance();
    });
}

function voteYes () {
    var voteValue = Number(document.getElementById('vote-value').value);
    voteValue = web3.toWei(voteValue, 'ether');

    Contract.voteYes(voteValue, function(err, res){
        console.log(res);
        console.log(err);
        document.getElementById('loader').hidden = false;
        document.getElementById('loader-vote').hidden = false;
    });
    web3.eth.filter('latest', function(error1, result1){ // waiting mining for pending tx
        getVotingState();
    });
}

function voteNo () {
    var voteValue = Number(document.getElementById('vote-value').value);
    voteValue = web3.toWei(voteValue, 'ether');

    Contract.voteNo(voteValue, function(err, res){
        console.log(res);
        console.log(err);
        document.getElementById('loader').hidden = false;
        document.getElementById('loader-vote').hidden = false;
    });
    web3.eth.filter('latest', function(error1, result1){ // waiting mining for pending tx
        getVotingState();
    });
}


function getBalance() {
    var coinbase = web3.eth.coinbase;
    document.getElementById('coinbase').innerText = 'coinbase: ' + coinbase;

    web3.eth.getBalance(coinbase, function(error, result){
        if(!error){
            var originalBalance = web3.fromWei(result, 'ether').toNumber();
            balanceWei = result;
            document.getElementById("current").innerText = originalBalance.toString();
        }
        else{
            console.error(error);
        }
    });
    Contract.balanceOf(web3.eth.coinbase, function(error, result){
        if(!error){
            console.log(result);
            balanceMyToken = result;
            var balance = result['c'][0] / Math.pow(10, 4);
            if (document.getElementById("mytoken").innerText != balance.toString()){
                document.getElementById("mytoken").innerText = balance.toString();
                document.getElementById('loader').hidden = true;
            }

        }
        else{
            console.error(error);
        }
    });
}

function getVotingState() {
    Contract.getVotingState( function(err, res){
        if(!err){
            console.log(res);
            tmp = res;
            if (document.getElementById('yes').style["width"] != (res[0].toNumber() / Math.pow(10, 18)).toString() + "%"){
                document.getElementById('yes').style["width"] = (res[0].toNumber() / Math.pow(10, 18)).toString() + "%";
                document.getElementById('loader-vote').hidden = true;
            }
            if (document.getElementById('no').style["width"] != (res[1].toNumber() / Math.pow(10, 18)).toString() + "%"){
                document.getElementById('no').style["width"] = (res[1].toNumber() / Math.pow(10, 18)).toString() + "%";
                document.getElementById('loader-vote').hidden = true;
            }
        }
        console.log(err);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('buyToken').onclick = buyToken;
    document.getElementById('watch').onclick = getBalance;
    document.getElementById('vote-yes').onclick = voteYes;
    document.getElementById('vote-no').onclick = voteNo;
});
