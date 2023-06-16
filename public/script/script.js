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
  const userResponse = confirm('Click "OK" if you want to delete the item. Click "Cancel" if you want to keep it.');
  if (userResponse === true) {
    formElement.submit();
    formElementServices.submit();
  } else {
    return false;
  }
}

function confirmEditCourse() {
  const formElementEditCourse = document.getElementById("editCoursesForm");
  const userResponseEditCourses = confirm(
    'Click "OK" if you want to edit the item. Click "Cancel" if you want to keep it.'
  );
  if (userResponseEditCourses === true) {
    formElementEditCourse.submit();
  } else {
    return false;
  }
}

function confirmEditService() {
  const formElementEditService = document.getElementById("editServicesForm");
  const userResponseEditServices = confirm(
    'Click "OK" if you want to edit the item. Click "Cancel" if you want to keep it.'
  );
  if (userResponseEditServices === true) {
    formElementEditService.submit();
  } else {
    return false;
  }
}

function confirmCreateElement() {
  const formElementCreateCourse = document.getElementById("createCoursesForm");
  const formElementCreateService =
    document.getElementById("createServicesForm");
  const userResponseCreateCourse = confirm(
    'Click "OK" if you want to create the item. Click "Cancel" to cancel it.'
  );
  if (userResponseCreateCourse === true) {
    formElementCreateCourse.submit();
    formElementCreateService.submit();
  } else {
    return false;
  }
}
