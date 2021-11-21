export default function AuthHeader() {
    const token = JSON.parse(localStorage.getItem('userToken'));
    if (token) {
      // for Node.js Express back-end
      return { "Content-Type": "application/json", 'Authorization': 'Bearer ' + token};
    } else {
      return {};
    }
  }