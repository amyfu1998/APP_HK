var addclosure =(()=>{

	var counter =0;

	return () =>{

		counter +=1;

		console.log("inner :"+counter);

	}

})();

addclosure();

addclosure();

addclosure();