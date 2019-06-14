const mysql = require('../config/mysql');

module.exports = (app) => {

   app.get('/', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute('SELECT * FROM categories');
      let [siteInfo] = await db.execute('SELECT * FROM site_info');
      db.end();

      res.render('home', {
         "categories": categories,
         "siteInfo": siteInfo
      });
   });

   app.get('/catagories', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute('SELECT * FROM categories');
      let [siteInfo] = await db.execute('SELECT * FROM site_info');
      db.end();

      res.render('categories-post', {
         "categories": categories,
         "siteInfo": siteInfo
      });
   });

   app.get('/single-post', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute('SELECT * FROM categories');
      let [siteInfo] = await db.execute('SELECT * FROM site_info');
      db.end();

      res.render('single-post', {
         "categories": categories,
         "siteInfo": siteInfo
      });
   });

   app.get('/about', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute('SELECT * FROM categories');
      let [siteInfo] = await db.execute('SELECT * FROM site_info');
      db.end();

      res.render('about', {
         "categories": categories,
         "siteInfo": siteInfo
      });
   });

   app.get('/contact', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute('SELECT * FROM categories');
      let [siteInfo] = await db.execute('SELECT * FROM site_info');  
      db.end();

      res.render('contact', {
         "categories": categories,
         "siteInfo": siteInfo
      });
   });

};