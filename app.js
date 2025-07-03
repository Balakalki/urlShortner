require("dotenv").config();
const express = require("express");
const path = require('path');
const connection = require("./connection");
const root = require("./routes");
const analyticsRouter = require("./routes/analytics");
const userRouter = require('./routes/user')
const urlRouter = require('./routes/url');
const cookieParser = require('cookie-parser');
const { checkforAuthentication, restrictTo } = require("./middleware/userAut");
const adminRouter = require('./routes/admin')



connection(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.error(error);
  });


const port = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkforAuthentication);

app.use("/", root);

app.use('/admin', adminRouter);

app.use('/url', urlRouter);

app.use('/analytics', analyticsRouter);

app.use('/user', userRouter);

app.get('/login',(req, res) =>{
  res.render('login');
})

app.use('/signup', (req, res) =>{
  res.render('signup');
})


app.use((req, res, next) => {
  res.status(404).json({ error: "page not found" });
  next();
});

app.listen(port, () => console.log(`server started on port ${port}`));
