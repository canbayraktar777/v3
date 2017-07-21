 import {
	Component, OnInit, ElementRef, ViewChildren,
 	NgZone, ChangeDetectorRef, ApplicationRef
} from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import { Data, DataNode } from './data';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

    allData : Data[];
	selectedData : Data = new Data();
	selectedElement = new DataNode();

    constructor(
		private dataService : DataService,
		private ngzone: NgZone,
		private cdref: ChangeDetectorRef,
		private appref: ApplicationRef
	) { }

    ngOnInit() {
        //this.getAllData();
    }

	@ViewChildren('input') inputElRef;
	ngAfterViewInit(){
		/*
		this.inputElRef.changes.subscribe((a) => {
			this.ngzone.runOutsideAngular( () => {
	      		Observable.fromEvent(a.first.nativeElement, 'keyup')
	        		.debounceTime(1000)
	        		.subscribe(keyboardEvent => {
	          			this.updateData(this.selectedData);
	          			this.cdref.detectChanges();
	        		});

	    	});

		});
		*/
	}
    getAllData = function(){
        this.dataService.getAllData()
                   .subscribe(
                       allData  => {
						   this.allData = allData;
						   if( !this.selectedData._id ){
							   this.selectData(this.allData[0]);
						   }
					   },
                       error =>  this.errorMessage = <any>error);
	}

	selectData = function(data){
		this.selectedData = data;
	}
	addNewData = function(data){
		this.dataService.addNewData().subscribe(
			newOne  => {
				this.allData.push(newOne);
				this.selectData(newOne);
			},
			error =>  this.errorMessage = <any>error);
	}
	updateData = function(data){
		this.dataService.updateData(data).subscribe(
			updated  => {
				//console.log('data updated', updated);
			},
			error =>  this.errorMessage = <any>error);
	}
	addNewElement = function(data) {
		this.dataService.addNewElement(data).subscribe(
			updated  => {
				console.log('data updated', updated);
			},
			error =>  this.errorMessage = <any>error);
	}
	dataElementClicked = function(index, el){
		this.selectedElement.value = el;
		this.selectedElement.index = index;
	}
}
