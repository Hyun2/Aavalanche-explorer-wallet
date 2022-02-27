const { Tx } = require("../models");

module.exports = {
  getTransactions: async (req, res, next) => {
    // if (!req.cookies["network"]) {
    //   console.log(req.cookies["network"]);
    //   return;
    // }
    if (!req.network) {
      next();
    } else {
      // console.log("---Called getTransactions---");
      // console.log(req.network);

      try {
        let tx = await Tx.findAll({
          limit: 10,
          order: [["createdAt", "DESC"]],
          where: {
            // network: req.cookies["network"],
            network: req.network,
          },
        });

        res.status(200).send({
          tx,
        });
      } catch (err) {
        console.log(err);
        res.status(404).send({
          message: "server error",
          errMsg: err,
        });
      }
    }

    // console.log(req.cookies["network"]);
    // console.log(typeof req.network, req.network);
  },
  setNetwork: async (req, res) => {
    try {
      // console.log(req.cookies["network"]);
      console.log("---called setNetowrk---");
      const { network } = req.body;
      console.log(network);
      console.log("---end setNetowrk---");

      res.cookie("network", network).status(200).send({});
    } catch (e) {
      console.log(e);
      res.status(404).send({
        message: "server error",
        errMsg: e,
      });
    }
  },
  getNetwork: (req, res, next) => {
    const network = req.cookies["network"];
    console.log("--- Called getNetwork ---");
    console.log(req.cookies);
    if (network) {
      req.network = network;
    } else {
      req.network = "testnet";
    }
    next();
  },
};
