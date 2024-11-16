// Navigate to the second page
document.getElementById('yes-btn').addEventListener('click', function () {
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('second-page').classList.remove('hidden');
});

// Handle "No" on the first page
document.getElementById('no-btn').addEventListener('click', function () {
    alert('Chup Chap Se Yes Karo Aaye Bade No Karne Wale');
});

// Navigate to the third page if "Yes, I’m Sure!" is clicked
document.getElementById('final-yes-btn').addEventListener('click', function () {
    document.getElementById('second-page').classList.add('hidden');
    document.getElementById('third-page').classList.remove('hidden');
});

// Handle "No" on the second page
document.getElementById('final-no-btn').addEventListener('click', function () {
    alert('Are Yar Chlo Thik Hai');
    document.body.innerHTML = `
        <div style="text-align: center; color: #fff;">
            <h1>Waps Back Jao Or Yes Karo Jada Na Itrao Mat Picha Ni Choudunga ❤️</h1>
        </div>`;
});

// Handle "Yes" on the third page
document.getElementById('love-yes-btn').addEventListener('click', function () {
    // Display the final page with a hugging GIF
    document.body.innerHTML = `
        <div style="text-align: center; color: #fff;">
            <h1>Hug Time! 🤗</h1>
            <p>Awww! You love me! Here’s a hug for you! ❤️</p>
            <img src="https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif" 
                alt="Hugging GIF" 
                style="border-radius: 10px; max-width: 100%; height: auto;">
        </div>`;
});


// Handle "No" on the third page
document.getElementById('love-no-btn').addEventListener('click', function () {
    alert('It’s okay! Hug me anyway! 🤗');
    document.body.innerHTML = `
        <div style="text-align: center; color: #fff;">
            <h1>Hug Time! 🤗</h1>
            <p>Even if you said no, I’ll still love you forever. ❤️</p>
            <img src="https://source.unsplash.com/400x300/?love,hug" alt="Hug" style="border-radius: 10px;">
        </div>`;
});
