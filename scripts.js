const skills = [
    { name: 'JavaScript', level: 75, category: 'frontend' },
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'CSS', level: 60, category: 'frontend' },
    { name: 'Node.js', level: 50, category: 'backend' },
    { name: 'Python', level: 95, category: 'backend' },
    { name: 'MongoDB', level: 80, category: 'backend' },
    { name: 'Git', level: 70, category: 'tools' },
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'Android Studio', level: 85, category: 'tools' },
    { name: 'Flutter', level: 85, category: 'tools' },
];

const skillsContainer = document.querySelector('.skills-container');
const filterButtons = document.querySelectorAll('.filter-btn');

function createSkillCard(skill) {
    return `
        <div class="skill-card" data-category="${skill.category}">
            <h3>${skill.name}</h3>
            <div class="skill-level">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `;
}

function displaySkills(category = 'all') {
    const filteredSkills = category === 'all' 
        ? skills 
        : skills.filter(skill => skill.category === category);
    
    skillsContainer.innerHTML = filteredSkills.map(createSkillCard).join('');
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displaySkills(button.dataset.filter);
    });
});

displaySkills();