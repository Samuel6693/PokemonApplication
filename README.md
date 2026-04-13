# Pokedex Explorer

A portfolio-focused React project built on top of the PokeAPI. The app lets users browse the original 151 Pokemon, narrow the list with search, and view a polished details card with artwork, types, abilities, height, weight, and base stats.

## Overview

This project started as a school assignment and was then improved to feel more like a finished product. Instead of only meeting the original brief, I focused on making the UI cleaner, the code structure easier to understand, and the experience more usable for someone seeing the app for the first time.

## Features

- Browse the original 151 Pokemon from the Kanto generation
- Search and filter the dropdown list in alphabetical order
- View detailed Pokemon information in a polished card layout
- See loading, error, and empty states for a more realistic UX
- Use type-specific badges for clearer visual scanning
- Benefit from in-memory caching for previously fetched Pokemon details

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- PokeAPI

## Project Structure

```text
src/
  api/
    pokemon.js
  hooks/
    usePokemonList.js
  Components/
    Pokemon.jsx
    PokemonApplication.jsx
```

## What I Improved

- Redesigned the app so it feels more like a portfolio piece than a classroom exercise
- Replaced the old single-path selection flow with search plus dropdown browsing
- Added better spacing, colors, hover states, and mobile-friendly layout behavior
- Moved API logic into a dedicated `api/` file
- Moved list-fetching state into a reusable custom hook
- Added caching for Pokemon detail requests to avoid unnecessary repeat fetches

## Running Locally

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## API

Data is fetched from the [PokeAPI](https://pokeapi.co/), using the Pokemon endpoint for the original 151 Pokemon.


