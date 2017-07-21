import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import * as algo from 'algorithms';
import { GraphService } from './graph.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

	@ViewChild('canvas') vc;
	@ViewChildren('vertexN') vcv;
	@ViewChildren('edgeN') vce;


	ctx;
	graph;
	_ui = {
		graphs : [],
		vertex : [],
		edge : []
	}
	selectedVertex = {
		_id : null
	};
	selectedGraph = {
		_id  : null,
		name : null
	}
	con1 = null;

  	constructor( private graphService : GraphService ) { }

	defaults = {};

	ngOnInit() {
		this.setGraph(null);

		this.defaults = {
			'mouse' : {
				'currentAction' : this.mouse.actions[0]
			}
		}

		this.setDefaults(this, this.defaults);
	}

	setGraph = function(graphId){
		this._ui.vertex = [];
		this._ui.edge = [];
		this.vcvTail = 0;
		this.vceTail = 0;
		this.con1 = null;

		this.graph = new algo['DataStructures']['Graph'](false);
	//	this.graph = new algo['DataStructures']['Graph'](true);
		this.getGraphs(graphId);

		if(graphId){
			this.canvasClear();
		}
	};
	getGraphs = function(graphId){
		this.graphService.getGraphs().subscribe((graphs)=>{
			this._ui.graphs = graphs;
			if(graphId){
				this.selectGraph(this._ui.graphs.find((graph)=>{
					return graph._id === graphId;
				}));
			} else {
				this.selectGraph(this._ui.graphs[0]);
			}
		})
	}
	selectGraph = function(graph){
		this.selectedGraph = graph;
		this.getAllVertex(graph);
	}
	newGraph = {
		directed : false,
		name 	 : 'test'
	}
	addGraph = function(graph){
		this.graphService.addGraph(graph).subscribe((res)=>{
			console.log(res);
		});
	}
	deleteGraph = function(graph){
		this.graphService.deleteGraph(graph).subscribe((res)=>{
			this.getGraphs();
		});
	}



	isValidVertex = function(vertex){
		if(vertex._id && vertex.x && vertex.y){
			return true;
		}
		return false;
	}

	setDefaults = function(that, def){
		if(that){
			for(var i in def){
				that[i] = this.setDefaults(that[i], def[i]);
			}
			return that;
		}
		return def;
	}

	canvas;
	vcvTail = 0;
	vceTail = 0;
	ngAfterViewInit(){
		this.canvasSet(this.vc.nativeElement);

		this.vcv.changes.subscribe((a)=>{
			for(this.vcvTail; this.vcvTail < a.length; this.vcvTail +=1 ){
				this._ui.vertex[this.vcvTail].nativeElement = this.vcv._results[this.vcvTail].nativeElement;
				this.vcv._results[this.vcvTail].nativeElement.style.top = this._ui.vertex[this.vcvTail].y * this.canvas.height - 19 + "px";
				this.vcv._results[this.vcvTail].nativeElement.style.left = this._ui.vertex[this.vcvTail].x * this.canvas.width - 25 + "px";
			}
		});
		this.vce.changes.subscribe((a)=>{
			for(this.vceTail; this.vceTail < a.length; this.vceTail += 1){
				this._ui.edge[this.vceTail].nativeElement = this.vce._results[this.vceTail].nativeElement;
				this.vce._results[this.vceTail].nativeElement.style.top = this._ui.edge[this.vceTail].y() * this.canvas.height - 11 + "px";
				this.vce._results[this.vceTail].nativeElement.style.left = this._ui.edge[this.vceTail].x() * this.canvas.width - 17 + "px";
			}
		});
	}

	canvasSet = function(canvas){
		this.canvas = canvas;
		this.canvas.width = this.canvas.height = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
		this.ctx = this.canvas.getContext('2d');
	}
	canvasClear = function(){
		this.ctx.rect(0,0,this.canvas.width, this.canvas.height);
		this.ctx.fillStyle = "#eef";
		this.ctx.fill();

	}
	canvasNormalizeEvent = function(ev){
		ev.normalized = {
			x : ev.clientX / this.canvas.width,
			y : ev.clientY / this.canvas.height
		};
		return ev;
	}
	canvasClicked = function(ev){
		switch(this.mouse.currentAction.name){
			case 'addNode' : {
				let name = 'node_' + this._ui.vertex.length;
				ev = this.canvasNormalizeEvent(ev);

				let vertex = {
					graphId : this.selectedGraph._id,
					name : name,
					x: ev.normalized.x,
					y: ev.normalized.y
				}

				this.graphService.addVertex(vertex).subscribe((dbNode)=>{
					this.addVertex( dbNode );
				})
				break;
			};
			case 'moveNode' : {
				this.selectedVertex.x = ev.clientX / this.canvas.width;
				this.selectedVertex.y = ev.clientY / this.canvas.height;
				this.graphService.updateVertex(this.selectedVertex, (res)=>{
					this.setGraph(this.selectedGraph._id);
				});
			}

		}

	}
	canvasDrawEdge = function(edge){
		let v = this._ui.vertex.filter((ver)=>{
			return (ver._id === edge.v1 || ver._id === edge.v2);
		});

		let x0 = v[0].x * this.canvas.width,
			x1 = v[1].x * this.canvas.width,
			y0 = v[0].y * this.canvas.height,
			y1 = v[1].y * this.canvas.height;

		this.ctx.beginPath();
		this.ctx.moveTo(x0, y0);
		this.ctx.lineTo(x1, y1);
		this.ctx.stroke();
	}

	vertexClick = function(vertex){
		if(this.mouse.currentAction.name === 'deleteNode'){
			this.deleteVertex(vertex);
		} else if(this.mouse.currentAction.name === 'connectNode') {
			this.connectVertex(vertex);
			this.selectedVertex = vertex;
		} else { // selectNode included here...
			this.selectedVertex = vertex;
		}

		//console.log(this.mouse.currentAction);
		this.dijkstra();
	}
	getAllVertex = function(graph){
		this.graphService.getAllVertex(graph._id).subscribe((dbNodes)=>{
			dbNodes.map((dbNode) =>{
				if(this.isValidVertex(dbNode)){
					this.addVertex(dbNode);
				}

			})

			this.graphService.getAllEdge(graph).subscribe((edges)=>{
				edges.map((edge)=>{
					this.addEdge(edge);
				})

				if(this.selectedVertex._id === null){
					this.selectedVertex = this._ui.vertex[0];
				}

				this.dijkstra();
				this.eulerPath();
			});
		});
	}
	addVertex = function(node){
		this.graph.addVertex(node._id);
		this._ui.vertex.push(node);
	}
	deleteVertex = function(node){
		this.graphService.deleteVertex(node, (res)=>{
			this.selectedVertex = { _id : null };
			this.setGraph(this.selectedGraph._id);
		});
	}
	moveVertex = function(vertex){
		this.mouse.currentAction = this.mouse.actions.filter((act)=>{
			return act.name === 'moveNode';
		})[0];
	}
	connectVertex = function(vertex){
		this.mouse.currentAction = this.mouse.actions.filter((act)=>{
			return act.name === 'connectNode';
		})[0];
		if(this.con1 && this.con1._id !== vertex._id){
			this.vertex2edge(this.con1, vertex);
		}
		this.con1 = vertex;
	}
	vertex2edge = function(v1,v2){
		let edge = {
			graphId : this.selectedGraph._id,
			w 	: -1,
			v1 	: v1._id,
			v2	: v2._id
		}

		this.graphService.addEdge(edge).subscribe((res)=>{
			this.addEdge(res);
		});
	}
	addEdge = function(edge){
		let that = this;
		edge.x = function(){
			let v = that._ui.vertex.filter((ver)=>{
				return (ver._id === edge.v1 || ver._id === edge.v2);
			});
			return ((v[0].x + v[1].x) / 2);
		};
		edge.y = function(){
			let v = that._ui.vertex.filter((ver)=>{
				return (ver._id === edge.v1 || ver._id === edge.v2);
			});
			return ((v[0].y + v[1].y) / 2);
		}


		if(edge.w === -1){
			let v = that._ui.vertex.filter((ver)=>{
				return (ver._id === edge.v1 || ver._id === edge.v2);
			});

			edge.weight = parseInt(Math.sqrt((v[0].x-v[1].x)*(v[0].x-v[1].x) + (v[0].y-v[1].y)*(v[0].y-v[1].y))*this.canvas.width+'');
		} else {
			edge.weight = edge.w;
		}

		this.graph.addEdge(edge.v1, edge.v2, edge.weight);
		this._ui.edge.push(edge);
		this.canvasDrawEdge(edge);
	}
	deleteEdge = function(edge){
		this.graphService.deleteEdge(edge).subscribe((res) =>{
			this.setGraph(this.selectedGraph._id);
		});
	}
	updateEdge = function(edge, auto){
		if(auto){
			edge.w = -1;
		}
		this.graphService.updateEdge(edge).subscribe((res)=>{
			this.setGraph(this.selectedGraph._id);
		});
	}
	euler = {
		path : [],
		index : 0,
	};
	eulerPath = function(){
		this.euler.path = algo['Graph']['eulerPath'](this.graph);
	}
	eulerPrevious = function(){
		this.euler.index -= 1;
		if(this.euler.index == -1){
			this.euler.index = 0;
		}
	}
	eulerNext = function(){
		this.euler.index += 1;
		if(this.euler.index == this.euler.path.length){
			this.euler.index = this.euler.path.length-1;
		}
	}
	dijkstra = function(){
		let distance = algo['Graph']['dijkstra'](this.graph, this.selectedVertex._id).distance;

		this._ui.vertex.map((v)=>{
			v.distance = distance[v._id];
		});
	}

	mouse = {
		currentAction : null,
		actions : [{
				name 	: 'selectNode',
				icon	: 'fa fa-hand-pointer-o',
				label	: 'Select Node'
			},{
				name	: 'addNode',
				icon	: 'fa fa-plus',
				label   : 'Add Node'
			},{
				name 	: 'connectNode',
				icon	: 'fa fa-exchange',
				label	: 'Connect Node'
			},{
				name 	: 'moveNode',
				icon	: 'fa fa-arrows',
				label	: 'Move Node'
			},{
				name	: 'deleteNode',
				icon	: 'fa fa-warning',
				label	: 'Delete Node',
			}
		],
	};
	setMouseAction = function(action){
		this.mouse.currentAction = action;
	}
}
