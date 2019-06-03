module.exports = (app) => {

   let headings = [
      {
         "name": "FINANCE"
      },
      {
         "name": "POLITICS"
      },
      {
         "name": "HEALTH"
      },
      {
         "name": "FINANCE"
      },
      {
         "name": "TRAVEL"
      },
      {
         "name": "POLITICS"
      }
   ]

   app.get('/', (req, res, next) => {
      res.render('home', {
         "titles": headings
      });
   });

   app.get('/catagories', (req, res, next) => {
      res.render('catagories-post', {
         "titles": headings
      });
   });

   app.get('/single-post', (req, res, next) => {
      res.render('single-post', {
         "titles": headings
      });
   });

   app.get('/about', (req, res, next) => {
      res.render('about', {
         "titles": headings
      });
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact', {
         "titles": headings
      });
   });

};