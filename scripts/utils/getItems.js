console.log('formatItem')

// More info : AtlasLootClassic\Core\ItemInfo.lua:11
const classMap = {
  "0": "Consumable",
 "1": "Container",
 "2": "Weapon",
 "4": "Armor",
 "5": "Reagent",
 "6": "Projectile",
 "7": "Trade Goods",
 "9": "Recipe",
 "11": "Quiver",
 "12": "Quest",
 "13": "Key",
 "15": "Miscellaneous",
}

const mapper = (items) => {
  const keys = Object.keys(items)

  return keys.reduce((itemRef, itemId) => {
    const item = items[itemId]
    const [buy, itemClass, quality, stack, additional, usedby, quantity, limited, merchantlist, soulbind, specialbind] = item[0].split(':')

    itemRef[itemId] = {
      id: itemId,
      name: item[1],
      itemClass: classMap[itemClass],
      buy, quality, stack, additional, usedby, quantity, limited, merchantlist, soulbind, specialbind
    }

    return itemRef
  }, {})
}

module.exports = mapper