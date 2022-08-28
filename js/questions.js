(function(){
    const titlepreguntas = [...document.querySelectorAll('.preguntas__title')];
    console.log(titlepreguntas)

    titlepreguntas.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('preguntas__padding--add');
            question.children[0].classList.toggle('preguntas__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();