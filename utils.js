export function getUserEmail() {
    const cookies = document.cookie.split('; ');
    const emailCookie = cookies.find(cookie => cookie.startsWith('userEmail='));
    console.log(cookies);
    return emailCookie ? emailCookie.split('=')[1] : null;
}