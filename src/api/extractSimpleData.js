const unpack = (str) => {
  const data = str.split('@')[1]
  return data.split(';').map(data => Math.round(data))
}

export const getDailyData = (data) => {
  const [dayTotal, dayCount, minBuyout, dayAuctions] = unpack(data)
  
  return {
    dayAverage: Math.round(dayTotal / dayCount),
    dayTotal,
    dayCount,
    minBuyout,
    dayAuctions
  }
}

export const getMeansData = (data) => {
  const [seenDays, seenCount, avg3, avg7, avg14, avgmins, auctionsCount] = unpack(data)
  
  return {
    seenDays,
    seenCount,
    avg3,
    avg7,
    avg14,
    avgmins,
    auctionsCount
  }
}