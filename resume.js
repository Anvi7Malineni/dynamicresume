(function () {
  function loadJson(file,callback) {
    var rawFile=new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET",file,true);
    rawFile.onreadystatechange =function () {
      if (rawFile.readyState === 4 & rawFile.status == "200") {
        callback(rawFile.responseText);

      }

    }
   rawFile.send(null);

      }
      loadJson("resume.json",function (text) {
      var data=JSON.parse(text);
      console.log(data);
      leftData(data.profile);
      console.log(data);
      Education(data.Education);
      console.log(data);
      Skills(data.Technicalskills);
    });
    var left=document.querySelector(".leftDiv");
    var right=document.querySelector(".rightDiv");
    function leftData(leftdetails) {
      var image=document.createElement("img");
      image.src=leftdetails.image;
      image.alt="Prifile Image";
      left.appendChild(image);

      var h2=document.createElement("h2");
      h2.textContent=leftdetails.name;
      left.appendChild(h2);

      var h3=document.createElement("h3");
      h3.textContent=leftdetails.Branch;
      left.appendChild(h3);

      var h4=document.createElement("h4");
      h4.textContent=leftdetails.mbnum;
      left.appendChild(h4);

      var h5=document.createElement("h5");
      h5.textContent=leftdetails.email;
      left.appendChild(h5);

      //right div data

      var co=document.createElement("h1");
      co.textContent="Carrer Object";
      right.appendChild(co);
      right.appendChild(document.createElement("hr"));

      let p=document.createElement("p");
      p.textContent=leftdetails.CarrerObject;
      right.appendChild(p);

    }
    //create educational details
    function Education(edu) {
      var educational=document.createElement("h1");
       educational.textContent="Education Information";
       right.appendChild(educational);
       right.appendChild(document.createElement("hr"));

      for(i in edu){
        let h3=document.createElement("h3");
        h3.textContent=edu[i].Degree;
        right.appendChild(h3);

        let ul=document.createElement("ul");
        right.appendChild(ul);

        //create lists(l1,l2,l3)
        let li1=document.createElement("li");
        li1.textContent="College: "+edu[i].College;
        ul.appendChild(li1);

        let li2=document.createElement("li");
        li2.textContent="Branch: "+edu[i].Branch;
        ul.appendChild(li2);

        let li3=document.createElement("li");
        li3.textContent="Marks: "+edu[i].Marks;
        ul.appendChild(li3);

        let li4=document.createElement("li");
        li4.textContent="Education Completion: "+edu[i].EndDate;
        ul.appendChild(li4);

      }

    }

   function Skills(skill) {
     var sk=document.createElement("h1");
     sk.textContent="Technical Skills";
     right.appendChild(sk);
    right.appendChild(document.createElement("hr"));

    var p=document.createElement("p");
    p.textContent=skill.os;
    right.appendChild(p);

    var p1=document.createElement("p");
    p1.textContent=skill.ps;
    right.appendChild(p1);

   }

  })();
