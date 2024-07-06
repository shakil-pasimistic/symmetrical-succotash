import app from './app.js';

const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || "development";

app.listen(port, () => {
  console.log(`Server running in ${environment} mode on port ${port}`);
});
