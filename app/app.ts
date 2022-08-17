import { NegocicaoController } from "./controllers/negociacao-controller.js";
import { Negociacao } from "./models/negociacao.js";

const controller = new NegocicaoController();
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  controller.adiciona();
});
