export default class uzbegimService {
  _apiLink = "https://young-caverns-81197.herokuapp.com/api/v1";

  getMenuSorted = async () => {
    try {
      const res = await fetch(`${this._apiLink}/menu/sorted`);
      const data = await res.json();

      return data.data.menu;
    } catch (err) {
      console.log(err);
    }
  };

  getMenu = async () => {
    try {
      const res = await fetch(`${this._apiLink}/menu/`);
      const data = await res.json();

      return data.data.menu;
    } catch (err) {
      console.log(err);
    }
  };

  putOrder = async (data) => {
    try {
      const res = await fetch(`${this._apiLink}/order/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await res.json();
      console.log("Success", JSON.stringify(json));
    } catch (err) {
      console.log(err);
    }
  };

  getInfo = async (slug) => {
    try {
      const res = await fetch(`${this._apiLink}/menu/${slug}`);
      const resData = await res.json();

      return resData.data.dish;
    } catch (err) {
      console.log(err);
    }
  };

  getOrders = async () => {
    try {
      const res = await fetch(`${this._apiLink}/order/`);
      const resData = await res.json();

      return resData.data.orders;
    } catch (err) {
      console.log(err);
    }
  };
}
