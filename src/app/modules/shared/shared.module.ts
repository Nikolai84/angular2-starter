import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms';
// INFO Widget Module just declarations no providers !
// hold the common components, directives, and pipes and
// share them with the modules that need them
@NgModule({
	imports:      [ CommonModule ],
	exports:      [
		CommonModule, ReactiveFormsModule ]
})
export class SharedModule { }