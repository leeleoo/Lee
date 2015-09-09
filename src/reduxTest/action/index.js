export function plusNum(args) {
	console.info("我是加加");
  return {
  	type:'++',
  	args
  }
}
export function reduce(args){
	return {
		type:'--',
		args
	}
}
