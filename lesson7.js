class Car{
	
	
	constructor(n,c,p){
		
		this.price=p;
		this.color=c;
		this.name=n;
	}
	setPrice(p){
		if(p>0 && p<100000)
			this.price=p;
		 else
		 	alert("Invalid price...");
	}
	getPrice(){
		return this.price;
	}
	setName(n){
		
			this.name=n;
		 
	}
	getName(){
		return this.name;
	}
}

class Renage extends Car{
	constructor(n,p){
		super(n,p);
	}
	info(){
		document.write("hello");
	}
	
}
	//var car=new Car("Range Rover","black",30000);
	var car2=new Car();
	car2.setPrice(20000);
	car2.setName("Range Rover");
	//car2.
	//document.write(car.name);
	document.write(car2.price+"<br>");
	document.write(car2.getName()+"<br>");
	var car3 =new Renage("Range Rover",30000);
	document.write(car3.name);
  var studentJason='[{"name":"ibtehal","collg":"fcit"},{"name":"Bushra","collg":"fcit2"}]';
//  document.write(studentJason);
  var stuArray=JSON.parse(studentJason);
  stuArray.forEach(function(value){
	  document.write(value["name"]+"  "+value["collg"]+"<br/>");
  });
