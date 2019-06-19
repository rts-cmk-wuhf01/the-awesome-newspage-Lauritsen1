const mysql = require('../config/mysql');

module.exports = (app) => {

   app.get('/', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute('SELECT * FROM categories');
      let [siteInfo] = await db.execute('SELECT * FROM site_info');
      let [recentArticles] = await db.execute('SELECT * FROM articles ORDER BY article_postdate');
      db.end();

      res.render('home', {
         "categories": categories,
         "siteInfo": siteInfo,
         "recentArticles": recentArticles
      });
   });

   app.get('/catagories/:category_id', async (req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute('SELECT * FROM categories WHERE category_id = ?', [1]);
      let [siteInfo] = await db.execute('SELECT * FROM site_info');
      db.end();

      res.render('categories-post', {
         "categories": categories[0],
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