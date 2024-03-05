const express = require('express');
const session = require('express-session');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const userRoutes = require('./controllers/userController');
const postRoutes = require('./controllers/postController');
const commentRoutes = require('./controllers/commentController'); // Assuming you have this controller
const sessionConfig = require('./config/session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers'); // Assuming you have handlebars helpers

const app = express();

// Initialize express-handlebars with helpers if needed
const hbs = exphbs.create({ defaultLayout: 'main', helpers });

// Set handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Session management
app.use(session({
  ...sessionConfig,
  store: new SequelizeStore({
    db: sequelize
  })
}));

// Define routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes); // Assuming you have this route

// View routes
app.get('/', async (req, res) => {
    // Fetch posts and pass them to the template
    const posts = await fetchPosts(); // You will need to implement fetchPosts
    res.render('index', { 
        loggedIn: req.session.loggedIn,
        posts 
    });
});

app.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
    } else {
        res.render('login');
    }
});

app.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
    } else {
        res.render('signup');
    }
});

app.get('/dashboard', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        // Fetch the posts by the logged-in user
        const userPosts = await fetchUserPosts(req.session.userId); // You will need to implement fetchUserPosts
        res.render('dashboard', { 
            posts: userPosts 
        });
    }
});

// Route to handle new post creation
app.get('/dashboard/new', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        res.render('new-post'); // You will need to create a new-post.handlebars
    }
});

// Route to handle editing an existing post
app.get('/dashboard/edit/:id', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        const post = await fetchPostById(req.params.id); // You will need to implement fetchPostById
        res.render('edit-post', { post }); // You will need to create an edit-post.handlebars
    }
});

// Sync Sequelize with the database
sequelize.sync({ force: false }).then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
