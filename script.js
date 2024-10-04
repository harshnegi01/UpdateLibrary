document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   
    if (username === 'harsh' && password === 'harsh123') {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('borrowPage').classList.remove('hidden');
    } else {
        alert('Invalid username or password');
    }
}

function borrowBook() {
    const bookName = document.getElementById('borrowBookName').value;
    if (bookName) {
        document.getElementById('borrowMessage').innerText = `You have borrowed "${bookName}"`;
        document.getElementById('borrowBookName').value = ''; // Clear input
    } else {
        alert('Please enter a book name to borrow');
    }
}

function submitBook() {
    const bookName = document.getElementById('submitBookName').value;
    if (bookName) {
        document.getElementById('submitMessage').innerText = `You have submitted "${bookName}"`;
        document.getElementById('submitBookName').value = ''; 
    } else {
        alert('Please enter a book name to submit');
    }
}

function goToBorrow() {
    document.getElementById('submitPage').classList.add('hidden');
    document.getElementById('borrowPage').classList.remove('hidden');
}

function goToSubmit() {
    document.getElementById('borrowPage').classList.add('hidden');
    document.getElementById('submitPage').classList.remove('hidden');
}

function logout() {
    document.getElementById('borrowPage').classList.add('hidden');
    document.getElementById('submitPage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    alert('You have logged out');
}
