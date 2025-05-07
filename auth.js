function checkSession() {
  const token = sessionStorage.getItem('authToken');
  const role = sessioStorage.getItem('role');
  const infoBox = document.getElementById('session-info');
  const logoutBtn = document.getElementById('logout-btn');

  if (infoBox) {
    if (token) {
      infoBox.innerText = `Token: ${token} | Vai trò: ${role}`;
      if (logoutBtn) logoutBtn.style.display = 'inline-block';
    } else {
      infoBox.innerText = 'Bạn chưa đăng nhập.';
      if (logoutBtn) logoutBtn.style.display = 'none';
    }
  }
}
