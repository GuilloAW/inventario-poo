let circleRed;
let squareBlue;
let num=0;
let productList=document.getElementById("productList");
let boxAlert=document.getElementById("alertas");
document.getElementById("formProduct").addEventListener("submit", function(e) {
  e.preventDefault();
  const name=document.getElementById("name").value;
  const price=document.getElementById("price").value;
  const year=document.getElementById("year").value;
  let exprNum =/^[1-9]\d$/;
  let emptyNum=/^\s*$/;
  let wordsNum=/[A-Z,a-z]/g;
  let msng;
if (isNaN(price)){
    const error=new Ui();
    error.showMsg("El campo de precio solo admite números",'wrong');
    return false;
}
if (emptyNum.test(name)){
    const error=new Ui();
    error.showMsg(`El campo de nombre esta vacio`,'wrong');
    return false;
  }else{
    if(!wordsNum.test(name)){
      const error=new Ui();
      error.showMsg(`El campo de nombre solo admite texto`,'wrong');
      return false;
    }
}

  const nuevoProduct=new Product(name,price,year);
  const list=new Ui();
  list.addProduct(nuevoProduct);
  list.showMsg("Nuevo producto agregado","succes");
});
productList.addEventListener("click", function(e) {
  const wathProduct=new Ui();
  wathProduct.delProduct(e.target);
});
class Product {
  constructor(name,price,year){
    this.name=name,
    this.price=price,
    this.year=year
  }
}
class Ui{
  addProduct(product){
    const products=document.createElement("div");
    products.innerHTML=`
      <div>
      <ul>
        <li>Nombre : ${product.name}
        </li>
        <li>Precio : ${product.price}
        </li>
        <li>Año : ${product.year}
        </li>
      </ul>
      <button name='del'>Eliminar</button>
      </div>
    `;
    productList.appendChild(products);
    this.resetForm();
  }
  resetForm(){
    document.getElementById("formProduct").reset();
  }
  delProduct(product){
    if(product.name==="del"){
      product.parentElement.remove();
    }
  }
  showMsg(msg,clss){
    const boxAlert= document.createElement("div");
    boxAlert.className="alert "+clss;
    boxAlert.appendChild(document.createTextNode(msg));
    alertas.appendChild(boxAlert);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
//dom event