const fs = require('fs');
const uuidv1 = require('uuid/v1');
const {getResponse} = require('../helpers')

const create = async ctx =>{
      // await _operate(ctx.request.files[0])
      // .then(async src=>{
      //     ctx.body = getResponse(true,{
      //         src,
      //     })
      // })
}

module.exports = {
    create,
}
