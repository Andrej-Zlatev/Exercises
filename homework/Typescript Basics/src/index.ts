interface playerInfo {
  name: String;
  num: Number;
}

const logPlayer = (player: playerInfo) => {
  console.log(player.name, player.num);
};

logPlayer({ name: "Cristiano Ronaldo", num: 7 });
let num = 7;
num = "seven";
