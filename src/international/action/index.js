export const SEARCHPRODUCTS = "SEARCHPRODUCTS";
export function searchProducts (kw){
	return{
		type:SEARCHPRODUCTS,
		kw:kw
	}
}
