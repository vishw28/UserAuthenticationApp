/**
 * Created by Vishw on 12/25/2016.
 */
/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getUser : function (req,res) {
    console.log('running getuser');
    User.findOne({id: req.session.me},function (err,user) {
        if(err){
          res.negotiate(err);
        }
        return res.send(user);
    })
  },

  checkUser : function (req,res) {
        if(!req.session.me){
            return res.view('login');
        }
        else{
            return res.view('dashboard');
        }
    }

};

