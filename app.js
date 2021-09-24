const Web3 = require("web3");
const moment = require("moment");
const web3 = new Web3('https://eth-mainnet.alchemyapi.io/v2/fH3RqImWKcY75pC03EOuzKF44cbZdJca');

// const sdk = require('api')('@opensea/v1.0#gbq4cz1cksxopxqw');
const axios = require('axios');

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
		
		//building a map of each token in the collection, and the transfers of ownership 9.21.21 KL
		for(let i = 0; i < events.length; i++){
		// for(let i = 0; i < 10; i++){
			const eventInfo = events[i];
			
			// console.info(`${loggingTag} return values`, eventInfo.returnValues);
			const details = eventInfo.returnValues,
				tokenID = details.tokenId;

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
				// console.info(`${loggingTag} latest transaction of token w/ ID ${id}`, transaction);
			} catch(e){
				console.error(`${loggingTag} Error getting transaction`, e);
			}
			
			return transaction;
		}
		
		const getTimestampOfLatestTransaction = async (id) => {
			let timestamp = 0
			try{
				const latestTransaction = await getTransactionOfLastTransfer(id);
				const latestTransactionBlock = await web3.eth.getBlock(latestTransaction.blockHash);
				timestamp = moment.unix(latestTransactionBlock.timestamp);
				// console.info(`Timestamp of last transaction: ${timestamp}`);
			} catch(e){
				console.error(`${loggingTag} Error getting timestamp of transaction for token w/ ID ${id}`, e);
			}
			return timestamp;
		}
		
		const getRandomInt = (max) => {
			return Math.floor(Math.random() * max);
		}
		
		const generateListOfIDs = ({num=0}) => {
			let array = [];
			for(let i=0; i < num; i++){
				array.push(getRandomInt(Object.keys(tokenOwnershipMapObj).length));
			}
			return array;
		}
		
		//for debugging purposes
		
		//generating list of random IDs to spot check the owner for
		// const idsToSpotCheck = generateListOfIDs({num: 5});

		// for(let j =0; j < idsToSpotCheck.length; j++){
		// 	const tokenIDToRetrieveOwnerOf = idsToSpotCheck[j];
		// 	console.info(`${loggingTag} current owner of tokenID: ${tokenIDToRetrieveOwnerOf}`, addressOfCurrentOwner(tokenIDToRetrieveOwnerOf));
		// 	console.info(`${loggingTag} timestamp of latest transaction of tokenID: ${tokenIDToRetrieveOwnerOf}`, await getTimestampOfLatestTransaction(tokenIDToRetrieveOwnerOf));
		// }
		
		//for debugging purposes
		
		let tokenOwnerWalletMap = {};
		const tokenIDs = Object.keys(tokenOwnershipMapObj);
		//mapping all tokens to each wallet that owns it, and displaying the ts_oldest and ts_newest of each token owned per wallet
		for(let k = 0; k < tokenIDs.length; k++){
			const id = tokenIDs[k];
			const walletAddressOfOwner = addressOfCurrentOwner(id);
			const tsLastTransaction = await getTimestampOfLatestTransaction(id);
			console.info(`${loggingTag} current owner of tokenID: ${id}`, walletAddressOfOwner);
			if(!(walletAddressOfOwner in tokenOwnerWalletMap)){
				tokenOwnerWalletMap[walletAddressOfOwner] = {
					address: walletAddressOfOwner,
					ts_oldest_token: tsLastTransaction,
					ts_latest_token: tsLastTransaction,
					tokens_owned: [id],
					num_tokens: 1
				}
			} else {//this wallet address has multiple tokens!
				let existingWalletMapping = tokenOwnerWalletMap[walletAddressOfOwner];
				console.info(`Already found wallet address: [${walletAddressOfOwner}] in map.`)
				existingWalletMapping.num_tokens++;
				existingWalletMapping.tokens_owned.push(id);
				if(tsLastTransaction < existingWalletMapping.ts_oldest_token){
					existingWalletMapping.ts_oldest_token = tsLastTransaction;
				} else if (tsLastTransaction > existingWalletMapping.ts_latest_token){
					existingWalletMapping.ts_latest_token = tsLastTransaction;
				}
				// console.info(`Updated wallet details:`, tokenOwnerWalletMap[walletAddressOfOwner]);
			}
			
			// console.info(`${loggingTag} timestamp of latest transaction of id: ${key}`, await getTimestampOfLatestTransaction(key));
		}
		
		const ownersWalletIDs = Object.keys(tokenOwnerWalletMap);
		
		for(let l = 0; l < ownersWalletIDs.length; l++){
			const address = ownersWalletIDs[l];
			console.info(`owner wallet details:`, tokenOwnerWalletMap[address]);
		}
		// const testWallet = "0xb4742fd474cac814f5297502746c9a97c08a0a2c";
		// console.info(`Wallet ownership details for address: "${testWallet}"`, tokenOwnerWalletMap[testWallet]);
		
	} catch(e){
		console.error(`${loggingTag} Error:`, e);
	}
}

// getAllHolders({address: '0x4742D7e66fb868A4fdBedfeA829E611335c0d562'});
//contract address of new token 9.20.21 KL
getAllHolders({address: '0x664ac093f047a131403e9b1cbe3ff1df7e756429'});

const getBalanceOfAddress = async ({address = ''} = {}) => {
	let balance = 0;
	const balanceInWei = await web3.eth.getBalance(address);
	const balanceInEth = web3.utils.fromWei(balanceInWei, 'ether');
	balance = balanceInEth;
	// console.info(balanceInEth);
	return balance
}

//getting balance (in ETH) of a wallet
// getBalanceOfAddress({address:'0x35f80420bbDB358b6bf274038aeD03B49235E9fC'});

const retrieveEventsByCollectionFromOS = ({contract_address:contractAddress = '', collection_slug:collectionSlug = ''} = {}) => {
	
	const options = {
		method: 'GET',
		headers: {
			Accept: 'application/json'
		},
		params:{
			collection_slug:collectionSlug,
			event_type: 'successful',
			only_opensea: false,
			offset: 0,
			limit: '100'
		}
	};
	
	axios.get(`https://api.opensea.io/api/v1/events`, options)
		.then(res => {
			// console.log(res);
			if("asset_events" in res.data){
				const events = res.data.asset_events;
				if(events.length > 0){
					// console.info(`success! found ${events.length} events`, events[0]);
					console.info(`success! found ${events.length} events`);
					
				} else {
					console.error(`Error no asset events found for collection w/ id: ${collectionSlug}`);
				}
			}
		})
		.catch(err => {
			console.error(`received error from api:`, err);
		});
	// sdk['retrieving-asset-events']({
	// 	// collection_slug: collectionID,
	// 	only_opensea: 'false',
	// 	offset: 0,
	// 	limit: '20'
	// })
	// 	.then(res => {
	// 		console.log(res);
	// 	})
	// 	.catch(err => {
	// 		console.error(`received error from api:`,err);
	// 	});
}


// retrieveEventsByCollectionFromOS({collection_slug: 'theimmortalz'});