import { Component } from '@angular/core';
import{Observable,of,map,first, animationFrames, takeWhile, endWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  studentList = ['mark','ram','sita','lisa'];
students : Observable<string[]> = of(this.studentList);




ngOnInit(): void {
  this.students.subscribe(data => {

console.log(data);


of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));

  of(1, 2, 3)
  .pipe(first())
  .subscribe((v) => console.log(`value: ${v}`));

  })
}



}



