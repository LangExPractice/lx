document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('quizForm').addEventListener('submit', function(event) {
        event.preventDefault();

        //const dropdownAnswer = document.getElementById('dropdownQuestion').value;
        const textAnswer = document.getElementById('textQuestion').value.toLowerCase().trim();
        const textAnswer2 = document.getElementById('textQuestion2').value.toLowerCase().trim();
        const textAnswer3 = document.getElementById('textQuestion3').value.toLowerCase().trim();
        const textAnswer4 = document.getElementById('textQuestion4').value.toLowerCase().trim();
        const textAnswer5 = document.getElementById('textQuestion5').value.toLowerCase().trim();
        const textAnswer6 = document.getElementById('textQuestion6').value.toLowerCase().trim();
        const textAnswer7 = document.getElementById('textQuestion7').value.toLowerCase().trim();
        const textAnswer8 = document.getElementById('textQuestion8').value.toLowerCase().trim();
        const textAnswer9 = document.getElementById('textQuestion9').value.toLowerCase().trim();
        const textAnswer10 = document.getElementById('textQuestion10').value.toLowerCase().trim();
        const textAnswer11 = document.getElementById('textQuestion11').value.toLowerCase().trim();
        const textAnswer12 = document.getElementById('textQuestion12').value.toLowerCase().trim();
        const textAnswer13= document.getElementById('textQuestnam13').value.toLowerCase().trim();
        //const fruitSelected = document.querySelector('input[name="fruit"]:checked')?.value;

        const correctAnswers = {
            //dropdown: 'blue',
            text: 'chat',
            text2: 'famille',
            text3: 'montagne',
            text4: 'poids',
            text5: 'ècouter',
            text6: 'eau',
            text7: 'cœur',
            text8: 'couteau',
            text9: 'peindre',
            text10: 'parfum',
            text11: 'mettre',
            text12: 'mention',
            text13: 'demain'
            //fruit: 'banana'
        };

        const results = [];
        //results.push(`Your favorite color: ${dropdownAnswer} - ${dropdownAnswer === correctAnswers.dropdown ? 'Correct' : 'Incorrect'}`);
        results.push(`Word 1: ${textAnswer} - ${textAnswer === correctAnswers.text ? 'Correct' : 'Incorrect'}`);
        results.push(`Word 2: ${textAnswer2} - ${textAnswer2 === correctAnswers.text2 ? 'Correct' : 'Incorrect'}`);
        results.push(`Word 3: ${textAnswer3} - ${textAnswer3 === correctAnswers.text3 ? 'Correct' : 'Incorrect'}`);
        results.push(`Word 4: ${textAnswer4} - ${textAnswer4 === correctAnswers.text4 ? 'Correct' : 'Incorrect'}`);
        results.push(`Word 5: ${textAnswer5} - ${textAnswer5 === correctAnswers.text5 ? 'Correct' : 'Incorrect'}`);
        results.push(`Word 6: ${textAnswer6} - ${textAnswer6 === correctAnswers.text6 ? 'Correct' : 'Incorrect'}`);
        results.push(`Word 7: ${textAnswer7} - ${textAnswer7 === correctAnswers.text7 ? 'Correct' : 'Incorrect'}`);
        results.push(`Word 8: ${textAnswer8} - ${textAnswer8 === correctAnswers.text8 ? 'Correct' : 'Incorrect'}`);
        results.push(`Word 9: ${textAnswer9} - ${textAnswer9 === correctAnswers.text9 ? 'Correct' : 'Incorrect'}`);
        results.push(`Word 10: ${textAnswer10} - ${textAnswer10 === correctAnswers.text10 ? 'Correct' : 'Incorrect'}`);
        results.push(`Word 11: ${textAnswer11} - ${textAnswer11 === correctAnswers.text11 ? 'Correct' : 'Incorrect'}`);
        results.push(`Word 12: ${textAnswer12} - ${textAnswer12 === correctAnswers.text12 ? 'Correct' : 'Incorrect'}`);
        results.push(`Word 13: ${textAnswer13} - ${textAnswer13 === correctAnswers.text13 ? 'Correct' : 'Incorrect'}`);
        //results.push(`Selected fruit: ${fruitSelected} - ${fruitSelected === correctAnswers.fruit ? 'Correct' : 'Incorrect'}`);

        document.getElementById('result').innerHTML = results.join('<br>');
    });
});


