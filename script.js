fetch("https://restcountries.com/v3.1/all").then(function(data){
        return data.json()   
    })
    .then(function(countrydetails){
        var container =document.createElement("div");
        container.setAttribute("class","container");
        document.body.appendChild(container);
        var row =document.createElement("div");
        row.setAttribute("class","row");
        container.appendChild(row);
        countrydetails.forEach(country => {
            var boot =document.createElement("div");
        boot.setAttribute("class","col-lg-4 col-md-6 col-sm-12 col-12");
        row.appendChild(boot);
        var head =document.createElement("div");
        head.setAttribute("class","card-header");
        head.innerText=country.name.common;
        boot.appendChild(head);
        var cardbody =document.createElement("div");
        cardbody.setAttribute("class","card-body" );
        boot.appendChild(cardbody);
        var image =document.createElement("img");
        image.setAttribute("class","flag-img");
        image.setAttribute("src",country.flags.png);
        // image.innerHTML=`<img height="100" width="220" src="${country.flags.png}">`;
        // image.innerHTML=`<img src=${country.flags.png}>`;
        // image.style.height=200;
        // image.style.width=320;
        cardbody.appendChild(image);
        var cap =document.createElement("p");
        cap.setAttribute("class","capital");
        cap.innerHTML=`<p>Capital:${country.capital}</p>`;
        cardbody.appendChild(cap);
        var reg =document.createElement("p");
        reg.setAttribute("class","region");
        reg.innerHTML=`<p>Region:${country.region}</p>`;
        cardbody.appendChild(reg);
        var code =document.createElement("p");
        code.setAttribute("class","codes");
        code.innerHTML=`<p>Country Code:${country.cca3}</p>`;
        cardbody.appendChild(code);
        var weather=document.createElement("button");
        weather.setAttribute("type","button");
        weather.setAttribute("class","btn btn-primar");
        weather.innerText="Click for Weather";
        weather.style.backgroundColor="white";
        weather.addEventListener("click",function(){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=5e46b8c6bffe784b08f23ffc0c41df26`)
            .then((response) => response.json())
            .then((weatherdata) => {
                alert(`The Weather of ${country.name.common} is Temperature ${weatherdata.main.temp}, windspeed ${weatherdata.wind.speed}, longitude ${weatherdata.coord.lon}, latitude ${weatherdata.coord.lat}`); 
            }).catch((error) => {
                alert('No weather found');
            })
        })
        cardbody.appendChild(weather);
    })
        .catch(function(error){
            console.log(error)
        })
    })
            
    // var boot =document.createElement("div");
        // boot.setAttribute("class","col-lg-4 col-md-4 col-sm-12 col-12");
        // row.appendChild(boot);
        // var head =document.createElement("div");
        // head.setAttribute("class","card-header");
        // head.innerText=country.name.common;
        // boot.appendChild(head);
        // var cardbody =document.createElement("div");
        // cardbody.setAttribute("class","card-body");
        // boot.appendChild(cardbody);
        // var image =document.createElement("img");
        // image.setAttribute("class","flag-img");
        // image.setAttribute("src","https://flagcdn.com/w320/al.png");
        // cardbody.appendChild(image);
        // var cap =document.createElement("p");
        // cap.setAttribute("class","capital");
        // cap.innerText="Capital:Tirana";
        // cardbody.appendChild(cap);
        // var reg =document.createElement("p");
        // reg.setAttribute("class","region");
        // reg.innerText="Region:Europe";
        // cardbody.appendChild(reg);
        // var code =document.createElement("p");
        // code.setAttribute("class","codes");
        // code.innerText="Country Code:ALB";
        // cardbody.appendChild(code);
        // var buttonstate=document.createElement("button");
        // buttonstate.innerHTML=<button type="button" class="btn btn-primary">Click for Weather</button>;
        // cardbody.appendChild(buttonstate);
        // fetch("https://api.openweathermap.org/data/2.5/weather?q="+country.name.common+" &appid=5e46b8c6bffe784b08f23ffc0c41df26")
            // .then((response) => response.json())
            // .then((data) => console.log(showweather()))
            // alert("Button click")
       
            // fetch(`api.openweathermap.org/data/2.5/weather?q=" + onclick +" &appid=5e46b8c6bffe784b08f23ffc0c41df26`)
            // .then((response) => response.json())
        //     // .then(function(weatherdata){
        //     //     alert("Button click");
        //     // })
        //     .catch(function(error){
        //         console.log(error)
        //     })
        // }
    // fetch(api.openweathermap.org/data/2.5/weather?q=chennai&appid=5e46b8c6bffe784b08f23ffc0c41df26).then(function(weather){
    //     console.log(weather);
    // })