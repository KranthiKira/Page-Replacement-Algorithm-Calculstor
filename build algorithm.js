
    function solver(){
        document.getElementById("ab1").innerHTML="Solution Visualization ";
        const f=document.forms["myform"]["frames"].value;

        console.log(f);
        var victory=document.forms["myform"]["selector"].value;
     if(victory === "0"){ 

        const p=document.forms["myform"]["refer"].value;
        const p1=p.replace(/ /g,"");
        const p2=p1.replace(/[^a-zA-Z 0-9]+/g,"");
        let capacity = document.forms["myform"]["frames"].value;
        const pg=pageFaults1(p2, p2.length, capacity);
        const len=p2.length;
        const dif=len-pg;
        const hitrat=eval((dif/len)*100);
        const faultrat=eval((pg/len)*100);
        document.getElementById("ab").innerText="The No.Of Page Faults are : " + pg;
       document.getElementById("ab2").innerHTML=" The No.Of References are : " + p2.length;
       document.getElementById("ab3").innerHTML="The References entered : " + p2;
       document.getElementById("ab4").innerHTML="The No.of Hits are : " + dif;
       document.getElementById("ab5").innerHTML="Hit rate : " + dif+"/"+len +" = " + hitrat + "%";
       document.getElementById("ab6").innerHTML="Fault rate : "+ pg+"/"+len + " = " + faultrat + "%";
     }else if(victory === "1"){
        let p=document.forms["myform"]["refer"].value;
        const p1=p.replace(/ /g,"");
        const p2=p1.replace(/[^a-zA-Z 0-9]+/g,"");
        let capacity = document.forms["myform"]["frames"].value;
        const pg=pageFaults2(p2, p2.length, capacity);
        const len=p2.length;
        const dif=len-pg;
        const hitrat=eval((dif/len)*100);
        const faultrat=eval((pg/len)*100);
        document.getElementById("ab").innerText="The No.Of Page Faults are : " + pageFaults2(p2, p2.length, capacity);
        document.getElementById("ab2").innerHTML=" The No.Of References are : " + p2.length;
        document.getElementById("ab3").innerHTML="The References entered : " + p2;
        document.getElementById("ab4").innerHTML="The No.of Hits are : " + dif;
        document.getElementById("ab5").innerHTML="Hit rate : " + dif+"/"+len +" = " + hitrat + "%";
        document.getElementById("ab6").innerHTML="Fault rate : "+ pg+"/"+len + " = " + faultrat + "%";
    }
    else{
        let p=document.forms["myform"]["refer"].value;
        const p1=p.replace(/ /g,"");
        const p2=p1.replace(/[^a-zA-Z 0-9]+/g,"");
        const pg=optimal(p2, p2.length);
        const len=p2.length;
        const dif=len-pg;
        const hitrat=eval((dif/len)*100);
        const faultrat=eval((pg/len)*100);
        document.getElementById("ab").innerText="The No.Of Page Faults are : " + pg;
        document.getElementById("ab2").innerHTML=" The No.Of References are : " + p2.length;
        document.getElementById("ab3").innerHTML="The References entered : " + p2;
        document.getElementById("ab4").innerHTML="The No.of Hits are : " + dif;
        document.getElementById("ab5").innerHTML="Hit rate : " + dif+"/"+len +" = " + hitrat + "%";
        document.getElementById("ab6").innerHTML="Fault rate : "+ pg+"/"+len + " = " + faultrat + "%";
    }
        
    }