const jsonServer=require('json-server')

const empServer=jsonServer.create()

const router=jsonServer.router('db.json')
const middleware=jsonServer.defaults()

const PORT=3000 || process.env.PORT

empServer.use(middleware)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})