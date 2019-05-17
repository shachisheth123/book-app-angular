import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';
import { ActivatedRoute } from '@angular/router';


@Component({

    selector: "book-list",
    templateUrl: "./book-list.component.html"

})
export class BookListComponent implements OnInit {

    books:Book[];
    book:Book[];

    constructor(private bookService:BookService , private route:ActivatedRoute  ){}//used for tracking what is current url

    ngOnInit():void{
        //we have to read the route parameters
        this.route.paramMap.subscribe((map)=>{
            let category=map.get("category"); 
            console.log(category); 
            this.bookService.findBooksBycategory(category).subscribe((data)=>{
                this.books=data;

            })  
        });
        
   
            
            
            }
            
    }
       
        //alert("Hi");
    

//    books = [
//         {
//             "bookId": 101,
//             "imageUrl": "assets/photos/her_last_wish.jpeg",
//             "title": "Her Last Wish",
//             "price": 250,
//             "rating": 3.2,
//             "category": "Biographies"
//         },
//         {
//             "bookId": 102,
//             "imageUrl": "assets/photos/lifes_amazing_secrets.jpeg",
//             "title": "Lifes Amazing Secrets",
//             "price": 300,
//             "rating": 4,
//             "category": "Biographies"
//         },
//         {
//             "bookId": 103,
//             "imageUrl": "assets/photos/secret_of_nagas.jpeg",
//             "title": "Secret of Nagas",
//             "price": 400,
//             "rating": 4.9,
//             "category": "Biographies"
//         }
//     ];



