/*Input: from the body tags
 *Processing: reads the body tags, calls a funstion to compute for teh average temp, and then computes for the windchill value
 *Output: displays the windchill value in the specific body section
 */

function computeAveTemp (hTemp, lTemp) {
  var aveTempComp = (hTemp + lTemp)/2;
  return aveTempComp;
}

function computeWindchillValue (aveTemp, wSpeed) {
  var windchillPow = Math.pow(wSpeed, 0.16);
  var windchillComp = 35.74 + (0.6215 * aveTemp) - (35.75 * windchillPow) + 0.4275 * aveTemp * windchillPow;
  return windchillComp;
}

function windchillCompute() {
  var hTemp = parseFloat(document.getElementById('high-temp').textContent);
  var lTemp = parseFloat(document.getElementById('low-temp').textContent);
  var wSpeed = parseFloat(document.getElementById('wind-speed').textContent);
  var aveTemp = computeAveTemp(hTemp, lTemp);
  var windchillValue = computeWindchillValue(aveTemp, wSpeed);
  document.getElementById('displayWindchillValue').innerHTML = windchillValue.toFixed (2);
 }