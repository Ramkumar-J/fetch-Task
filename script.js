fetch("https://restcountries.com/v3.1/all")
  .then(function (data) {
    return data.json();
  })
  .then(function (countrydetails) {
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    document.body.appendChild(container);
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);
    countrydetails
      .forEach((country) => {
        var boot = document.createElement("div");
        boot.setAttribute("class", "col-lg-4 col-md-6 col-sm-12 col-12");
        row.appendChild(boot);
        var head = document.createElement("div");
        head.setAttribute("class", "card-header");
        head.innerText = country.name.common;
        boot.appendChild(head);
        var cardbody = document.createElement("div");
        cardbody.setAttribute("class", "card-body");
        boot.appendChild(cardbody);
        var image = document.createElement("img");
        image.setAttribute("class", "img-fluid mb-2");
        image.setAttribute("src", country.flags.png);
        cardbody.appendChild(image);
        var cap = document.createElement("p");
        cap.setAttribute("class", "capital");
        cap.innerHTML = `<p>Capital:${country.capital}</p>`;
        cardbody.appendChild(cap);
        var reg = document.createElement("p");
        reg.setAttribute("class", "region");
        reg.innerHTML = `<p>Region:${country.region}</p>`;
        cardbody.appendChild(reg);
        var code = document.createElement("p");
        code.setAttribute("class", "codes");
        code.innerHTML = `<p>Country Code:${country.cca3}</p>`;
        cardbody.appendChild(code);
        var weather = document.createElement("button");
        weather.setAttribute("type", "button");
        weather.setAttribute("class", "btn btn-primary");
        weather.innerText = "Click for Weather";
        // weather.style.backgroundColor="white";
        weather.addEventListener("click", function () {
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=5e46b8c6bffe784b08f23ffc0c41df26`
          )
            .then((response) => response.json())
            .then((weatherdata) => {
              alert(
                `The Weather of ${country.name.common} is Temperature ${weatherdata.main.temp}, windspeed ${weatherdata.wind.speed}, longitude ${weatherdata.coord.lon}, latitude ${weatherdata.coord.lat}`
              );
            })
            .catch((error) => {
              alert("No weather found");
            });
        });
        cardbody.appendChild(weather);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
