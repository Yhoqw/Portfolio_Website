console.log("Portfolio Home Loaded");

const glow = document.querySelector('.cursor-glow');        //Method that allows you to select HTML elements
const dot = document.querySelector('.cursor-dot');
const circle = document.querySelector('.cursor-circle');
 
//Cursor glow
if (glow) {

  document.addEventListener('mousemove', e => {
    requestAnimationFrame(() => {   
      //glow.style.left = `${e.clientX}px`;
      //glow.style.top = `${e.clientY}px`;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    }); });
}

//Hover effect for links
if (dot) {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            dot.classList.add('hover');
        });
        link.addEventListener('mouseleave', () => {
            dot.classList.remove('hover');
        });
    });

    //Dot over text
    const textElements = document.querySelectorAll('h1, h2, p, a');
    textElements.forEach(text_element => {
        text_element.addEventListener('mouseenter', () => dot.classList.add('text-hover'));
        text_element.addEventListener('mouseleave', () => dot.classList.remove('text-hover'));
    })
}

//typing animation for header
const headerTextElement = document.querySelector('header p');
if (headerTextElement) {
    const text = headerTextElement.textContent;
    headerTextElement.textContent = '';
    let i = 0
    let isDeleting = false;

    function typeWriter() {
        if (isDeleting) {
            // Deleting
            headerTextElement.textContent = text.substring(0, i - 1);
            i--;
            if (i === 0) {
                isDeleting = false;
            }
        } 
        else {
            // Typing
            headerTextElement.textContent = text.substring(0, i + 1);
            i++;
            if (i === text.length) 
            {    isDeleting = true;  }
        }
        const typingSpeed = isDeleting ? 50 : 150;
        const delay = i === text.length ? 2000 : typingSpeed; // Pause at the end
        setTimeout(typeWriter, delay);        
    }
    typeWriter();
}

// Click animation ripple effect
function showClickAnimation(e) {
    const ripple = document.createElement('div');
    // Use the class we defined in our CSS for the animation
    ripple.className = 'click-ripple';
    document.body.appendChild(ripple);

    // Position the ripple at the cursor's location
    ripple.style.top = `${e.clientY}px`;
    ripple.style.left = `${e.clientX}px`;

    // Remove the ripple from the DOM after the animation is complete
    ripple.addEventListener('animationend', () => {
        document.body.removeChild(ripple);
    });
}
document.addEventListener('click', showClickAnimation);