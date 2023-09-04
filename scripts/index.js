import abi from "./Cert.json";
let web3;
let contractInstance;
window.onload = () => {
  web3 = new Web3(ethereum);
  let ContractABI = abi;
  let contractAddress = "0xc98510408A45805e3d5A9Efb29e851cc61D54751";
  let contractInstance = new web3.eth.Contract(ContractABI, contractAddress);
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

getCertificateDetails = async () => {
  let certificateID = document.getElementById("certificateID").value;
  console.log(certificateID);
  let result = await MyContract.methods.Certificates(certificateID).call();
  sessionStorage.setItem("certificateID", certificateID);
  sessionStorage.setItem("candidateName", result.name);
  sessionStorage.setItem("courseName", result.course);
  sessionStorage.setItem("grade", result.grade);
  sessionStorage.setItem("date", result.date);
  window.location.href = "viewCertificate.html";
};
