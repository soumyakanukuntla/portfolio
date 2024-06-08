// document.addEventListener('DOMContentLoaded', function() {
//     fetch("https://fakestoreapi.com/products")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(products){
//         products.forEach(function(product) {
//             var div = document.createElement('div');
//             div.innerHTML = product.title;
//             document.body.appendChild(div);
//         });
//     });
// });

function bodyload() {
    fetch("https://fakestoreapi.com/products")
    .then(function(response){
        return response.json();
    })
    .then(function(products){
        // products.map(function(product) {
            // var div = document.createElement('div');
            // var imgs = document.createElement('img');
            // imgs.src = product.image;
            // imgs.width = 100;
            // div.innerHTML = product.title;
            // div.style.border = '1px dotted black';
            // div.style.display = 'flexwrap';
            // div.appendChild(imgs);
            // document.body.append(div);

            var table = document.createElement("table");
            table.style.border = '1px solid black';
            table.style.width = '100%';
            var thead = document.createElement("thead");
            var tbody = document.createElement("tbody");

            var trow = document.createElement("tr");
            var th1 = document.createElement("th");
            var th2 = document.createElement("th");
            var th3 = document.createElement("th");
           

            th1.innerHTML = "Title";
            th2.innerHTML = "Image";
            th3.innerHTML = "Price";
            
            trow.appendChild(th1);
            trow.appendChild(th2);
            trow.appendChild(th3);
            thead.appendChild(trow);
            table.appendChild(thead);

            products.map(function(product) {
            var trbody = document.createElement("tr");
            
            var td1 = document.createElement("td");
            td1.style.border = '1px dotted black';
            var td2 = document.createElement("td");
            td2.style.border = '1px dotted black';
            var td3 = document.createElement("td");
            td3.style.border = '1px dotted black';
           
            td1.innerHTML = product.title;
            td2.innerHTML = `<img src=${product.image} width="50" height="50">`;
            td3.innerHTML = product.price;

            
           

            trbody.appendChild(td1);
            trbody.appendChild(td2);
            trbody.appendChild(td3);
            tbody.appendChild(trbody);
            
           
           table.appendChild(tbody);
           document.body.append(table);
        });
    });
}