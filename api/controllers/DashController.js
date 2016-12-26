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
    checkUser : function (req,res) {
        if(!req.session.me){
            return res.view('login');
        }
        else{
            return res.view('dashboard');
        }
    }
};

