document.addEventListener('DOMContentLoaded', () => {
    const skillsButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
    const skillsContent = document.querySelector('.toggle-contents') as HTMLElement;
    
    const educationButton = document.getElementById('toggleEducationButton') as HTMLButtonElement;
    const educationContent = document.querySelector('.toggle-list') as HTMLElement;
   
    // Initialize content display to 'none'
    skillsContent.style.display = 'none'; 
    educationContent.style.display = 'none';  

    // Toggle skills content visibility
    skillsButton.addEventListener('click', () => {
        if (skillsContent.style.display === 'none' || skillsContent.style.display === '') {
            skillsContent.style.display = 'block';
            skillsButton.textContent = 'Hide'; 
        } else {
            skillsContent.style.display = 'none';
            skillsButton.textContent = '+'; 
        }
    });
    
    // Toggle education content visibility
    educationButton.addEventListener('click', () => {
        if (educationContent.style.display === 'none' || educationContent.style.display === '') {
            educationContent.style.display = 'block';
            educationButton.textContent = 'Hide'; 
        } else {
            educationContent.style.display = 'none';
            educationButton.textContent = '+';
        }
    });
});
