var express = require('express');
var router = express.Router();

// Require controller modules.
var gameHistory_controller = require('../games/gameHistoryController');

/// GAME HISTORY ROUTES ///

// GET catalog home page.
router.get('/gameHistory', gameHistory_controller.index);

// // GET request for creating a gameHistory. NOTE This must come before routes that display gameHistory (uses id).
// router.get('/gameHistory/create', gameHistory_controller.gameHistory_create_get);

// POST request for creating gameHistory.
router.post('/gameHistory/create', gameHistory_controller.gameHistory_create_post);

// // GET request to delete gameHistory.
// router.get('/gameHistory/:id/delete', gameHistory_controller.gameHistory_delete_get);

// // POST request to delete gameHistory.
// router.post('/gameHistory/:id/delete', gameHistory_controller.gameHistory_delete_post);

// // GET request to update gameHistory.
// router.get('/gameHistory/:id/update', gameHistory_controller.gameHistory_update_get);

// // POST request to update gameHistory.
// router.post('/gameHistory/:id/update', gameHistory_controller.gameHistory_update_post);

// GET request for list of all gameHistory items.
router.get('/gameHistory/all', gameHistory_controller.gameHistory_list);

// GET request for one gameHistory.
router.get('/gameHistory/:id', gameHistory_controller.gameHistory_detail);


module.exports = router;