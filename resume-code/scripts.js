document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        {
            date: 'Dec 2022 - Present',
            title: 'Website Designer',
            description: 'I have honed advanced skills by crafting visually appealing and fully functional websites through adept theme customization, plugin integration and overall WordPress optimization.' <br> 
            'My dedication to providing high quality web solutions is evident through successful deployments across various projects.'
        },
        {
            date: 'Jan 2023 - May 2023',
            title: 'Bartender',
            description: 'Managed bar operations with a focus on inventory management, order fulfillment, and maintaining high quality service standards.'
        }
    ];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });

    const counter = document.querySelector(".counter-number");

    async function updateCounter(){
        let response = await fetch("https://vgwujcxdm7ewzuiqwo7fg4mngm0ixwgr.lambda-url.us-east-1.on.aws/");
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    }

    updateCounter(); // <-- Call the function here
});
