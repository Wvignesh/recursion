 var output=[];

 function one(object){
      var input={}
      input.id=object.id;
      input.title=object.id;
      input.childrens=[];

      output.push(input);
      object.childrens.forEach(function(element){

          one(element)
      });
      
 }
 const result = [
     {
          "id": 1,
          "title": "Title 1",
          "childrens": [
               {
                    "id": 2,
                    "title": "Title 2",
                    "childrens": []
               }
          ]
     },
     {
          "id": 3,
          "title": "Title 3",
          "childrens": [
               {
                    "id": 4,
                    "title": "Title 4",
                    "childrens": [
                         {
                              "id": 5,
                              "title": "Title 5",
                              "childrens": []
                         }
                    ]
               }
          ]
     }
 ]
 
 result.forEach(function(obj){
      one(obj)
 });

 console.log(output);