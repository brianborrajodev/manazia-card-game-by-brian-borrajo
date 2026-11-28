# Manazia

Manazia es un juego de cartas **1 contra 1** inspirado en los juegos de cartas digitales como *Hearthstone*. Cada jugador construye su estrategia con un mazo y trata de reducir a cero la vida del personaje central de su oponente.

## Reglas de la partida

### Preparación

- Cada jugador comienza con un mazo de **40 cartas**.
- Al inicio, cada jugador recibe **3 cartas aleatorias**.
- Cada jugador dispone de **30 segundos** para revisar su mano inicial y decidir si descarta una carta. Si descarta una, recibe una carta nueva; al terminar, las **3 cartas que conserva** forman su mano inicial.
- Cada personaje central comienza con **30 puntos de vida**.

### Turnos

- El primer jugador se elige **aleatoriamente**.
- Durante toda la partida, cada jugador tiene **1 minuto por turno** para realizar sus jugadas.

### Mazo agotado

Cuando un jugador se queda sin cartas en su mazo, empieza a perder **1 punto de vida** cada vez que le corresponda robar y no pueda hacerlo. Esta pérdida de vida se acumula de uno en uno.

## Objetivo

Gana quien reduzca a **0 los puntos de vida** del personaje central del oponente.

## Desarrollo

La aplicación está construida con React, TypeScript y Vite. Para instalar las dependencias y ejecutar el entorno de desarrollo:

```bash
npm install
npm run dev
```

Para generar una compilación de producción:

```bash
npm run build
```
