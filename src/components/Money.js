const getStyle = (material) => ({
  paddingRight: 15,
  marginRight: 5,
  background: `url(/icon/money-${material}.gif) no-repeat right center`,
})

const Money = ({ value }) => {
  const gold = Math.floor(value / 10000)
  const silver = Math.floor(value / 100) - 100 * gold
  const copper = Math.floor(value) - 10000 * gold - 100 * silver

  return <span>
    <span style={getStyle('gold')}>{gold}</span>
    <span style={getStyle('silver')}>{silver}</span>
    <span style={getStyle('copper')}>{copper}</span>
  </span>
}

export default Money