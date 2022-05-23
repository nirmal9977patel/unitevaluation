//store the products array in localstorage as "products"

function creatobject(t,d,p,m){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=m;
}

let p1= new creatobject("t-srit","for_man",2334,"https://picsum.photos/200/300?random=1");
console.log(p1);

localStorage.setItem("type","t-srit");
