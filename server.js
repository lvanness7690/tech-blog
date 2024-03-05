const express = require('express');
const session = require('express-session');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const userRoutes = require('./controllers/userController');
const postRoutes = require('./controllers/postController');
const commentRoutes = require('./controllers/commentController');
const sessionConfig = require('./config/session');
const exphbs = require('express-handlebars');
const { User, Post, Comment } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize express-handlebars with default layout set to 'main'
app.engine('handlebars', exphbs.create({ defaultLayout: 'main' }).engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  ...sessionConfig,
  store: new SequelizeStore({
    db: sequelize
  })
}));

// Define routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

// Homepage route
app.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [
                { 
                    model: User, 
                    as: 'user', 
                    attributes: ['username']
                },
                { 
                    model: Comment,
                    as: 'comments',
                    include: [
                        { 
                            model: User, 
                            as: 'user', 
                            attributes: ['username']
                        }
                    ]
                }
            ]
        });
        res.render('index', { 
            loggedIn: req.session.loggedIn,
            posts: posts.map(post => post.get({ plain: true }))
        });
    } catch (err) {
        console.error('Error fetching posts:', err);
        res.status(500).send('Server error');
    }
});

// Signup route
app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body; // Add email here
        const newUser = await User.create({ username, email, password }); // Add email here
        req.session.loggedIn = true;
        req.session.userId = newUser.id;
        res.redirect('/dashboard');
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).send('Error signing up');
    }
});

// Login page route
app.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
    } else {
        res.render('login');
    }
});

// Signup page route
app.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
    } else {
        res.render('signup');
    }
});

// Dashboard route
app.get('/dashboard', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            const userPosts = await Post.findAll({
                where: { userId: req.session.userId },
                include: [
                    { 
                        model: Comment,
                        as: 'comments',
                        include: [
                            { 
                                model: User, 
                                as: 'user', 
                                attributes: ['username']
                            }
                        ]
                    }
                ]
            });
            res.render('dashboard', { 
                posts: userPosts.map(post => post.get({ plain: true }))
            });
        } catch (err) {
            console.error('Error fetching user posts:', err);
            res.status(500).send('Server error');
        }
    }
});

// Route to display form to create a new post
app.get('/dashboard/new', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        res.render('new-post');
    }
});

// Route to display form to edit an existing post
app.get('/dashboard/edit/:id', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            const post = await Post.findByPk(req.params.id, {
                include: [
                    { 
                        model: Comment,
                        as: 'comments',
                        include: [
                            { 
                                model: User, 
                                as: 'user', 
                                attributes: ['username']
                            }
                        ]
                    }
                ]
            });
            if (post) {
                res.render('edit-post', { post: post.get({ plain: true }) });
            } else {
                res.status(404).send('Post not found');
            }
        } catch (err) {
            console.error('Error fetching post by ID:', err);
            res.status(500).send('Server error');
        }
    }
});

// Sync Sequelize with the database and start the server
sequelize.sync({ force: false }).then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
