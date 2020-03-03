## API Rest - Watson Assistant / Integration
![Branch stable](https://img.shields.io/badge/branch-master-blue.svg)
![version](https://img.shields.io/badge/node-v8.x-6BBE50.svg)<br>
Despliegue la API Rest desarrollada con Node para demostrar la integracion con Watson Assistant.
Se utiliza la V2 de la api de watson, ya que es la nueva y mas estable hasta el momento.
<br>
Se utiliza la libreria propuesta por watson ibm:
```bash
npm install ibm-watson@^5.4.0
```
<br>
 Cualquier consulta, pueden comunicarse conmigo, actualmente no hay tanta informacion no oficial.
<br>

## Pre-requisitos
Debes tener creado tu assistente Watson, ya que con ese nos conectaremos 
y necesitamos la informacion de la API que proporciona.
<br>
<br>
Debes tener instalado:
+ git
+ npm
+ node

## Desplegar la API
1. Clonar el repositorio:
```bash
https://github.com/AlexisFabianCarranza/Node-Watson-Integration.git
```
2. Nos posicionamos en la carpeta del proyecto y modificamos 
el archivo .env que contiene la informacion de la api watson.
 Recuerda nunca versionar ni mostrar los datos de la API por seguridad:
```bash
//.env file
//Reemplazar por los valores proporcionados por la api de watson
API_KEY={apikey}
VERSION={version/YYYY-MM-DD}
ASSISTANT_ID={assistantId}
URL={url}
```
3. Abrimos consola y ejecutamos la api:
```bash
npm start
```
## Probar la API
Abrimos un navegador y colocamos la siguiente URL<br>
[http://localhost:3000/conversation/hola](http://localhost:3000/conversation/hola)
<br><br>
**[ Carranza Alexis Fabian ]**