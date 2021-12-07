import express from 'express';
import { getDb } from '../database';

const router = express.Router();

// GET /shop
router.get('/', (_req, res) => {
  getDb().all(
    `SELECT
      Shop_items.item_ID as id,
      Shop_items.title,
      Shop_items.price,
      Shop_items.description,
      Shop_items.image as imageUrl,
      Stocks.stock,
      Stocks.unlimited
    FROM
      Shop_items
    LEFT JOIN Stocks ON Shop_items.item_ID = Stocks.item_ID
    GROUP BY
      Shop_items.item_ID`,
    [],
    (error: { message: any; }, row: any) => {
      if (error) {
        return console.error(error.message);
      }

      res.send(JSON.stringify(row));
    }
  );
});

// GET /shop/item?id={id}
router.get('/item', (req, res) => {
  const { id } = req.query;

  getDb().each(
    `SELECT
      Shop_items.item_ID as id,
      Shop_items.title,
      Shop_items.price,
      Shop_items.description,
      Shop_items.image as imageUrl,
      Stocks.stock,
      Stocks.unlimited
    FROM
      Shop_items
    LEFT JOIN Stocks ON Shop_items.item_ID = Stocks.item_ID
    WHERE
      Shop_items.item_ID = ?
    GROUP BY
      Shop_items.item_ID`,
    [id],
    (error: { message: any; }, row: any) => {
      if (error) {
        return console.log(error.message);
      }

      res.send(JSON.stringify(row));
    }
  );
});

// POST /shop/purchase
// Body: { itemId, userId, amount }
router.post('/purchase', (req, res) => {
  console.log('aankoop ontvangen, maar werkt nog niet. TODO');
  console.log(req.body);

  res.end();
});

export default router;
