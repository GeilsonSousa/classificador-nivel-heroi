let nome = prompt("Digite o seu nome de Herói:");
let xp = prompt("Digite sua quantidade de XP atual:");
let nivel = "";

if (xp < 1000) {
  nivel = "Madeira";
} else if (xp <= 2000) {
  nivel = "Pedra";
} else if (xp <= 5000) {
  nivel = "Ferro";
} else if (xp <= 7000) {
  nivel = "Diamante";
} else if (xp <= 8000) {
  nivel = "Obsidian";
} else if (xp <= 9000) {
  nivel = "Quase lá";
} else if (xp <= 10000) {
  nivel = "Falta pouco";
} else {
  nivel = "Tudo que dá FULL MASTER BLASTER";
}

alert(`O Herói de nome ${nome} está no nível de ${nivel}`);