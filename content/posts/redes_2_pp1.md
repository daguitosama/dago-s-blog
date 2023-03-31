---
draft: false
title: Redes 2 PP1
description: Objetivos
is_feedable: true
uuid: 7f0821d9-4e65-46c4-996a-fe4a275477bc
date: Fri Mar 31 10:10:02 UTC 2023
---

# Redes 2 PP1

::date_and_tags
---
date: "Mar 31, 2023"
tags: []
---
::



## OSI & TCP/IP
![Diagrama de las capas](/img/osi-and-tcp-ip.png)

## Protocolos de la capa aplicación
Un protocolo de la capa de aplicación define cómo los procesos de una aplicación, que se ejecutan en distintos sistemas terminales, se pasan los mensajes entre sí.
- Los tipos de mensajes intercambiados; por ejemplo, mensajes de solicitud y mensajes de respuesta.
- La sintaxis de los diversos tipos de mensajes, es decir, los campos de los que consta el mensaje y cómo se delimitan esos campos.
- Las reglas para determinar cuándo y cómo un proceso envía mensajes y responde a los mismos.
- Algunos de ellos son 
  - HTTP 
  - FTP 
  - SMTP

## Tipos de comunicaciones
La arquitectura cliente-servidor y la arquitectura P2P.

## Puertos conocidos
Generalmente se encuentran hasta el 1024, siendo algunos de ellos son:
- 80 HTTP
- 443 HTTPS
- 22 SSH
- 25 SMTP

## DNS
### Caracterizar
- Cada equipo conectado a Internet, dispone de una dirección IP y de un nombre perteneciente a un dominio.
- Los servidores DNS están dispuestos jerárquicamente de forma que cuando nuestro servidor más inmediato no puede atender nuestra petición, éste la traslada al DNS superior.
- Los clientes DNS van a constituir las aplicaciones que son ejecutadas por los usuarios y que requieren de una consulta para resolver nombres o direcciones de internet.
- La situación más común es que se devuelvan direcciones IP ya que para establecer comunicación con otras estaciones que ofrecen servicios (correo, jabber, ftp, etc) es necesario conocer su identificador.

#### Propósitos 
- Resolución de nombres, dado el nombre completo de un host, obtener su dirección IP  
- Resolución inversa de direcciones: Es el mecanismo inverso al anterior. Consiste en, dada una dirección IP, obtener el nombre asociado a la misma.
- Resolución de servidores de correo: Dado un nombre de dominio (por ejemplo gmail.com) obtener el servidor a través del cual debe realizarse la entrega del correo electrónico

### Componentes
#### Servidor DNS
- Un servidor DNS es una aplicación servidora que averigua la IP de un PC a partir de su nombre.
- No existe una base de datos única donde se almacenan todas las IPs existentes en el mundo, sino que cada servidor almacena todas las direcciones IP y todos los nombres de los PCs pertenecientes a su dominio.
- Formando una base de datos distribuida que sostiene una jerarquía con estructura de árbol.

#### CLIENTES DNS
- Los clientes DNS van a constituir las aplicaciones que son ejecutadas por los usuarios y que requieren de una consulta para resolver nombres o direcciones de internet.
- La situación más común es que se devuelvan direcciones IP ya que para establecer comunicación con otras estaciones que ofrecen servicios (correo, jabber, ftp, etc) es necesario conocer su identificador.

### DOMINIO y estructura 
Dominio: nombre de dos o tres letras que se utiliza para indicar un país o región, o el tipo de organización.

Existen varios niveles en los dominios:
- Dominio de nivel superior (TLD): Nombre de dos o tres letras que se utiliza para indicar un país, una región o el tipo de organización (.com, .io, .net).
- Dominio de segundo nivel: Nombre de longitud variable y registrado, que un individuo u organización utiliza en Internet (foo.com, bar.net, baz.io).

#### SUBDOMINIOS
Nombres adicionales que puede crear una organización derivados del nombre de dominio registrado de segundo nivel. Incluyen los nombres agregados para desarrollar el árbol de nombres de DNS en una organización y que la dividen en departamentos o ubicaciones geográficas. Por ejemplo dado el dominio foo.com, puede tomarse **www**.foo.com para la web, **api**.foo.com para el API, **store**.foo.com para la tienda, etc. Cada etiqueta a la izquierda especifica una subdivisión o subdominio, esa etiqueta suele expresar el hostname.

#### EL FQDN
Terminan en un punto aunque no se pone: **web.labdns.cu.**

#### TIPOS DE CONSULTA
- **Iterativa**: El cliente solicita al servidor la mejor referencia que tenga respecto a un nombre de dominio. El servidor le responde al cliente con la información que tiene en memoria, no la busca en otros servidores.
- **Recursiva**: el cliente le solicita al servidor la respuesta final sobre un nombre de dominio. El servidor debe buscar la información solicitada en otros servidores, si este no la tiene.

### DNS AUTORITATIVO
- Un servidor autoritativo responde con información que obtiene de sus archivos de zona.
-  Un servidor autoritativo tiene una copia completa de la zona para la cual es autoritativo.
-  Un servidor autoritativo realiza un simple proceso de búsqueda en las zonas configuradas y ofrece una respuesta en caso de encontrar la información.

### TIPOS DE SERVIDORES DNS
- **Primarios** o maestros: Guardan los datos de un espacio de nombres en sus ficheros.
- **Secundarios** o esclavos: Obtienen los datos de los servidores primarios a través de una transferencia de zona.
  - Aligera la carga en la red y es capaz de suplantar al primario en caso de fallas.
- **Caching-only** (locales o caché): Funcionan con el mismo software, pero no es un servidor de autoridad. Cuando se les realiza una consulta, estos a su vez consultan a otros servidores DNS, almacenando la respuesta en su base de datos para atender peticiones en el futuro.
- **Forwarding** (de reenvío). Reenvía las peticiones a una lista de servidores de nombres.

### TIPOS DE REGISTROS
- **A** = Address – (dirección) Este registro se usa para traducir nombres de servidores de alojamiento a direcciones IPv4.
- **CNAME** = Canonical Name – (nombre canónico) Se usa para crear nombres de servidores de alojamiento adicionales, o alias, para los servidores de alojamiento de un dominio. Es usado cuando se están corriendo múltiples servicios (como FTP y WWW) en un mismo equipo con una sola dirección IP
- **PTR** = Pointer – (indicador) También conocido como 'registro inverso', funciona a la inversa del registro A, traduciendo IPs en nombres de dominio. Se usa en el archivo de configuración de la zona DNS inversa.
- **SOA** = Start of authority – (Autoridad de la zona) Proporciona información sobre el servidor DNS primario de la zona. Indica que este servidor DNS es la mejor fuente de información para los datos del dominio.
- **NS** = Name Server – (Servidor de Nombres) Define la asociación que existe entre un nombre de dominio y los servidores de nombres que almacenan la información de dicho dominio. Cada dominio se puede asociar a una cantidad cualquiera de servidores de nombres.
- **MX** = Mail Exchange – (registro de intercambio de correo) Asocia un nombre de dominio a una lista de servidores de intercambio de correo para ese dominio. Tiene un balanceo de carga y prioridad para el uso de uno o más servicios de correo.

### BIND (BERKELEY INTERNET NAME DOMAIN)
BIND es el servidor de DNS más comúnmente usado en Internet, especialmente en sistemas Unix, en los cuales es un Estándar de facto.

El servidor DNS BIND admite tres modos de funcionamiento:
- Servidor DNS maestro
- Servidor DNS esclavo
- Servidor de Reenvío DNS

`named.conf` es el archivo de configuración principal de BIND.