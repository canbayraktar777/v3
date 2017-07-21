import { Component, OnInit } from '@angular/core';
import * as algo from 'algorithms';

@Component({
  selector: 'app-avltree',
  templateUrl: './avltree.component.html',
  styleUrls: ['./avltree.component.css']
})
export class AVLTreeComponent implements OnInit {

  constructor() { }

	tree;
	dataValue;

  ngOnInit() {
	  this.tree = new algo['DataStructures']['AVLTree']();

	  console.log(this.tree);
  }
  addNew = function(){
	  this.tree.insert(this.dataValue);
  }

}
