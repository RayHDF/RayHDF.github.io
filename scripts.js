const skills = [
    { name: 'JavaScript', level: 85, category: 'frontend', icon: 'fab fa-js' },
    { name: 'React', level: 90, category: 'frontend', icon: 'fab fa-react' },
    { name: 'CSS', level: 70, category: 'frontend', icon: 'fab fa-css3-alt' },
    { name: 'Node.js', level: 75, category: 'backend', icon: 'fab fa-node-js' },
    { name: 'Python', level: 95, category: 'backend', icon: 'fab fa-python' },
    { name: 'MongoDB', level: 80, category: 'backend', icon: 'fas fa-database' },
    { name: 'Git', level: 85, category: 'tools', icon: 'fab fa-git-alt' },
    { name: 'Docker', level: 70, category: 'tools', icon: 'fab fa-docker' },
    { name: 'Android Studio', level: 85, category: 'tools', icon: 'fab fa-android' },
    { name: 'Flutter', level: 85, category: 'tools', icon: 'fab fa-flutter' }
];

const skillsContainer = document.querySelector('.skills-container');
const filterButtons = document.querySelectorAll('.filter-btn');

function createSkillCard(skill) {
    return `
        <div class="skill-card" data-category="${skill.category}">
            <div class="skill-header">
                <i class="${skill.icon}"></i>
                <h3>${skill.name}</h3>
            </div>
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