// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  firebase: {
    apiKey: 'AIzaSyCO3l-VFDXiR7wGpPk0zirxCwHuwVePBak',
    authDomain: 'cota-facil.firebaseapp.com',
    databaseURL: 'https://cota-facil.firebaseio.com',
    projectId: 'cota-facil',
    storageBucket: 'cota-facil.appspot.com',
    messagingSenderId: '153896417875',
    appId: '1:153896417875:web:e47bd07a97d5753bade4a6',
    measurementId: 'G-4S07MB2WL1'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
