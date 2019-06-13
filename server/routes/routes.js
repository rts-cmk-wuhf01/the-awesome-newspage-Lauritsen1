const mysql = require('../config/mysql');

module.exports = (app) => {

   app.get('/', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute('SELECT * FROM categories');
      db.end();

      res.render('home', {
         "categories": categories
      });
   });

   app.get('/catagories', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute('SELECT * FROM categories');
      db.end();

      res.render('categories-post', {
         "categories": categories
      });
   });

   app.get('/single-post', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute('SELECT * FROM categories');
      db.end();

      res.render('single-post', {
         "categories": categories
      });
   });

   app.get('/about', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute('SELECT * FROM categories');
      db.end();

      res.render('about', {
         "categories": categories
      });
   });

   app.get('/contact', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute('SELECT * FROM categories');
      db.end();

      res.render('contact', {
         "categories": categories
      });
   });

};