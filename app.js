const Web3 = require("web3");
const moment = require("moment");
const web3 = new Web3('https://eth-mainnet.alchemyapi.io/v2/fH3RqImWKcY75pC03EOuzKF44cbZdJca');



const getAllHolders = async ({address:contractAddress = ''} = {}) => {
	const loggingTag = `[getAllHolders]`;
	try{
		//note, needed to use the etherscan API to retrieve the ABI for the contract
		let contract = new web3.eth.Contract([{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"IMMORTALZ_MAX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"IMMORTALZ_MAX_MINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"IMMORTALZ_RESERVE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PURCHASE_LIMIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"addToPresaleList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPresaleListActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"mintReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"onPresaleList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"presaleListClaimedBy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleListMaxMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"purchasePresaleList","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"removeFromPresaleList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"setIsActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isPresaleListActive","type":"bool"}],"name":"setIsPresaleListActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxMint","type":"uint256"}],"name":"setPresaleListMaxMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalGiftSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPublicSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
			contractAddress);
		let tokenOwnershipMapObj = {};
		// const events = await contract.getPastEvents('allEvents', {
		const events = await contract.getPastEvents('Transfer', {
			fromBlock: 0,
			toBlock: 'latest'
		});
		for(let i = 0; i < events.length; i++){
		// for(let i = 0; i < 10; i++){
			const eventInfo = events[i];
			
			// console.info(`${loggingTag} return values`, eventInfo.returnValues);
			const details = eventInfo.returnValues,
				tokenID = details.tokenId;
			
			if(tokenID == 398){
				console.info(`${loggingTag} event info`, eventInfo);
			}
			// console.info(`${loggingTag} tokenID: ${tokenID}`);

			if(!(tokenID in tokenOwnershipMapObj)){
				// console.info(`${loggingTag} new event type found! pushing type ("${tokenID}") to array!`);
				tokenOwnershipMapObj[tokenID] = [eventInfo];
			} else {//token already in the
				tokenOwnershipMapObj[tokenID].push(eventInfo);
			}
		}
		// console.info(`${loggingTag} num events ${events.length}`);
		// console.info(`${loggingTag} distinct event token ID's`, Object.keys(tokenOwnershipMapObj).length);
		
		const addressOfCurrentOwner = (id) => {
			const ownershipHistory = tokenOwnershipMapObj[id],
				numTransfersOfToken = ownershipHistory.length,
				latestTransfer = ownershipHistory[numTransfersOfToken - 1];
			return latestTransfer.returnValues.to;
		}
		
		const getTransactionOfLastTransfer = async (id) => {
			let transaction;
			const ownershipHistory = tokenOwnershipMapObj[id],
				numTransfersOfToken = ownershipHistory.length,
				latestTransfer = ownershipHistory[numTransfersOfToken - 1];
			
			try{
				transaction = await web3.eth.getTransaction(latestTransfer.transactionHash);
				console.info(`${loggingTag} latest transaction of token w/ ID ${id}`, transaction);
			} catch(e){
				console.error(`${loggingTag} Error getting transaction`, e);
			}
			
			return transaction;
		}
		
		const getTimestampOfTransaction = async (id) => {
			let timestamp = 0
			try{
				const latestTransaction = await getTransactionOfLastTransfer(id);
				const latestTransactionBlock = await web3.eth.getBlock(latestTransaction.blockHash);
				timestamp = moment.unix(latestTransactionBlock.timestamp);
				console.info(`Timestamp of last transaction: ${timestamp}`);
			} catch(e){
				console.error(`${loggingTag} Error getting timestamp of transaction for token w/ ID ${id}`, e);
			}
			return timestamp;
		}
		
		const tokenIDToRetrieveOwnerOf = 2634;
		
		console.info(`${loggingTag} current owner of tokenID: ${tokenIDToRetrieveOwnerOf}`, addressOfCurrentOwner(tokenIDToRetrieveOwnerOf));
		Object.keys(tokenOwnershipMapObj).forEach(key => {
			if(tokenOwnershipMapObj[key].length > 1){
				console.info(`${loggingTag} token w/ ID: ${key} has more than 1 transaction!`, tokenOwnershipMapObj[key]);
			}
		});
		
		
	} catch(e){
		console.error(`${loggingTag} Error:`, e);
	}
}

getAllHolders({address: '0x4742D7e66fb868A4fdBedfeA829E611335c0d562'});

const getBalanceOfAddress = async ({address = ''} = {}) => {
	const balanceInWei = await web3.eth.getBalance(address);
	const balanceInEth = web3.utils.fromWei(balanceInWei, 'ether');
	console.info(balanceInEth);
}

//getting balance (in ETH) of a wallet
// getBalanceOfAddress({address:'0x35f80420bbDB358b6bf274038aeD03B49235E9fC'});