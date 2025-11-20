 # RA1-AC12-El conversor rural 🐓🌲
Aquest projecte, desenvolupat amb MakeCode Arcade, simula un senzill sistema d'intercanvi de béns en un entorn rural. El nostre "Conversor Rural" permet als veïns i veïnes del poble calcular les equivalències entre la llenya (com a moneda base) i diversos productes animals i vegetals.

## Objectiu del Projecte

L'objectiu principal és proporcionar una interfície interactiva dins d'Arcade que permeti als usuaris fer intercanvis ràpids basats en un sistema de proporcions predefinit, utilitzant la llenya com a unitat de mesura principal.

## Regles de Conversió 🪵
La llenya (en quilograms) actua com a base de la nostra economia rural. Aquestes són les equivalències definides:

| Material Base (Llenya)  | Producte Intercanviat |
| --------                | -------               |
| 6 kg de llenya          |    1 Gallina          |
| 2 kg de llenya          |  1.5 kg de Patata     |
| 5 kg de llenya          |    1 Cabra            |
| 3 kg de llenya          |   12 Ous de gallina   |
| 12 kg de llenya         |    1 Cavall           |


## Explicació del Codi
El projecte s'estructura al voltant de diverses funcions clau que gestionen la inicialització, el moviment del jugador i la interacció amb els animals.

## 1. Funció inicial (main)
Aquesta funció actua com el punt d'entrada del programa, inicialitzant l'escena del joc.
* Inicialitza les variables globals.
* Crida a la funció show player per col·locar l'usuari a la pantalla.
  
<img width="472" height="236" alt="image" src="https://github.com/user-attachments/assets/ce1d0065-a434-4b5e-a867-06721a71c082" />

## 2. Funció show player
Aquesta funció és responsable de:
* Crear l'Sprite del jugador.
* Configurar el moviment del jugador mitjançant els controls del panell de direcció (el moviment del sprite és gestionat per la funció move mySprite with buttons).
* Crida a la funció show options per carregar els animals intercanviables.
  
<img width="526" height="337" alt="image" src="https://github.com/user-attachments/assets/30d0da3b-6e17-4671-ab37-c3736b2c9928" />

## 3. Funció show options
S'encarrega de generar els diferents sprites que representen els animals i productes que es poden intercanviar (gallina, cabra, patates, etc.) a la pantalla. Aquesta funció estableix les posicions dels elements per a la interacció del jugador.

<img width="496" height="680" alt="image" src="https://github.com/user-attachments/assets/c91551d2-6225-41a3-8355-bcd4ce9107ed" />

## 4. Superposicions
Mitjançant la detecció de superposició (event on overlap), el programa gestiona la lògica de l'intercanvi. Quan l'Sprite del jugador es superposa amb un Sprite d'animal/producte, es desencadena la conversió de valors segons les regles establertes.

<img width="633" height="714" alt="image" src="https://github.com/user-attachments/assets/9fab73c5-72a9-4134-9387-62d3cb211680" />

## Inconvenients i solucions
### 1. Arrodoniment
Problema: En els intercanvis, és comú que el càlcul resulti en nombres decimals (per exemple, 0.75 d'un cavall o 2.3 gallines). No podem tenir "mig cavall" o "dues gallines i mitja" de forma pràctica.
Solució: He utilitzat la funció d'arrodoniment (rounding) per assegurar-nos que els resultats finals dels intercanvis fossin sempre nombres enters (unitats senceres). Això garanteix que l'usuari rebi una quantitat d'animals o productes que existeixen físicament.

<img width="663" height="412" alt="image" src="https://github.com/user-attachments/assets/476da32a-6be6-4a0a-856c-4084833b925d" />

### 2. Valors negatius
Problema: En certes operacions, podria passar que l'usuari introdueixi valors negatius i per tant els càlculs podrien donar quantitats negatives de productes.
Solució: Vaig implementar el valor absolut en els càlculs

<img width="1156" height="265" alt="image" src="https://github.com/user-attachments/assets/742c2ef6-8004-4e22-9a3e-4d5400dbf64f" />

## Funcionament pràctic
https://github.com/user-attachments/assets/09af8749-a18b-4fa2-964c-d9200778029a

