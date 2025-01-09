function calculate() {
    // Inputs
    const length = parseFloat(document.getElementById("length").value);
    const breadth = parseFloat(document.getElementById("breadth").value);
    const height = parseFloat(document.getElementById("height").value);
    const materialPrice = parseFloat(document.getElementById("material-price").value);
    const labourCost = parseFloat(document.getElementById("labour-cost").value);
    const profitMargin = parseFloat(document.getElementById("profit-margin").value);
    const ply1 = parseFloat(document.getElementById("ply1").value);
    const ply2 = parseFloat(document.getElementById("ply2").value);
    const ply3 = parseFloat(document.getElementById("ply3").value);
    const ply4 = parseFloat(document.getElementById("ply4").value);
    const ply5 = parseFloat(document.getElementById("ply5").value);
    const flute = parseFloat(document.getElementById("flute").value);
  
    // Calculations
    const reelSize = height + breadth + 1;
    const cuttingSize = length + breadth + 2;
    const gsm = ply1 + ply2 + ply3 + ply4 + ply5 + flute;
    const weight = (reelSize * cuttingSize * gsm / 1550 * 2) * 1.05;
    const processingFee = materialPrice + labourCost;
    const purchaseRate = (processingFee * weight);
    const salePrice = purchaseRate * (1 + profitMargin / 100);

  
    // Output
    document.getElementById("reel-size").textContent = reelSize.toFixed(2);
    document.getElementById("cutting-size").textContent = cuttingSize.toFixed(2);
    document.getElementById("gsm").textContent = gsm.toFixed(3);
    document.getElementById("weight").textContent = weight.toFixed(3);
    document.getElementById("processing-fee").textContent = processingFee.toFixed(2);
    document.getElementById("purchase-rate").textContent = purchaseRate.toFixed(2);
    document.getElementById("sale-price").textContent = salePrice.toFixed(2);
  }
  