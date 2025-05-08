// header starts
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active"); // إظهار/إخفاء القائمة
    });
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
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


  
/***** lessons data modle**** */

function showLessonDetails(icon) {
    const name = icon.dataset.name;
    const subject = icon.dataset.subject;
    const grade = icon.dataset.grade;
    const classroom = icon.dataset.clssroom;
    const section = icon.dataset.section;
    const url = icon.dataset.url;
  
    const details = `
      <strong>اسم الدرس:</strong> ${name}<br>
      <strong>المادة :</strong> ${subject}<br>
      <strong>المرحلة:</strong> ${grade}<br>
      <strong>الصف:</strong> ${classroom}<br>
      <strong>الشعبة:</strong> ${section}<br>
      <strong>رابط الدرس:</strong> ${url}<br>
    `;
  
    document.getElementById("lessonDetails").innerHTML = details;
    document.getElementById("lessonModal").style.display = "block";
  }
  
  function closeModalLesson() {
    document.getElementById("lessonModal").style.display = "none";
  }
  

  /**********  end lesson data *******/


  

/***** Books data modle**** */

function showBookDetails(icon) {
    const name = icon.dataset.name;
    const grade = icon.dataset.grade;
    const classroom = icon.dataset.classroom;
    const description = icon.dataset.description;
    const date = icon.dataset.date;
  
    const details = `
      <strong>اسم الكتاب:</strong> ${name}<br>
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



//   view hw modle starts


function showHwDetails(icon) {
    const name = icon.dataset.name;
    const subject = icon.dataset.subject;
    const grade = icon.dataset.grade;
    const classroom = icon.dataset.classroom;
    const section = icon.dataset.section;
    const stdnum = icon.dataset.stdnum;
    const desc = icon.dataset.desc;
    const datend = icon.dataset.datend;
  
    const details = `
      <strong>اسم الواجب:</strong> ${name}<br>
      <strong>المادة:</strong> ${subject}<br>
      <strong>المرحلة:</strong> ${grade}<br>
      <strong>الصف:</strong> ${classroom}<br>
      <strong>الشعبة:</strong> ${section}<br>
      <strong>عدد الطلاب المُسلِّمين :</strong> ${stdnum}<br>
      <strong>الوصف:</strong> ${desc}<br>
      <strong> اخر موعد تسليم الواجب:</strong> ${datend}
    `;
  
    document.getElementById("hwDetails").innerHTML = details;
    document.getElementById("hwModal").style.display = "block";
  }
  
  function closeModalHw() {
    document.getElementById("hwModal").style.display = "none";
  }
  

//   view hw modle ends



//   view exam modle starts
function showExamDetails(icon) {
    const name = icon.dataset.name;
    const subject = icon.dataset.subject;
    const grade = icon.dataset.grade;
    const classroom = icon.dataset.classroom;
    const section = icon.dataset.section;
    const stdnum = icon.dataset.stdnum;
    const desc = icon.dataset.desc;
    const datend = icon.dataset.datend;
  
    const details = `
      <strong>اسم الاختبار:</strong> ${name}<br>
      <strong>المادة:</strong> ${subject}<br>
      <strong>المرحلة:</strong> ${grade}<br>
      <strong>الصف:</strong> ${classroom}<br>
      <strong>الشعبة:</strong> ${section}<br>
      <strong>عدد الطلاب المُسلِّمين :</strong> ${stdnum}<br>
      <strong>الوصف:</strong> ${desc}<br>
      <strong> اخر موعد تسليم الاختبار:</strong> ${datend}
    `;
  
    document.getElementById("examDetails").innerHTML = details;
    document.getElementById("examModal").style.display = "block";
  }
  
  function closeModalExam() {
    document.getElementById("examModal").style.display = "none";
  }
  

//   view exam modle ends



//   view meet modle starts
function showMeetDetails(icon) {
    const name = icon.dataset.name;
    const subject = icon.dataset.subject;
    const grade = icon.dataset.grade;
    const classroom = icon.dataset.classroom;
    const section = icon.dataset.section;
    const appointment = icon.dataset.appointment;
    const date = icon.dataset.date;
  
    const details = `
      <strong> عنوان اللقاء:</strong> ${name}<br>
      <strong>المادة:</strong> ${subject}<br>
      <strong>المرحلة:</strong> ${grade}<br>
      <strong>الصف:</strong> ${classroom}<br>
      <strong>الشعبة:</strong> ${section}<br>
      <strong>تاريخ ووقت اللقاء:</strong> ${date}
    `;
  
    document.getElementById("meetDetails").innerHTML = details;
    document.getElementById("meetModal").style.display = "block";
  }
  
  function closeModalMeet() {
    document.getElementById("meetModal").style.display = "none";
  }
  

//   view meet modle ends

/****** delete modle starts****** */

function openModal(bookId) {
    document.getElementById("confirmationModal").style.display = "block";
    window.selectedBookId = bookId;
  }

  function closeModal() {
    document.getElementById("confirmationModal").style.display = "none";
  }

  function confirmDelete(bookId) {
    alert("تم حذف الكتاب رقم: " + bookId);
    closeModal(); 
  }

  /****** delete modle ends****** */




