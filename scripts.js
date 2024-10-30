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

const projects = [
    {
        title: 'Face Recognition Attendance Mobile App',
        description: 'A Flutter app that uses geofencing and Python with OpenCV to recognize faces and mark attendance.',
        skills: ['Flutter', 'Python', 'Flask', 'OpenCV'],
        github: '#'
    },
    {
        title: 'Habit Tracker App',
        description: 'A habit tracking app built with Android Studio (Kotlin) and Firebase.',
        skills: ['Android Studio', 'Kotlin', 'Firebase'],
        github: '#'
    },
    {
        title: 'Simple Diabetes Prediction App',
        description: 'A simple diabetes prediction app built with TKinter and Machine Learning.',
        skills: ['Python', 'Machine Learning', 'Data Science', 'TKinter'],
        github: '#'
    },
    {
        title: '2D Rogue-like Game',
        description: 'A 2D rogue-like dungeon game built with Unity.',
        skills: ['Unity', 'C#'],
        github: '#'
    },
];

const skillsContainer = document.querySelector('.skills-container');
const projectsContainer = document.querySelector('.projects-container');
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

function createProjectCard(project) {
    const skillBadges = project.skills
        .map(skill => `<span class="skill-badge">${skill}</span>`)
        .join('');
        
    return `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-skills">
                ${skillBadges}
            </div>
            <a href="${project.github}" class="project-link">
                <i class="fab fa-github"></i> Private Repository
            </a>
        </div>
    `;
}

function displayContent(filter = 'skills') {
    skillsContainer.style.display = filter === 'skills' ? 'grid' : 'none';
    projectsContainer.style.display = filter === 'projects' ? 'grid' : 'none';
    
    if (filter === 'skills') {
        skillsContainer.innerHTML = skills.map(createSkillCard).join('');
    } else {
        projectsContainer.innerHTML = projects.map(createProjectCard).join('');
    }
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayContent(button.dataset.filter);
    });
});

displayContent('skills');