        const toggle = document.getElementById('darkmode-toggle');
        toggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
        });