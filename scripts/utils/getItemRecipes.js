// import spells from '../DB/profession.json'
console.log('formatitemrecipe')

const professionNames = {
  "0": "UNKNOWN",
  "1": "firstaid",
  "2": "blacksmithing",
  "3": "leatherworking",
  "4": "alchemy",
  "5": "herbalism",
  "6": "cooking",
  "7": "mining",
  "8": "tailoring",
  "9": "engineering",
  "10": "enchanting",
  "11": "fishing",
  "12": "skinning",
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