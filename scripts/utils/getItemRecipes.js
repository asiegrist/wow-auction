// import spells from '../DB/profession.json'
console.log('formatitemrecipe')

const professionNames = {
  "0": "UNKNOWN",
  "1": "First Aid",
  "2": "Blacksmithing",
  "3": "Leatherworking",
  "4": "Alchemy",
  "5": "Herbalism",
  "6": "Cooking",
  "7": "Mining",
  "8": "Tailoring",
  "9": "Engineering",
  "10": "Enchanting",
  "11": "Fishing",
  "12": "Skinning",
  "13": "Rogue: Poisons",
}

const mapper = (spells) => {
  const keys = Object.keys(spells)

  return keys.reduce((recipeRef, spellId) => {
    const spell = spells[spellId]
    const [name, createdItemID, prof, minLvl, lowLvl, highLvl, reagents, reagentsCount, numCreatedItems] = spell

    recipeRef[createdItemID] = {
      id: createdItemID,
      spellId,
      prof: professionNames[prof],
      minLvl, lowLvl, highLvl, reagents, reagentsCount, numCreatedItems, name
    }

    return recipeRef
  }, {})
}

module.exports = mapper