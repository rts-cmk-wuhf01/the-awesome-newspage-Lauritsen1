module.exports = (app) => {

   app.get('/', (req, res, next) => {
      res.render('home');
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });

};