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
- Enrrutmiento
- Elementos de configuration basica de euipamiento
- VLAN numeradas


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
$ vlan 10 # 10 es el numero de la vlan
$ name foo
```

#### Addicionar interfaces en rango
```bash
$ interface range fastEthernet 0/2 - fastEthernet 0/10
$ switchport access vlan 10
```

#### Cambiar configuración de la interfaz
```bash
$ interface fastEthernet 0/2

$ speed 100

$ duplex full 
# o 
$ duplex half
```

#### Salvar
```bash
$ do write 
```

#### Ver config from modo privilegiado
```bash
$ show running-config
```

#### Ver vlan
```bash
$ show vlan
$ show 
```
 






