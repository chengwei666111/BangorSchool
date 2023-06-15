let menu_link = document.getElementById('menu_links');

function collapse_menu() {
    menu_link.style.right = "0";
}

function uncollapse_menu() {
    menu_link.style.right = "-200px";
}

function confirmDelete() {
  // alert('Click OK if you want to delete the course')
  const formElement = document.getElementById("deleteCoursesForm");
  const formElementServices = document.getElementById("deleteServicesForm");
  // console.log(formElement);
  const userResponse = confirm("Are you sure?");
  if (userResponse === true) {
    formElement.submit();
    formElementServices.submit();
  } else {
    return false;
  }
}
