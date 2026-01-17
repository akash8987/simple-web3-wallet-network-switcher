let useBSC = false;

async function switchNetwork() {
  useBSC = !useBSC;
  const target = useBSC ? NETWORKS.bsc : NETWORKS.ethereum;

  await window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: target.chainId }]
  });
}
