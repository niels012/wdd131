const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = "Last Modification: " + lastModified;


// Function to extract numeric value from text
function getNumericValue(text) {
    return parseFloat(text.replace(/[^\d.-]/g, ''));
}

// Calculate and display wind chill
function updateWindChill() {
    const temperatureElement = document.getElementById("temperature");
    const windElement = document.getElementById("wind");
    const windChillElement = document.getElementById("windchill");
    
    // Get temperature and wind speed values
    const tempText = temperatureElement.innerText;
    const windText = windElement.innerText;

    // Check if metric or imperial units
    const isMetric = tempText.includes("°C");
    
    // Get numeric values for calculation
    const temp = getNumericValue(tempText);
    const windSpeed = getNumericValue(windText);
    
    // Calculate wind chill
    const windChill = calculateWindChill(temp, windSpeed, isMetric);

    // Update the Wind Chill element in the HTML
    windChillElement.innerText = windChill !== "N/A" ? `${windChill}°` : "N/A";
}

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed, isMetric = true) {
    return isMetric 
        ? (temp <= 10 && windSpeed > 4.8 ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) : "N/A")
        : (temp <= 50 && windSpeed > 3 ? (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) : "N/A");
}

// Call updateWindChill when the page loads
window.onload = updateWindChill;
