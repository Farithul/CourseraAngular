import { Component, OnInit,Input,ViewChild,Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { JsonPipe, Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dish } from '../Shared/dish';
import { DISHES } from '../Shared/dishes';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CommentFeedback } from '../Shared/feedback';
import { comment } from '../Shared/comment';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  
  @ViewChild('fform') feedbackCommentFormDirective : any;

  feedbackCommentForm: FormGroup | any;
    
 dish: Dish[] | any;
 CommentFeedback: CommentFeedback[] | any;
 dishIds: string[] | any;
  prev: string | any;
  next: string | any;
  myObjArray :any =[]; 
  today: number | any;
  author :string | any;
  rating :string | any;
  comment :string | any;
  comments: comment[] | undefined;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,private fb: FormBuilder) { 
      this.createForm();

    }


  ngOnInit(): void {


    this.rating = 5;
   // First get the dish id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const IdFromRoute : any= Number(routeParams.get('id'));

  // Find the dish that correspond with the id provided in route.
 // this.dish = this.dishservice.getDish(IdFromRoute);
 this.dishservice.getDishes().subscribe((data: Dish[])=>{
  this.dish = data;
})  
 
 this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });


  }

  
  ratingSize: number = 5;
  updateRating(event : any) {
    this.ratingSize = event.value;
  }

  setPrevNext(dishId:any) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  createForm() {
    this.feedbackCommentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      comment: ['', [Validators.required, Validators.minLength(2)] ],
      rating: ['', [Validators.required, Validators.minLength(1)] ]
     
    });

    this.feedbackCommentForm.valueChanges
    .subscribe((data : any)  => this.onValueChanged(data));

  this.onValueChanged(); // (re)set validation messages now
    
  }

 
  onValueChanged(data?: any) {
    if (!this.feedbackCommentForm) { return; }
    const form = this.feedbackCommentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  formErrors : any = {
    'author': '',
    'comment': '',
    
  };

  validationMessages : any = {
    'author': {
      'required':      'Author Name is required.',
      'minlength':     'Author Name must be at least 2 characters long.',
      'maxlength':     'Author Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'Comments is required.',
      'minlength':     'Comments must be at least 2 characters long.',
     
    },
   
  };

  onSubmit() {

    this.today = Date.now();
    this.myObjArray.push(this.feedbackCommentForm.value);
  //this.comments?.push(this.feedbackCommentForm.value);
  //console.log(this.dish.comments)
    
    //console.log(this.myObjArray);
  //  console.log(JSON.stringify(this.myObjArray));
this.rating = 5;
    this.feedbackCommentForm.reset({
      author: '',
      comment: '',
rating : 5,
     
    });
  //  this.feedbackCommentFormDirective.resetForm();
  }
  
  
  
  goBack(): void {
    this.location.back();
  }

}
