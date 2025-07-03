import Express from 'express'
const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
export default app 