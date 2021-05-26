import express from 'express';
import { getDb } from '../database';

const router = express.Router();

// GET /actions
router.get('/', (_req, res) => {
  getDb().all(
    `SELECT
      Actions.action_ID AS id,
      Actions.title as title,
      Actions.description as description,
      TOTAL(Transactions.amount) AS progress,
      Actions.target AS target,
      Actions.image AS imageUrl
    FROM
      Actions
    LEFT JOIN Transactions ON Transactions.action_ID = Actions.action_ID
    GROUP BY
      Actions.action_ID`,
    [],
    (error: { message: any; }, row: any) => {
      if (error) {
        return console.error(error.message);
      }

      res.send(JSON.stringify(row));
    }
  );
});

// GET /actions/action?id={id}
router.get('/action', (req, res) => {
  const { id } = req.query;

  getDb().each(
    `SELECT
      Actions.action_ID AS id,
      Actions.title AS title,
      TOTAL(Transactions.amount) AS progress,
      Actions.target AS target,
      Actions.description AS description,
      Actions.image AS imageUrl
    FROM
      Actions
    LEFT JOIN Transactions ON Transactions.action_ID = Actions.action_ID
    WHERE
      Actions.action_ID = ?
    GROUP BY
      Actions.action_ID`,
    [id],
    (error: { message: any; }, row: any) => {
      if (error) {
        return console.log(error.message);
      }

      res.send(JSON.stringify(row));
    }
  );
})

// POST /actions/donation
// Body: { actionId, userId, amount }
router.post('/donation', (req, res) => {
  console.log('donatie ontvangen, maar werkt nog niet. TODO');

  res.end();
});

export default router;
