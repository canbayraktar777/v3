import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class DataService {
    private dataUrl = "http://localhost:3000";
    private dataSet = new Subject();

    dataSet$ = this.dataSet.asObservable();

    publishData(data){
        this.dataSet.next(data);
    }

    constructor(private http: Http) { }

    getAllData(): Observable<[any]> {
        return this.http.get(this.dataUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

	addNewData() {
		return this.http.put(this.dataUrl, JSON.stringify({}))
			.map(res => res.json()).catch(this.handleError)
	}

	updateData(data){
		return this.http.post(this.dataUrl + '/' + data._id, data)
			.map(res => res.json()).catch(this.handleError)
	}

	addNewElement(data){
		data.elements.push(15);
		return this.updateData(data);
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
