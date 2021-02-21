// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  linkCdn: "https://assets.pokemon.com/assets/cms2/img/pokedex/full",
  pokemonKanto: "https://pokeapi.co/api/v2/pokemon/?limit=151",
  pokemonJotho: "https://pokeapi.co/api/v2/pokemon/?limit=100&offset=151",
  pokemonHoenn: "https://pokeapi.co/api/v2/pokemon/?limit=135&offset=251"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
