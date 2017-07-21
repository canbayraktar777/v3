import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GraphService {
	private serverUrl = "http://localhost:3000/api";
	private graphUrl = this.serverUrl + "/graph/";
    private vertexUrl = "/vertex/";
	private edgeUrl = "/edge/";

	private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

	getGraphs(){
		return this.http.get(this.graphUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}
	addGraph(graph){
		return this.http.put(this.graphUrl, JSON.stringify(graph), {headers:this.headers})
			.map(res => res.json()).catch(this.handleError)
	}
	deleteGraph(graph){
		return this.http.delete(this.graphUrl + graph._id, {headers:this.headers});
	}

    getAllVertex = function(graphId) {
        return this.http.get(this.graphUrl+graphId+this.vertexUrl)
                    	.map(this.extractData)
                    	.catch(this.handleError);
    }
	addVertex(vertex) {
		return this.http.put(this.graphUrl+vertex.graphId+this.vertexUrl, JSON.stringify(vertex), {headers:this.headers})
			.map(res => res.json()).catch(this.handleError)
	}
	deleteVertex(vertex, callback){
		this.http.delete(this.graphUrl+vertex.graphId+this.vertexUrl+vertex._id, {headers:this.headers}).subscribe((res)=>{
			callback(res);
		});
	}
	updateVertex(vertex, callback){
		this.http.post(this.graphUrl+vertex.graphId+this.vertexUrl+vertex._id, vertex, {headers:this.headers}).subscribe((res)=>{
			callback(res);
		});
	}

	getAllEdge(graph){
		return this.http.get(this.graphUrl+graph._id+this.edgeUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}
	addEdge(edge){
		return this.http.put(this.graphUrl+edge.graphId+this.edgeUrl, JSON.stringify(edge), {headers:this.headers})
			.map(res => res.json()).catch(this.handleError)
	}
	deleteEdge(edge){
		return this.http.delete(this.graphUrl+edge.graphId+this.edgeUrl+edge._id, {headers:this.headers});
	}
	updateEdge(edge){
		return this.http.post(this.graphUrl+edge.graphId+this.edgeUrl+edge._id, edge, {headers:this.headers});
	}

	private extractData(res: Response) {
		let body = res.json();
        return body || { };
    }
    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
