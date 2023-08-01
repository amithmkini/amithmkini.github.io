(function () {
    nameHover();
    'use strict';
    setSectionToggleEventHandler();
    skillHover();
})();

function setSectionToggleEventHandler() {
    // Add the click event handler to all buttons under the div with class toggle
    var toggleButtons = document.querySelectorAll('.toggle button');
    for (var i = 0; i < toggleButtons.length; i++) {
        toggleButtons[i].addEventListener('click', sectionToggle);
    }
}

function sectionToggle(e) {
    let button = e.target;
    hideAllSections();

    // Set the button to have the following style: border-color: var(--green); color: var(--green);
    button.style.borderColor = 'var(--green)';
    button.style.color = 'var(--green)';

    // Find the div with class "resume-section" that corresponds to the button 
    // that was clicked using the id attribute
    let sectionId = button.id;
    let section = document.querySelector(`.resume-section#${sectionId}`);
    // Show the section by adding "show" to the class list
    section.classList.add('show');
}

function hideAllSections() {
    // Set all toggle buttons to have the following style: border-color: var(--gray); color: var(--gray);
    var toggleButtons = document.querySelectorAll('.toggle button');
    for (var i = 0; i < toggleButtons.length; i++) {
        toggleButtons[i].style.borderColor = 'var(--gray)';
        toggleButtons[i].style.color = 'var(--gray)';
    }
    // Hide all sections
    var sections = document.querySelectorAll('.resume-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('show');
    }
}

function skillHover() {
    const skills = document.querySelectorAll('.skill');
    const container = document.getElementById('skill-container');

    skills.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            const skillLevel = skill.getAttribute('data-skill-level');
            container.style.setProperty('--fill-height', `${skillLevel}%`);
        });

        skill.addEventListener('mouseout', () => {
            container.style.setProperty('--fill-height', '0');
        });
    });
}

function nameHover() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;

    document.querySelector("h1").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
            return event.target.dataset.value[index];
            }
        
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 30);
    }
}