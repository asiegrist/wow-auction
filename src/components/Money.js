const getStyle = (material) => ({
  paddingRight: 15,
  marginRight: 5,
  background: `url(/icon/money-${material}.gif) no-repeat right center`,
})

const Money = ({ value }) => {
  if (!value) {
    return null;
  }

  const abs = Math.abs(value)
  const gold = Math.floor(abs / 10000)
  const silver = Math.floor(abs / 100) - 100 * gold
  const copper = Math.floor(abs) - 10000 * gold - 100 * silver

  console.log('gold', !!gold)
  const shouldDisplaySilver = !!silver || (!silver && !!gold)

  return <>
    {value < 0 && <span>-</span>}
    {!!gold && <span style={getStyle('gold')}>{gold}</span>}
    {shouldDisplaySilver && <span style={getStyle('silver')}>{silver}</span>}
    <span style={getStyle('copper')}>{copper}</span>
  </>
}

export default Money