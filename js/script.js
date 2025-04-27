// header starts
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active"); // إظهار/إخفاء القائمة
    });
});

/// header ends


$(document).ready(function() {
    $('#calendar').fullCalendar({
      locale: 'ar',  // تغيير اللغة إلى العربية
      defaultView: 'month'
    });
  });



let body = document.body;
let profile = document.querySelector('.header .flex .profile');
document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    searchForm.classList.remove('active');

}

let searchForm = document.querySelector('.header .flex .search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    profile.classList.remove('active');

}

let sideBar = document.querySelector('.side-bar');
document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');

}

document.querySelector('.side-bar .close-btn').onclick = () =>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');

}



//  كود تبديل الفورم تبع المديير والمعلم وولي الامر والطالب كلهن في نفس الكود 

function showForm(userType, element) {
    document.querySelectorAll('.form').forEach(form => {
        form.classList.remove('active-form');
        form.style.display = 'none'; 
    });

    let activeForm = null;
    if (userType === 'teacher') {
        activeForm = document.getElementById('teacherForm');
    } else if (userType === 'admin') {
        activeForm = document.getElementById('adminForm');
    } else if (userType === 'student') {
        activeForm = document.getElementById('stdForm');
    } else if (userType === 'parent') {
        activeForm = document.getElementById('parentForm');
    }

    setTimeout(() => {
        activeForm.style.display = 'block';
        activeForm.classList.add('active-form');

        activeForm.style.opacity = '1';
        activeForm.style.transform = 'translateX(0)';
    }, 50);

        
    document.querySelectorAll('.icon').forEach(icon => {
        icon.classList.remove('active-icon');
    });

    element.classList.add('active-icon');

    if (userType === 'teacher') {
        document.getElementById('icon1').querySelector('img').src = "images/teacher.png";
        document.getElementById('icon2').querySelector('img').src = "images/manager-off.png";  
    } else if (userType === 'admin') {
        document.getElementById('icon2').querySelector('img').src = "images/manager.png";
        document.getElementById('icon1').querySelector('img').src = "images/teacher-off.png";  
    } else if (userType === 'student') {
        document.getElementById('icon3').querySelector('img').src = "images/std-on.png";
        document.getElementById('icon4').querySelector('img').src = "images/par-off.png";  
    } else if (userType === 'parent') {
        document.getElementById('icon4').querySelector('img').src = "images/par-on.png";
        document.getElementById('icon3').querySelector('img').src = "images/std-off.png";  
    }
}

window.onload = function() {
    const currentPage = window.location.pathname;

    if (currentPage.includes("teacher") || currentPage.includes("admin")) {
        const defaultForm = localStorage.getItem('defaultForm') || 'teacher';  
        showForm(defaultForm, document.getElementById('icon1'));  
    } else if (currentPage.includes("student") || currentPage.includes("parent")) {
        // إذا كانت الصفحة هي صفحة الطالب أو ولي الأمر
        const defaultForm = localStorage.getItem('defaultForm') || 'student';
        showForm(defaultForm, document.getElementById('icon3'));  
    }
}

function saveDefaultForm(userType) {
    localStorage.setItem('defaultForm', userType);
}






/***** Student data modle**** */

function showStudentDetails(icon) {
    const name = icon.dataset.name;
    const id = icon.dataset.id;
    const gender = icon.dataset.gender;
    const grade = icon.dataset.grade;
    const level = icon.dataset.level;
    const className = icon.dataset.class;
  
    const details = `
      <strong>الاسم:</strong> ${name}<br>
      <strong>رقم الهوية:</strong> ${id}<br>
      <strong>الجنس:</strong> ${gender}<br>
      <strong>الصف:</strong> ${grade}<br>
      <strong>المرحلة:</strong> ${level}<br>
      <strong>الشعبة:</strong> ${className}
    `;
  
    document.getElementById("studentDetails").innerHTML = details;
    document.getElementById("studentModal").style.display = "block";
  }
  
  function closeModalStd() {
    document.getElementById("studentModal").style.display = "none";
  }
  

  /**********  end std data *******/

/****** delete modle for boods starts****** */

  function openModal(bookId) {
    // فتح المودال عند الضغط على حذف الكتاب
    document.getElementById("confirmationModal").style.display = "block";
    // تخزين معرف الكتاب الذي سيتم حذفه
    window.selectedBookId = bookId;
  }

  function closeModal() {
    // إغلاق المودال
    document.getElementById("confirmationModal").style.display = "none";
  }

  function confirmDelete(bookId) {
    // هنا يمكن تنفيذ عملية حذف الكتاب باستخدام bookId
    alert("تم حذف الكتاب رقم: " + bookId);
    closeModal(); // إغلاق المودال بعد الحذف
  }

  /****** delete modle for boods ends****** */



/***** Books data modle**** */

function showBookDetails(icon) {
    const name = icon.dataset.name;
    const grade = icon.dataset.grade;
    const classroom = icon.dataset.classroom;
    const description = icon.dataset.description;
    const date = icon.dataset.date;
  
    const details = `
      <strong>الاسم:</strong> ${name}<br>
      <strong>المرحلة:</strong> ${grade}<br>
      <strong>الصف:</strong> ${classroom}<br>
      <strong>الوصف:</strong> ${description}<br>
      <strong>تاريخ الاضافة:</strong> ${date}
    `;
  
    document.getElementById("bookDetails").innerHTML = details;
    document.getElementById("bookModal").style.display = "block";
  }
  
  function closeModalBook() {
    document.getElementById("bookModal").style.display = "none";
  }
  

  /**********  end book data *******/






