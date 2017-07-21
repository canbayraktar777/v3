webpackJsonp([1,4],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GraphService = (function () {
    function GraphService(http) {
        this.http = http;
        this.serverUrl = "http://localhost:3000/api";
        this.graphUrl = this.serverUrl + "/graph/";
        this.vertexUrl = "/vertex/";
        this.edgeUrl = "/edge/";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.getAllVertex = function (graphId) {
            return this.http.get(this.graphUrl + graphId + this.vertexUrl)
                .map(this.extractData)
                .catch(this.handleError);
        };
    }
    GraphService.prototype.getGraphs = function () {
        return this.http.get(this.graphUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GraphService.prototype.addGraph = function (graph) {
        return this.http.put(this.graphUrl, JSON.stringify(graph), { headers: this.headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    GraphService.prototype.deleteGraph = function (graph) {
        return this.http.delete(this.graphUrl + graph._id, { headers: this.headers });
    };
    GraphService.prototype.addVertex = function (vertex) {
        return this.http.put(this.graphUrl + vertex.graphId + this.vertexUrl, JSON.stringify(vertex), { headers: this.headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    GraphService.prototype.deleteVertex = function (vertex, callback) {
        this.http.delete(this.graphUrl + vertex.graphId + this.vertexUrl + vertex._id, { headers: this.headers }).subscribe(function (res) {
            callback(res);
        });
    };
    GraphService.prototype.updateVertex = function (vertex, callback) {
        this.http.post(this.graphUrl + vertex.graphId + this.vertexUrl + vertex._id, vertex, { headers: this.headers }).subscribe(function (res) {
            callback(res);
        });
    };
    GraphService.prototype.getAllEdge = function (graph) {
        return this.http.get(this.graphUrl + graph._id + this.edgeUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GraphService.prototype.addEdge = function (edge) {
        return this.http.put(this.graphUrl + edge.graphId + this.edgeUrl, JSON.stringify(edge), { headers: this.headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    GraphService.prototype.deleteEdge = function (edge) {
        return this.http.delete(this.graphUrl + edge.graphId + this.edgeUrl + edge._id, { headers: this.headers });
    };
    GraphService.prototype.updateEdge = function (edge) {
        return this.http.post(this.graphUrl + edge.graphId + this.edgeUrl + edge._id, edge, { headers: this.headers });
    };
    GraphService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    GraphService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    GraphService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], GraphService);
    return GraphService;
    var _a;
}());
//# sourceMappingURL=graph.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 346;


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(468);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'v3';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(580),
            styles: [__webpack_require__(577)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graph_graph_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graph_graph_component__ = __webpack_require__(467);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var appRoutes = [
    { path: 'Graph', component: __WEBPACK_IMPORTED_MODULE_7__graph_graph_component__["a" /* GraphComponent */] },
    { path: '', redirectTo: '/Graph', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__graph_graph_component__["a" /* GraphComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__graph_graph_service__["a" /* GraphService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_algorithms__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_algorithms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_algorithms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graph_service__ = __webpack_require__(310);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraphComponent = (function () {
    function GraphComponent(graphService) {
        this.graphService = graphService;
        this._ui = {
            graphs: [],
            vertex: [],
            edge: []
        };
        this.selectedVertex = {
            _id: null
        };
        this.selectedGraph = {
            _id: null,
            name: null
        };
        this.con1 = null;
        this.defaults = {};
        this.setGraph = function (graphId) {
            this._ui.vertex = [];
            this._ui.edge = [];
            this.vcvTail = 0;
            this.vceTail = 0;
            this.con1 = null;
            this.graph = new __WEBPACK_IMPORTED_MODULE_1_algorithms__["DataStructures"]['Graph'](false);
            //	this.graph = new algo['DataStructures']['Graph'](true);
            this.getGraphs(graphId);
            if (graphId) {
                this.canvasClear();
            }
        };
        this.getGraphs = function (graphId) {
            var _this = this;
            this.graphService.getGraphs().subscribe(function (graphs) {
                _this._ui.graphs = graphs;
                if (graphId) {
                    _this.selectGraph(_this._ui.graphs.find(function (graph) {
                        return graph._id === graphId;
                    }));
                }
                else {
                    _this.selectGraph(_this._ui.graphs[0]);
                }
            });
        };
        this.selectGraph = function (graph) {
            this.selectedGraph = graph;
            this.getAllVertex(graph);
        };
        this.newGraph = {
            directed: false,
            name: 'test'
        };
        this.addGraph = function (graph) {
            this.graphService.addGraph(graph).subscribe(function (res) {
                console.log(res);
            });
        };
        this.deleteGraph = function (graph) {
            var _this = this;
            this.graphService.deleteGraph(graph).subscribe(function (res) {
                _this.getGraphs();
            });
        };
        this.isValidVertex = function (vertex) {
            if (vertex._id && vertex.x && vertex.y) {
                return true;
            }
            return false;
        };
        this.setDefaults = function (that, def) {
            if (that) {
                for (var i in def) {
                    that[i] = this.setDefaults(that[i], def[i]);
                }
                return that;
            }
            return def;
        };
        this.vcvTail = 0;
        this.vceTail = 0;
        this.canvasSet = function (canvas) {
            this.canvas = canvas;
            this.canvas.width = this.canvas.height = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
            this.ctx = this.canvas.getContext('2d');
        };
        this.canvasClear = function () {
            this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = "#eef";
            this.ctx.fill();
        };
        this.canvasNormalizeEvent = function (ev) {
            ev.normalized = {
                x: ev.clientX / this.canvas.width,
                y: ev.clientY / this.canvas.height
            };
            return ev;
        };
        this.canvasClicked = function (ev) {
            var _this = this;
            switch (this.mouse.currentAction.name) {
                case 'addNode':
                    {
                        var name = 'node_' + this._ui.vertex.length;
                        ev = this.canvasNormalizeEvent(ev);
                        var vertex = {
                            graphId: this.selectedGraph._id,
                            name: name,
                            x: ev.normalized.x,
                            y: ev.normalized.y
                        };
                        this.graphService.addVertex(vertex).subscribe(function (dbNode) {
                            _this.addVertex(dbNode);
                        });
                        break;
                    }
                    ;
                case 'moveNode': {
                    this.selectedVertex.x = ev.clientX / this.canvas.width;
                    this.selectedVertex.y = ev.clientY / this.canvas.height;
                    this.graphService.updateVertex(this.selectedVertex, function (res) {
                        _this.setGraph(_this.selectedGraph._id);
                    });
                }
            }
        };
        this.canvasDrawEdge = function (edge) {
            var v = this._ui.vertex.filter(function (ver) {
                return (ver._id === edge.v1 || ver._id === edge.v2);
            });
            var x0 = v[0].x * this.canvas.width, x1 = v[1].x * this.canvas.width, y0 = v[0].y * this.canvas.height, y1 = v[1].y * this.canvas.height;
            this.ctx.beginPath();
            this.ctx.moveTo(x0, y0);
            this.ctx.lineTo(x1, y1);
            this.ctx.stroke();
        };
        this.vertexClick = function (vertex) {
            if (this.mouse.currentAction.name === 'deleteNode') {
                this.deleteVertex(vertex);
            }
            else if (this.mouse.currentAction.name === 'connectNode') {
                this.connectVertex(vertex);
                this.selectedVertex = vertex;
            }
            else {
                this.selectedVertex = vertex;
            }
            //console.log(this.mouse.currentAction);
            this.dijkstra();
        };
        this.getAllVertex = function (graph) {
            var _this = this;
            this.graphService.getAllVertex(graph._id).subscribe(function (dbNodes) {
                dbNodes.map(function (dbNode) {
                    if (_this.isValidVertex(dbNode)) {
                        _this.addVertex(dbNode);
                    }
                });
                _this.graphService.getAllEdge(graph).subscribe(function (edges) {
                    edges.map(function (edge) {
                        _this.addEdge(edge);
                    });
                    if (_this.selectedVertex._id === null) {
                        _this.selectedVertex = _this._ui.vertex[0];
                    }
                    _this.dijkstra();
                    _this.eulerPath();
                });
            });
        };
        this.addVertex = function (node) {
            this.graph.addVertex(node._id);
            this._ui.vertex.push(node);
        };
        this.deleteVertex = function (node) {
            var _this = this;
            this.graphService.deleteVertex(node, function (res) {
                _this.selectedVertex = { _id: null };
                _this.setGraph(_this.selectedGraph._id);
            });
        };
        this.moveVertex = function (vertex) {
            this.mouse.currentAction = this.mouse.actions.filter(function (act) {
                return act.name === 'moveNode';
            })[0];
        };
        this.connectVertex = function (vertex) {
            this.mouse.currentAction = this.mouse.actions.filter(function (act) {
                return act.name === 'connectNode';
            })[0];
            if (this.con1 && this.con1._id !== vertex._id) {
                this.vertex2edge(this.con1, vertex);
            }
            this.con1 = vertex;
        };
        this.vertex2edge = function (v1, v2) {
            var _this = this;
            var edge = {
                graphId: this.selectedGraph._id,
                w: -1,
                v1: v1._id,
                v2: v2._id
            };
            this.graphService.addEdge(edge).subscribe(function (res) {
                _this.addEdge(res);
            });
        };
        this.addEdge = function (edge) {
            var that = this;
            edge.x = function () {
                var v = that._ui.vertex.filter(function (ver) {
                    return (ver._id === edge.v1 || ver._id === edge.v2);
                });
                return ((v[0].x + v[1].x) / 2);
            };
            edge.y = function () {
                var v = that._ui.vertex.filter(function (ver) {
                    return (ver._id === edge.v1 || ver._id === edge.v2);
                });
                return ((v[0].y + v[1].y) / 2);
            };
            if (edge.w === -1) {
                var v = that._ui.vertex.filter(function (ver) {
                    return (ver._id === edge.v1 || ver._id === edge.v2);
                });
                edge.weight = parseInt(Math.sqrt((v[0].x - v[1].x) * (v[0].x - v[1].x) + (v[0].y - v[1].y) * (v[0].y - v[1].y)) * this.canvas.width + '');
            }
            else {
                edge.weight = edge.w;
            }
            this.graph.addEdge(edge.v1, edge.v2, edge.weight);
            this._ui.edge.push(edge);
            this.canvasDrawEdge(edge);
        };
        this.deleteEdge = function (edge) {
            var _this = this;
            this.graphService.deleteEdge(edge).subscribe(function (res) {
                _this.setGraph(_this.selectedGraph._id);
            });
        };
        this.updateEdge = function (edge, auto) {
            var _this = this;
            if (auto) {
                edge.w = -1;
            }
            this.graphService.updateEdge(edge).subscribe(function (res) {
                _this.setGraph(_this.selectedGraph._id);
            });
        };
        this.euler = {
            path: [],
            index: 0,
        };
        this.eulerPath = function () {
            this.euler.path = __WEBPACK_IMPORTED_MODULE_1_algorithms__["Graph"]['eulerPath'](this.graph);
        };
        this.eulerPrevious = function () {
            this.euler.index -= 1;
            if (this.euler.index == -1) {
                this.euler.index = 0;
            }
        };
        this.eulerNext = function () {
            this.euler.index += 1;
            if (this.euler.index == this.euler.path.length) {
                this.euler.index = this.euler.path.length - 1;
            }
        };
        this.dijkstra = function () {
            var distance = __WEBPACK_IMPORTED_MODULE_1_algorithms__["Graph"]['dijkstra'](this.graph, this.selectedVertex._id).distance;
            this._ui.vertex.map(function (v) {
                v.distance = distance[v._id];
            });
        };
        this.mouse = {
            currentAction: null,
            actions: [{
                    name: 'selectNode',
                    icon: 'fa fa-hand-pointer-o',
                    label: 'Select Node'
                }, {
                    name: 'addNode',
                    icon: 'fa fa-plus',
                    label: 'Add Node'
                }, {
                    name: 'connectNode',
                    icon: 'fa fa-exchange',
                    label: 'Connect Node'
                }, {
                    name: 'moveNode',
                    icon: 'fa fa-arrows',
                    label: 'Move Node'
                }, {
                    name: 'deleteNode',
                    icon: 'fa fa-warning',
                    label: 'Delete Node',
                }
            ],
        };
        this.setMouseAction = function (action) {
            this.mouse.currentAction = action;
        };
    }
    GraphComponent.prototype.ngOnInit = function () {
        this.setGraph(null);
        this.defaults = {
            'mouse': {
                'currentAction': this.mouse.actions[0]
            }
        };
        this.setDefaults(this, this.defaults);
    };
    GraphComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.canvasSet(this.vc.nativeElement);
        this.vcv.changes.subscribe(function (a) {
            for (_this.vcvTail; _this.vcvTail < a.length; _this.vcvTail += 1) {
                _this._ui.vertex[_this.vcvTail].nativeElement = _this.vcv._results[_this.vcvTail].nativeElement;
                _this.vcv._results[_this.vcvTail].nativeElement.style.top = _this._ui.vertex[_this.vcvTail].y * _this.canvas.height - 19 + "px";
                _this.vcv._results[_this.vcvTail].nativeElement.style.left = _this._ui.vertex[_this.vcvTail].x * _this.canvas.width - 25 + "px";
            }
        });
        this.vce.changes.subscribe(function (a) {
            for (_this.vceTail; _this.vceTail < a.length; _this.vceTail += 1) {
                _this._ui.edge[_this.vceTail].nativeElement = _this.vce._results[_this.vceTail].nativeElement;
                _this.vce._results[_this.vceTail].nativeElement.style.top = _this._ui.edge[_this.vceTail].y() * _this.canvas.height - 11 + "px";
                _this.vce._results[_this.vceTail].nativeElement.style.left = _this._ui.edge[_this.vceTail].x() * _this.canvas.width - 17 + "px";
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('canvas'), 
        __metadata('design:type', Object)
    ], GraphComponent.prototype, "vc", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('vertexN'), 
        __metadata('design:type', Object)
    ], GraphComponent.prototype, "vcv", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('edgeN'), 
        __metadata('design:type', Object)
    ], GraphComponent.prototype, "vce", void 0);
    GraphComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-graph',
            template: __webpack_require__(581),
            styles: [__webpack_require__(578)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__graph_service__["a" /* GraphService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__graph_service__["a" /* GraphService */]) === 'function' && _a) || Object])
    ], GraphComponent);
    return GraphComponent;
    var _a;
}());
//# sourceMappingURL=graph.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(137)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(137)();
// imports


// module
exports.push([module.i, "canvas {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n\tleft: 0;\n\tz-index: -100;\n\tbackground-color: #eef;\n}\n\n.graph-vertex {\n\tposition: absolute !important;\n}\n\n.graph-edge {\n\tposition: absolute !important;\n}\n.vertex-cube {\n\tmargin-top: -10px;\n}\n#sidebar {\n\tfloat: right;\n}\n\n#sidebar .list-group-item {\n    border-radius: 0;\n    background-color: #333;\n    color: #ccc;\n    border-left: 0;\n    border-right: 0;\n    border-color: #2c2c2c;\n    white-space: nowrap;\n}\n\n/* highlight active menu */\n#sidebar .list-group-item:not(.collapsed) {\n    background-color: #222;\n}\n\n/* closed state */\n#sidebar .list-group .list-group-item[aria-expanded=\"false\"]::after {\n  content: \" \\F0D7\";\n  font-family: FontAwesome;\n  display: inline;\n  text-align: right;\n  padding-left: 5px;\n}\n\n/* open state */\n#sidebar .list-group .list-group-item[aria-expanded=\"true\"] {\n  background-color: #222;\n}\n#sidebar .list-group .list-group-item[aria-expanded=\"true\"]::after {\n  content: \" \\F0DA\";\n  font-family: FontAwesome;\n  display: inline;\n  text-align: right;\n  padding-left: 5px;\n}\n\n/* level 1*/\n#sidebar .list-group .collapse .list-group-item  {\n  padding-left: 20px;\n}\n\n/* level 2*/\n#sidebar .list-group .collapse > .collapse .list-group-item {\n  padding-left: 30px;\n}\n\n/* level 3*/\n#sidebar .list-group .collapse > .collapse > .collapse .list-group-item {\n  padding-left: 40px;\n}\n\n@media (max-width:48em) {\n    /* overlay sub levels on small screens */\n    #sidebar .list-group .collapse.in, #sidebar .list-group .collapsing {\n        position: absolute;\n        z-index: 1;\n        width: 190px;\n    }\n    #sidebar .list-group > .list-group-item {\n        text-align: center;\n        padding: .75rem .5rem;\n    }\n    /* hide caret icons of top level when collapsed */\n    #sidebar .list-group > .list-group-item[aria-expanded=\"true\"]::after,\n    #sidebar .list-group > .list-group-item[aria-expanded=\"false\"]::after {\n        display:none;\n    }\n}\n\n/* change transition animation to width when entire sidebar is toggled */\n#sidebar.collapse {\n  transition-timing-function: ease;\n  transition-duration: .2s;\n}\n\n#sidebar.collapsing {\n  opacity: 0.8;\n  width: 0;\n  transition-timing-function: ease-in;\n  transition-property: width;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "<!--\n<nav class=\"navbar navbar-toggleable-md bg-faded\">\n\n\t<button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t</button>\n\n\n\t<div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n\t\t<ul class=\"navbar-nav\">\n\t\t\t<li *ngFor=\"let algorithm of algorithms\" class=\"nav-item\">\n\t\t\t\t<a routerLink=\"{{algorithm}}\" routerLinkActive=\"active\" class=\"nav-link\">\n\t\t\t\t\t{{algorithm}}\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>\n-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "<!-- Vertex Nodes -->\n<div class=\"graph-vertex\" #vertexN *ngFor=\"let vertex of _ui.vertex\">\n\t<button class=\"btn btn-primary rounded-circle\"\n\t\t\t[ngClass]=\"{'btn-success': selectedVertex._id === vertex._id}\"\n\t\t\tdata-toggle=\"dropdown\"\n\t\t\t(click)=\"vertexClick(vertex)\">\n\t\t<small *ngIf=\"euler.path[euler.index]===vertex._id\" class=\"fa fa-bullseye bg-danger\"></small>\n\t\t<i class=\"fa fa-cube vertex-cube\"></i>\n\t\t<small class=\"badge badge-success\">{{vertex.distance}}</small>\n\t</button>\n\t<div class=\"dropdown-menu\">\n\t\t<a class=\"dropdown-item bg-info\">{{vertex.name}}</a>\n\t\t<a class=\"dropdown-item bg-danger\" (click)=\"deleteVertex(vertex)\">\n\t\t\t<i class=\"fa fa-warning\"></i>Delete\n\t\t</a>\n\t\t<a class=\"dropdown-item bg-success\" (click)=\"moveVertex(vertex)\">\n\t\t\t<i class=\"fa fa-arrows\"></i>Move\n\t\t</a>\n\t\t<a class=\"dropdown-item\" (click)=\"connectVertex(vertex)\">\n\t\t\t<i class=\"fa fa-exchange\"></i>Connect\n\t\t</a>\n\t</div>\n</div>\n\n<!-- Edge Nodes -->\n<div class=\"graph-edge\" #edgeN *ngFor=\"let edge of _ui.edge\">\n\t<button class=\"badge badge-info\"\n\t\t\tdata-toggle=\"dropdown\">\n\t\t\t{{edge.weight}}\n\t</button>\n\t<div class=\"dropdown-menu\">\n\t\t<a class=\"dropdown-item\">\n\t\t\t<input type=\"number\" [(ngModel)]=\"edge.w\" class=\"form-control\"/>\n\t\t\t<div class=\"btn-group \">\n\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"updateEdge(edge, true)\">\n\t\t\t\t\tAuto\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"updateEdge(edge)\">\n\t\t\t\t\t<i class=\"fa fa-check\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</a>\n\t\t<a class=\"dropdown-item bg-danger\" (click)=\"deleteEdge(edge)\">Delete</a>\n\t</div>\n</div>\n\n<!-- Canvas -->\n<canvas #canvas (click)=\"canvasClicked($event)\"></canvas>\n\n<!-- Left Menu -->\n<div class=\"col-md-3 col-xs-1 p-l-0 p-r-0 in\" id=\"sidebar\">\n    <div class=\"list-group panel\">\n\t\t<a href=\"#menuMouseAction\" class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-parent=\"#sidebar\" aria-expanded=\"false\">\n\t\t\t<i class=\"fa fa-mouse-pointer\"></i> |\n\n\t\t\t<i class=\"{{mouse.currentAction.icon}}\"></i>\n\t\t\t<span class=\"hidden-sm-down\">{{mouse.currentAction.label}}</span>\n\t\t</a>\n\t\t<div class=\"collapse in\" id=\"menuMouseAction\">\n\t\t\t<a \tclass=\"list-group-item\"\n\t\t\t\tdata-parent=\"#menuMouseAction\"\n\t\t\t\t*ngFor=\"let action of mouse.actions\"\n\t\t\t\t(click)=\"setMouseAction(action)\">\n\n\t\t\t\t<i class=\"{{action.icon}}\"></i>\n\t\t\t\t<span class=\"label\">{{action.label}}</span>\n\t\t\t</a>\n\t\t</div>\n\n\t\t<a class=\"list-group-item collapsed\" data-parent=\"#sidebar\">\n\t\t\t<i class=\"fa fa-bullseye bg-danger\" (click)=\"eulerPath()\"></i>\n\t\t\t<span class=\"hidden-sm-down\" (click)=\"eulerPath()\">Euler Path</span>\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"eulerPrevious()\">\n\t\t\t\t\t<i class=\"fa fa-angle-left\"></i>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"eulerNext()\">\n\t\t\t\t\t<i class=\"fa fa-angle-right\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</a>\n\n\t\t<a href=\"#graphs\" class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-parent=\"#sidebar\" aria-expanded=\"false\">\n\t\t\t{{selectedGraph.name}}\n\t\t</a>\n\t\t<div class=\"collapse in\" id=\"graphs\">\n\t\t\t<a \tclass=\"list-group-item\" data-parent=\"#graphs\"\n\t\t\t\t*ngFor=\"let graph of _ui.graphs\" (click)=\"setGraph(graph._id)\">\n\t\t\t\t{{graph.name}}\n\t\t\t\t<!-- deleteGraph button (disabled)\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteGraph(graph)\">x</button>-->\n\t\t\t</a>\n\t\t\t<a href=\"#addGraph\"\tclass=\"list-group-item\" data-parent=\"#graphs\" data-toggle=\"collapse\" aria-expanded=\"false\">\n\t\t\t\t<i class=\"fa fa-plus\"></i>\n\t\t\t\tAdd New\n\t\t\t</a>\n\t\t\t<div class=\"collapse in\" id=\"addGraph\">\n\t\t\t\t<a class=\"list-group-item\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\tplaceholder=\"name\" [(ngModel)]=\"newGraph.name\" />\n\t\t\t\t</a>\n\t\t\t\t<a class=\"list-group-item\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<span class=\"input-group-addon\">Directed</span>\n\t\t\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"newGraph.directed\"/>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t\t\t\t\t(click)=\"addGraph(newGraph)\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check\"></i>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n    </div>\n</div>\n"

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(347);


/***/ })

},[601]);
//# sourceMappingURL=main.bundle.js.map