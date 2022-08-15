# Java (Spring Boot) y Angular

Clonar el repo https://github.com/jorgefprietol/pico-y-placa-springboot-angular-mysql-jfpl/tree/master

# 1. crear base de datos nombreBD: springboot, usuario:root, password:
# 2. ejecutar en la ubicacion pico-y-placa-springboot-angular-mysql-jfpl/backend/target java -jar backend-0.1-SNAPSHOT.jar   
		---> puede probar en postman: 
		post http://localhost:8080/auto con el siguiente payload :
			{
				"placa": "PDI-6863",
				"chasis": "FGBHF67867",
				"color": "ROJO",
				"marca": "KIA",
				"modelo": "RIO",
				"serialmotor": "HFJD12348"
			}
		get http://localhost:8080/auto/query?placa=PDI-6863&fecha=13-09-2022&hora=08:59  (Feriados configurados "23-08-2022,16-08-2022,06-09-2022")
		Ver las siguientes pantallas:
		![alt text](https://github.com/jorgefprietol/pico-y-placa-springboot-angular-mysql-jfpl/blob/master/img/principal-consultaPlaca-crud.jpg?raw=true)
		![Image text](https://github.com/jorgefprietol/pico-y-placa-springboot-angular-mysql-jfpl/blob/master/img/principal-consultaPlaca-crud.jpg?raw=true)
	
  <img src="https://github.com/jorgefprietol/pico-y-placa-springboot-angular-mysql-jfpl/blob/master/img/registro-autos.jpg" width="350" title="hover text">
  <img src="https://github.com/jorgefprietol/pico-y-placa-springboot-angular-mysql-jfpl/blob/master/img/principal-consultaPlaca-crud.jpg" width="350" alt="accessibility text">
    <img src="https://github.com/jorgefprietol/pico-y-placa-springboot-angular-mysql-jfpl/blob/master/img/resultado-fecha-anterior-actual.jpg" width="350" alt="accessibility text">
        <img src="https://github.com/jorgefprietol/pico-y-placa-springboot-angular-mysql-jfpl/blob/master/img/resultado-feriado.jpg" width="350" alt="accessibility text">
	 <img src="https://github.com/jorgefprietol/pico-y-placa-springboot-angular-mysql-jfpl/blob/master/img/resultado-no-circula.jpg" width="350" alt="accessibility text">
	 	 <img src="https://github.com/jorgefprietol/pico-y-placa-springboot-angular-mysql-jfpl/blob/master/img/resultado-no-registrado.jpg" width="350" alt="accessibility text">
		 	 	 <img src="https://github.com/jorgefprietol/pico-y-placa-springboot-angular-mysql-jfpl/blob/master/img/resultado-si-circula-930-1600.jpg" width="350" alt="accessibility text">
</p>
# 3. Ejecutar en la ubicacion pico-y-placa-springboot-angular-mysql-jfpl/frontend npm install, ng build frontend y luego ng serve frontend
		http://localhost:4200/autos/list


# Nota: Recorar que para el despliegue en produccion adicionalmente se deben cambiar las configuraciones de claves y en general por variables y las urls para configurar los cors.
