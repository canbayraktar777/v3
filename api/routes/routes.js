const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const oid = mongoose.Types.ObjectId;
mongoose.Promise = global.Promise;

const Graph = mongoose.model('Graph', mongoose.Schema({
	name		: String,
	directed	: Boolean
}))

const Vertex = mongoose.model('Vertex', mongoose.Schema({
	graphId		: mongoose.Schema.Types.ObjectId,
	name 		: String,
	x 			: Number,
	y 			: Number
}));

const Edge = mongoose.model('Edge', mongoose.Schema({
	graphId : mongoose.Schema.Types.ObjectId,
	w	: Number,
	v1	: mongoose.Schema.Types.ObjectId,
	v2	: mongoose.Schema.Types.ObjectId
}));

// Main Route
router.route('/').get((req, res) => {
        res.send('Ok...');
})

router.route('/graph/')
	.get((req,res)=>{
		Graph.find({}, (err,docs) => {
			if (err) {
				handleError(res, err.message, "Failed to get vertex");
			} else {
				res.send(docs);
			}
		})
	}).put((req,res)=>{
		var graph = new Graph(req.body);
		graph.save((err, product, numAffected)=>{
			if (err) {
                handleError(res, err.message, "Failed to save graph.");
            } else {
                res.send(product);
            }
		});
	});
router.route('/graph/:graphId')
	.delete((req, res)=>{
		Graph.remove({'_id' : req.params.graphId}, function(err){
			if(err){
				handleError(res, err.message, "Failed to delete graph.");
			} else {
				res.send('deleted');
			}
		})
	})
/**
	Vertex
**/
router.route('/graph/:graphId/vertex/')
	.get((req, res)=>{
		Vertex.find({graphId : req.params.graphId}, (err,docs)=>{
			if (err) {
				handleError(res, err.message, "Failed to get vertex");
			} else {
				res.send(docs);
			}
		})
	}).put((req,res)=>{
		var vertex = new Vertex(req.body);
		vertex.save((err, product, numAffected)=>{
			if (err) {
                handleError(res, err.message, "Failed to save vertex.");
            } else {
                res.send(product);
            }
		});
	});
router.route('/graph/:graphId/vertex/:vertexId')
	.delete((req, res)=>{
		if(oid.isValid(req.params.vertexId)){
			Edge.deleteMany({'v1' : req.params.vertexId}, function(err){
				if(err){
                    handleError(res, err.message, "Failed to delete edge.");
                }
			})
			Edge.deleteMany({'v2' : req.params.vertexId}, function(err){
				if(err){
                    handleError(res, err.message, "Failed to delete edge.");
                }
			})
			Vertex.remove({'_id':req.params.vertexId}, function(err){
                if(err){
                    handleError(res, err.message, "Failed to delete vertex.");
                } else {
                    res.send('deleted');
                }
            });
        }
	}).post((req,res)=>{
		Vertex.update({ _id : req.body._id }, {
			x : req.body.x,
			y : req.body.y
		}, {}, (a) => {
			res.send(a);
		});
	})

/**
	Edge
**/
router.route('/graph/:graphId/edge/')
	.get((req, res) => {
		Edge.find({graphId : req.params.graphId}, (err,docs)=>{
			if (err) {
				handleError(res, err.message, "Failed to get edge");
			} else {
				res.send(docs);
			}
		})
	}).put((req,res)=>{
		var edge = new Edge(req.body);
		edge.save((err, product, numAffected)=>{
			if (err) {
                handleError(res, err.message, "Failed to save edge.");
            } else {
                res.send(product);
            }
		});
	});

router.route('/graph/:graphId/edge/:edgeId')
	.delete((req, res)=>{
		Edge.remove({'_id' : req.params.edgeId}, function(err){
			if(err){
				handleError(res, err.message, "Failed to delete edge.");
			} else {
				res.send('deleted');
			}
		})
	}).post((req, res)=>{
		Edge.update({'_id' : req.params.edgeId}, {
			w	: req.body.w,
			v1	: req.body.v1,
			v2	: req.body.v2
		}, {}, (a)=>{
			res.send(a);
		})
	});


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

module.exports = router;
