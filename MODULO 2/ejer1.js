/*Juguemos a la floristería. Declara seis variables, recordando nombrarlas según su propósito:

- el precio de una sola rosa (8) y el número de rosas que tienes (70)
- el precio de un solo lirio (10) y el número de lirios que tienes (50)
- el precio de un solo tulipán (2) y la cantidad de tulipanes que tienes (120)

Ahora declara tres variables, una para cada una de las rosas, lirios y tulipanes que tienes, en las que 
colocas su precio total. Inserta los valores correspondientes en las variables utilizando las variables 
declaradas en el paso anterior. Finalmente, declara una variable en la que almacenes el precio de todas 
tus flores (nuevamente, usa las variables anteriores para la inicialización). Muestra toda la información 
del inventario en la consola de la siguiente forma:

Rosa: precio unitario: 8 , cantidad: 70 , valor: 560
Lirio: precio unitario: 10 , cantidad: 50 , valor: 500
Tulipán: precio unitario: 2 , cantidad: 120 , valor: 240
Total:  1300 */
let r=8, l=10, t=2,numRosas=70,numLirios=50, numTulipanes=120,total=0
console.log('Rosa: precio unitario: '+r+', cantidad:'+numRosas+', valor: '+r*numRosas);
console.log('Lirio: precio unitario: '+l+', cantidad:'+numLirios+', valor: '+l*numLirios);
console.log('Tulipán: precio unitario: '+t+', cantidad:'+numTulipanes+', valor: '+t*numTulipanes);
console.log('Total: '+(r*numRosas+l*numLirios+t*numTulipanes));



