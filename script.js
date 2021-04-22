

	

// program for counter increase, decrease and resetting

	let incbtnArray = document.getElementsByClassName("incbtn");
	let getbtn = incbtnArray[0];
	console.log(getbtn);
	
		getbtn.addEventListener('click', function(){
		
		var value = document.getElementById("spanValue").innerHTML;
			console.log(value);

			value ++;
			console.log(value);
	document.getElementById("spanValue").innerHTML = value;


	} )
	
	var currentValue = document.getElementById("spanValue").innerHTML;


		
	// program o decrease the default value or inreased value

		let decbtnArray = document.getElementsByClassName("decbtn");
		let getdecbtn = decbtnArray[currentValue];
		//console.log(getdecbtn);
		
		//console.log("1. Now script file is executing");
		

		getdecbtn.addEventListener('click', function(){
			
			//console.log("2. Now function is executing");
			
			var valueDec = document.getElementById("spanValue").innerHTML;
			//console.log(valueDec);
		
			valueDec--;
			
			//console.log(valueDec);
			
			document.getElementById("spanValue").innerHTML = valueDec;
		
		})
		
	//console.log("3. Now script file is at the end");
		let resetbtnArray = document.getElementsByClassName("resetbtn");
			getresetbtn = resetbtnArray[0];
	
		getresetbtn.addEventListener('click', function(){
		
			var resetValue = document.getElementById("spanValue").innerHTML = 0;
			
				
			})
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	