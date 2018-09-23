var quizAnswers=function(question1,question2,question3,question4,question5,question6,question7,question8){
  return question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8;
};
$(document).ready(function(){
  $("form#theo-quiz").submit(function(event){
    event.preventDefault();
    var nameDisplay = $("input#name").val();
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt( $("input:radio[name=question2]:checked").val());
    var question3 =parseInt( $("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var question6 = parseInt($("input:radio[name=question6]:checked").val());
    var question7 = parseInt($("input:radio[name=question7]:checked").val());
    var question8 = parseInt($("input:radio[name=question8]:checked").val());
    var result=quizAnswers(question1,question2,question3,question4,question5,question6,question7,question8);

    $("#shows").text(result);

    // event.preventDefault();

  });
});
