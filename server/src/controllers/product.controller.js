const axios = require("axios");
require("dotenv").config();
const pathMeli = "https://api.mercadolibre.com/";
var listItems = [];
var categories = [];
var itemResp;
var item;
var infoSeller;
//get nickname
const getSellerInfo = async (id) => {
  const body = await axios.get(`${pathMeli}sites/MLA/search?seller_id=${id}`);
  infoSeller = body.data.seller.nickname;
  return infoSeller;
};
//function that will be in charge of giving order to the json
const orderItems = async (body) => {
  listItems = [];
  categories = [];
  await body.data.results.map((e, index) => {
    var items = {
      id: e.id,
      title: e.title,
      price: {
        currency: e.currency_id,
        amount: e.price,
        decimals: e.price.toFixed(2),
      },
      picture: e.thumbnail,
      condition: e.condition,
      free_shipping: e.shipping.free_shipping,
      address: e.address.state_name,
    };
    if (index < 4) {
      listItems.push(items);
    }
  });
  await body.data.filters[0].values[0].path_from_root.map((e) =>
    categories.push(e.name)
  );
  itemResp = {
    author: {
      name: "String",
      lastname: "String",
    },
    categories: categories,
    item: listItems,
  };
  return itemResp;
};
//order item
const orderItem = async (body, description) => {
  await getSellerInfo(body.seller_id);
  item = {
    author: {
      nick_name: infoSeller,
      //name: "String",
      //  lastname: "String",
    },
    item: {
      id: body.id,
      title: body.title,
      price: {
        currency: body.currency_id,
        amount: body.base_price,
        decimals: body.base_price.toFixed(2),
      },
      picture: body.thumbnail,
      condition: body.condition,
      free_shipping: body.shipping.free_shipping,
      description: description,
      sold_quantity: body.sold_quantity,
    },
  };
  return item;
};
//get items
exports.items = async (req, res) => {
  try {
    const { query } = req.query;
    const body = await axios.get(`${pathMeli}sites/MLA/search?q=:${query}`);
    await orderItems(body);
    res.status(200).send(itemResp);
  } catch (error) {
    console.error(error);
    res.status(400).send({ mensaje: "customer error" });
  }
};
//get item
exports.item = async (req, res) => {
  try {
    const id = req.params.id;
    const body = await axios.get(`${pathMeli}items?ids=${id}`);
    const bodyDescription = await axios.get(
      `${pathMeli}items?ids=${id}/description`
    );
    await orderItem(body.data[0].body, bodyDescription.data[0].body.plain_text);
    res.status(200).send(item);
  } catch (error) {
    console.error(error);
    res.status(400).send({ mensaje: "customer error" });
  }
};
