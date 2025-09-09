let products = [ 
    {id:1, name : "milk" , count:100},
     {id:2, name : "orange" , count:100},
      {id:3, name : "butter" , count:100},
];
// them phan tu 
products.push({id:4, name : "tea" , count:100});
console.log(products);
// xoa pha tu id :2
products= products.filter(el => el.id!==2);
 console.log(products);

// cap nhat if:3 count=0

let newproducts = products.find(el=> el.id === 3);
if(products){
    products.count = 0;
}
console.log(products);

//
let resultpro = products.findIndex(el => el.name === "butter") ;
  if(resultpro != -1){
   console.log(`phan tu ban tim kiem la`, products[resultpro] );
}else {
    console.log(" khong co du lieu ban tim kiem");    
}

 

