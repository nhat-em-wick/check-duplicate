const User_Model = require("../models/User.Model");
const moment = require('moment')


const checkImport = async (arrayModel) => {
  const err = [];
  try {
    for (const item of arrayModel) {
      const result = await User_Model.findOne({ User_Code: item.User_Code });
      if (result) {
        err.push(item);
      }
    }
  if(err.length > 0) {
    return arrayModel.map(item => {
      if (err.find(e => e.User_Code === item.User_Code)) {
        return {...item, duplicate: true}
      }
      return item
    })
  }
  return []
  } catch (error) {
    throw new Error(error)
  }
}

const User_Controller = {
  getUsers: async (req, res) => {
    try {
      const result = await User_Model.find();
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ result: "error" });
    }
  },
  createUser: async (req, res) => {
    try {
      const user = req.body;
      user.time = Date.now()
      const newUser = await User_Model.create(user);
      return res.json({ result: newUser });
    } catch (error) {
      return res.status(500).json({ result: "error" });
    }
  },
  getByCode: async (req, res) => {
    try {
      const id = req.params.id
      const user = await User_Model.findOne({User_Code: id})
      return res.json({ result: user, date: moment(user.time).format("h:mm") });
    } catch (error) {
      return res.status(500).json({ result: "error" });
    }
  },
  
  importUser: async (req, res) => {
    try {
      const { importModel } = req.body;
      const checkImportUser = await checkImport(importModel);
      if(checkImportUser.length > 0) {
        return res.json({dataErr: checkImportUser})
      }else {
        return res.json({status: 'import'})
      }
    } catch (error) {
      console.log("Error ::: ", error);
      return res.status(500).json({ result: "error import" });
    }
  },
};

module.exports = User_Controller;
