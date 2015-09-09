export default (state=0 ,action)=>{
	switch(action.type){
		case "++":
			console.info("我是reducer 加加");
			return ++state;
		case "--":
			return --state;
		default:
			return state;
	}
} 
