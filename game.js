var number = 15;
var intervalId;
var rightCount = 0;
var wrongCount = 0;
var answerKey = [{id:"ques1",ans:"a",user:"2"},
                 {id:"ques2",ans:"c",user:"2"},
                 {id:"ques3",ans:"d",user:"2"},
                 {id:"ques4",ans:"a",user:"2"},
                 {id:"ques5",ans:"b",user:"2"},
                 {id:"ques6",ans:"b",user:"2"},
                 {id:"ques7",ans:"a",user:"2"},
                 {id:"ques8",ans:"d",user:"2"}];
var unsolvedCount = answerKey.length;

$(document).ready(function(){
    $("#myDiv").hide();
    $("#result").hide();
    $("#timeup").hide();
    $("#submit").on("click",function(){
        showAnswers();
    });
    $(".radio").on("click", function(){
        // alert("clicked");
        var ansId = $(this).attr("id");
        var quesId = $($(this).parent().parent().siblings()).attr("id");
        $.each(answerKey,function(index,value){
            if(value['id']== quesId){
                if(value['ans'] == ansId){
                    value['user'] = "1";
                    // rightCount++;
                }
                else{
                    value['user'] = "0";
                    // wrongCount++;
                }
            }
        });
    });
});

function clickButton(){
    $("#btn").hide();
    $("#myDiv").show();
    run();
}
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
    function decrement() {
    number--;

    $("#show-number").html("<h2>" + number + "</h2>");

    if (number === 0) {
        $("#myDiv").hide();
        $("#timeup").show();
        var timeout = setTimeout(function(){
            $("#timeup").hide();
            showAnswers();
        }, 2000);

    }
  }
//   function stop() {
//     showAnswers();
//   }
  function showAnswers(){

    $.each(answerKey,function(index,value){
        if(value['user'] == "1"){
            rightCount++;
        }
        else if(value['user'] == "0"){
            wrongCount++;
        }
        
    });
    clearInterval(intervalId);
    $("#myDiv").hide();
    $("#right").text(rightCount);
    $("#wrong").text(wrongCount);
    $("#unsolved").text(unsolvedCount-rightCount-wrongCount);
    $("#result").show();
  }


