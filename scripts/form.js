const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = "Last Modification: " + lastModified;



const products = [
    {
      id: "fc-1888",
      name: "Flux Capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power Laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Time Circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Low Voltage Reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp Equalizer",
      averagerating: 5.0
    }
  ];

  const productSelect = document.getElementById('product');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });


  function handleFormSubmit() {

    // Increment review count in localStorage
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
    reviewCount += 1;
    localStorage.setItem("reviewCount", reviewCount);

    let inputName = document.getElementById('userName');
    localStorage.setItem("userName", inputName.value);

    const NameSpan = document.getElementById("name");
    const storedName = localStorage.getItem("userName");
    if (storedName != "") {
        NameSpan.textContent = storedName;
    }

  }

