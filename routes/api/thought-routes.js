const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,

} = require('../../controllers/thought-controller');

router.route('/').get(getAllThought).post(createThought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtid/reactions').post(addReaction);

router.route('/:thoughtid/reactions/:reactionId').delete(removeReaction);
    
module.exports = router;