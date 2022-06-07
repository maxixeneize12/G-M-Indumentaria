function calculo(cantidad,precio,inputtext,totaltext){
	
	/* Parametros:
	cantidad - número de unidades del producto
	precio - precio del producto*/
	
	/*calculo del subtotal*/
	subtotal = precio*cantidad;
	inputtext.value=subtotal;
	
	/*calculo del total - el eval. sinceramente me lo explico un amigo. es para traer el valor de un texto*/

	total = eval(totaltext.value);
	totaltext.value = total + subtotal;
}