async function updateNetwork() {
  const chainId = await getNetworkName();
  document.getElementById("network").innerText = chainId;
}
