module.exports = {
    getInventory:(req,res)=>{
        let getTest ="getInventory Test"
        // console.log('hit getInventory')
        const dbInstance = req.app.get('db');
        dbInstance.getInventory().then((response)=>{
            res.send(response)
        })
    }
}