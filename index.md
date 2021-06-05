# CIT 281 lab 06

## Outcome:

This lab had us set up a GitHub account and experiment with classes.   
We started by ceating a class *Book*.  
We then were able to create a library containing *Books* that could return information about the book and how many books were in the library.
   
**[lab 06 Repo](https://github.com/UO-CIT-Myles-P-D/cit281-lab06)**
   
## Code:    
     
**[Here](https://github.com/Myles-P-D/cit281-lab06/blob/main/lab-06.js)** is the full code and below is an excerpt from creating the first class *Book*   
    
```javascript
class Book 
{
    constructor(title, author, pubDate, isbn)
    {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
        this.isbn = isbn;
    }
}
```

## Images:      
     
This is an image of the program outputting the library, adding to the library, and deleting from the library.    
      
![library output](https://github.com/Myles-P-D/cit281-lab06/blob/main/bookOutput.png?raw=true "library output")
