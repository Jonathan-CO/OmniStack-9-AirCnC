const User = require('../models/User');
//index (listagem conjunta), show(listagem simples), store(criar),
//update(alterar), destroy(remover)

module.exports = {
    async store(req, res) {
        const {email} = req.body;
        let user = await User.findOne({email});

        if(!user){
            user = await User.create({ email});
        }

        return res.json(user);
    }
};