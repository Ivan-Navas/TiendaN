import axios from "axios";

const allProducts = async (state) => {
  const peticion = await axios.get("https://rickandmortyapi.com/api/character");
  state(peticion.data.results);
};

const oneProduct = async (id, state) => {
  const peticion = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  state(peticion.data);
};

const separador = (numero) => {
  let parte = numero.toString().split(".");
  parte[0] = parte[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parte.join(".");
};

export { allProducts, oneProduct, separador };
