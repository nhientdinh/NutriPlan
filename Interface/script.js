function goBack() {
    window.history.back();
  }
  
  function goHome() {
    window.location.href = "home.html";
  }
  
  function goSaved() {
    window.location.href = "saved.html";
  }
  
  function saveRecipe(title, calories) {
    let saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];
  
    saved.push({ title, calories });
  
    localStorage.setItem("savedRecipes", JSON.stringify(saved));
  
    alert("Recipe saved!");
  }