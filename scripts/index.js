let web3;
let contractInstance;
window.onload = () => {
  web3 = new Web3(ethereum);
  let abi = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "certificates",
      outputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "course",
          type: "string",
        },
        {
          internalType: "string",
          name: "date",
          type: "string",
        },
        {
          internalType: "string",
          name: "Grade",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_course",
          type: "string",
        },
        {
          internalType: "string",
          name: "_date",
          type: "string",
        },
        {
          internalType: "string",
          name: "_Grade",
          type: "string",
        },
      ],
      name: "issue",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  let contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
  let contractInstance = new web3.eth.Contract(abi, contractAddress);
};
issueCertificate = async () => {
  let certificateID = document.getElementById("certificateID").value;
  let candidateName = document.getElementById("candidateName").value;
  let courseName = document.getElementById("courseName").value;
  let grade = document.getElementById("grade").value;
  let date = document.getElementById("date").value;
  let trxReceipt = await MyContract.methods
    .issue(certificateID, candidateName, courseName, grade, date)
    .send({ from: ethereum.selectedAddress, gasLimit: 500000 });
  console.log("Trx: ", trxReceipt);
  alert(`Certificate is issued for ${certificateID}!`);
};