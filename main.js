var name_array=[];

function submit(){
    var display_array=[];

    for( var j=1; j<=4;j++){
        var name=document.getElementById("name_of_the_student_"+j).value;
        console.log (name);
        name_array.push(name);
    }

    console.log (name_array);

    var len=name_array.length;
    console.log (len);

    for(var i=0;i<len;i++){
        display_array.push("<h4> Name-"+name_array[i]+"</h4>");
        console.log (display_array);
    }

    document.getElementById("display_name_with_commas").innerHTML=display_array;

    var remove_comma=display_array.join(" ");
    console.log (remove_comma);
    document.getElementById("display_name_without_commas").innerHTML = remove_comma;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}

function sorting(){
    name_array.sort();
    console.log (name_array);

    var len=name_array.length;
    console.log (len);
var display_array = [];
    for(var i=0;i<len;i++){
        display_array.push("<h4> Name-"+name_array[i]+"</h4>");
        console.log (display_array);
    }
    var remove_comma=display_array.join(" ");
    console.log (remove_comma);
    document.getElementById("display_name_without_commas").innerHTML = remove_comma; 
}

function new_update(){
     document.getElementById("display_name_without_commas").innerHTML = "<h1>"+ name_array+"</h1>";
}