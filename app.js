document.getElementById("connectBtn").addEventListener("click", async () => {
  await connectWallet();
  await updateNetwork();
});

document.getElementById("switchBtn").addEventListener("click", async () => {
  await switchNetwork();
  await updateNetwork();
});
