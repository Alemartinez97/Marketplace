const axios = require("axios");
require("dotenv").config();
var listItems = [];
var categories = [];
var itemResp;
var item;

const orderCategory = async (id_category) => {
  const body = await axios.get(
    `https://api.mercadolibre.com/categories/${id_category}`
  );
  return categories.push(body.data.name);
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
        decimals: parseFloat(e.price),
      },
      picture: e.thumbnail,
      condition: e.condition,
      free_shipping: e.shipping.free_shipping,
      address: e.address.state_name,
    };
    orderCategory(e.category_id);
    if (index < 4) {
      listItems.push(items);
    }
  });
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
const orderItem = async (body, description) => {
  item = {
    author: {
      name: "String",
      lastname: "String",
    },
    item: {
      id: body.id,
      title: body.title,
      price: {
        currency: body.currency_id,
        amount: body.base_price,
        decimals: body.decimals, //consultar duda
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
exports.items = async (req, res) => {
  try {
    const { query } = req.query;
    const body = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=:${query}`
    );
    await orderItems(body);
    res.status(200).send(itemResp);
  } catch (error) {
    console.error(error);
    res.status(400).send({ mensaje: "customer error" });
  }
};
exports.item = async (req, res) => {
  try {
    const id = req.params.id;
    const body = await axios.get(
      `https://api.mercadolibre.com/items?ids=${id}`
    );
    const bodyDescription = await axios.get(
      `https://api.mercadolibre.com/items?ids=${id}/description`
    );
    await orderItem(body.data[0].body, bodyDescription.data[0].body.plain_text);
    res.status(200).send(item);
  } catch (error) {
    console.error(error);
    res.status(400).send({ mensaje: "customer error" });
  }
};
