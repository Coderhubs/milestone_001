document.addEventListener('DOMContentLoaded', function () {
    var skillsButton = document.getElementById('toggleSkillsButton');
    var skillsContent = document.querySelector('.toggle-contents');
    var educationButton = document.getElementById('toggleEducationButton');
    var educationContent = document.querySelector('.toggle-list');
    // Initialize content display to 'none'
    skillsContent.style.display = 'none';
    educationContent.style.display = 'none';
    // Toggle skills content visibility
    skillsButton.addEventListener('click', function () {
        if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
            skillsContent.style.display = 'block';
            skillsButton.textContent = 'Hide';
        }
        else {
            skillsContent.style.display = 'none';
            skillsButton.textContent = '+';
        }
    });
    // Toggle education content visibility
    educationButton.addEventListener('click', function () {
        if (educationContent.style.display === 'none' || educationContent.style.display === '') {
            educationContent.style.display = 'block';
            educationButton.textContent = 'Hide';
        }
        else {
            educationContent.style.display = 'none';
            educationButton.textContent = '+';
        }
    });
});
