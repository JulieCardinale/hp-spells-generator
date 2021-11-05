/* ------------- USEFULL FUNCTIONS --------------- */

/*
* Get a random Number between "0" and a max value
* @param : max value
*/
export const getRandomNumber= (max) => Math.floor(Math.random() * Math.floor(max + 1)); 

/*
* Capitalize first letter
* @params: String
*/
export const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();