function calculate() {
  // Inputs
  const length = parseFloat(document.getElementById("length").value);
  const breadth = parseFloat(document.getElementById("breadth").value);
  const height = parseFloat(document.getElementById("height").value);
  const materialPrice = parseFloat(document.getElementById("material-price").value);
  const labourCost = parseFloat(document.getElementById("labour-cost").value);
  const profitMargin = parseFloat(document.getElementById("profit-margin").value);
  const ply1 = parseFloat(document.getElementById("ply1").value) / 1000;
  const ply2 = parseFloat(document.getElementById("ply2").value) / 1000;
  const ply3 = parseFloat(document.getElementById("ply3").value) / 1000;
  const ply4 = parseFloat(document.getElementById("ply4").value) / 1000;
  const ply5 = parseFloat(document.getElementById("ply5").value) / 1000;
  const ply6 = parseFloat(document.getElementById("ply6").value) / 1000;
  const ply7 = parseFloat(document.getElementById("ply7").value) / 1000;
  const flute = (ply2 + ply4 + ply6) / 2;

  

  // Calculations
  const reelSize = height + breadth + 1;
  const cuttingSize = length + breadth + 2;
  const gsm = ply1 + ply2 + ply3 + ply4 + ply5 + ply6 + ply7 +  flute;
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

function updateFlute() {

  const ply1 = parseFloat(document.getElementById("ply1").value) / 1000;
  const ply2 = parseFloat(document.getElementById("ply2").value) / 1000;
  const ply3 = parseFloat(document.getElementById("ply3").value) / 1000;
  const ply4 = parseFloat(document.getElementById("ply4").value) / 1000;
  const ply5 = parseFloat(document.getElementById("ply5").value) / 1000;
  const ply6 = parseFloat(document.getElementById("ply6").value) / 1000;
  const ply7 = parseFloat(document.getElementById("ply7").value) / 1000;

  const flute = (ply2 + ply4 + ply6) / 2;
      // Update flute field's value attribute
      document.getElementById("flute").value = (flute * 1000).toFixed(0); // Convert back to "120" scale
    }
    
    // Attach event listeners to dynamically recalculate flute
    document.querySelectorAll("#ply1, #ply2, #ply3, #ply4, #ply5, #ply6, #ply7").forEach((input) => {
        input.addEventListener("input", updateFlute);
    });
    
    // Initialize the flute value on page load
    updateFlute();
