let express = require("express");
let app = express();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vivaadmin:viva123456@clusterviva1.tauekhv.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("success 8080");
});

const md5 = require("md5");

//import generate and verify token
const jwt = require("jsonwebtoken");
const secret = "viva";

const glassesDataSchema = new mongoose.Schema({
  glassesProducts: Array,
  itemNumber: Number,
  img: String,
  imgurl: String,
  cardtype: String,
  title: String,
  subtitle: String,
  price: Number,
  addedInCart: Boolean,
  quantity: Number,
  colors: Array,
  framesize: Array,
});
const allGlassesDataModel = mongoose.model("allGlassesData", glassesDataSchema);
const glassesData = {
  glassesProducts: [
    {
      itemNumber: 1,
      cardtype: "shopcard",
      img: "img_blue",
      // imgurl:"",
      title: "Sugat",
      subtitle: "Betsin Maalat",
      price: 68,
      addedInCart: false,
      quantity: 0,
      colors: ["primary", "neutral"],
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 2,
      cardtype: "shopcard",
      img: "img_biscut",
      imgurl: "",
      title: "Kulangot",
      subtitle: "Sexbomb",
      price: 67,
      recommended: true,
      colors: ["primary", "neutral", "danger", "success", "warning"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 3,
      cardtype: "shopcard",
      img: "img_blue",
      // imgurl:"",
      title: "Tiktilaok Manok",
      subtitle: "Sexbomb",
      price: 78,
      recommended: true,
      colors: ["primary", "success", "warning"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 4,
      cardtype: "shopcard",
      img: "img_sbrown",
      imgurl: "",
      title: "Very Nice",
      subtitle: "Salt Maalat",
      price: 79,
      featured: true,
      colors: ["primary", "success", "warning"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 5,
      cardtype: "shopcard",
      img: "img_red",
      // imgurl:"",
      title: "Quake Overload",
      subtitle: "Salt Maalat",
      price: 80,
      recommended: true,
      colors: ["danger", "primary", "success", "warning"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 6,
      cardtype: "shopcard",
      img: "img_brown",
      // imgurl:"",
      title: "Kutu",
      subtitle: "Sexbomb",
      price: 129,
      colors: ["danger", "success", "warning", "neutral"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 7,
      cardtype: "shopcard",
      img: "img_sbrown",
      imgurl: "",
      title: "Tuluk",
      subtitle: "Black Kibal",
      price: 142,
      recommended: true,
      colors: ["success", "warning", "neutral", "danger"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 8,
      cardtype: "shopcard",
      img: "img_green",
      // imgurl:"",
      title: "Takla Green",
      subtitle: "Sexboomb",
      price: 150,
      recommended: true,
      colors: ["success", "warning", "neutral"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 9,
      cardtype: "shopcard",
      img: "img_golden",
      imgurl: "",
      title: "Balakubak",
      subtitle: "Betsin Maalat",
      price: 170,
      colors: ["success", "warning", "danger"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 10,
      cardtype: "shopcard",
      img: "img_golden",
      imgurl: "",
      title: "Pitaklan",
      subtitle: "Black Kibal",
      price: 174,
      colors: ["success", "neutral", "danger"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 11,
      cardtype: "shopcard",
      img: "img_brown",
      // imgurl:"",
      title: "Burnikk",
      subtitle: "Sexbomb",
      price: 240,
      featured: true,
      colors: ["danger", "warning"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 12,
      cardtype: "shopcard",
      img: "img_red",
      // imgurl:"",
      title: "Sipon Malapot",
      subtitle: "Salt Maalat",
      price: 250,
      featured: true,
      colors: ["neutral", "danger", "success"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 13,
      cardtype: "shopcard",
      img: "img_biscut",
      imgurl: "",
      title: "Buldit",
      subtitle: "Salt Maalat",
      price: 250,

      colors: ["warning", "danger", "success"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 14,
      cardtype: "shopcard",
      img: "img_blue",
      // imgurl:"",
      title: "Merry Christmas",
      subtitle: "Salt Maalat",
      price: 78,
      colors: ["warning", "danger", "success", "neutral"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 15,
      cardtype: "shopcard",
      img: "img_blue",
      // imgurl:"",
      title: "Tilis Malaput",
      subtitle: "Betsin Maalat",
      price: 340,
      featured: true,
      colors: ["danger", "neutral"],
      quantity: 0,
      framesize: ["28 mm", "36 mm", "42 mm"],
      addedInCart: false,
    },
    {
      itemNumber: 16,
      cardtype: "shopcard",
      img: "img_golden",
      imgurl: "",
      title: "Merry Christmas",
      subtitle: "Salt Maalat",
      price: 365,
      featured: true,
      colors: ["success", "primary", "neutral"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 17,
      cardtype: "shopcard",
      img: "img_sbrown",
      imgurl: "",
      title: "Tilapia",
      subtitle: "Salt Maalat",
      price: 450,
      recommended: true,
      colors: ["warning", "success", "neutral"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
    {
      itemNumber: 18,
      cardtype: "shopcard",
      img: "img_blue",
      imgurl: "",
      title: "Kibal Batal",
      subtitle: "Kibal Black",
      price: 674,
      featured: true,
      colors: ["neutral"],
      quantity: 0,
      addedInCart: false,
      framesize: ["28 mm", "36 mm", "42 mm"],
    },
  ],
};

// account register Page
const signUpSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
});

const signUpModel = mongoose.model("signUpAccount", signUpSchema);
//SignStatus
const signStatusSchema = new mongoose.Schema({
  ifSigned: Boolean,
});
const signStatusModel = mongoose.model("signStatus", signStatusSchema);

//shoppingcartList
const shoppingCartListSchema = new mongoose.Schema({
  itemNumber: Number,
  img: String,
  imgurl: String,
  cardtype: String,
  title: String,
  subtitle: String,
  price: Number,
  addedInCart: Boolean,
  quantity: Number,
  colors: Array,
  framesize: Array,
  selectedColor: String,
  selectedFrameSize: String,
});
const shoppingCartListModel = mongoose.model(
  "shoppingCartList",
  shoppingCartListSchema
);

//for login and register account
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//encrypt Middleware
const encryption = (req, res, next) => {
  let password = req.body.password;
  req.body.password = md5(password + md5(password));
  next();
};
const checkaccount = (req, res, next) => {
  let email = { email: req.body.email };
  // console.log("checkaccount", email);
  signUpModel.findOne(email).then((account) => {
    if (account) {
      res.send({
        code: 3,
        message: "Account has been registerd, please use different account",
      });
    } else {
      next();
    }
  });
};
app.get("/api/v1/", (req, res) => {
  allGlassesDataModel
    .create(glassesData)
    .then((data) => {
      res.send({
        code: 1,
        message: "receive user get method,sent back glassesData to Home",
        data: glassesData,
      });
    })
    .catch((error) => {
      console.log("receive user get method, error incurred ", error);
    });
});

app.post("/api/v1/signup", checkaccount, encryption, (req, res) => {
  signUpModel
    .create(req.body)
    .then((data) => {
      res.send({
        code: 1,
        message: "receive user POST method, sent back Register page Data ",
        data: data,
      });
    })
    .catch((error) => {
      res.send({
        code: 0,
        message: "send:register failed",
        data: error,
      });
    });
});

//login
app.post("/api/v1/signin", encryption, (req, res) => {
  signUpModel
    .findOne(req.body)
    .then((data) => {
      // console.log("signin reqbody", req.body);
      // console.log("signin daata", data);
      if (data) {
        const userinfo = { fullname: data.fullname, email: data.email };
        res.send({
          code: 1,
          message: "login succeeful",
          data: userinfo,
          //generate token value
          token: jwt.sign(
            {
              uid: data._id,
              exp: Math.ceil(Date.now() / 1000) + 3600,
            },
            secret
          ),
        });
      } else {
        console.log("login fail server", data);
        res.send({
          code: 4,
          message: "failure login",
        });
      }
    })
    .catch((error) => {
      console.log(" log in error", error);
      res.send({
        code: 0,
        message: "failure login error",
        data: error,
      });
    });
});
// login Status
app.post("/api/v1/signStatus", (req, res) => {
  signStatusModel
    .updateOne({ ifSigned: req.body }, { $set: { ifSigned: value } })
    .then((data) => {
      res.send({
        code: 1,
        message:
          "receive user POST, UpdateOne Login Status, sent back Data to main page Data ",
        data: data,
      });
    })
    .catch((error) => {
      res.send({
        code: 0,
        message: "Fail to update one SignStatus",
        data: error,
      });
    });
});
app.post("/api/v1/shop", (req, res) => {
  shoppingCartListModel
    .insertMany(req.body)
    .then((data) => {
      console.log("receive shoppingcart data", data);
      res.send({
        code: 1,
        message:
          "receive user POST method, sent back shoppingCartList Data to main page Data ",
        data: data,
      });
    })
    .catch((error) => {
      res.send({
        code: 0,
        message: "sent:shoppingCart List data sent back failure",
        data: error,
      });
    });
});
app.post("/api/v1/shopproductCardDelete", (req, res) => {
  shoppingCartListModel
    .deleteOne(req.body)
    .then((data) => {
      // console.log("delett", req.body);
      // console.log("delete data", data);
      res.send({
        code: 1,
        message:
          "receive user POST method, DeleteOne, sent back Data to main page Data ",
        data: data,
      });
    })
    .catch((error) => {
      res.send({
        code: 0,
        message: "Fail to delete one",
        data: error,
      });
    });
});
app.post("/api/v1/shopproductCardUpdate", (req, res) => {
  // console.log("whatthefuck", req.body.value);
  shoppingCartListModel
    .updateOne({ itemNumber: req.body.value }, { $inc: { quantity: 1 } })
    .then((data) => {
      res.send({
        code: 1,
        message:
          "receive user POST method, UpdateOne, sent back Data to main page Data ",
        data: data,
      });
    })
    .catch((error) => {
      res.send({
        code: 0,
        message: "Fail to update one",
        data: error,
      });
    });
});
app.post("/api/v1/shopproductCardUpdatedecrese", (req, res) => {
  // console.log("whatthefuck", req.body.value);
  // shoppingCartListModel
  //   .updateOne({ itemNumber: req.body.value }, { $inc: { quantity: -1 } })
  //   .then((data) => {
  //     res.send({
  //       code: 1,
  //       message:
  //         "receive user POST method, UpdateOne DECRESE, sent back Data to main page Data ",
  //       data: data,
  //     });
  //   })
  //   .catch((error) => {
  //     res.send({
  //       code: 0,
  //       message: "Fail to update one DECRESE",
  //       data: error,
  //     });
  //   });
  console.log("what", req.body.itemNumber);
  shoppingCartListModel
    .findOne(req.body)
    .then((data) => {
      // console.log("inside req.body", req.body);
      // console.log("findone", data);
      if (data && data.quantity > 1) {
        res.send({
          code: 1,
          message:
            "receive user POST method, UpdateOne DECRESE, sent back Data to main page Data ",
          data: data,
        });
        return shoppingCartListModel.updateOne(
          { itemNumber: req.body.itemNumber },
          { $inc: { quantity: -1 } }
        );
      } else {
        res.send({
          code: 4,
          message: "failure to update decrese quantity",
        });
      }
    })
    .catch((error) => {
      console.log("could not findONE itemNumber ", error);
    });
});
app.get("/api/v1/shop", (req, res) => {
  shoppingCartListModel
    .find()
    .then((data) => {
      res.send({
        code: 1,
        message:
          "receive user get method, sent back shoppingCartList Data to main page Data ",
        data: data,
      });
    })
    .catch((error) => {
      res.send({
        code: 0,
        message: "GEt sent:shoppingCart List data sent back failure",
        data: error,
      });
    });
});
// app.post("/api/v1/shopproductCardDeleteAll", (req, res) => {
//   shoppingCartListModel
//     .deleteOne(req.body)
//     .then((data) => {
//       // console.log("delett", req.body);
//       // console.log("delete data", data);
//       res.send({
//         code: 1,
//         message:
//           "receive user POST method, DeleteOne, sent back Data to main page Data ",
//         data: data,
//       });
//     })
//     .catch((error) => {
//       res.send({
//         code: 0,
//         message: "Fail to delete one",
//         data: error,
//       });
//     });
// });
app.post("/api/v1/shopproductCardDeleteAll", (req, res) => {
  // console.log("whatthefuck", req.body.value);
  shoppingCartListModel
    .deleteMany({})
    .then((data) => {
      console.log("aall", data);
      res.send({
        code: 1,
        message:
          "receive user POST method, DELETE ALL, sent back empty to main page ",
        dataCount: data.deletedCount,
      });
    })
    .catch((error) => {
      res.send({
        code: 0,
        message: "SERVER:Fail to delete all",
        data: error,
      });
    });
});

app.listen(8080, () => {
  console.log("server listen on 8080");
});

//npm i express
//npm i mongoose
//npm i axios
//npm i cors
//npm i md5
//npm i jsonwebtoken
