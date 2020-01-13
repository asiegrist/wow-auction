import items from '../../../data/DB/item.json';

export default (req, res) => {
  // console.log(luaJson)
  // res.status(200)
    res.status(200).json(items);
};