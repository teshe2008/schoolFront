
export function can(ability) {
  // Check if the user's abilities include the provided ability
  const abilities = (localStorage.getItem("abilities")).split(",");
  return abilities.includes(ability);
}

export function canAny(abilities) {
  // Check if the user's abilities include any of the provided abilities
  const userAbilities = (localStorage.getItem("abilities")).split(",");
  return abilities.some((ability) => userAbilities.includes(ability));
}
