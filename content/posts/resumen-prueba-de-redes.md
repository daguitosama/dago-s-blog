---
draft: false
title: Resumen de la prueba de redes
description: El resumen
is_feedable: false
uuid: 7f0821d9-4e65-46c4-996a-fe4a275477b6
date: Thu Dec  8 17:06:40 CST 2022
head : 
    meta: 
        - property: 'og:title'
          content: "Resumen de la prueba de redes"
        - property: 'og:description'
          content: 'El resumen'
        - property: 'og:image'
          content: 'https://dago-s-blog.pages.dev/img/social.jpg'
        - property: 'og:site_name'
          content: "Dago's Blog"
        - property: 'twitter:card'
          content: 'summary_large_image'
        - property: 'twitter:title'
          content: "Resumen de la prueba de redes"
        - property: 'twitter:image'
          content: 'https://dago-s-blog.pages.dev/img/social.jpg'

---

# Resumen de la prueba de redes

::date_and_tags
---
date: "Thu Dec  8 17:06:40 CST 2022"
tags: ['redes']
---
::


## Objetivos 

- Desarrollar algoritmos de enrutamiento basados en problemas planteados, algoritmo estado de enlace y vector distancia.
- Caracterizar el protocolo RIP y OSPF.
- Configurar de manera básica equipamiento de red Cisco.
- Configurar Vlan en equipamiento de red Cisco, switches y routers.


## Vlan
Vlan funcionan a nivel logico, no físico, modelo nivel 2 modelo OSI
Por defecto todos los puertos estan el la Vlan 1
Vlan estandares son del 2 al 99

Conexión 
Same level cross over
Different level discontinuo


### Packet Tracert CLI
Configuración tiene 3 modos:
- El básico 
- El privilegiado
- El modo configuración


#### Como cambiar de modos
Basico (modo por defecto) a Privilegiado:
```bash
$ enable
```
Privilegiado a configuracion:
```bash
$ configure terminal
```
Como regresar al modo anterior (salir)
```bash
$ exit
```

#### Definir una vlan
```bash
Switch> enable
Switch# configure terminal 
Switch(config)# vlan 20
Switch(config-vlan)# name sala
# save
Switch(config-vlan)# do write
```

#### Addicionar interfaces en rango
```bash
Switch(config)# int range Fa0/2 - Fa0/12
Switch(config-if-range)# switchport access vlan 20
Switch(config-if-range)# do write
```

#### Cambiar configuración de la interfaz
```bash
Switch(config-if-range)# int Fa0/10
Switch(config-if)# speed auto
Switch(config-if)# duplex full
Switch(config-if)# duplex half 
```



#### Ver vlan
```bash
$ show vlan
$ show 
```



#### Ver config  (modo privilegiado)
```bash
Switch>enable
Switch#show running-config 
```

#### Asignar Ip a una interfaz
```bash
Router> enable
Router# configure terminal
Router(config)# interface GigabitEthernet 0/0
Router(config-if)# ip address 192.168.4.1 255.255.255.0
# saves changes
Router(config-if)# end 

```


#### Salvar
```bash
$ do write 
```
 



## Protocolos

| Protocolo                  | RIP                  | OSPF             |
| -------------------------- | -------------------- | ---------------- |
| Algoritmo                  | Vector distancia     | Estado de enlace |
| Como actualiza los estados | Mediante los vecinos | Ruta mínima      |



###  RIP

### OSPF
