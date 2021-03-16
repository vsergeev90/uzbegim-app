import uzbegimService from "./uzbegim-service";

const uzbegim = new uzbegimService();

export default class cart {
  getDishInfo = async (chosenSlug) => {
    try {
      const data = await uzbegim.getInfo(chosenSlug);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
}
