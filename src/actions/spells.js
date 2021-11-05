/* ---  SPELLS ACTIONS --- */

/* Action Types */
export const GET_SPELLS_DETAILS = 'GET_SPELLS_DETAILS';
export const SAVE_SPELLS_DETAILS = 'SAVE_SPELLS_DETAILS';

/* Action creators */
export const getSpellsDetails = () => ({
  type: GET_SPELLS_DETAILS,
});

export const saveSpellsDetails = (spellsDetails) => ({
  type: SAVE_SPELLS_DETAILS,
  spellsDetails,
});
