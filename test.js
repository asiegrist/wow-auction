var lua_script = (function() {
  var tmp;
  var G = lua_newtable2(lua_core);
  for (var i in lua_libs) {
    G.str[i] = lua_newtable2(lua_libs[i]);
  }
  G.str['arg'] = lua_newtable();
  G.str['_G'] = G;
  G.str['module'] = function (name) {
    lua_createmodule(G, name, slice(arguments, 1));
  };
  G.str['require'] = function (name) {
    lua_require(G, name);
  };
  G.str['package'].str['seeall'] = function (module) {
    if (!module.metatable) {
      module.metatable = lua_newtable();
    }
    module.metatable.str['__index'] = G;
  };
  {
    G.str['AucAdvancedStatSimpleData'] = lua_newtable([], "Version", 3, "RealmData", lua_newtable([], "Finkle", lua_newtable([], "dailypush", 1578278279, "daily", lua_newtable([], "937", "0@196324;2;79900", "3825", "0@18995;10;1899;6", "13446", "0@330857;47;5900;15"), "means", lua_newtable([], "14559", "0@30;41;1809.7;2001;2165.6;1593.9", "2988", "0@29;42;4137.9;3741.4;3367.8;4201.7", "4061", "0@16;16;17268.4;17576.6;21333.5;19472.8"))));
  };
  return [G];
})()[0];
