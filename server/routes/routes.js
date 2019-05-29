module.exports = (app) => {

   app.get('/', (req, res, next) => {
      res.render('home');
   });

   app.get('/catagories', (req, res, next) => {
      res.render('catagories-post');
   });

   app.get('/single-post', (req, res, next) => {
      res.render('single-post');
   });

   app.get('/about', (req, res, next) => {
      res.render('about');
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });

};