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

export default router;
